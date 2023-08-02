import { Box, Button, ButtonGroup, Container, FormControl, FormControlLabel, LinearProgress, MenuItem, Radio, RadioGroup, Select, TextField, Typography, styled } from '@mui/material';
import StebHeader from '../StebHeader/StebHeader';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { YN, phoneList } from '@common/constant';
import {
  courseClassIndividualEnroll,
  courseClassOrganizationEnrll,
  courseSubCategoryType,
  RegisterType,
  userBusinessType,
  UserTransSaveInputDataType,
} from '@common/api/courseClass';
import { useRecoilState } from 'recoil';
import { courseClassEnrollInfo, courseClassEnrollList } from '@common/recoil';
import { useSnackbar } from '@hooks/useSnackbar';
import { signUp } from '@common/api';
import { IndividualSummary } from './IndividualSummary';
import useResponsive from '@hooks/useResponsive';
import { Spinner } from '@components/ui';
import { Phone4Regex, carNumberRegex, phoneRegex } from '@utils/inputRegexes';
import EduOverview2 from './EduOverview2';
import StepCard from './common/StepCard';
import { userBusinessTypeTwo } from '@layouts/MeEdit/TransWorker/TransWorker';

import { locationList, residenceList } from '@layouts/MeEdit/MeEdit';
import { UserRole, useMyUser } from '@common/api/user';
import { blue } from '@mui/material/colors';

interface FormType {
  localName: string;
  digit2: string;
  oneWord: string;
  digit4: string;
}

const localList = [
  { title: '충남', type: 'NAM' },
  { title: '세종', type: 'SEJONG' },
];
const oneWordList = ['아', '바', '사', '자', '배'];

const Placeholder = ({ children }) => {
  return <Box color='#bababa'>{children}</Box>;
};

