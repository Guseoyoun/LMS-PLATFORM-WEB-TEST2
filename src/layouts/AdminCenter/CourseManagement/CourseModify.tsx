import { useRouter } from 'next/router';
import { CourseUploadForm } from '@components/admin-center/CourseUploadForm';
import { Spinner, Tabs } from '@components/ui';
import styles from '@styles/common.module.scss';
import { Box, Container } from '@mui/material';
import { ContentList } from '@layouts/AdminCenter';
import { useSnackbar } from '@hooks/useSnackbar';
import { EvaluationInfo } from '@layouts/AdminCenter/CourseManagement/EvaluationInfo';
import { Forum } from '@layouts/AdminCenter/CourseManagement/Forum';
import { modifyCourse, useCourse } from '@common/api/adm/course';
import { CourseRes } from '@common/api/course';
import { BbsType, deleteFile, uploadFile } from '@common/api/adm/file';

enum TabValue {
  CourseInfo = 'course-info',
  ContentList = 'content-list',
  EvaluationInfo = 'evaluation-info',
  Forum = 'forum',
}

const tabsConfig = [
  { label: '과정 정보', value: TabValue.CourseInfo },
  { label: '콘텐츠 목록', value: TabValue.ContentList },
  { label: '평가 정보', value: TabValue.EvaluationInfo },
  { label: '토론', value: TabValue.Forum },
];

export function CourseModify() {
  const router = useRouter();
  const snackbar = useSnackbar();
  const { courseId, tab } = router.query;
  const { course, courseError } = useCourse(Number(courseId));

  const fileHandler = async (files: File[], course: CourseRes, isFileDelete: boolean) => {
    const isFileUpload = files.length > 0;
    if (isFileUpload) {
      await uploadFile({
        fileTypeId: course.seq,
        fileType: BbsType.TYPE_COURSE,
        files
      });
    } else {
      if (isFileDelete) {
        await deleteFile({
          fileTypeId: course.seq,
          fileType: BbsType.TYPE_COURSE,
          fileSeqList: course.s3Files.map(v => v.seq),
        });
      }
    }
  };

  const handleSubmit = async ({ files, isFileDelete, courseInput, courseId }: {
    files: File[];
    isFileDelete: boolean;
    courseInput: CourseRes;
    courseId?: number;
  }) => {
    try {
      if (courseId) {
        await modifyCourse({ courseInput, courseId });
        await fileHandler(files, courseInput, isFileDelete);
        snackbar({ variant: 'success', message: '성공적으로 수정되었습니다.' });
        router.push('/admin-center/course');
      }
    } catch (e: any) {
      snackbar({ variant: 'error', message: e.data.message });
    }
  };

  if (courseError) return <div>...ERROR</div>;
  if (!course) return <Spinner />;
  return (
    <Container className={styles.globalContainer}>
      <Box sx={{ mb: '30px' }}>
        <Tabs tabsConfig={tabsConfig} />
      </Box>
      {
        {
          [TabValue.CourseInfo]:
            <CourseUploadForm
              mode="modify"
              course={course}
              onHandleSubmit={handleSubmit}
            />,
          [TabValue.ContentList]:
            <ContentList />,
          [TabValue.EvaluationInfo]:
            <EvaluationInfo />,
          [TabValue.Forum]:
            <Forum />
        }[tab as string]
      }
    </Container>
  );
}