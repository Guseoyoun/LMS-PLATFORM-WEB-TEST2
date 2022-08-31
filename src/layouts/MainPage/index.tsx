import type { NextPage } from 'next';
import styles from '@styles/common.module.scss';
import * as React from 'react';
import styled from '@emotion/styled';
import { Spinner } from '@components/ui';
import cn from 'clsx';
import { Link } from '@components/common';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Container } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import { MainDisplayType, useMainDisplay } from '@common/api/mainDisplay';
import { useRecoilState } from 'recoil';
import { pageType } from '@common/recoil';
import { pageRegType } from '@common/recoil/pageType/atom';
import { useIsLoginStatus } from '@hooks/useIsLoginStatus';
import { regCategoryType, useMyUser, UserRole } from '@common/api/user';
import { useRouter } from 'next/router';
import { courseType } from '@common/api/courseClass';
import { logout } from '@common/api';
import useResponsive from '@hooks/useResponsive';

const LinkList = [
  {
    mainDisplayType: MainDisplayType.EDUCATION_TRANSPORT_WORKER,
    pageType: pageRegType.TYPE_TRANS_EDU,
    displayWord: '운수종사자',
    textColor: '#0A9A4E',
    color: '#0A9A4E',
    lineColor: '#179b52',
    href: '/category',
    imgPath: '/assets/images/unsu.jpg',
    onClickCard: async () => {
      if (typeof window !== 'undefined' && !localStorage.getItem('site_course_type'))
        return localStorage.setItem('site_course_type', courseType.TYPE_TRANS_WORKER);
      if (
        typeof window !== 'undefined' &&
        localStorage.getItem('site_course_type') === courseType.TYPE_TRANS_WORKER
      )
        return;
      if (localStorage.getItem('site_course_type') !== courseType.TYPE_TRANS_WORKER) {
        if (!!localStorage.getItem('ACCESS_TOKEN')) {
          await logout();
          localStorage.setItem('site_course_type', courseType.TYPE_TRANS_WORKER);
        } else {
        }
      }
      localStorage.setItem('site_course_type', courseType.TYPE_TRANS_WORKER);
    },
  },
  {
    mainDisplayType: MainDisplayType.EDUCATION_GROUND_BUS_DRIVER,
    pageType: pageRegType.TYPE_TRANS_EDU,
    displayWord: '저상버스',
    textColor: '#256AEF',
    color: '#256AEF',
    lineColor: '#2a6fe8',
    href: '/category',
    imgPath: '/assets/images/lowFloor.jpg',
    onClickCard: async () => {
      if (typeof window !== 'undefined' && !localStorage.getItem('site_course_type'))
        return localStorage.setItem('site_course_type', courseType.TYPE_LOW_FLOOR_BUS);
      if (
        typeof window !== 'undefined' &&
        localStorage.getItem('site_course_type') === courseType.TYPE_LOW_FLOOR_BUS
      )
        return;
      if (localStorage.getItem('site_course_type') !== courseType.TYPE_LOW_FLOOR_BUS) {
        if (!!localStorage.getItem('ACCESS_TOKEN')) {
          await logout();
          localStorage.setItem('site_course_type', courseType.TYPE_LOW_FLOOR_BUS);
        } else {
        }
      }
      localStorage.setItem('site_course_type', courseType.TYPE_LOW_FLOOR_BUS);
    },
  },
  {
    mainDisplayType: MainDisplayType.EDUCATION_PROVINCIAL_TRAFFIC_SAFETY,
    pageType: pageRegType.TYPE_TRAFFIC_SAFETY_EDU,
    displayWord: '도민교통',
    textColor: '#711D14',
    color: '#FEC901',
    lineColor: '#57242b',
    href: 'traffic/category',
    imgPath: '/assets/images/domin.jpg',
    onClickCard: async () => {
      if (typeof window !== 'undefined' && !localStorage.getItem('site_course_type'))
        return localStorage.setItem('site_course_type', courseType.TYPE_PROVINCIAL);
      if (
        typeof window !== 'undefined' &&
        localStorage.getItem('site_course_type') === courseType.TYPE_PROVINCIAL
      )
        return;
      if (localStorage.getItem('site_course_type') !== courseType.TYPE_PROVINCIAL) {
        if (!!localStorage.getItem('ACCESS_TOKEN')) {
          await logout();
        } else {
          return;
        }
      }
      localStorage.setItem('site_course_type', courseType.TYPE_PROVINCIAL);
    },
  },
];
const MainPage: NextPage = () => {
  const router = useRouter();
  const [screenHeight, setScreenHeight] = useState<number>();
  const [userPageType, setUserPageType] = useRecoilState(pageType);
  const isLogin = useIsLoginStatus();
  const isDesktop = useResponsive(1100);
  const { user, error: userError } = useMyUser();
  const { data, error } = useMainDisplay();
  const wrapRef = React.useRef<HTMLDivElement>();
  React.useEffect(() => {
    // if (isLogin && user) {
    //   if (user.roles.some(item => item === UserRole.ROLE_ADMIN)) return;
    //   if (user.regCategory === regCategoryType.TYPE_TRANS_EDU) {
    //     router.push('/category');
    //   } else if (user.regCategory === regCategoryType.TYPE_TRAFFIC_SAFETY_EDU) {
    //     router.push('/traffic/category');
    //   }
    // }
  }, [isLogin, user]);

  React.useEffect(() => {
    const htmlTag = document.querySelector('html');
    const bodyTag = document.querySelector('body');
    const idTag = document.querySelector('#__next') as HTMLElement;
    const idTagFirseChildStyle = idTag.childNodes[0] as HTMLElement;
    const mainTag = document.querySelector('main');

    if (isDesktop) {
      htmlTag.style.height = '100%';
      bodyTag.style.height = '100%';
      idTag.style.height = '100%';
      idTagFirseChildStyle.style.height = '100%';
      mainTag.style.height = '100%';
    }
    if (!isDesktop) {
      htmlTag.style.height = '';
      bodyTag.style.height = '';
      idTag.style.height = '';
      idTagFirseChildStyle.style.height = '';
      mainTag.style.height = '';
    }

    return () => {
      htmlTag.style.height = '';
      bodyTag.style.height = '';
      idTag.style.height = '';
      idTagFirseChildStyle.style.height = '';
      mainTag.style.height = '';
    };
  }, [isDesktop]);

  if (!data) return <Spinner />;
  return (
    <WrapMainContainer
      ref={wrapRef}
      // style={{ height: screenHeight ? screenHeight : '' }}
    >
      <Head>
        <title>Main Page</title>
      </Head>
      <MainContainer>
        <ContentBox>
          <LogoBox>
            <Image
              src="/assets/images/cttsLogo.png"
              height={48}
              width={320}
              alt="Your Name"
              style={{ margin: 'auto' }}
            />
          </LogoBox>
          <SubTitle>
            <Box>충남 교통안전&nbsp;</Box>
            <Box color="#236cef">온라인교육센터</Box>
          </SubTitle>
          <NoticeContainer>
            {/* <NoticeTitle>
              <NoticeTitleTypography>{`충남교통연수원 알림판`}</NoticeTitleTypography>
            </NoticeTitle> */}
            <NoticeContent>
              <NoticeContentTypography>
                운수종사자의 경우 첫번째 "운수종사자교육"{' '}
                <span style={{ color: '#236cef', fontSize: '6px' }}>●</span>{' '}
                저상버스운전자의 경우 두번째 "저상버스운전자교육"{' '}
                <span style={{ color: '#236cef', fontSize: '6px' }}>●</span>{' '}
                도민교통안전교육자의 경우 세번째 "도민교통안전교육"을 이용해주시기
                바랍니다.
              </NoticeContentTypography>
            </NoticeContent>
          </NoticeContainer>
          <Box position="relative">
            <CategoryGrid
              container={true}
              spacing={0}
              columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 4 }}
              height={'100%'}
            >
              {data.map(item => {
                if (item.status === 1) {
                  const {
                    href,
                    color,
                    textColor,
                    displayWord,
                    imgPath,
                    pageType,
                    lineColor,
                    onClickCard,
                  } = LinkList.filter(
                    filter => filter.mainDisplayType === item.mainDisplayType
                  )[0];
                  return (
                    <MainCategoryCard sx={{ borderTop: `7px solid ${color}` }}>
                      <Box
                        sx={{ cursor: 'pointer' }}
                        onClick={async () => {
                          // setUserPageType(pageType);
                          await onClickCard();
                          router.push(href);
                        }}
                      >
                        <Box width="270px" borderRadius="8px 8px 0 0" overflow="hidden">
                          <Image
                            src={imgPath}
                            width="270"
                            height="184"
                            objectFit="fill"
                          />
                        </Box>
                        <CardInContainer>
                          <Box>
                            <Typography
                              component="span"
                              fontSize={25}
                              fontWeight="bold"
                              color={textColor}
                            >
                              {displayWord}
                            </Typography>
                            <Typography
                              component="span"
                              fontSize={25}
                              fontWeight="bold"
                              color="#000"
                            >
                              교육
                            </Typography>
                          </Box>
                          <Button color="neutral" sx={{ position: 'relative' }}>
                            <Typography fontWeight="bold">바로가기</Typography>
                            <Box
                              className="button-bot-line"
                              borderBottom={`2px solid ${lineColor}`}
                            />
                            <Box
                              className="button-right-line"
                              borderRight={` 2px solid ${lineColor}`}
                            />
                          </Button>
                        </CardInContainer>
                      </Box>
                    </MainCategoryCard>
                  );
                }
              })}
            </CategoryGrid>
          </Box>
        </ContentBox>
      </MainContainer>
      <FooterContainer sx={{ color: 'black' }}>
        <FooterWord>CTTI</FooterWord>
      </FooterContainer>
    </WrapMainContainer>
  );
};
// Wrap
const WrapMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .MuiButton-root.MuiButton-textNeutral:hover {
    background-color: #fff;
  }
  .MuiButton-root.MuiButton-textNeutral {
    width: 100%;
  }
