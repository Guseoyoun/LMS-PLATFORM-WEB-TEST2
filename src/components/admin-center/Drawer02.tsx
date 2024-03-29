import * as React from 'react';
import Box from '@mui/material/Box';
import {
  Button,
  Divider,
  Drawer as MuiDrawer,
  MenuItem,
  Typography,
} from '@mui/material';
import List from '@mui/material/List';

import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ViewCarouselOutlinedIcon from '@mui/icons-material/ViewCarouselOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ViewComfyAltOutlinedIcon from '@mui/icons-material/ViewComfyAltOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { ReactNode } from 'react';
import { Link } from '@components/common';
import { grey } from '@mui/material/colors';
import { useRouter } from 'next/router';
import { Accordion02 } from '@components/ui';
import { logout } from '@common/api';
import Logo from 'public/assets/svgs/logo.svg';
import Image from 'next/image';

const drawerWidth = 290;


// 미사용 컴포넌트. 대신 src/components/admin-center/Drawer.tsx 사용
// 폴더 구조 이해하면 삭제.

export function Drawer02({ children }: { children: ReactNode }) {
  const router = useRouter();

  const onClickToMain = () => {
    router.push('/');
  };
  const onClickLogout = async () => {
    await logout();
    router.push('/admin-center/signin');
  };

  const accordionList = [
    {
      name: '도민관리',
      icon: <PeopleOutlineIcon sx={{ mr: '32px', color: grey[900] }} />,
      children: [
        {
          name: '도민회원관리',
          icon: (
            <QuestionAnswerOutlinedIcon sx={{ mr: '32px', color: grey[900] }} />
          ),
          grandChildren: [
            {
              name: '회원목록1',
              href: '/admin-center/user',
              isActive: router.pathname === '/admin-center/user',
              // icon: <ListAltIcon sx={{ mr: '32px', color: grey[900] }} />,
            },
          ],
        },
      ],
    },
    {
      name: '운수/저상관리',
      children: [
        {
          name: '운수/저상회원관리',
          icon: (
            <QuestionAnswerOutlinedIcon sx={{ mr: '32px', color: grey[900] }} />
          ),
          grandChildren: [
            {
              name: '회원목록2',
              href: '/admin-center/user',
              isActive: router.pathname === '/admin-center/user',
              icon: <ListAltIcon sx={{ mr: '32px', color: grey[900] }} />,
            },
          ],
        },
      ],
      icon: <PeopleOutlineIcon sx={{ mr: '32px', color: grey[900] }} />,
    },
    // {
    //   name: '게시판관리(운수/저상)',
    //   children: [
    //     {
    //       name: '게시판 목록',
    //       href: '/admin-center/category',
    //       isActive: router.pathname === '/admin-center/category',
    //     },
    //     {
    //       name: '게시판 등록',
    //       href: '/admin-center/category/upload',
    //       isActive: router.pathname === '/admin-center/category/upload',
    //     },
    //   ],
    //   icon: <ListAltIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '게시판관리(도민)',
    //   children: [
    //     {
    //       name: '게시판 목록',
    //       href: '/admin-center/category-traffic',
    //       isActive: router.pathname === '/admin-center/category-traffic',
    //     },
    //     {
    //       name: '게시판 등록',
    //       href: '/admin-center/category-traffic/upload',
    //       isActive: router.pathname === '/admin-center/category-traffic/upload',
    //     },
    //   ],
    //   icon: <ListAltIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '1대1문의관리',
    //   children: [
    //     {
    //       name: '1대1문의 목록',
    //       href: '/admin-center/qna',
    //       isActive: router.pathname === '/admin-center/qna',
    //     },
    //   ],
    //   icon: (
    //     <QuestionAnswerOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />
    //   ),
    // },
    // {
    //   name: '학습자료관리',
    //   children: [
    //     {
    //       name: '학습자료 목록',
    //       href: '/admin-center/learning-material',
    //       isActive: router.pathname === '/admin-center/learning-material',
    //     },
    //     {
    //       name: '학습자료 등록',
    //       href: '/admin-center/learning-material/upload',
    //       isActive:
    //         router.pathname === '/admin-center/learning-material/upload',
    //     },
    //   ],
    //   icon: (
    //     <ChromeReaderModeOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />
    //   ),
    // },
    // {
    //   name: '과정관리(운수/저상)',
    //   children: [
    //     {
    //       name: '과정 목록',
    //       href: '/admin-center/course',
    //       isActive: router.pathname === '/admin-center/course',
    //     },
    //     {
    //       name: '과정 등록',
    //       href: '/admin-center/course/upload',
    //       isActive: router.pathname === '/admin-center/course/upload',
    //     },
    //   ],
    //   icon: <SchoolOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '과정관리(도민)',
    //   children: [
    //     {
    //       name: '과정 목록',
    //       href: '/admin-center/course-traffic',
    //       isActive: router.pathname === '/admin-center/course-traffic',
    //     },
    //     {
    //       name: '과정 등록',
    //       href: '/admin-center/course-traffic/upload',
    //       isActive: router.pathname === '/admin-center/course-traffic/upload',
    //     },
    //   ],
    //   icon: <SchoolOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '콘텐츠관리',
    //   children: [
    //     {
    //       name: '콘텐츠 목록',
    //       href: '/admin-center/content',
    //       isActive: router.pathname === '/admin-center/content',
    //     },
    //     {
    //       name: '콘텐츠 등록',
    //       href: '/admin-center/content/upload',
    //       isActive: router.pathname === '/admin-center/content/upload',
    //     },
    //   ],
    //   icon: <SourceOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },

    // {
    //   name: '일정관리',
    //   children: [
    //     {
    //       name: '일정 목록',
    //       href: '/admin-center/calendar',
    //       isActive: router.pathname === '/admin-center/calendar',
    //     },
    //     {
    //       name: '일정 등록',
    //       href: '/admin-center/calendar/upload',
    //       isActive: router.pathname === '/admin-center/calendar/upload',
    //     },
    //   ],
    //   icon: <CalendarMonthIcon sx={{ mr: '32px', color: grey[900] }} />,
    // },

    // {
    //   name: '배너관리',
    //   children: [
    //     {
    //       name: '배너 목록',
    //       href: '/admin-center/banner',
    //       isActive: router.pathname === '/admin-center/banner',
    //     },
    //     {
    //       name: '배너 등록',
    //       href: '/admin-center/banner/upload',
    //       isActive: router.pathname === '/admin-center/banner/upload',
    //     },
    //   ],
    //   icon: <ViewCarouselOutlinedIcon sx={{ mr: '32px', color: grey[900] }} />,
    // },
    // {
    //   name: '사이트 관리',
    //   children: [
    //     {
    //       name: '사이트 관리 목록',
    //       href: '/admin-center/main-display',
    //       isActive: router.pathname === '/admin-center/main-display',
    //     },
    //   ],
    //   icon: <ViewComfyAltOutlinedIcon sx={{ mr: '32px', color: grey[900] }} />,
    // },
    // {
    //   name: '설문관리',
    //   children: [
    //     {
    //       name: '설문 목록',
    //       href: '/admin-center/survey',
    //       isActive: router.pathname === '/admin-center/survey',
    //     },
    //     {
    //       name: '설문 등록',
    //       href: '/admin-center/survey/upload',
    //       isActive: router.pathname === '/admin-center/survey/upload',
    //     },
    //   ],
    //   icon: <SourceOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '학습현황(운수/저상)',
    //   children: [
    //     {
    //       name: '전체 수강생 학습현황',
    //       href: '/admin-center/course-info',
    //       isActive: router.pathname === '/admin-center/course-info',
    //     },
    //   ],
    //   icon: <MenuBookIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '학습현황(도민)',
    //   children: [
    //     {
    //       name: '전체 수강생 학습현황',
    //       href: '/admin-center/course-info-traffic',
    //       isActive: router.pathname === '/admin-center/course-info-traffic',
    //     },
    //   ],
    //   icon: <MenuBookIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '통계',
    //   children: [
    //     {
    //       name: '설문통계',
    //       // href: '/admin-center/statics-survey',
    //       href: '/admin-center/statistics/survey',
    //       isActive: router.pathname === '',
    //     },
    //     // {
    //     //   name: 'child2',
    //     //   href: '/admin-center/statics',
    //     //   isActive: router.pathname === '',
    //     // },
    //   ],
    //   icon: <AnalyticsOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
    // {
    //   name: '설정',
    //   children: [
    //     {
    //       name: 'child1',
    //       href: '/admin-center/setting',
    //       isActive: router.pathname === '',
    //     },
    //     {
    //       name: 'child2',
    //       href: '/admin-center/setting',
    //       isActive: router.pathname === '',
    //     },
    //   ],
    //   icon: <SettingsOutlinedIcon sx={{ mr: '32px', color: grey[700] }} />,
    // },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <MuiDrawer
        variant='permanent'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            borderRight: '1px solid rgb(0 0 0 / 12%)',
          },
          position: 'relative',
        }}
      >
        <Box
          sx={{
            overflow: 'auto',
            position: 'relative',
            // paddingTop: '28px',
          }}
        >
          <List>
            <Box display='flex' gap='8px' flexDirection='column' padding='1rem'>
              {/* <Logo /> */}
              <Image
                src='/assets/images/ctsoecLogo.png'
                height={40}
                width={230}
                alt='logo'
              />
              <Typography fontWeight='bold' fontSize='18px' textAlign='center'>
                학습관리센터
              </Typography>
              <Divider sx={{ marginTop: '12px', marginBottom: '12px' }} />
              <Button variant='contained' onClick={onClickToMain}>
                메인사이트로
              </Button>
              <Button variant='contained' onClick={onClickLogout}>
                로그아웃
              </Button>
            </Box>
            {/* <Link href="/admin-center/dashboard" color={router.pathname === '/admin-center/dashboard' ? grey[900] : grey[800]}>
              <ListItem
                button
                sx={{
                  backgroundColor: `${router.pathname === '/admin-center/dashboard' ? grey[50] : 'inherit'}`,
                }}
              >
                <ListItemIcon>
                  <DashboardOutlinedIcon sx={{ color: grey[700] }} />
                </ListItemIcon>
                <ListItemText primary="대시보드" />
              </ListItem>
            </Link> */}
            <Accordion02 accordionList={accordionList} />
          </List>
        </Box>
      </MuiDrawer>
      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
