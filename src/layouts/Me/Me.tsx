import * as React from 'react';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { Link } from '@components/common';
import s from './Me.module.scss';
import { grey } from '@mui/material/colors';
import { ContentCard, Spinner } from '@components/ui';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useMyUser } from '@common/api/user';
import { useEffect } from 'react';

const myInfoList = [
  { name: '정보 수정', href: '/me/edit' },
  { name: '증명서 발급', href: '/me/certificate' },
];

export function Me() {
  const { user, error } = useMyUser();
  console.log(user);


  useEffect(() => {
    console.log(user);
  }, []);

  if (error) return <div>error</div>;
  if (!user) return <Spinner />;
  return (
    <Container className={containerStyle}>
      <UserInfoSection>
        <Link href={`/me/edit`} className={s.myInfo}>
          <UserProfile>M</UserProfile>
          <div>
            <Typography>{user.name}</Typography>
            <Typography>{user.username}</Typography>
          </div>
        </Link>
      </UserInfoSection>
      <ContentBody>
        <SideBar>
          <SideBarContent>
            <SideBarTitle variant="h6">
              내 정보
            </SideBarTitle>
            {myInfoList.map(({ href, name }) => (
              <Link
                key={name}
                className={s.link}
                underline="hover"
                color={grey[900]}
                href={href}
              >
                <Typography variant="body2">{name}</Typography>
                <ArrowForwardIcon />
              </Link>
            ))}
          </SideBarContent>
        </SideBar>
        <LessonListContainer>
          <Typography variant="h6" sx={{ marginBottom: '16px' }}>
            내 강의
          </Typography>
          <Grid
            container
            rowSpacing={4}
            columnSpacing={2}
            columns={{ xs: 1, sm: 1, md: 2, lg: 2 }}>
            {user.learningCourses.map((res) => (
              <Grid item xs={1} sm={1} md={1} lg={1} key={res.seq}>
                <Link href={`/course/${res.seq}/lesson/${res.lessons[0].seq}`}>
                  <ContentCard  title={res.courseName} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </LessonListContainer>
      </ContentBody>
    </Container>
  );
}

const UserProfile = styled(Avatar)`
  width: 60px;
  height: 60px;
  margin-right: 36px;
`;

const UserInfoSection = styled(Box)`
  margin-bottom: 60px;
`;

const ContentBody = styled(Box)`
  display: flex;
`;

const SideBar = styled.aside`
  min-width: 320px;
  margin-right: 78px;
`;

const SideBarContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

const SideBarTitle = styled(Typography)`
  margin-bottom: 16px;
`;

const ArrowForwardIcon = styled(ArrowForwardIosIcon)`
  width: 15px;
  height: 15px;
  color: ${grey[500]};
`;

const LessonListContainer = styled(Box)`
  width: 100%;
`;

const containerStyle = css`
  margin-bottom: 32px;
  padding: 72px 0 48px;
`;