`;
// MainContainer
const MainContainer = styled(Box)`
  height: 80%;
  /* min-height: 719px; */
  padding-top: 110px;
`;
const ContentBox = styled(Box)`
  width: 80%;
  margin: auto;
  @media (max-width: 1230px) {
    width: 95%;
  }
`;
const LogoBox = styled(Box)`
  width: fit-content;
  margin: auto;
`;

const SubTitle = styled(Box)`
  font-size: 19px;
  font-weight: 700;
  padding: 0.5rem 2.5rem;
  width: fit-content;
  margin: auto;
  margin-top: 36px;
  /* color: white; */
  background: #f7f7f7;
  border: 1px solid #236cef;
  border-radius: 4px;
  display: flex;
`;

// Notice
const NoticeContainer = styled(Box)`
  max-width: 930px;
  position: relative;
  height: 25%;
  margin: auto;
  margin-top: 40px;
  border-radius: 1rem;
  /* border: 2px solid #d7d7d7; */
  // 알림판 중앙 정렬
`;

const NoticeTitle = styled(Box)`
  position: absolute;
  width: 236px;
  height: 46px;
  right: 50%;
  color: black;
  background: #f9f9f9;
  box-sizing: border-box;
  border-radius: 1rem;
  border: 1px solid #d7d7d7;
  padding: 0.5rem 0.25rem;
  transform: translate(50%, -50%);
