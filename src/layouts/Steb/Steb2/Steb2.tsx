import { Box, Button, Container, styled } from '@mui/material';
import { StebHeader } from '../StebHeader';
import { useEffect, useRef, useState } from 'react';
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
import { courseClassEnrollInfo, courseClassEnrollList } from '@common/recoil';
import { useSnackbar } from '@hooks/useSnackbar';
import { useIsLoginStatus } from '@hooks/useIsLoginStatus';
import { signUp } from '@common/api';
import { IndividualSummary } from './IndividualSummary';

export function Steb2() {
  const router = useRouter();
  const snackbar = useSnackbar();
  const isLogin = useIsLoginStatus();
  const [isIndividual, setIsIndividual] = useState(true); //individual or team button
  const [registerType, setRegisterType] = useState<RegisterType>(RegisterType.TYPE_INDIVIDUAL); //개인신청 단체신청 토글
  const [enroll, setEnroll] = useRecoilState(courseClassEnrollList); //전역에 신청자 정보 저장
  const [enrollInfo, setEnrollInfo] = useRecoilState(courseClassEnrollInfo); //전역에 교육정보 저장
  const [confirm, setConfirm] = useState(false);
  const [isIndividualCheck, setIsIndividualCheck] = useState(false);
  const confirmRef = useRef<boolean>();

  const { register, setValue, watch } = useForm<UserTransSaveInputDataType>({
    defaultValues: { firstIdentityNumber: '', secondIdentityNumber: '' },
  });

  useEffect(() => {
    if (enrollInfo) setValue('courseClassSeq', Number(enrollInfo.seq));
  }, [enrollInfo]);
  useEffect(() => {
    setValue('registerType', RegisterType.TYPE_INDIVIDUAL);
  }, []);

  const onClickEnroll = async () => {
    //단체 신청시 스택쌓이는 구조. 개인상태에서는 혼자 신청
    const { seq, firstIdentityNumber, secondIdentityNumber, firstPhone, secondPhone, thirdPhone, ...rest } = watch();
    console.log('user datas2', watch(), enrollInfo);
    if (firstIdentityNumber.length < 6 || secondIdentityNumber.length < 7) return window.alert('주민번호를 모두 입력해주세요!');
    if (!enrollInfo || !enrollInfo.seq) return window.alert('기수를 선택해주세요!');
    // if (!enrollInfo || !enrollInfo.seq) return window.alert('기수를 선택해주세요!');
    if (!isIndividualCheck) return window.alert('개인정보 수집 및 이용동의에 체크해주세요!');

    console.log('user datas2', watch());
    const postData = {
      ...rest,
      businessType: watch().businessType, //TYPE_PASSENGER 이런식인줄 알았으나 PASSENGER식으로 요청해야함
      identityNumber: firstIdentityNumber + secondIdentityNumber,
      phone: firstPhone + secondPhone + thirdPhone,
    }; //민증번호때문에 구분
    console.log('user datas', postData);

    try {
      //개인으로 신청
      if (registerType === RegisterType.TYPE_INDIVIDUAL) {
        confirmRef.current = true;
        const test = await courseClassIndividualEnroll(postData);
        setEnroll([watch()]);
        // setEnrollInfo(prev => {
        //   return { ...prev, seq: enrollInfo.seq };
        // });
        router.push('/stebMove/steb3');
      }
      //단체로 신청
      if (registerType === RegisterType.TYPE_ORGANIZATION) {
        signUp({
          username: watch().firstIdentityNumber + secondIdentityNumber,
          password: watch().firstIdentityNumber + secondIdentityNumber,
          name: watch().name,
          email: '',
          regCategory: 'TYPE_TRANS_EDU',
          phone: firstPhone + secondPhone + thirdPhone,
          emailYn: YN.NO,
          smsYn: YN.NO,
        })
          .then(async res => {
            //계정생성완료 후 작업
            const { data } = await courseClassOrganizationEnrll(postData);
            setValue('seq', data.seq);
            setEnroll(prev => [...prev, watch()]);
          })
          .catch(async e => {
            console.dir(e.data.status);
            if (e.data.status === 400) {
              //이미 존재하는 계정
              const { data } = await courseClassOrganizationEnrll(postData);
              setValue('seq', data.seq);
              setEnroll(prev => [...prev, watch()]);
            }
          });
      }
    } catch (e: any) {
      confirmRef.current = false;
      snackbar({ variant: 'error', message: e.data.message });
    }
  };

  const onClickConfirm = async () => {
    //단체에서 신청완료로 넘어가는 버튼
    // setConfirm(true);
    confirmRef.current = true;
    // if (confirm) {
    setEnrollInfo({ seq: Number(enrollInfo && enrollInfo.seq) });
    router.push('/stebMove/steb3');
    // }
  };
  useEffect(() => {
    confirmRef.current = confirm;
  }, [confirm]);

  useEffect(() => {
    return () => {
      if (confirmRef.current === false) {
        //해당 페이지 접근시 개인, 단체 초기화.
        setEnroll([]);
        setEnrollInfo(null);
      }
      confirmRef.current = false;
    };
  }, []);

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
  //       setOrganization([]);
  //     };
  //   }
  // }, [confirm]);

  return (
    <Steb2Wrap>
      <StebHeader value={2} />
      <Steb2BodyContainer>
        <EduOverview setValue={setValue} />
        <CompanyInfo isIndividual={isIndividual} setIsIndividual={setIsIndividual} register={register} watch={watch} />
        <StudentList registerType={registerType} setRegisterType={setRegisterType} />
        <StudentInfo register={register} setValue={setValue} registerType={registerType} setRegisterType={setRegisterType} />
        <IndividualSummary isIndividualCheck={isIndividualCheck} setIsIndividualCheck={setIsIndividualCheck} />
        <ConfirmButtonsWrap>
          <Button variant="contained" onClick={onClickEnroll} fullWidth sx={{ mb: 2 }}>
            신청하기
          </Button>
          {registerType === RegisterType.TYPE_ORGANIZATION && (
            <Button variant="contained" onClick={onClickConfirm} fullWidth>
              확인
            </Button>
          )}
        </ConfirmButtonsWrap>
      </Steb2BodyContainer>
    </Steb2Wrap>
  );
}

const Steb2Wrap = styled(Box)``;

const Steb2BodyContainer = styled(Container)`
  padding: 0 1rem;
`;

const ConfirmButtonsWrap = styled(Box)`
  max-width: 650px;
  margin: auto;
`;
