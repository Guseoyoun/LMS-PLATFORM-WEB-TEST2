import React from 'react';
import styled from '@emotion/styled';
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material';
import {
  CourseDetailClientResponseDto,
  CourseModuleFindResponseDto,
  SurveyResponseDto,
} from '@common/api/Api';
import ApiClient from '@common/api/ApiClient';
import LessonSidebar from './LessonSidebar';
import LessonContentVideo from './LessonContentVideo';
import LessonContentSurvey from './LessonContentSurvey';
import { LessonContentType, LESSON_CONTENT_TYPES } from './Lesson.types';
import { useRouter } from 'next/router';
import LessonHeader from './LessonHeader';

export interface LessonProps {
  courseUserSeq: number;
  contentType: LessonContentType;
  contentSeq: number;
}

export default function Lesson(props: LessonProps) {

  const router = useRouter();

  // 스테이트.

  const [loading, setLoading] = React.useState<boolean>(true);
  const [dialog, setDialog] = React.useState<'FIRST' | "NEXT" | "SURVEY" | null>('FIRST');

  const [course, setCourse] = React.useState<CourseDetailClientResponseDto | null>(null);
  const [courseTotalProgress, setCourseTotalProgress] = React.useState<number | null>(null);
  const [coursePlayFirst, setCoursePlayFirst] = React.useState<boolean>(true);
  const [courseLessonsCompleted, setCourseLessonsCompleted] = React.useState<boolean[]>(
    []
  );
  const [courseModule, setCourseModule] =
    React.useState<CourseModuleFindResponseDto | null>(null);
  const [courseModules, setCourseModules] = React.useState<
    CourseModuleFindResponseDto[] | null
  >(null);
  const [courseModulesCompleted, setCourseModulesCompleted] = React.useState<boolean[]>(
    []
  );
  const [moduleSurvey, setModuleSurvey] = React.useState<SurveyResponseDto | null>(null);
  const [moduleSurveyTodo, setModuleSurveyTodo] = React.useState<CourseModuleFindResponseDto | null>(null);

  // 이펙트.

  React.useEffect(() => setCoursePlayFirst(true), [props.courseUserSeq]);

  React.useEffect(() => {
    if (props.contentType === 'LESSON') setDialog('FIRST');
  }, [props.courseUserSeq, props.contentType]);

  React.useEffect(() => {
    setLoading(true);

    ApiClient.course
      .findCourseUsingGet(props.courseUserSeq)
      .then(async res => {
        const course = res.data.data;

        setCourse(course);
        setCourseTotalProgress(course.totalProgress);
        setCourseLessonsCompleted(course.lessons.map(v => v.completedYn === 'Y'));
        setCourseModulesCompleted([]);

        return ApiClient.courseModule
          .clientFindAllCourseModulesUsingGet({ courseSeq: course.seq })
          .then(async res => {
            const courseModules = res.data.data;
            setCourseModules(courseModules);
            setCourseModule(null);
            setCourseModulesCompleted(
              courseModules.map(cm => {
                switch (cm.moduleType) {
                  case 'COURSE_MODULE_PROGRESS_RATE':
                    return cm.submitYn === 'Y';
                  case 'COURSE_MODULE_TEST':
                    return cm.submitYn === 'Y';
                  case 'COURSE_MODULE_SURVEY':
                    return (
                      course.surveyList.findIndex(
                        v => v.surveySeq === cm.surveySeq && v.surveyCompletedYn === 'Y'
                      ) !== -1
                    );
                }
              })
            );

            switch (props.contentType) {
              case 'SURVEY':
                return ApiClient.survey
                  .findSurveyUsingGet(course.courseUserSeq, props.contentSeq)
                  .then(res => {
                    const survey = res.data.data;
                    setModuleSurvey(survey);
                    setCourseModule(
                      courseModules.find(module => module.surveySeq === props.contentSeq)
                    );
                  })
                  .catch(() => {
                    setModuleSurvey(null);
                    setCourseModule(null);
                  });
            }
          })
          .catch(() => setCourseModules(null));
      })
      .catch(() => setCourse(null))
      .finally(() => setLoading(false));
  }, [props]);

  React.useEffect(() => {

    if (!courseModules) return;

    const surveyTodo = courseModules.find((v, i) => v.moduleType === "COURSE_MODULE_SURVEY" && !courseModulesCompleted[i]) || null;
    setModuleSurveyTodo(surveyTodo);

    if (course.totalProgress >= 100 && surveyTodo) setDialog("SURVEY");

  }, [course, courseModules, courseModulesCompleted]);

  // 렌더 - 에러.

  if (course === null) {
    return (
      <LessonContentEmptyWrapper>
        {loading ? (
          <CircularProgress size="1.5rem" />
        ) : (
          <Typography>강의를 찾을 수 없습니다.</Typography>
        )}
      </LessonContentEmptyWrapper>
    );
  }

  // 컴포넌트.

  let Content: React.ReactElement = <React.Fragment/>;
  let DialogFirst: React.ReactElement = <React.Fragment/>;
  let DialogNext: React.ReactElement = <React.Fragment/>;
  let DialogSurvey: React.ReactElement = <React.Fragment/>;

  switch (props.contentType) {
    case 'LESSON': {
      const lessonIndex = course.lessons.findIndex(
        lesson => lesson.seq === props.contentSeq
      );
      const lesson = lessonIndex >= 0 ? course.lessons[lessonIndex] : null;
      const courseProgress =
        (lesson &&
          course.courseProgressResponseDtoList.find(v => v.lessonSeq === lesson.seq)) ||
        null;

      Content = (
        <LessonContentVideo
          loading={loading}
          coursePlayFirst={coursePlayFirst}
          courseUserSeq={course.courseUserSeq}
          courseProgress={courseProgress}
          lesson={lesson}
          lessonCompleted={!!courseLessonsCompleted[lessonIndex]}
          onComplete={(isEnd) => 
            ApiClient.course
            .findCourseUsingGet(course.courseUserSeq)
            .then((res) => {
              const course = res.data.data;
              
              const newCourseLessonsCompleted = [...courseLessonsCompleted];
              newCourseLessonsCompleted[lessonIndex] = true;

              setCourseLessonsCompleted(newCourseLessonsCompleted);
              setCourseTotalProgress(course.totalProgress);
              
              if (course.lessons[lessonIndex + 1] && isEnd) setDialog("NEXT");

              return true;
            })
          }
        />
      );

      DialogFirst = (
        <Dialog
          open={dialog === 'FIRST'}
          onClose={() => {
            setDialog(null);
            setCoursePlayFirst(false);
          }}
        >
          <DialogContent>
            <DialogContentText>
              운전 중 교육 진행 시, 안전을 위해 교육이 중단 됩니다.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDialog(null);
                setCoursePlayFirst(false);
              }}
            >
              확인
            </Button>
          </DialogActions>
        </Dialog>
      );

      DialogNext = (
        <Dialog
          open={dialog === 'NEXT' && lessonIndex >= 0}
          onClose={() => setDialog(null)}
        >
          <DialogContent>
            <DialogContentText>
              {lessonIndex + 1}차시 수강이 완료되었습니다. 다음 차시를 시청 하시겠습니까?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDialog(null);
                router.push(`/course/${course.courseUserSeq}/${LESSON_CONTENT_TYPES[0].toLowerCase()}/${course.lessons[lessonIndex + 1].seq}`);
              }}
            >
              예
            </Button>
            <Button onClick={() => setDialog(null)}>아니요</Button>
          </DialogActions>
        </Dialog>
      );

      break;
    }
    case 'SURVEY': {
      const moduleIndex = courseModules
        ? courseModules.findIndex(module => module.surveySeq === props.contentSeq)
        : -1;

      Content = (
        <LessonContentSurvey
          loading={loading}
          courseUserSeq={course.courseUserSeq}
          courseModule={courseModule}
          survey={moduleSurvey}
          surveyCompleted={!!courseModulesCompleted[moduleIndex]}
          onComplete={() => {
            const newCourseModulesCompleted = [...courseModulesCompleted];
            newCourseModulesCompleted[moduleIndex] = true;
            setCourseModulesCompleted(newCourseModulesCompleted);
          }}
        />
      );

      break;
    }
  }

  if (moduleSurveyTodo && !(props.contentType === "SURVEY" && moduleSurveyTodo.surveySeq === props.contentSeq)) {

    DialogSurvey = (
      <Dialog
        open={dialog === 'SURVEY'}
        onClose={() => {
          setDialog(null);
          router.push(`/course/${course.courseUserSeq}/${LESSON_CONTENT_TYPES[1].toLowerCase()}/${moduleSurveyTodo.surveySeq}`);
        }}
      >
        <DialogContent>
          <DialogContentText>
            운수종사자 보수교육 온라인과정을 수료하셨습니다. 다음 만족도 조사 설문에 참여해 주시시기 바랍니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialog(null);
              router.push(`/course/${course.courseUserSeq}/${LESSON_CONTENT_TYPES[1].toLowerCase()}/${moduleSurveyTodo.surveySeq}`);
            }}
          >
            확인
          </Button>
        </DialogActions>
      </Dialog>
    );
    
  }

  // 렌더링.

  return (
    <>
      <LessonHeader />
      <LessonContainer maxWidth="xl">
        <LessonContentWrapper>{Content}</LessonContentWrapper>
        <LessonSidebar
          courseUserSeq={course.courseUserSeq}
          courseTotalProgress={courseTotalProgress}
          courseProgresses={course.courseProgressResponseDtoList}
          courseModules={courseModules}
          courseLessonsCompleted={courseLessonsCompleted}
          courseModulesCompleted={courseModulesCompleted}
          courselessons={course.lessons}
          courseLessonSeq={props.contentType === 'LESSON' ? props.contentSeq : null}
          />
        {DialogFirst}
        {DialogNext}
        {DialogSurvey}
      </LessonContainer>
    </>
  );
}

const LessonContainer = styled(Container)`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
  padding: 0 1rem;
  display: flex;
  flex: 1 1 auto;
  position: relative;
  align-items: stretch;
  @media (max-width: 1024px) {
    margin-top: unset;
    flex-direction: column;
  }
`;

const LessonContentWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
`;

const LessonContentEmptyWrapper = styled(LessonContentWrapper)`
  display: flex;
  min-height: 50vh;
  align-items: center;
  justify-content: center;
`;