export default function Steb2() {
  const router = useRouter();
  const snackbar = useSnackbar();
  const isDesktop = useResponsive();
  const [isIndividual, setIsIndividual] = useState(true); //individual or team button
  const [registerType, setRegisterType] = useState<RegisterType>(
    RegisterType.TYPE_INDIVIDUAL
  ); //개인신청 단체신청 토글
  const [enroll, setEnroll] = useRecoilState(courseClassEnrollList); //전역에 신청자 정보 저장
  const [enrollInfo, setEnrollInfo] = useRecoilState(courseClassEnrollInfo); //전역에 교육정보 저장
  const [confirm, setConfirm] = useState(false);
  const [isIndividualCheck, setIsIndividualCheck] = useState(false);
  const [hideCarNumber, setHideCarNumber] = useState(false); //차량번호 숨기기
  const [fixedBusinessType, setFixedBusinessType] = useState<userBusinessType>(); //업체정보 운수구분 고정용(여객-여객,화물-화물)
  const [loading, setLoading] = useState(false);
  const confirmRef = useRef<boolean>();
  // const [CheckElementList, setCheckElementList] = useState<NodeListOf<Element>>();
  const [currentIndex,setCurrentIndex] = useState(1);
  const [pageIndex,setPageIndex] = useState(1);

  const [disabledCompany, setDisabledCompany] = useState(false);
  
  const [isChecked,setIsChecked] = useState('deny');
  const [name, setName] = useState<string>(); //이름
  const [firstIdentityNumber, setFirstIdentityNumber] = useState<string>(); //주민앞
  const [secondIdentityNumber, setSecondidentityNumber] = useState<string>(); //주민뒷
  const [err, setErr] = useState(false);
  const { user, error } = useMyUser();

  const { register, setValue, getValues, watch } = useForm<UserTransSaveInputDataType>({
    defaultValues: { firstIdentityNumber: '', secondIdentityNumber: '', smsYn: YN.YES,firstPhone:'',secondPhone:'',thirdPhone:'' },
  });
  const { watch:carWatch, setValue:carSetValue, getValues:carGetValues, register: carRegister } = useForm<FormType>({
    defaultValues: { digit2:'', digit4:'', localName:'', oneWord:'' }
  });

  
  const nextStep = () => {
    setPageIndex(prev => prev + 1);
    if(currentIndex > 9) return;
    if(currentIndex === 3 && hideCarNumber) return setCurrentIndex(5);
    if(currentIndex === 2 && disabledCompany) return setCurrentIndex(4);
    setCurrentIndex(prev  => prev + 1)
  
    
  }

  // currentIndex가 1이면 router.back(), 1 초과면 currentIndex - 1로 리팩터링 
  const prevStep = () => {
    setPageIndex(prev => prev - 1);
    if(currentIndex <= 1) return
    if(currentIndex === 5 && hideCarNumber) return setCurrentIndex(3);
    if(currentIndex === 4 && disabledCompany) return setCurrentIndex(2);
    setCurrentIndex(prev  => prev - 1)
    
    
  }


  const onChangeBusinessSubType = (value: string) => {
    //회사명 활성화 + 차량번호 비활성화
    // if (
    //   courseSubCategoryType.CHARTER_BUS === value ||
    //   courseSubCategoryType.SPECIAL_PASSENGER === value ||
    //   courseSubCategoryType.CORPORATE_TAXI === value
    // ) {
    //   setDisabledCompany(false);
    // }

    if (courseSubCategoryType.CHARTER_BUS === value) {
      setValue('businessName', '');
      setValue('businessSubType', value as courseSubCategoryType);
      setDisabledCompany(false);
      return setHideCarNumber(false);
    }

    if (courseSubCategoryType.SPECIAL_PASSENGER === value) {
      setValue('businessName', '');
      setValue('businessSubType', value as courseSubCategoryType);
      setDisabledCompany(false);
      return setHideCarNumber(true);
    }

    if (courseSubCategoryType.PRIVATE_TAXI === value) {
      setValue(
        'businessName',
        userBusinessTypeTwo.filter(item => item.enType === value)[0].type
      );
      setValue('businessSubType', value as courseSubCategoryType);
      setDisabledCompany(true);
      return setHideCarNumber(false);
    }

    //차량번호 비활성화
    if (
      courseSubCategoryType.BUS === value ||
      courseSubCategoryType.CHARTER_BUS === value ||
      courseSubCategoryType.CORPORATE_TAXI === value
    ) {
      setValue('carNumber', '0');
      setValue('businessName', '');
      setValue('businessSubType', value as courseSubCategoryType);
      setDisabledCompany(false);
      return setHideCarNumber(true);
    }

    //회사명 고정
    if (courseSubCategoryType.PRIVATE_TAXI === value || courseSubCategoryType.CONSIGNMENT === value || courseSubCategoryType.INDIVIDUAL_CARGO === value) {
      setDisabledCompany(true);
      setValue(
        'businessName',
        userBusinessTypeTwo.filter(item => item.enType === value)[0].type
      );

      if (courseSubCategoryType.PRIVATE_TAXI === value) setDisabledCompany(false); //개인택시 보이게
      return setValue('businessSubType', value);
    }
    setDisabledCompany(false);
    setHideCarNumber(false);
    setValue('businessName', '');
    setValue('businessSubType', value as courseSubCategoryType);
  };


  
  const onClickEnroll = async () => {
    //단체 신청시 스택쌓이는 구조. 개인상태에서는 혼자 신청
    const {
      seq,
      firstIdentityNumber,
      secondIdentityNumber,
      firstPhone,
      secondPhone,
      thirdPhone, 
      ...rest
    } = watch();
    console.log('restCarNumber',rest.carNumber)
    if (!enrollInfo || !enrollInfo.seq)
      return window.alert('오류입니다! 교육일정으로 돌아가서 다시 신청해주세요!');
    if (String(rest.businessType) === '' || !rest.businessType) {
      setCurrentIndex(1);
      return snackbar({ variant: 'error', message: '운수구분을 선택해주세요!' });
    }
    //저상버스 처리
    if (!(localStorage.getItem('site_course_type') === 'TYPE_LOW_FLOOR_BUS')) {
      if (String(rest.businessSubType) === '' || !rest.businessSubType) {
        setCurrentIndex(2);
        return snackbar({ variant: 'error', message: '업종구분을 선택해주세요!' });
      }
    }
    if (!disabledCompany && !rest.businessName) {
      setCurrentIndex(3);
      return snackbar({ variant: 'error', message: '회사명을 입력해주세요!' });
    }
    // localName, digit2, oneWord, digit4
    if ((!hideCarNumber && !carNumberRegex.test(rest.carNumber) || rest.carNumber.length < 9 )) {
      setCurrentIndex(4);
      return snackbar({
        variant: 'error',
        message: '올바른 형식의 차량번호를 입력해주세요!',
      });
    }

    if (rest.carRegisteredRegion === '' || !rest.carRegisteredRegion) {
      setCurrentIndex(5);
      return snackbar({ variant: 'error', message: '차량등록지를 선택해주세요!' });
    }
    // if (rest.name === '' || !rest.name) {
    //   setCurrentIndex(6);
    //   return snackbar({
    //     variant: 'error',
    //     message: '이름을 입력해주세요!(관리자일경우 일반회원으로 시도해주세요)',
    //   });
    // }

    // if (firstIdentityNumber.length < 6 || secondIdentityNumber.length < 7) {
    //   setCurrentIndex(6);
    //   return snackbar({
    //     variant: 'error',
    //     message: '주민번호를 모두 입력해주세요!(관리자일경우 일반회원으로 시도해주세요)',
    //   });
    // }
    if (rest.residence === '' || !rest.residence) {
      setCurrentIndex(6);
      return snackbar({ variant: 'error', message: '거주지를 선택해주세요!' });
    }

    if (!phoneRegex.test(firstPhone + secondPhone + thirdPhone)) {
      setCurrentIndex(7);
      return snackbar({
        variant: 'error',
        message: '올바른 형식의 휴대전화를 입력해주세요!',
      });
    }

    if (!isIndividualCheck) {
      setCurrentIndex(9);
      return snackbar({
        variant: 'error',
        message: '개인정보 수집 및 이용동의에 체크해주세요!',
      });
    }

    const postData = {
      ...rest,
      businessType: watch().businessType, //TYPE_PASSENGER 이런식인줄 알았으나 PASSENGER식으로 요청해야함
      carNumber: hideCarNumber ? null : rest.carNumber,
      identityNumber: firstIdentityNumber + secondIdentityNumber,
      phone: firstPhone + secondPhone + thirdPhone,
    }; //민증번호때문에 구분

    try {
      //개인으로 신청
      if (registerType === RegisterType.TYPE_INDIVIDUAL) {
        confirmRef.current = true;
        // console.log(watch(), 'ssss');
        setLoading(true);
        const test = await courseClassIndividualEnroll(postData);
        setEnroll([watch()]);
        setEnrollInfo(prev => {
          return { ...prev, seq: enrollInfo.seq };
        });
        setLoading(false);
        router.push('/stebMove/steb3');
      }
      //단체로 신청
      if (registerType === RegisterType.TYPE_ORGANIZATION) {
        setLoading(true);
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
            try {
              const { data } = await courseClassOrganizationEnrll(postData);
              setValue('seq', data.seq);
              setEnroll(prev => [...prev, watch()]);
              setLoading(false);
            } catch (e: any) {
              snackbar({ variant: 'error', message: e.data.message });
              setLoading(false);
            }
          })
          .catch(async e => {
            console.dir(e.data.status);
            if (e.data.status === 400) {
              //이미 존재하는 계정
              try {
                const { data } = await courseClassOrganizationEnrll(postData);
                setValue('seq', data.seq);
                setEnroll(prev => [...prev, watch()]);
                setLoading(false);
              } catch (e: any) {
                snackbar({ variant: 'error', message: e.data.message });
                setLoading(false);
              }
            }
            if (e.data.status !== 400)
              snackbar({ variant: 'error', message: e.data.message });
          });
      }
    } catch (e: any) {
      confirmRef.current = false;
      setLoading(false);
      snackbar({ variant: 'error', message: e.data.message });
    }
  };

  const onClickConfirm = async () => {
    //단체에서 신청완료로 넘어가는 버튼
    // setConfirm(true);
    confirmRef.current = true;
    // if (confirm) {
    if (enroll.length === 0)
      return snackbar({
        variant: 'error',
        message: '신청한 교육신청자가 없습니다! 교육신청자를 추가한 후 확인해주세요',
      });
    setEnrollInfo({ seq: Number(enrollInfo && enrollInfo.seq) });
    router.push('/stebMove/steb3');
    // }
  };

  const onChangeRadioValue = (e:ChangeEvent<HTMLInputElement>) => {
    if(e.target.value === 'agree') setValue('smsYn', YN.YES)
    else setValue('smsYn', YN.NO)
  }
  //리코일 체크후 courseClassSeq값이 없으면 step1으로 이동시키는 이펙트

  // console.log(user, 'user');

  

  const regFunc = () => {
    const { localName, digit2, oneWord, digit4 } = carWatch();
    const carNumber = localName + digit2 + oneWord + digit4;
    if (!carNumberRegex.test(carNumber)) {
      setValue('carNumber', carNumber);
      return setErr(true);
    }
    setErr(false);
    setValue('carNumber', carNumber);
  };

  useEffect(() => {
    regFunc();
  }, [carWatch().localName, carWatch().digit2, carWatch().digit4, carWatch().oneWord]);


  useEffect(() => {
    if (user && registerType === RegisterType.TYPE_INDIVIDUAL) {
      //if your admin or safety user that not have identity number
      if (!user?.identityNumber) return;
      const first = user.identityNumber.slice(0, 6);
      const second = user.identityNumber.slice(6, 14);
      setValue('name', user.name);
      setValue('firstIdentityNumber', first);
      setFirstIdentityNumber(first);
      setValue('secondIdentityNumber', second);
      setSecondidentityNumber(second);
      if (user?.phone) {
        setValue('firstPhone', user.phone.slice(0, 3));
        setValue('secondPhone', user.phone.slice(3, 7));
        setValue('thirdPhone', user.phone.slice(7, 11));
      }
    }
    if (user && registerType === RegisterType.TYPE_ORGANIZATION) {
      //단체신청시 이름과 주민등록번호 인풋 초기화.
      setValue('name', '');
      setValue('firstIdentityNumber', '');
      setValue('secondIdentityNumber', '');
      setFirstIdentityNumber('');
      setSecondidentityNumber('');
      if (!user.roles.filter(role => role === UserRole.ROLE_TRANS_MANAGER)[0]) {
        window.alert('권한이 없는 유저입니다.');
        setRegisterType(RegisterType.TYPE_INDIVIDUAL);
      } else {
      }
    }
  }, [user, registerType]);

  useEffect(() => {
    if (enrollInfo) setValue('courseClassSeq', Number(enrollInfo.seq));

    if (!enrollInfo || !enrollInfo.seq) {
      window.alert('과정정보가 없거나 잘못된 과정입니다! 다시 시도해주세요.');
      router.push(`/stebMove/steb1`);
    }
  }, [enrollInfo]);

  //useForm의 첫 타입설정 이펙트
  useEffect(() => {
    setValue('registerType', RegisterType.TYPE_INDIVIDUAL);
  }, []);

  // 스크롤을 위한 이펙트
  // useEffect(() => {
  //   const scrollBoxList = document.querySelectorAll('.scroll-to-box');
  //   // if (scrollBoxList.length !== (CheckElementList && CheckElementList.length))
  //   setCheckElementList(scrollBoxList);
  // }, []);

  // console.log(watch());


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
  // console.log(educationInfo.businessSubType);

  
  return (
    <Steb2Wrap>
      {isDesktop && <StebHeader value={2} />}
      <Steb2BodyContainer>
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
        
        <LinearProgress sx={{margin:'0 auto',width:'50%'}} variant="determinate" value={((currentIndex - 1) * 100) / 8} />
        <Typography sx={{marginTop:'.5rem',fontSize:'12px',fontWeight:'bold'}} variant="body2" color="text.secondary">{currentIndex - 1} / 8</Typography>
        </Box>
        {/* --- 교육개요 --- */}
        {
        currentIndex === 1 &&
        <EduOverview2
          setValue={setValue}
          watch={watch}
          setFixedBusinessType={setFixedBusinessType}
          nextStep={nextStep}
        />
        }
       
        {
          currentIndex === 2 &&
          <StepCard nextStepAbled={!!(getValues().businessSubType)} comment='운수 업종을 선택해주세요' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
            {!(localStorage.getItem('site_course_type') === 'TYPE_LOW_FLOOR_BUS') && (
                
                <FormControl sx={{ width:'90%' }}>
                  <Select
                    labelId="businessSubType"
                    id="businessSubType"
                    placeholder="업종 유형선택"
                    {...register('businessSubType')}
                    onChange={e => onChangeBusinessSubType(e.target.value as string)}
                    value={getValues().businessSubType || ''}
                  >
                    {userBusinessTypeTwo
                      .filter(filter => filter.category === watch().businessType)
                      .map(item => (
                        <MenuItem key={item.enType} value={item.enType}>
                          {item.type}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
          )}
          </StepCard>
        }
        {
          currentIndex === 3 &&
          <StepCard nextStepAbled={!!(getValues().businessName)} comment='회사명을 입력해 주세요' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
          
              {/* <TextField
                name='companyName'
                placeholder="회사명"
                value={educationInfo.companyName}
                onChange={onChangeEducationInfo}
                fullWidth
              /> */}
              <FormControl sx={{ width:'90%' }}>
              <TextField
                placeholder="회사명"
                {...register('businessName')}
                // value={onReturnValueBusinessName()}
                value={watch().businessName}
                disabled={disabledCompany}
                fullWidth
              />
              </FormControl>
          </StepCard>
        }


        {
          (currentIndex === 4) &&
          <StepCard nextStepAbled={getValues().carNumber && getValues().carNumber.length > 8} comment='차량번호를 입력해 주세요' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
            <Box width='100%'
             display='flex' alignItems='center' gap='1.25rem'>

            <FormControl fullWidth>
              <Select
                {...carRegister('localName')}
                displayEmpty
                renderValue={ !carWatch().localName ? () => <Placeholder>지역명</Placeholder> : null }
                placeholder='지역명'
                onChange={e => carSetValue('localName',e.target.value as string)}
                value={carGetValues().localName || ''}
                >
                {localList.map((item) => (
                  <MenuItem key={item.type} value={item.title}>
                    {item.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              {...carRegister('digit2')}
              onChange={(e) => {
                // if (!regex4.test(e.target.value)) return;
                if (e.target.value.length > 2) return;
                carSetValue('digit2', e.target.value.replace(/[^0-9]/g, ''));
              }}
              value={carWatch().digit2}
              placeholder='차종 번호2자리'
              inputProps={{ inputMode: 'numeric' }}
              fullWidth
              />

            <FormControl fullWidth>
              <Select
                {...carRegister('oneWord')}
                displayEmpty
                renderValue={ !carWatch().oneWord ? () => <Placeholder>용도 기호</Placeholder> : null }
                placeholder='용도 기호 한글 한글자'
                value={carGetValues().oneWord || ''}
              >
                {oneWordList.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              {...carRegister('digit4')}
              onChange={(e) => {
                // if (!regex4.test(e.target.value)) return;
                if (e.target.value.length > 4) return;
                carSetValue('digit4', e.target.value.replace(/[^0-9]/g, ''));
              }}
              value={carWatch().digit4}
              placeholder='차량번호 4자리'
              inputProps={{ inputMode: 'numeric' }}
              fullWidth
            />

            </Box>
          </StepCard>
        }







        {
          currentIndex === 5 &&
          <StepCard nextStepAbled={!!(getValues().carRegisteredRegion)} comment='차량 등록지를 선택해주세요' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
              <FormControl sx={{ width:'90%' }}>
                <Select
                  {...register('carRegisteredRegion', {
                    required: true,
                  })}
                  placeholder='지역명'
                  onChange={(e) => setValue('carRegisteredRegion',e.target.value as string)}
                  value={getValues().carRegisteredRegion || ''}
                > 
                  {locationList
                    .filter(item =>
                      watch().businessSubType === courseSubCategoryType.BUS
                        ? true
                        : item.en !== 'CHUNGNAM'
                    )
                    .map(item => (
                      <MenuItem key={item.en} value={item.en}>
                        {item.ko}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
          </StepCard>
        }
        { currentIndex === 6 &&
          <StepCard nextStepAbled={!!(getValues().residence)} comment='현재 거주지를 입력해주세요' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
              <FormControl sx={{ width:'90%' }}>
                <Select
                  {...register('residence', {
                    required: true,
                  })}
                  onChange={(e) => setValue('residence', e.target.value as string)}
                  value={getValues().residence || ''}
                >
                {residenceList.map(item => (
                  <MenuItem key={item.en} value={item.en}>
                    {item.ko}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </StepCard>
        }
        { currentIndex === 7 &&
          <StepCard nextStepAbled={getValues().firstPhone?.length + getValues().secondPhone?.length + getValues().thirdPhone?.length > 10} comment='휴대전화 번호를 입력해주세요' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
            <Box display='flex' gap='1rem' justifyContent='flex-start'>
              <FormControl sx={{ width:'90%' }}>
                <Select
                  labelId="phone-type-label"
                  id="phone-type"
                  {...register('firstPhone')}
                  onChange={e => setValue('firstPhone', e.target.value)}
                  value={getValues().firstPhone || ''}
                >
                {phoneList.map(item => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
                </Select>
              </FormControl>
              <TextField
                // {...register('secondPhone')}
                value={getValues().secondPhone || ''}
                onChange={e => {
                  if (Phone4Regex.test(e.target.value)) return;
                  setValue('secondPhone', e.target.value.replace(/[^0-9]/g, ''));
                }}
                inputProps={{ inputMode: 'numeric' }}
                fullWidth
                placeholder='가운데 번호 4자리'
              />
              
              <TextField
                {...register('thirdPhone')}
                onChange={e => {
                  if (Phone4Regex.test(e.target.value)) return;
                  setValue('thirdPhone', e.target.value.replace(/[^0-9]/g, ''));
                }}
                value={getValues().thirdPhone}
                inputProps={{ inputMode: 'numeric' }}
                placeholder='끝 번호 4자리'
                fullWidth
              />
            </Box>
          </StepCard>
        }
        {
          currentIndex === 8 && 
          <StepCard nextStepAbled comment='' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
            <Box paddingLeft='1rem' width='100%' display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center'>
              <Typography display='flex'>SMS 문자 수신 동의 <Typography component='span' sx={{color:'#f41',fontWeight:'bold'}}>(선택)</Typography></Typography>
              <Typography>※ 교육접수 완료 시 예약완료 문자가 발송됩니다.</Typography>
              <Typography>※ 신청인 본인의 휴대폰 번호를 입력하셔야 합니다.</Typography>
              <AccentedWord> ※ 휴대혼번호 입력후 SMS 동의시 교육관련 문자메시지를 받으실 수 있습니다.</AccentedWord>
            
              <RadioGroup
                name="smsYn"
                defaultValue='deny'
                onChange={onChangeRadioValue}
                row
                sx={{gap:'2rem',marginTop:'2rem',alignSelf:'center'}}
              >
                <FormControlLabel
                  value='agree'
                  label='동의'
                  control={<Radio sx={{position:'absolute',top:'-10%',left:'-16%', color: isChecked === 'agree'? blue[400] : '#c7c7c7', '&.Mui-checked': { color: blue[800] } }} />}
                  onChange={() => setIsChecked('agree')}
                  sx={{
                    position:'relative',
                    display:'flex',
                    justifyContent:'center',
                    color:'#fff',minWidth:'120px',fontWeight:'bold',backgroundColor: isChecked === 'agree'? blue[500] : '#c7c7c7c7',padding:'.25rem 1rem',borderRadius:'30px 4px 4px 30px'
                  }}
                  
                  />
                <FormControlLabel
                  value='deny'
                  label='동의 안함'
                  control={<Radio sx={{position:'absolute',top:'-10%',left:'-16%',color: isChecked === 'deny'? blue[400] : '#c7c7c7', '&.Mui-checked': { color: blue[800] } }} />}
                  onChange={() => setIsChecked('deny')}
                  sx={{
                  position:'relative',
                  display:'flex',
                  justifyContent:'center',
                  color:'#fff',minWidth:'120px',fontWeight:'bold',backgroundColor: isChecked === 'deny'? blue[500] : '#c7c7c7c7',padding:'.25rem 1rem',borderRadius:'30px 4px 4px 30px'
                  }}
                />
              </RadioGroup>
            </Box>

          </StepCard>
        }
        {
          currentIndex === 9 &&
          <StepCard nextStepAbled comment='개인정보 수집 및 이용 동의(필수)' index={pageIndex} nextStep={nextStep} prevStep={prevStep}>
          <IndividualSummary
            isIndividualCheck={isIndividualCheck}
            setIsIndividualCheck={setIsIndividualCheck}
          />
          <ButtonGroup
            
            aria-label="outlined primary button group"
            sx={{ width: '100%', marginTop: '1rem' }}

          >
          <Button
            variant="contained"
            onClick={onClickEnroll}
            disabled={!(loading === false && isIndividualCheck === true)}
            sx={{ mb: 2, width:'50%',margin:'0 auto',fontWeight:'bold' }}
          >
            {loading ? <Spinner fit={true} /> : '신청하기'}
            {isIndividualCheck}
          </Button>

          {registerType === RegisterType.TYPE_ORGANIZATION && (
            <Button
              variant="contained"
              color="success"
              onClick={onClickConfirm}
              disabled={loading}
              sx={{ mb: 2, width:'50%',margin:'0 auto',fontWeight:'bold' }}

            >
              {loading ? <Spinner fit={true} /> : '확인'}
            </Button>
          )}
          </ButtonGroup>
        </StepCard>
        }
        
      </Steb2BodyContainer>
    </Steb2Wrap>
  );
}

const Steb2Wrap = styled(Box)``;

const Steb2BodyContainer = styled(Container)`
  padding: 0 1rem;
  margin-top: 6rem;
  margin-bottom: 4rem;
  .MuiTextField-root {
    background: #eeefff;
  }
  .MuiSelect-select {
    background: #eeefff;
  }
`;
const AccentedWord = styled(Typography)`
  color: red;
`;



         {/* <EduOverview
          setValue={setValue}
          watch={watch}
          setFixedBusinessType={setFixedBusinessType}
        /> */}
        {/* ---업체정보--- */}
        {/* <CompanyInfo
          isIndividual={isIndividual}
          setIsIndividual={setIsIndividual}
          register={register}
          watch={watch}
          setValue={setValue}
          setHideCarNumber={setHideCarNumber}
          fixedBusinessType={fixedBusinessType}
          hideCarNumber={hideCarNumber}
        /> */}

        {/* --- 신청 구분 --- */}
        {/* <StudentList registerType={registerType} setRegisterType={setRegisterType} /> */}
        
        {/* --- 교육신청자 정보 --- */}
        {/* <StudentInfo
          register={register}
          setValue={setValue}
          registerType={registerType}
          setRegisterType={setRegisterType}
          watch={watch}
          hideCarNumber={hideCarNumber}
        /> */}

        {/* --- 개인정보 수집 및 이용 동의 --- */}
        {/* <IndividualSummary
          isIndividualCheck={isIndividualCheck}
          setIsIndividualCheck={setIsIndividualCheck}
        /> */}

        {/* --- 신청버튼 --- */}
          {/* <ConfirmButtonsWrap>    
          <Button
            variant="contained"
            onClick={onClickEnroll}
            disabled={loading}
            fullWidth
            sx={{ mb: 2 }}
          >
            {loading ? <Spinner fit={true} /> : '신청하기'}
          </Button>

          {registerType === RegisterType.TYPE_ORGANIZATION && (
            <Button
              variant="contained"
              color="success"
              onClick={onClickConfirm}
              disabled={loading}
              fullWidth
            >
              {loading ? <Spinner fit={true} /> : '확인'}
            </Button>
          )}
          </ConfirmButtonsWrap> */}
