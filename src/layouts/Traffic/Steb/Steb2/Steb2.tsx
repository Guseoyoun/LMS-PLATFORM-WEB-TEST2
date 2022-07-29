import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  styled,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { StebHeader } from '../StebHeader';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { EduOverview } from './EduOverview';
import { CompanyInfo } from './CompanyInfo';
import { StudentInfo } from './StudentInfo';
import { useForm } from 'react-hook-form';
import { StudentList } from './StudentList';
import { useRouter } from 'next/router';
import { YN } from '@common/constant';
import {
  businessType,
  courseClassIndividualEnroll,
  courseClassOrganizationEnrll,
  RegisterType,
  UserTransSaveInputDataType,
} from '@common/api/courseClass';
import { useRecoilState } from 'recoil';
import { courseClassEnrollInfo, courseClassEnrollList, courseClassTrafficInfo } from '@common/recoil';
import { useSnackbar } from '@hooks/useSnackbar';
import { useIsLoginStatus } from '@hooks/useIsLoginStatus';
import { signUp } from '@common/api';
import { locationList } from '@layouts/MeEdit/MeEdit';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dateFormat from 'dateformat';
import { ko } from 'date-fns/locale';
import { CourseClassTraffic } from '@common/recoil/courseClassTraffic/atom';

interface detailCounts {
  [prop: string]: any;
}

interface FormDatas {
  locate: string;
}

