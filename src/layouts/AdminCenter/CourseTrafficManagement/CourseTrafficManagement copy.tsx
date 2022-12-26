import {
  Box,
  Button,
  Chip,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';
import { Spinner } from '@components/ui';
import styled from '@emotion/styled';
import { Table } from '@components/ui';
import dateFormat from 'dateformat';
import { YN } from '@common/constant';
import { useSnackbar } from '@hooks/useSnackbar';
import { useEffect, useState } from 'react';
import { useDialog } from '@hooks/useDialog';
import { useRouter } from 'next/router';
import { courseTrafficList } from '@common/api/adm/course-traffic';
import {
  TargetMainType,
  TargetMainTypeReg,
  TargetSubType,
  TargetSubTypeReg,
} from 'src/staticDataDescElements/staticType';

const headRows: {
  name: string;
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  width: string;
}[] = [
  { name: 'No', align: 'center', width: '5%' },
  { name: '교육대상자 분류', align: 'center', width: '12%' },
  { name: '교육대상자 세부 분류', align: 'center', width: '12%' },
  { name: '제목', align: 'center', width: '54%' },
  { name: '생성날짜', align: 'center', width: '10%' },
  { name: '상태', align: 'center', width: '5%' },
];

export function CourseTrafficManagement() {
  const snackbar = useSnackbar();
  const dialog = useDialog();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [seq, setSeq] = useState<number | null>(null);

  const { data, error, mutate } = courseTrafficList({ page });

  // console.log('data : ', data);

  // console.log('data.content : ', data?.content);

  // pagination
  useEffect(() => {
    const { page } = router.query;
    setPage(!isNaN(Number(page)) ? Number(page) : 0);
  }, [router.query]);

  const onChangePage = async (page: number) => {
    await router.push({
      pathname: router.pathname,
      query: {
        page,
      },
    });
  };

  // 수정
  const onClickModifyCourse = async (seq: number) => {
    setSeq(seq);
    router.push(`/admin-center/course-traffic/modify/${seq}`);
    mutate();
  };

  if (error) return <div>Error</div>;
  if (!data) return <Spinner />;

  return (
    <Box>
      <CourseTrafficTitleTypography variant="h5">
        과정 목록(도민)
      </CourseTrafficTitleTypography>

      <Table
        pagination={true}
        totalNum={data.totalElements}
        page={data.number}
        onChangePage={onChangePage}
        size="small"
        sx={{ tableLayout: 'fixed' }}
      >
        <TableHead>
          <TableRow>
            {headRows.map(({ name, align, width }) => (
              <CourseTrafficTitleTableCell key={name} align={align} width={width}>
                {name}
              </CourseTrafficTitleTableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {data?.content.map(courseTraffic => (
            <TableRow
              sx={{ cursor: 'pointer' }}
              key={courseTraffic.seq}
              hover
              onClick={() => onClickModifyCourse(courseTraffic.seq)}
            >
              <CourseTrafficTableCell align="center">
                {courseTraffic.seq}
              </CourseTrafficTableCell>
              <CourseTrafficTableCell align="center">
                {
                  TargetMainTypeReg.filter(
                    item => item.type === courseTraffic.eduTargetMain
                  )[0].ko
                }
              </CourseTrafficTableCell>
              <CourseTrafficTableCell align="center">
                {
                  TargetSubTypeReg.filter(
                    item => item.type === courseTraffic.eduTargetSub
                  )[0].ko
                }
              </CourseTrafficTableCell>
              <CourseTrafficTableCell align="center">
                <SubjectBox>{courseTraffic.title}</SubjectBox>
              </CourseTrafficTableCell>
              <CourseTrafficTableCell align="center">
                {dateFormat(courseTraffic.createdDtime, 'isoDate')}
              </CourseTrafficTableCell>
              <CourseTrafficTableCell align="center">
                <Chip
                  label={courseTraffic.status ? '정상' : '중지'}
                  variant="outlined"
                  size="small"
                  color={courseTraffic.status ? 'secondary' : 'default'}
                />
              </CourseTrafficTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

// 과정 목록 글자
const CourseTrafficTitleTypography = styled(Typography)`
  margin-bottom: 30px;
  font-weight: 700;
`;

// 과정 제목. ellipsis 적용.
const SubjectBox = styled(Box)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

// 과정 목록 테이블의 Title부분
const CourseTrafficTitleTableCell = styled(TableCell)`
  font-weight: bold;
  background: #f5f5f5;
  border-right: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;

  &:last-child {
    border-right: 1px solid #f0f0f0;
  }
`;

// 과정 목록 테이블의 본문
const CourseTrafficTableCell = styled(TableCell)`
  margin: 0;
  border-right: 1px solid #f0f0f0;

  &:first-of-type {
    background: #f5f5f5;
  }
`;