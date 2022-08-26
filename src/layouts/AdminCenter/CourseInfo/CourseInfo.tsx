import { Container, TableBody, TableHead, Typography, Button, Box } from '@mui/material';
import styles from '@styles/common.module.scss';
import { Table } from '@components/ui';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { userList, removeUser } from '@common/api/adm/user';
import styled from '@emotion/styled';
import { Spinner } from '@components/ui';
import dateFormat from 'dateformat';
import { UserModifyModal } from '@components/admin-center/UserModifyModal';
import { useSnackbar } from '@hooks/useSnackbar';
import { useDialog } from '@hooks/useDialog';
import { regCategoryType } from '@common/api/user';
import { useLearningInfo } from '@common/api/adm/learningInfo';

const userConfig = [
  { label: '실명가입', value: regCategoryType.TYPE_TRANS_EDU },
  { label: '핸드폰가입', value: regCategoryType.TYPE_TRAFFIC_SAFETY_EDU },
];


const headRows = [
  { name: '실명' },
  { name: '아이디' },
  { name: '과정명' },
  { name: '기수' },
  { name: '학습기간' },
  {name: '진도율'},
  { name: '수료여부' },
  { name: '상태' },
//   { name: '수료처리' },
];

export function CourseInfo() {
  const router = useRouter();
  const snackbar = useSnackbar();
  const dialog = useDialog();
  const [page, setPage] = useState(0);
  const { data, error, mutate } = useLearningInfo({ page });
  const [userSeq, setUserSeq] = useState<number | null>(null);
  const [openUserModifyModal, setopenUserModifyModal] = useState(false);
  console.log(data);

  const onClickRemoveUser = async (userSeq: number) => {
    try {
      const dialogConfirmed = await dialog({
        title: '유저 삭제하기',
        description: <div>
                       <div>삭제시 회원의 모든 정보가 영구적으로 삭제됩니다.</div>
                      <div>정말로 삭제하시겠습니까?</div>
                      <div style={{color:'red' , fontSize:'14px'}} >*복구가 불가능합니다.*</div>
                    </div>,
        confirmText: '삭제하기',
        cancelText: '취소',
      });
      if (dialogConfirmed) {
        await removeUser(userSeq);
        snackbar({ variant: 'success', message: '성공적으로 삭제되었습니다.' });
        await mutate();
      }
    } catch (e: any) {
      snackbar({ variant: 'error', message: e.data.message });
    }
  };

  const onClickForcedCompleteProgress = async (seq: number) => {
    setUserSeq(seq);
    setopenUserModifyModal(true);
  };

  useEffect(() => {
    const { page } = router.query;
    setPage(!isNaN(Number(page)) ? Number(page) : 0);
  }, [router.query]);

  const onChangePage = async (page: number) => {
    await router.push({
      pathname: router.pathname,
      query: {
        page,
      },
    });
  };

  const handleModalClose = async (isSubmit: boolean) => {
    if (openUserModifyModal) {
      setopenUserModifyModal(false);
      await mutate();
    }
  };

  if (error) return <div>Error</div>;
  if (!data) return <Spinner />;

  return (
    // <div>
    // <Box className={styles.globalContainer}>
    <Box>
      <UserTypo variant="h5">전체 수강생 학습현황</UserTypo>
      <Table
        pagination={true}
        totalNum={data.totalElements}
        page={data.number}
        onChangePage={onChangePage}
        size="small"
      >
        <TableHead>
          <UserTableRow>
            {headRows.map(({ name }: { name: string }) => (
              <UserTitleTableCell key={name} align="center">
                {name}
              </UserTitleTableCell>
            ))}
          </UserTableRow>
        </TableHead>

        <TableBody>
          {data.content.map((user) => (
            <TableRow key={user.username} hover>
              {/* <UserTableCell>{user.seq}</UserTableCell>
              <UserTableCell>{regCategoryType.TYPE_TRANS_EDU === user.regCategory ? '실명가입' : user.username}</UserTableCell> */}
              <UserTableCell>{user.name}</UserTableCell>
              <UserTableCell>{user.username || '실명계정'}</UserTableCell>
              {/* <UserTableCell>{dateFormat(user.birth, 'yyyy-mm-dd')}</UserTableCell> */}
              {/* <UserTableCell>{dateFormat(user.createdDtime, 'isoDate')}</UserTableCell> */}
              <UserTableCell>{user.courseName}</UserTableCell>
              <UserTableCell>{user.yearAndStep}</UserTableCell>
              <UserTableCell>{user.studyDate}</UserTableCell>
              {/* <UserTableCell>{user.loginFailedCount}</UserTableCell>
              <UserTableCell>{user.failedYn}</UserTableCell> */}
              <UserTableCell>{user.displayTotalProgress}</UserTableCell>
              <UserTableCell>{user.displayCompleteYn}</UserTableCell>
              <UserTableCell>{user.displayClassLearningStatus}</UserTableCell>
              {/* <UserTableCell>
                <Button
                  variant="text"
                  color="warning"
                  size="small"
                //   onClick={() => onClickRemoveUser(user.seq)}
                >
                  강제수료처리
                </Button></UserTableCell> */}
              {/* <UserTableCell>{dateFormat(user.lastPwUpdDtime, 'isoDate')}</UserTableCell> */}
              {/* <UserTableCell>{userConfig.filter((item)=>item.value === user.regCategory)[0].label} </UserTableCell> */}
              {/* <UserTableCell>
                <Button
                  variant="text"
                  color="neutral"
                  size="small"
                  onClick={() => onClickModifyUser(user.courseUserSeq)}
                >
                  수정
                </Button>
              </UserTableCell>

              <UserTableCell>
                <Button
                  variant="text"
                  color="warning"
                  size="small"
                //   onClick={() => onClickRemoveUser(user.seq)}
                >
                  삭제
                </Button>
              </UserTableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* <UserModifyModal
        open={openUserModifyModal}
        handleClose={isSubmit => handleModalClose(isSubmit)}
        userData={data.content.find(item => item.seq === userSeq)!}
        error={error}
      /> */}
    </Box>
    // {/* </div> */}
  );
}

const UserTypo = styled(Typography)`
  margin-bottom: 12px;
  font-weight: 700;
`;

const UserTableRow = styled(TableRow)`
  white-space: nowrap;
`;

const UserTitleTableCell = styled(TableCell)`
  height: 1px;
  position: relative;
  font-weight: bold;
`;

const UserTableCell = styled(TableCell)`
  white-space: nowrap;
  text-align: center;
  padding-top: 10px;
  margin: 0;
`;
