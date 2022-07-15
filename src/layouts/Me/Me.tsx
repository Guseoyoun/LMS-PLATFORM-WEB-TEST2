import * as React from "react";
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Link } from "@components/common";
import s from "./Me.module.scss";
import { grey } from "@mui/material/colors";
import { ContentCard, Spinner, Tabs } from "@components/ui";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { useMyUser } from "@common/api/user";
import { useEffect } from "react";
import dateFormat from "dateformat";

const myInfoList = [
  // { label: "내 강의", value: "myCourse" },
  // { label: "정보 수정", value: "editInfo" },
  // { label: "증명서 발급", value: "certificate" },
  { label: "학습중인 과정", value: "studyCourse" },
  { label: "학습종료 과정", value: "endStudyCourse" },
  { label: "증명서 발급", value: "certificate" },
];

export function Me() {
  const { user, error } = useMyUser();
  console.log(user);
  const [value, setValue] = React.useState(myInfoList[0].value);

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
        <Link className={s.link} underline="hover" color={grey[900]} href={`/me/edit`}>
          <Typography variant="body2">정보수정</Typography>
          <ArrowForwardIcon />
        </Link>
      </UserInfoSection>
      <ContentBody>
        <SideBar>
          <SideBarContent>
            <SideBarTitle variant="h6">내 정보</SideBarTitle>

            <Tabs
              tabsConfig={myInfoList}
              orientation="vertical"
              variant="fullWidth"
              rendering={false}
              onChange={(newValue: string) => setValue(newValue)}
              value={value}
            />
            {/* {myInfoList.map(({ href, name }) => (
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
            ))} */}
          </SideBarContent>
        </SideBar>
        <LessonListContainer>
          <Typography variant="h6" sx={{ marginBottom: "16px" }}>
            {value}
          </Typography>
          <Grid container rowSpacing={4} columnSpacing={2} columns={{ xs: 1, sm: 1, md: 2, lg: 2 }}>
            {user.learningCourses.map((res) => {
              const period = new Date(res.createdDtime).setDate(res.lessonTerm);
              const Days = Math.floor((period - new Date(res.createdDtime).getTime()) / (1000 * 60 * 60 * 24));
              return (
                <Grid item xs={1} sm={1} md={1} lg={1} key={res.seq} sx={{ display: value === myInfoList[0].value ? "display" : "none" }}>
                  <Link href={`/course/${res.seq}/lesson/${res.lessons[0].seq}`}>
                    <ContentCard
                      title={res.courseName}
                      content1={res.courseSubName}
                      content2={`${Days < 10 ? `0${Days}` : Days}일 남았습니다.`}
                    />
                  </Link>
                </Grid>
              );
            })}
            {user.learningCourses.map((res) => (
              <Grid
                item
                xs={1}
                sm={1}
                md={1}
                lg={1}
                key={res.seq}
                sx={{
                  display:
                    value === myInfoList[2].value && res.lessonTime <= res.lessons.reduce((prev, curr) => prev + curr.completeTime, 0)
                      ? "display"
                      : "none",
                }}
              >
                <Link href={`/course/${res.seq}/lesson/${res.seq}`}>
                  <ContentCard title={res.courseName} />
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
  display: flex;
  flex-direction: column;
  width: 320px;
  margin-bottom: 30px;
`;

const ContentBody = styled(Box)`
  display: flex;
`;

const SideBar = styled.aside`
  min-width: 320px;
  margin-right: 78px;
  .MuiTabs-indicator {
    display: none;
  }
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