export function Steb2() {
  const router = useRouter();
  const snackbar = useSnackbar();
  const isLogin = useIsLoginStatus();
  const ref = useRef<boolean>(false);
  const [trafficInfo, setTrafficInfo] = useRecoilState(courseClassTrafficInfo);

  const [detailCounts, setDetailCounts] = useState<detailCounts>({
    firstGrade: null,
    secondGrade: null,
    thirdGrade: null,
    fourthGrade: null,
    fifthGrade: null,
    sixthGrade: null,
    fifthYearOldChild: null, //만 5세
    fourthYearOldChild: null, //만 4세
    thirdYearOldChild: null, //만 3세
    oldMan: null, //어르신
    selfDriver: null, //자가운전자
  });

  const { register, setValue, watch, reset } = useForm<CourseClassTraffic>({
    defaultValues: { date: dateFormat(new Date(), 'yyyy-mm-dd') },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { locate, division, date, student, category } = watch();
    const {
      firstGrade,
      secondGrade,
      thirdGrade,
      fourthGrade,
      fifthGrade,
      sixthGrade,
      fifthYearOldChild,
      fourthYearOldChild,
      thirdYearOldChild,
      oldMan,
      selfDriver,
    } = detailCounts;
    if (!locate || !division || !date || !student || !category) return window.alert('모두 입력해 주세요!');
    console.log(watch());

    for (let keys in detailCounts) {
      const value = detailCounts[keys];
      console.log('ss', value);
    }

    // if (
    //   !firstGrade &&
    //   !secondGrade &&
    //   !thirdGrade &&
    //   !fourthGrade &&
    //   !fifthGrade &&
    //   !sixthGrade &&
    //   !fifthYearOldChild &&
    //   !thirdYearOldChild &&
    //   !fourthYearOldChild &&
    //   !thirdGrade &&
    //   !oldMan &&
    //   !selfDriver
    // )
    //   return window.alert('교육생 수를 기입해주세요!');

    try {
      router.push('steb3');
    } catch (e: any) {
      snackbar({ variant: 'error', message: e.data.message });
    }
  };

  // useEffect(() => {
  //   //해당 페이지 접근시 개인, 단체 초기화.
  //   console.log('초기화');
  //   setEnroll([]);
  //   setEnrollInfo([]);
  // }, []);

  // useEffect(() => {
  //   onClickConfirm();
  //   if (!confirm) {
  //     return () => {
  //       console.log('형이 왜 실행되는거야');
  //       setOrganization([]);
  //     };
  //   }
  // }, [confirm]);

  return (
    <Steb2Wrap>
      <StebHeader value={1} />
      <Container
        component="form"
        onSubmit={handleSubmit}
        maxWidth="sm"
        sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}
      >
        <FormControl fullWidth>
          <InputLabel id="location">지역</InputLabel>
          <Select
            labelId="location"
            id="location"
            // value={location}
            // onChange={(e) => setLocation(e.target.value as userRegistrationType)}
            {...register('locate', { required: true })}
            label="location"
          >
            {locationList.map(item => (
              <MenuItem key={item.en} value={item.en}>
                {item.ko}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <TextField label="소속(학교 , 기관 , 단체)" {...register('division')} />
          <FormHelperText sx={{ color: 'red' }}></FormHelperText>
        </FormControl>
        <DatePicker
          locale={ko}
          dateFormat="yyyy-MM-dd"
          showPopperArrow={false}
          minDate={new Date()}
          customInput={<TextField fullWidth />}
          selected={new Date(watch().date)}
          onSelect={() => {}}
          // popperPlacement="left"
          onChange={date => setValue('date', date ? dateFormat(date, 'yyyy-mm-dd') : dateFormat(new Date(), 'yyyy-mm-dd'))}
        />
        <FormControl fullWidth>
          <Typography id="student">교육 대상자</Typography>
          <Select
            labelId="student"
            id="student"
            {...register('student')}
            // label="student"
          >
            {studentList.map((item, index) => (
              <MenuItem key={item.enType} value={item.enType}>
                {item.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <Typography id="student-category">교육생 세부구분</Typography>
          <Select
            labelId="student-category"
            id="student-category"
            value={watch().category}
            onChange={e => {
              setValue('category', e.target.value);
              setDetailCounts({
                firstGrade: 0,
                secondGrade: 0,
                thirdGrade: 0,
                fourthGrade: 0,
                fifthGrade: 0,
                sixthGrade: 0,
                fifthYearOldChild: 0,
                fourthYearOldChild: 0,
                thirdYearOldChild: 0,
                oldMan: 0,
                selfDriver: 0,
              });
            }}
            // label="student-category"
          >
            {studentList
              .filter(studentList => watch().student === studentList.enType)[0]
              ?.category.map(({ type, enType, ageList }) => (
                <MenuItem key={enType} value={enType}>
                  {type}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <TableContainer component={Paper} sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableBody sx={{ width: '80%' }}>
            {studentList
              .filter(item => watch().student === item.enType)[0]
              ?.category.filter(item => watch().category === item.enType)[0] //뭐지??왜 옵셔널체이닝을 해야하지?
              ?.ageList.map(item => (
                <CustomInput ageInfo={item} setDetailCounts={setDetailCounts} detailCounts={detailCounts} />
              ))}
          </TableBody>
        </TableContainer>
        <Button variant="contained" type="submit" fullWidth>
          교육 신청하기
        </Button>
      </Container>
    </Steb2Wrap>
  );
}

const Steb2Wrap = styled(Container)`
  .react-datepicker__month-container {
  }
`;

function CustomInput({
  //부모에서 map해서 사용하도록 리팩토링
  ageInfo,
  setDetailCounts,
  detailCounts,
}: {
  ageInfo: { age: string; enAge: string };
  detailCounts: detailCounts;
  setDetailCounts: React.Dispatch<React.SetStateAction<detailCounts>>;
}) {
  const keyName: string = ageInfo.enAge;
  // console.log(detailCounts);

  return (
    <TableRow>
      <TableCell sx={{ width: '50%' }}>{ageInfo.age}</TableCell>
      <TableCell>
        <TextField
          name={ageInfo.enAge}
          placeholder="0~000명"
          value={detailCounts[keyName]}
          onChange={e => {
            // setValue(e.target.value);
            if (e.target.value.length > 10) return;
            if (/^[0-9]+$/.test(e.target.value)) setDetailCounts({ ...detailCounts, [e.target.name]: Number(e.target.value) });
          }}
          fullWidth
        />
      </TableCell>
    </TableRow>
  );
}

const studentList = [
  {
    type: '어린이',
    enType: 'CHILDREN',
    category: [
      {
        type: '유치원',
        enType: 'KINDER',
        ageList: [
          { age: '만3세', enAge: 'fifthYearOldChild' },
          { age: '만4세', enAge: 'fourthYearOldChild' },
          { age: '만5세', enAge: 'thirdYearOldChild' },
        ],
      },
    ],
  },
  {
    type: '청소년',
    enType: 'TEENAGER',
    category: [
      {
        type: '초등학교',
        enType: 'ELEMENTARY_SCHOOL',
        ageList: [
          { age: '1학년', enAge: 'firstGrade' },
          { age: '2학년', enAge: 'secondGrade' },
          { age: '3학년', enAge: 'thirdGrade' },
          { age: '4학년', enAge: 'fourthGrade' },
          { age: '5학년', enAge: 'fifthGrade' },
          { age: '6학년', enAge: 'sixthGrade' },
        ],
      },
      {
        type: '중학교',
        enType: 'MIDDLE_SCHOOL',
        ageList: [
          { age: '1학년', enAge: 'firstGrade' },
          { age: '2학년', enAge: 'secondGrade' },
          { age: '3학년', enAge: 'thirdGrade' },
        ],
      },
      {
        type: '고등학교',
        enType: 'HIGH_SCHOOL',
        ageList: [
          { age: '1학년', enAge: 'firstGrade' },
          { age: '2학년', enAge: 'secondGrade' },
          { age: '3학년', enAge: 'thirdGrade' },
        ],
      },
    ],
  },
  {
    type: '자가운전자',
    enType: 'SELF_DRIVER',
    category: [{ type: '자가운전자', enType: 'SELF_DRIVER', ageList: [{ age: '자가운전자', enAge: 'selfDriver' }] }],
  },
  {
    type: '어르신',
    enType: 'OLD_MAN',
    category: [{ type: '어르신', enType: 'OLD_MAN', ageList: [{ age: '어르신', enAge: 'oldMan' }] }],
  },
];
