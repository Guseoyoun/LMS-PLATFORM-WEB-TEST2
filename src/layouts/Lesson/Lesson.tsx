import React from "react";
import styled from "@emotion/styled";
import { Box, Container, Typography } from "@mui/material";
import { Spinner } from "@components/ui";
import { CourseDetailClientResponseDto, CourseModuleFindResponseDto, SurveyResponseDto } from "@common/api/Api";
import ApiClient from "@common/api/ApiClient";
import LessonSidebar from "./LessonSidebar";
import LessonContentVideo from "./LessonContentVideo";
import LessonContentSurvey from "./LessonContentSurvey";

export const LESSON_CONTENT_TYPES = Object.freeze(["LESSON", "SURVEY"] as const);
export type LessonContentType = typeof LESSON_CONTENT_TYPES[number];

export interface LessonProps {
  courseUserSeq: number;
  contentType: LessonContentType;
  contentSeq: number;
}

export default function Lesson(props: LessonProps) {

  // 스테이트.

  const [loading, setLoading] = React.useState<boolean>(true);
  const [course, setCourse] = React.useState<CourseDetailClientResponseDto | null>(null);
  const [courseModule, setCourseModule] = React.useState<CourseModuleFindResponseDto | null>(null);
  const [courseModules, setCourseModules] = React.useState<CourseModuleFindResponseDto[] | null>(null);
  const [moduleSurvey, setModuleSurvey] = React.useState<SurveyResponseDto | null>(null);

  // 이펙트.

  React.useEffect(() => {

    setLoading(true);

    ApiClient.course
      .findCourseUsingGet(props.courseUserSeq)
      .then(async (res) => {

        const course = res.data.data;
        setCourse(course);

        return ApiClient.courseModule
          .clientFindAllCourseModulesUsingGet({ courseSeq: course.seq })
          .then(async(res) => {
            
            const courseModules = res.data.data;
            setCourseModules(courseModules);
            setCourseModule(null);

            switch (props.contentType) {

              case "SURVEY": return ApiClient.survey
                .findSurveyUsingGet(course.courseUserSeq, props.contentSeq)
                .then((res) => {
                  
                  const survey = res.data.data;
                  setModuleSurvey(survey);
                  setCourseModule(courseModules.find((module) => module.surveySeq === props.contentSeq));
                  
                })
                .catch(() => setModuleSurvey(null));
    
            }
            
          })
          .catch(() => setCourseModules(null));

      })
      .catch(() => setCourse(null))
      .finally(() => setLoading(false));

  }, [props]);

  // 렌더 - 에러.

  if (course === null) {

    return loading ?
      <Spinner /> :
      (
        <CourseErrorContainer>
          <Typography>강의를 찾을 수 없습니다.</Typography>
        </CourseErrorContainer>
      );

  }

  // 컴포넌트.

  let Content: React.ReactElement;

  switch (props.contentType) {

    case "LESSON": {
      
        const lessonIndex = course.lessons.findIndex((lesson) => lesson.seq === props.contentSeq);
        const lesson = lessonIndex >= 0 ? course.lessons[lessonIndex] : null;
        const courseProgress = lesson && course.courseProgressResponseDtoList.find((v) => v.lessonSeq === lesson.seq) || null;

        if (loading) {

          Content = (
            <LessonContentEmptyContainer>
              <Spinner />
            </LessonContentEmptyContainer>
          );
  
        } else if (lesson === null || courseProgress === null) {

          Content = (
            <CourseErrorContainer>
              <Typography>강좌 찾을 수 없습니다.</Typography>
            </CourseErrorContainer>
          );

        } else {

          Content = (
            <LessonContentVideo
              courseUserSeq={course.courseUserSeq}
              courseProgress={courseProgress}
              lesson={lesson}
            />
          );

        }

        break;

    }
    case "SURVEY": {

      if (loading) {

        Content = (
          <LessonContentEmptyContainer>
            <Spinner />
          </LessonContentEmptyContainer>
        );

      } else if (moduleSurvey === null || courseModule === null) {

        Content = (
          <LessonContentEmptyContainer>
            <Typography>설문을 찾을 수 없습니다.</Typography>
          </LessonContentEmptyContainer>
        );

      } else {

        Content = (
          <LessonContentSurvey
            courseUserSeq={course.courseUserSeq}
            courseModule={courseModule}
            survey={moduleSurvey}
          />
        );

      }

      break;

    }

  }

  // 렌더링.

  return (
    <LessonContainer maxWidth="xl">
      {Content}
      <LessonSidebar
        courseUserSeq={course.courseUserSeq}
        courseProgresses={course.courseProgressResponseDtoList}
        courseModules={courseModules}
        lessons={course.lessons}
        lessonSeq={props.contentType === "LESSON" ? props.contentSeq : null}
      />
    </LessonContainer>
  );
}

const CourseErrorContainer = styled(Box)`
  display: flex;
  min-height: 50vh;
  align-items : center;
  justify-content: center;
`;

const LessonContentEmptyContainer = styled(Box)`
  display: flex;
  flex-grow: 1;
  min-height: 50vh;
  width: 100%;
  max-width: 1000px;
  align-items : center;
  justify-content: center;
`;

const LessonContainer = styled(Container)`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex: 1 1 auto;
  position: relative;
  align-items: stretch;
`;