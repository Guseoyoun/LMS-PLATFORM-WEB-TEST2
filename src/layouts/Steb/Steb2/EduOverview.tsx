import styled from '@emotion/styled';
import { Box, FormControl, InputLabel, Select, Table, TableCell, TableContainer, TableRow, Typography, MenuItem } from '@mui/material';
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { courseCategoryType, courseSubCategoryType, getCourseClassStep, useSingleCourseClass } from '@common/api/courseClass';
import { Spinner } from '@components/ui';
import { courseCategory, courseSubCategory } from '@layouts/Calendar/CalendarBody/CalendarBody';

export function EduOverview() {
  const [courseCategoryType, setCourseCategoryType] = useState<courseCategoryType | null>(null); //교육과정
  const [courseSubCategoryType, setCourseSubCategoryType] = useState<courseSubCategoryType | null>(null); //업종구분
  const [step, setStep] = useState<number | null>(null); //업종구분
  const [values, setValues] = useState<{ step: number; studyStartDate: string; studyEndDate: string }>();
  const [stepsRes, setStepsRes] = useState<{ step: number; studyStartDate: string; studyEndDate: string }[]>([]); //기수 교육시작 교육끝
  const router = useRouter();
  const { data, error, mutate } = useSingleCourseClass(Number(router.query.seq));

  useEffect(() => {
    console.log(data);
    if (data) {
      setValues({ step: data.step, studyStartDate: data.studyStartDate, studyEndDate: data.studyEndDate });
    }
  }, [data]);

  const getSteps = async () => {
    if (!courseCategoryType || !courseSubCategoryType) return window.alert('기수 가져오기 실패');
    const { data } = await getCourseClassStep(courseCategoryType, courseSubCategoryType);
    setStepsRes([...data]);
    console.log(data, stepsRes);
  };

  useEffect(() => {
    if (courseCategoryType && courseSubCategoryType) {
      getSteps();
    }
  }, [courseCategoryType, courseSubCategoryType]);

  if (router.query.seq && !data) return <Spinner />;
  return (
    <EduOverviewWrap>
      <Box>
        <Typography variant="h5" fontWeight="bold" display="flex" alignItems="center">
          <HorizontalRuleRoundedIcon sx={{ transform: 'scale(1,2)', color: '#3498db' }} />
          <span>교육개요</span>
        </Typography>
        <TableContainer>
          <Table sx={{ borderTop: '4px solid #3498db' }}>
            <TableCustomRow>
              <TableLeftCell>교육과정</TableLeftCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="student">선택</InputLabel>
                  <Select
                    labelId="student"
                    id="student"
                    value={courseCategoryType}
                    onChange={e => {
                      setCourseCategoryType(courseCategory.filter(cate => cate.type === e.target.value)[0].type);
                    }}
                    label="student"
                  >
                    {courseCategory.map(item => (
                      <MenuItem key={item.type} value={item.type}>
                        {item.ko}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableCustomRow>
            <TableCustomRow>
              <TableLeftCell>업종구분</TableLeftCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="student">선택</InputLabel>
                  <Select
                    labelId="student"
                    id="student"
                    value={courseSubCategoryType}
                    onChange={e => {
                      setCourseSubCategoryType(courseSubCategory.filter(cate => cate.type === e.target.value)[0].type);
                    }}
                    label="student"
                  >
                    {courseSubCategory.map(item => (
                      <MenuItem key={item.type} value={item.type}>
                        {item.ko}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableCustomRow>
            <TableCustomRow>
              <TableLeftCell>기수 / 교육일자</TableLeftCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel id="student">선택</InputLabel>
                  <Select
                    labelId="student"
                    id="student"
                    value={step}
                    onChange={e => {
                      setStep(Number(e.target.value));
                    }}
                    label="student"
                  >
                    {stepsRes.map(item => (
                      <MenuItem key={item.step} value={item.step}>
                        {item.step}기 / {item.studyStartDate} ~ {item.studyEndDate}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </TableCell>
            </TableCustomRow>
          </Table>
        </TableContainer>
      </Box>
    </EduOverviewWrap>
  );
}

const EduOverviewWrap = styled(Box)``;
const TableCustomRow = styled(TableRow)`
  border-bottom: 2px solid #c3c3c3;
`;
const TableLeftCell = styled(TableCell)`
  background: #e1e1e1;
  width: 30%;
`;