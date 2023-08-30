import { TableBody,TableHead,Typography,Button,Box,InputBase,TextField,Backdrop,SelectChangeEvent } from '@mui/material';

import { grey } from '@mui/material/colors';
import { Table } from '@components/ui';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Spinner } from '@components/ui';
import ReplayIcon from '@mui/icons-material/Replay';
import { CompleteType,StatusType,useLearningInfo,useLearningInfoCourses,useLearningInfoStep } from '@common/api/adm/learningInfo';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { CourseType } from '@common/api/adm/courseClass';
import { NotFound } from '@components/ui/NotFound';
import { courseSubCategory } from '@layouts/Calendar/CalendarBody/CalendarBody';
import { convertBirth } from '@utils/convertBirth';
import { useForm } from 'react-hook-form';
import { locationList } from '@layouts/MeEdit/MeEdit';
import { userBusinessTypeOne } from '@layouts/MeEdit/TransWorker/TransWorker';
import { useSnackbar } from '@hooks/useSnackbar';
import { getExcelCourseLearning } from '@common/api/adm/excel';
import CourseSelectBox from './common/CourseSelectBox';
import { CourseLearningInfoCoursesResponseDto } from '@common/api/Api';
import CourseRadioBox from './common/CourseRadioBox';

const headRows: {
  name: string;
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  width: string;
}[] = [
  { name: 'No', align: 'center', width: '5%' },
  { name: '이름', align: 'center', width: '6%' },
  { name: '아이디', align: 'center', width: '6%' },
  { name: '생년월일', align: 'center', width: '8%' },
  { name: '휴대폰번호', align: 'center', width: '8%' },
  { name: '업종', align: 'center', width: '6%' },
  { name: '과정명', align: 'center', width: '28%' },
  { name: '기수', align: 'center', width: '10%' },
  { name: '학습기간', align: 'center', width: '7%' },
  { name: '진도율', align: 'center', width: '5%' },
  { name: '수료여부', align: 'center', width: '6%' },
  { name: '상태', align: 'center', width: '5%' },
];

interface FormType {
  page: number;
  notFound: boolean;
  nameOrUsername: string; //이름 혹은 아이디
  courseType: CourseType; //운수종사자 저상 도민 타입
  completeType: CompleteType | null; //수료타입
  statusType: StatusType | null; //퇴교여부 타입
  courseSeq: number | null; //과정 시퀀스
  courseClassSeq: number | null; //과정 클래스 시퀀스
  businessName: string; //업체명
  businessType: string | null; //업종 PASSENGER , FREIGHT
  carRegitRegion: string | null; //차량등록지
  carNumber: string | null; //차량번호
  studyStartDate: string; //학습시작일
  studyEndDate: string; //학습종료일
  phone: string | null; //전화번호
  identityNumber: string | null; //주민번호 (-포함)
}

const defaultValues: FormType = {
  page: 0,
  notFound: false,
  courseType: CourseType.TYPE_TRANS_WORKER,
  nameOrUsername: '',
  completeType: null,
  statusType: null,
  courseSeq: null,
  courseClassSeq: null,
  businessName: '',
  businessType: null,
  carRegitRegion: null,
  carNumber: null,
  studyStartDate: '',
  studyEndDate: '',
  phone: null,
  identityNumber: null,
};

