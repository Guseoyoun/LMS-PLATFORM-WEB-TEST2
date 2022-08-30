import React from "react";
import styled from "@emotion/styled";
import { Box, LinearProgress, Typography } from "@mui/material";
import { VideoPlayer } from "@components/common";
import { Spinner } from "@components/ui";
import type { CourseProgressResponseDto, LessonDetailClientResponseDto } from "@common/api/Api";
import ApiClient from "@common/api/ApiClient";

const PLAYER_ELEMENT_ID = "lesson-player" as const;

interface Props {
  courseUserSeq: number;
  courseProgress: CourseProgressResponseDto | null;
  lesson: LessonDetailClientResponseDto | null;
  loading?: boolean;
}

export default function LessonContentVideo(props: Props) {

  // 스테이트.

  const [progress, setProgress] = React.useState<number>(0);

  // 레퍼런스.

  const prevCourseUserSeq = React.useRef<number | null>(null);
  const prevCourseProgress = React.useRef<CourseProgressResponseDto | null>(null);
  const prevLesson = React.useRef<LessonDetailClientResponseDto | null>(null);

  const apiTimer = React.useRef<number | null>(null);
  const apiSeconds = React.useRef<number>(0);
  const apiVideoSeconds = React.useRef<number>(0);

  const vidoeDurationSeconds = React.useRef<number>(0);
  const videoCurrentSeconds = React.useRef<number>(0);
  const videoPlayedSeconds = React.useRef<number>(0);
  const videoIsSeeking = React.useRef<boolean>(false);
  const videoIsPaused = React.useRef<boolean>(true);
  const videoIsFirst = React.useRef<boolean>(true);
  const videoIsFinished = React.useRef<boolean>(false);

  // 콜백

  const updateProgress = React.useCallback(() => {

    const seconds = props.courseProgress.studyTime + videoPlayedSeconds.current;
    setProgress(vidoeDurationSeconds.current > 0 && seconds < vidoeDurationSeconds.current ? seconds / vidoeDurationSeconds.current : 1);

  }, [props.courseProgress.studyTime]);

  // 콜백 - 타이머.

  const stopTimer = React.useCallback(async (mode: "PREV" | "CURRENT" | "RESET") => {

    if (apiTimer.current !== null) {

      window.clearInterval(apiTimer.current);

      if (mode !== "RESET") {

        if (
          (mode === "CURRENT" && (props.lesson === null || props.courseProgress.courseProgressSeq === null)) ||
          (mode === "PREV" && props.courseUserSeq === prevCourseUserSeq.current && props.lesson.seq === prevLesson.current.seq)
        ) return;
  
        const courseUserSeq = mode === "PREV" ? prevCourseUserSeq.current : props.courseUserSeq;
        const courseProgressSeq = mode === "PREV" ? prevCourseProgress.current.courseProgressSeq : props.courseProgress.courseProgressSeq;
        const lessonSeq = mode === "PREV" ? prevLesson.current.seq : props.lesson.seq;
        const currentSecond = videoCurrentSeconds.current;

        await ApiClient.courseLog
          .createCourseModulesUsingPost1({
            courseUserSeq: courseUserSeq,
            lessonSeq: lessonSeq,
            studyTime: apiVideoSeconds.current,
          })
          .then(() =>
            ApiClient.courseProgress
              .updateCourseProgressUsingPut({
                courseUserSeq: courseUserSeq,
                courseProgressSeq: courseProgressSeq,
                lessonSeq: lessonSeq,
                studyLastTime: currentSecond,
              })
          )
          .then(() => ApiClient.courseProgress.updateAllCourseProgressUsingPut(courseUserSeq));

      }

    }

    apiTimer.current = null;
    apiSeconds.current = 0;
    apiVideoSeconds.current = 0;

  }, [props.courseProgress.courseProgressSeq, props.courseUserSeq, props.lesson]);

  const startTimer = React.useCallback(() => {

    stopTimer("RESET");

    if (props.lesson === null || props.courseProgress.courseProgressSeq === null) return;

    apiTimer.current = window.setInterval(() => {

      apiSeconds.current++;

      if (apiSeconds.current >= 300) {

        ApiClient.courseLog
          .createCourseModulesUsingPost1({
            courseUserSeq: props.courseUserSeq,
            lessonSeq: props.lesson.seq,
            studyTime: apiVideoSeconds.current,
          });

        apiSeconds.current = 0;
        apiVideoSeconds.current = 0;

      }

    }, 1000);

  }, [props.courseProgress.courseProgressSeq, props.courseUserSeq, props.lesson, stopTimer]);

  // 콜백 - 이벤트.

  const onPause = React.useCallback(() => {

    videoIsPaused.current = true;

  }, []);

  const onPlaying = React.useCallback(() => {

    if (props.lesson === null || props.courseProgress.courseProgressSeq === null) return;

    if (videoIsFirst.current) {

      ApiClient.courseLog
        .createCourseModulesUsingPost1({
          courseUserSeq: props.courseUserSeq,
          lessonSeq: props.lesson.seq,
          studyTime: 0,
        });

      videoIsFirst.current = false;

      startTimer();

    }

    videoIsPaused.current = false;

  }, [props.courseProgress.courseProgressSeq, props.courseUserSeq, props.lesson, startTimer]);

  const onSeeking = React.useCallback(() => {

    videoIsSeeking.current = true;

  }, []);

  const onSeeked = React.useCallback(() => {

    videoIsSeeking.current = false;

  }, []);

  const onTimeChange = React.useCallback((time: number) => {

    if (time === videoCurrentSeconds.current) return;
    if (time !== videoCurrentSeconds.current + 1 || videoIsPaused.current || videoIsSeeking.current) {

      videoCurrentSeconds.current = time;
      return;

    }

    videoCurrentSeconds.current = time;
    videoPlayedSeconds.current++;
    apiVideoSeconds.current++;

    if (
      !videoIsFinished.current &&
      (
        props.courseProgress.studyTime + videoPlayedSeconds.current >= vidoeDurationSeconds.current ||
        videoCurrentSeconds.current >= vidoeDurationSeconds.current
      )
    ) {
      
      stopTimer("CURRENT");
      videoIsFinished.current = true;

    }

    updateProgress();

  }, [props.courseProgress.studyTime, stopTimer, updateProgress]);

  // 이펙트.

  React.useEffect(() => {

    stopTimer("PREV");

    vidoeDurationSeconds.current = props.lesson ? props.lesson.totalTime : 0;
    videoCurrentSeconds.current = props.lesson ? props.courseProgress.studyLastTime : 0;
    videoPlayedSeconds.current = 0;
    videoIsSeeking.current = false;
    videoIsPaused.current = true;
    videoIsFirst.current = true;
    videoIsFinished.current = false;

    prevCourseUserSeq.current = props.courseUserSeq;
    prevCourseProgress.current = props.courseProgress;
    prevLesson.current = props.lesson;
    
    updateProgress();

  }, [props.lesson, props.courseProgress, props.courseUserSeq, stopTimer, updateProgress]);

  // 렌더링.

  if (props.loading) return <VideoContentWrapper><Spinner fit/></VideoContentWrapper>;
  if (props.lesson === null || props.courseProgress === null) return <VideoContentWrapper>강의가 존재하지 않습니다.</VideoContentWrapper>;

  return (
    <VideoContainer>
      <VideoContentPlayerWrapper>
        <VideoPlayer
          playlist={props.lesson.s3Files[0]?.path}
          initialPlayerId={PLAYER_ELEMENT_ID}
          initialConfig={{ autostart: true }}
          seconds={props.courseProgress.studyLastTime === props.lesson.totalTime ? props.lesson.totalTime + 1 : props.courseProgress.studyLastTime}
          onPause={onPause}
          onPlaying={onPlaying}
          onSeeking={onSeeking}
          onSeeked={onSeeked}
          onTimeChange={onTimeChange}
        />
      </VideoContentPlayerWrapper>
      <ContentInfoContainer>
        <ContentInfoTitle variant="h6">
          {props.lesson.lessonNm}
        </ContentInfoTitle>
        <ContentInfoProgressContainer>
          <Typography fontWeight="bold" color="#ff5600" fontSize="inherit">
            {Math.floor(progress * 100)}% 수강 완료
          </Typography>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={Math.floor(progress * 100)} />
          </Box>
        </ContentInfoProgressContainer>
      </ContentInfoContainer>
    </VideoContainer>
  );

}

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoContentWrapper = styled.div`
  display: flex;
  aspect-ratio: 16 / 9;
  align-items : center;
  justify-content: center;
`;

const VideoContentPlayerWrapper = styled(VideoContentWrapper)`
  background-color: #000;

  @media (max-width: 1024px) {
    order: 1;
  }
`;

const ContentInfoContainer = styled(Box)`
  margin-top: 10px;

  @media (max-width: 1024px) {
    margin-top: unset;
    margin-bottom: 1rem;
  }
`;

const ContentInfoTitle = styled(Typography)`
  display: flex;
  margin-bottom: 0.25rem;
  font-weight: 700;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 0 -1rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1em;
    font-weight: 400;
    background: #E9F1FF;
    justify-content: center;
  }
`;

const ContentInfoProgressContainer = styled(Box)``;
