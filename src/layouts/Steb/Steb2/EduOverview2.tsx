import { UserTransSaveInputDataType, businessType, courseCategoryType, courseType, getCourseClassStep, getSingleCourseClass, userBusinessType } from '@common/api/courseClass';
import { courseClassEnrollInfo } from '@common/recoil';
import { useSnackbar } from '@hooks/useSnackbar';
import { Box, Button, Card, CardActions, LinearProgress, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled'

interface StepResponse {
  seq: number;
  step: number;
  studyStartDate: string;
  studyEndDate: string;
}

const AccentSpan = styled.span`
  color: #f41;
  font-weight: bold;
`

function EduOverview2({
  setValue,
  setFixedBusinessType,
  watch,
  nextStep
}: {
  setValue: UseFormSetValue<UserTransSaveInputDataType>;
  watch: UseFormWatch<UserTransSaveInputDataType>;
  setFixedBusinessType: Dispatch<SetStateAction<userBusinessType>>;
  nextStep: () => void;
}) {

const [courseCategoryType, setCourseCategoryType] = useState<courseCategoryType | null>(null); //교육과정
const [courseBusinessType, setCourseBusinessType] = useState<businessType | null>(null); //업종구분
const [stepSeq, setStepSeq] = useState<number | null>(null); //업종구분
const [values, setValues] = useState<Partial<StepResponse>>();
const [stepsRes, setStepsRes] = useState<StepResponse[]>([]); //기수 교육시작 교육끝
const [enrollInfo, setEnrollInfo] = useRecoilState(courseClassEnrollInfo); //전역에 교육정보 저장
const router = useRouter();
const snackbar = useSnackbar();
// const { data, error, mutate } = useSingleCourseClass(Number(enrollInfo && enrollInfo.seq));

const getSingleCourse = async (courseClassSeq: number) => {
  try {
    const { data } = await getSingleCourseClass(courseClassSeq);
    

    setCourseCategoryType(
      data.course.courseCategoryType as courseCategoryType
    );
    setCourseBusinessType(data.course.courseBusinessType as businessType); //임시타입
    setValue(
      'businessType',
      data.course.courseBusinessType?.split('_')[1] === userBusinessType.PASSENGER
      ? userBusinessType.PASSENGER
      : userBusinessType.FREIGHT
    ); //
    setFixedBusinessType(
      data.course.courseBusinessType.split('_')[1] === userBusinessType.PASSENGER
      ? userBusinessType.PASSENGER
      : userBusinessType.FREIGHT
    ); //업체정보 운수구분 고정용(ALL안씀)
    setStepSeq(data.seq);
    setValues({
      step: data.step,
      studyStartDate: data.studyStartDate,
      studyEndDate: data.studyEndDate,
    }); //작동안하는듯한 코드확인필요
    // setValue('businessType', data.course.courseCategoryType);
  } catch (e: any) {
    snackbar({ variant: 'error', message: e.data.message });
  }
};

useEffect(() => {
  if (enrollInfo) getSingleCourse(enrollInfo.seq);
}, [enrollInfo]);


const getSteps = async () => {
  if (!courseCategoryType || !courseBusinessType)
    return window.alert('기수 가져오기 실패');
  const { data } = await getCourseClassStep(
    localStorage.getItem('site_course_type') as courseType,
    courseCategoryType,
    courseBusinessType
  );
  setStepsRes([...data]);
};

useEffect(() => {
  if (courseCategoryType && courseBusinessType) {
    getSteps();
  }
}, [courseCategoryType, courseBusinessType]);

  return (
    <>
    
      <Box
      border='1px solid #f41'
      boxShadow='0px 1px 4px #f41'
      sx={{margin: '1rem auto',display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',padding:'1rem 2rem',width:'fit-content'}} >
        <Typography variant='subtitle1' align='center' sx={{whiteSpace:'pre-line',lineHeight:1.25}}>
          운수종사자 온라인{' '}
            <AccentSpan>
            {
              localStorage.getItem('site_course_type')
              === 'TYPE_LOW_FLOOR_BUS'
              ? '저상버스 운전자'
              : '보수일반'
            }
            </AccentSpan>
            {'\n'}교육예약을 시작하도록 하겠습니다.
            <Box display='flex' gap='0.5rem' marginTop={1}>
              <Card sx={{padding: '0 0.75rem',border: '2px solid orange'}}>
                <Typography variant='subtitle1' align='center' sx={{fontSize:'14px'}}>
                    {(watch('businessType') === userBusinessType.PASSENGER && '여객')}
                    {(watch('businessType') === userBusinessType.FREIGHT && '화물')}
                </Typography>
              </Card>
              <Card sx={{padding: '0 0.75rem',border: '2px solid orange'}}>
                <Typography variant='subtitle1' align='center' sx={{fontSize:'14px'}}>
                {stepsRes
                .filter((filter) => filter.seq === stepSeq)
                .map((item) =>`${item.step}기`)}
                </Typography>
              </Card>
              <Card sx={{padding: '0 0.75rem',border: '2px solid orange'}}>
                <Typography variant='subtitle1' align='center' sx={{fontSize:'14px'}}>
                  {stepsRes
                  .filter((filter) => filter.seq === stepSeq)
                  .map((item) =>` ${item.studyStartDate.split(' ')[0]} ~ ${item.studyEndDate.split(' ')[0]}`)}
                </Typography>
              </Card>
            </Box>
            <Typography variant='overline' sx={{color:'#f41', fontSize:'12px',fontWeight:'bold'}} >* 선택하신 교육과 일정을 확인해 주세요.</Typography>
            <CardActions sx={{paddingTop:'.5rem',borderTop:'1px solid #c7c7c7c7'}}>
              <Button onClick={nextStep} fullWidth size="small" variant='contained' sx={{boxShadow:'2px 0px 2px #000',fontSize:'14px',fontWeight:'bold'}}>시작하기</Button>
              <Button onClick={() => router.back()} fullWidth size="small" variant='contained' sx={{background:'#c7c7c7', boxShadow:'2px 0px 2px #000',fontSize:'14px',fontWeight:'bold'}} >취소하기</Button>
            </CardActions>
        </Typography>
      </Box>
        </>
  )
}

export default EduOverview2