export default function CourseInfoManagement() {
  const router = useRouter();
  // const [notFound, setNotFound] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [submitValue, setSubmitValue] = useState<FormType>(defaultValues);
  const { watch, setValue, reset, register } = useForm<FormType>({ defaultValues });
  const { data, error, mutate } = useLearningInfo(submitValue);
  const [loading, setLoading] = useState(false);

  const { courses } = useLearningInfoCourses();
  const { steps } = useLearningInfoStep(watch().courseSeq);

  const onChangeSeletedSeq = (e: SelectChangeEvent) => {
    onChageCourseSeq(Number(e.target.value));
    onChageCourseClassSeq(null);
  };
  const onChangeSelectedClassSeq = (e: SelectChangeEvent) => {
    onChageCourseClassSeq(Number(e.target.value) || null);
  };
  const onChangePage = (page: number) => {
    setSubmitValue(prev => {
      return { ...prev, page };
    });
  };

  const onChangeCourseType = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as CourseType;
    setValue('courseType', value);
  };

  //과정 선택
  const onChageCourseSeq = (courseSeq: number | null) => {
    setValue('notFound', false);
    if (!courseSeq) return setValue('courseSeq', null);
    setValue('courseSeq', courseSeq);
  };
  //기수 선택
  const onChageCourseClassSeq = (courseClassSeq: number | null) => {
    setValue('notFound', false);
    if (!watch().courseSeq) return setValue('courseClassSeq', null);
    setValue('courseClassSeq', courseClassSeq);
  };

  //업종구분
  const onChangeBusinessType = (e: SelectChangeEvent ) => {
    const value = e.target.value
    setValue('notFound', false);
    setValue('businessType', value);
  };
  //차량등록지
  const onChangeCarRegitRegion = (e: SelectChangeEvent) => {
    const value = e.target.value;
    setValue('notFound', false);
    setValue('carRegitRegion', value);
  };

  const onChangeCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('businessName', e.target.value);
  };



  const onChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('phone', e.target.value);
  };
  const onChangeIdentify = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('identityNumber', e.target.value);
  };

  //change completeType(수료여부)
  const onChangeCompleteType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('notFound', false);
    if (!value) return setValue('completeType', null);
    if (value === CompleteType.TYPE_COMPLETE)
      return setValue('completeType', value);
    if (value === CompleteType.TYPE_INCOMPLETE)
      return setValue('completeType', value);
  };

  //퇴교여부
  const onChangeStatusType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('notFound', false);
    if (!value) return setValue('statusType', null);
    if (value === StatusType.TYPE_NORMAL) return setValue('statusType', value);
    if (value === StatusType.TYPE_OUT) return setValue('statusType', value);
  };

  const onChangeCarNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue('notFound', false);
    setValue('carNumber', value);
  };


  const handleSubmit = (e:FormEvent,isReload = false) => {
    e.preventDefault();
    
    setValue('notFound', false);
    if (isReload) {
      reset();
      setSubmitValue(watch());
      searchInputRef.current.value = '';
      return;
    }
    if (searchInputRef.current) {
      setValue('nameOrUsername', searchInputRef.current.value);
    }

    const { phone, identityNumber } = watch();
    if (!phone || phone.trim() === '') setValue('phone', null);
    if (!identityNumber || identityNumber.trim() === '') setValue('identityNumber', null);
    setSubmitValue(watch());
  };

  // 수정페이지로
  const onClickmodifyCourseInfo = async (seq: number) => {
    window.open(
      `/admin-center/course-info/modify/${seq}`,
      // '',
      '_blank'
    );
  };


  const duplicateRemoveCourses: CourseLearningInfoCoursesResponseDto[] = useMemo(() => {
    const temp = [];
      courses?.forEach(course => {
        if(!temp.find(item => item.courseSeq === course.courseSeq)){
          temp.push(course);
        }
      })
      return temp;
  },[courses]);

  const snackbar = useSnackbar();
  const [fileLoading, setFileLoading] = useState(false);


  const onClickExcelDownload = async () => {
    const a = document.createElement('a');
    setFileLoading(true);
    try {
      const data = await getExcelCourseLearning(watch());
      const excel = new Blob([data]);
      a.href = URL.createObjectURL(excel);
      a.download = '충남_관리자_학습현황(운수/저상)_데이터.xlsx';
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
      snackbar({ variant: 'success', message: '다운로드 완료' });
      setFileLoading(false);
    } catch (e) {
      snackbar({ variant: 'error', message: e.data.message });
      setFileLoading(false);
    }
  };

  console.log(watch());
  useEffect(() => {
    if (data) {
      data.content.length === 0 && setValue('notFound', true);
    }
  }, [data]);

  if (error) return <div>Error</div>;
  if (!data) return <Spinner />;
  // user/adm/course-info/detail/{courseUserSeq}
  return (
    // <HeadRowsTop
    //     courseType={watch().courseType}
    //     onChangeCourseType={onChangeCourseType}
    //   /> 
    //   <Box display="flex" gap={2}>
    //      <HeadRowsLeft
    //       courseSeq={watch().courseSeq}
    //       onChageCourseSeq={onChageCourseSeq}
    //       courseClassSeq={watch().courseClassSeq}
    //       onChageCourseClassSeq={onChageCourseClassSeq}
    //       register={register}
    //       businessType={watch().businessType}
    //       onChangeBusinessType={onChangeBusinessType}
    //       carRegitRegion={watch().carRegitRegion}
    //       onChangeCarRegitRegion={onChangeCarRegitRegion}
    //     /> 
    //      <HeadRowsRight
    //       register={register}
    //       onChangeCompanyName={onChangeCompanyName}
    //       onChangePhone={onChangePhone}
    //       onChangeIdentify={onChangeIdentify}
    //     /> 
    //      <HeadRowsCenter
    //       ref={searchInputRef}
    //       completeType={watch().completeType}
    //       statusType={watch().statusType}
    //       carNumber={watch().carNumber}
    //       handleSearch={handleSearch}
    //       onChangeCompleteType={onChangeCompleteType}
    //       onChangeStatusType={onChangeStatusType}
    //       onChangeCarNumber={onChangeCarNumber}
    //     /> 
    //     </Box> 
    // <HeadRowsBottom
    //     search={watch().nameOrUsername}
    //     handleSubmit={handleSubmit}
    //   />
    <form onSubmit={(e) => handleSubmit(e,false)}>
      <Title variant="h1">전체 수강생 학습현황</Title>
      <ChoiceContainerWrapper>
        <LeftContainer>
          
          <Box>
            <Typography>교육연도</Typography>
            <TextField fullWidth/>
          </Box>

          <Box sx={{display:'flex',alignItems:'center',gap: '1rem'}}>
            <CourseSelectBox
              label="과정 선택"
              firstOptionLabel="전체"
              menuItem={duplicateRemoveCourses ?? []}
              onChange={onChangeSeletedSeq}
              value={watch().courseSeq + ''}
              itemKey="courseSeq"
              itemValue="courseSeq"
              itemName="courseName"

            />
            <CourseSelectBox
              label="과정기수 선택"
              firstOptionLabel="전체"
              menuItem={steps ?? []}
              onChange={onChangeSelectedClassSeq}
              value={watch().courseClassSeq + ''}
              itemKey="courseClassSeq"
              itemValue="courseClassSeq"
              itemName="yearAndStep"
            />
        </Box>

      <Box>
        <Typography>학습기간</Typography>
        <Box display="flex" gap={2} alignItems="center">
          <TextField type="date" {...register('studyStartDate')} fullWidth /> ~
          <TextField type="date" {...register('studyEndDate')} fullWidth />
        </Box>
      </Box>
      
      <Box sx={{display:'flex',alignItems:'center',gap: '1rem'}}>
          <CourseSelectBox
            label="업종"
            firstOptionLabel="-없음-"
            menuItem={userBusinessTypeOne}
            onChange={onChangeBusinessType}
            value={watch().businessType + ''}
            itemKey="enType"
            itemValue="enType"
            itemName="type"
          />
          <CourseSelectBox
            label="차량등록지"
            firstOptionLabel="-없음-"
            menuItem={locationList}
            onChange={onChangeCarRegitRegion}
            value={watch().carRegitRegion + ''}
            itemKey="en"
            itemValue="en"
            itemName="ko"
          />
        </Box>

        </LeftContainer>

      <CenterContainer>

        
      <Box>
        <Typography>업체명</Typography>
        <TextField
          {...register('businessName')}
          onChange={onChangeCompanyName}
          placeholder="업체명"
          fullWidth
        />
    </Box>
    <Box>
        <Typography>핸드폰번호</Typography>
        <TextField {...register('phone')}  placeholder='"-" 없이 입력' fullWidth />
      </Box>
      <Box>
        <Typography>주민등록번호</Typography>
        <TextField
          {...register('identityNumber')}
          placeholder='"-" 없이 입력'
          fullWidth
        />
      </Box>
        <Box>
          <Typography>차량번호</Typography>
            <TextField
            {...register('carNumber')}
              
              fullWidth
            />
        </Box>
      </CenterContainer>

      <Backdrop open={loading}>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ background: 'white', borderRadius: '4px', padding: '12px' }}
        >
          <Spinner fit={true} />
          <Box color="rgb(194,51,51)" fontWeight="bold">
            다운로드가 오래걸릴수 있습니다 페이지를 이탈하지 마세요.
          </Box>
        </Box>
      </Backdrop>
    </ChoiceContainerWrapper>
    {/*  */}
    
    <RadioGroupContainer>
      
      <CourseRadioBox
        title="과정타입선택"
        checked1={CourseType.TYPE_TRANS_WORKER === watch().courseType}
        checked2={CourseType.TYPE_LOW_FLOOR_BUS === watch().courseType}
        checked3={CourseType.TYPE_PROVINCIAL === watch().courseType}
        onChange={onChangeCourseType}
        label1='운수종사자'
        label2='저상버스'
        label3='도민교통'
        value1={CourseType.TYPE_TRANS_WORKER}
        value2={CourseType.TYPE_LOW_FLOOR_BUS}
        value3={CourseType.TYPE_PROVINCIAL}
      />

      <CourseRadioBox
        title="수료여부"
        checked1={watch().completeType === null}
        checked2={watch().completeType === CompleteType.TYPE_COMPLETE}
        checked3={watch().completeType === CompleteType.TYPE_INCOMPLETE}
        onChange={onChangeCompleteType}
        value1={null}
        value2={CompleteType.TYPE_COMPLETE}
        value3={CompleteType.TYPE_INCOMPLETE}
        label1="전체"
        label2="수료"
        label3="미수료"
      />
        
      <CourseRadioBox
        title="퇴교여부(상태)"
        checked1={watch().statusType === null}
        checked2={watch().statusType === StatusType.TYPE_NORMAL}
        checked3={watch().statusType === StatusType.TYPE_OUT}
        onChange={onChangeStatusType}
        value1={null}
        value2={StatusType.TYPE_NORMAL}
        value3={StatusType.TYPE_OUT}
        label1="전체"
        label2="정상"
        label3="퇴교"
      />
      </RadioGroupContainer>
    <SearchContainer>

      
        <Box sx={{ display:'flex',flexDirection:'column' }}>
          <Typography sx={{display:'flex',justifyContent:'space-between'}}>
              사용자 검색 
              <Typography component='span' sx={{color:'#a7a7a7c7'}}>
                {watch().nameOrUsername !== '' && `최근 검색어: ${watch().nameOrUsername}`}
              </Typography>
            </Typography>
          <SearchInput
            {...register('nameOrUsername')}
            inputRef={searchInputRef}
            placeholder="이름 혹은 아이디 입력"
            fullWidth
          />
        </Box>
      

      <BoxRow sx={{ flexDirection: 'row' }}>
        
        <Button type="submit" variant='contained' onClick={(e) => handleSubmit(e,false)} fullWidth>
          검색하기
        </Button>
        <ReloadButton
          type='submit'
          size='small'
          color='neutral'
          variant='text'
          endIcon={<ReplayIcon htmlColor={grey[700]} />}
          sx={{ marginLeft: '12px',border:'1px solid #c7c7c744' }}
          onClick={(e) => handleSubmit(e,true)}
          fullWidth
        >
          전체 다시 불러오기
        </ReloadButton>
      </BoxRow>

      <Backdrop open={loading}>
        <Box
          display='flex'
          flexDirection='column'
          sx={{ background: 'white', borderRadius: '4px', padding: '12px' }}
        >
          <Spinner fit={true} />
          <Box color='rgb(194,51,51)' fontWeight='bold'>
            다운로드가 오래걸릴수 있습니다 페이지를 이탈하지 마세요.
          </Box>
        </Box>
      </Backdrop>
    </SearchContainer>
      
    <BoxRow sx={{ flexDirection: 'row-reverse' }}>
      <Button
        variant='contained'
        color='success'
        disabled={fileLoading}
        onClick={onClickExcelDownload}
      >
        {fileLoading ? (
          <Spinner fit={true} />
        ) : (
          <Box sx={{display:'flex',alignItems:'center'}}>
            <FileCopyIcon sx={{ marginRight: '4px' }} />
            학습현황 엑셀다운로드
          </Box>
        )}
      </Button>
    </BoxRow>
      <ResultContainer>
        {watch().notFound ? (
          <NotFound content="학습현황이 존재하지 않습니다!" />
        ) : (
          <Table
            pagination={true}
            totalNum={data?.totalElements}
            page={data?.number}
            onChangePage={onChangePage}
            size="small"
            sx={{ tableLayout: 'fixed' }}
          >
            <TableHead>
              <TableRow>
                {headRows.map(
                  ({
                    name,
                    width,
                  }: {
                    name: string;
                    align: string;
                    width: string;
                  }) => (
                    <CourseInfoTitleTableCell
                      key={name}
                      align="center"
                      width={width}
                    >
                      {name}
                    </CourseInfoTitleTableCell>
                  )
                )}
              </TableRow>
            </TableHead>

            <TableBody>
              {data.content.map(user => (
                <TableRow
                  sx={{ cursor: 'pointer' }}
                  key={user.username}
                  hover
                  onClick={() => onClickmodifyCourseInfo(user.courseUserSeq)}
                >
                  <CourseInfoTableCell align="center">
                    {user.courseUserSeq}
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    <NameBox title={user.name}>{user.name}</NameBox>
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    {user.username || '실명계정'}
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    <SubjectBox>{convertBirth(user.birth)}</SubjectBox>
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    <SubjectBox>{user.phone}</SubjectBox>
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    <SubjectBox>
                      {
                        courseSubCategory.filter(
                          filter => filter.type === user.businessSubType
                        )[0]?.ko
                      }
                    </SubjectBox>
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    <SubjectBox>{user.courseName}</SubjectBox>
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    {user.yearAndStep}
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    {user.studyDate}
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    {user.displayTotalProgress}
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    {user.displayCompleteYn}
                  </CourseInfoTableCell>
                  <CourseInfoTableCell align="center">
                    {user.displayClassLearningStatus}
                  </CourseInfoTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </ResultContainer>
    </form>
  );
}


// 학습현황 글자
const Title = styled(Typography)`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 32px;
`;



// 학습현황 제목. ellipsis 적용.
const SubjectBox = styled(Box)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;

// 학습현황 테이블의 title부분
const CourseInfoTitleTableCell = styled(TableCell)`
  font-weight: bold;
  background: #f5f5f5;
  border-right: 1px solid #f0f0f0;
  border-top: 1px solid #f0f0f0;

  &:last-child {
    border-right: 1px solid #f0f0f0;
  }
`;

// 학습현황 테이블의 본문
const CourseInfoTableCell = styled(TableCell)`
  margin: 0;
  border-right: 1px solid #f0f0f0;
  padding: 4px 4px;
  height: 10px;

  &:first-of-type {
    background: #f5f5f5;
  }
`;

// 회원 이름. ellipsis 적용.
const NameBox = styled(Box)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
`;


const SearchInput = styled(InputBase)`
  
  height: 56px;
  border-radius: 4px;
  border: 1px solid #c7c7c7;
  padding: 0 12px;
`;

const ChoiceContainerWrapper = styled(Box)`
  display: flex;
  align-items:flex-start;
  justify-content:space-between;
  gap: 2rem;
`

const Container = styled(Box)`
  flex:1;
  display:flex;
  flex-direction:column;
  gap: .25rem; 
  
`

const RadioGroupContainer = styled(Box)`

  border-top: 1px solid #c7c7c7;
  border-bottom: 1px solid #c7c7c7;
  padding: .25rem 0;
  margin: 1rem 0;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  gap: 1rem; 
`

const CenterContainer = styled(Container)`
  
`;


const LeftContainer = styled(Container)`
  
`;

const BoxRow = styled(Box)`
  display: flex;
  width: 100%;
  gap: 16px;
`;

const SearchContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 12px;
`;

const ResultContainer = styled(Box)`
  

`



const ReloadButton = styled(Button)``;