`;
const NoticeTitleTypography = styled(Typography)`
  width: 100%;
  font-size: 1.15rem;
  font-weight: bold;
  text-align: center;
`;
const NoticeContent = styled(Box)`
  height: 100%;
  margin: 2rem;
  text-align: center;
  border-radius: 0 30px 30px 0;
  background-color: white;
`;
// line-break
const NoticeContentTypography = styled(Typography)`
  /* padding-top: 30px; */
  word-break: keep-all;
  font-weight: bold;
  /* white-space: pre-wrap; */
`;

// Category Grid
const CategoryGrid = styled(Grid)`
  /* position: relative; */
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 13px;
`;
// Three section
const MainCategoryCard = styled(Container)`
  display: flex;
  width: 328px;
  height: 386px;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 20px;
  box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
  z-index: 11;
`;

const CardInContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 185px;
  height: 130px;
  border-radius: 0 0 30px 30px;
  background-color: white;
  margin: auto;
  padding-top: 2rem;

  .button-bot-line {
    position: absolute;
    left: 0;
    top: 2rem;
    width: 100%;
    /* border-bottom: 2px solid #dadada; */
  }
  .button-right-line {
    position: absolute;
    right: 9px;
    top: 0.5rem;
    height: 75%;
    /* border-right: 2px solid #dadada; */
    transform: rotate(-40deg);
  }
`;
const FooterContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 250px;
  background: #144aaa;
  overflow: hidden;
`;
const FooterWord = styled(Box)`
  position: absolute;
  width: 435px;
  height: 214px;
  right: 10%;
  bottom: 1rem;
  font-size: 13rem;
  font-weight: bold;
  color: #1a53ba;
  transform: rotate(-15deg);

  /* @media (max-width: 1230px) {
    right: 10rem;
  } */
  @media (max-width: 768px) {
    width: fit-content;
    height: fit-content;
    right: 2%;
    bottom: -10%;
    font-size: 8rem;
  }
`;
export default MainPage;
