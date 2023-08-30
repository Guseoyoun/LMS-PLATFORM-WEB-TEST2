
import styled from '@emotion/styled';
import { Backdrop,Box,Button,InputBase,Radio,TextField,Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { CompleteType, StatusType } from '@common/api/adm/learningInfo';
import { getExcelCourseLearning } from '@common/api/adm/excel';
import { useState } from 'react';
import { useSnackbar } from '@hooks/useSnackbar';
import { Spinner } from '@components/ui';

interface Props {
  //   searchInputRef: React.MutableRefObject<HTMLInputElement>;
  completeType: CompleteType | null;
  statusType: StatusType | null;
  carNumber: string;
  handleSearch: (e: React.FormEvent, isReload?: boolean) => Promise<void>;
  onChangeCompleteType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeStatusType: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCarNumber: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const HeadRowsCenter = React.forwardRef(function (
  {
    completeType,
    statusType,
    carNumber,
    handleSearch,
    onChangeCompleteType,
    onChangeStatusType,
    onChangeCarNumber,
  }: Props,
  searchInputRef
) {
  const snackbar = useSnackbar();
  const [loading, setLoading] = useState(false);

  const onClickExcelDownload = async () => {
    const a = document.createElement('a');
    setLoading(true);
    try {
      const data = await getExcelCourseLearning();
      const excel = new Blob([data]);
      a.href = URL.createObjectURL(excel);
      a.download = '충남_관리자_학습현황_모든데이터.xlsx';
      a.click();
      a.remove();
      URL.revokeObjectURL(a.href);
      snackbar({ variant: 'success', message: '다운로드 완료' });
      setLoading(false);
    } catch (e) {
      snackbar({ variant: 'error', message: e.data.message });
      setLoading(false);
    }
  };

  return (
    <HeadRows>
      <Box>
        <Box>수료여부</Box>
        <Radio
          value={null}
          onChange={onChangeCompleteType}
          checked={completeType === null}
        />
        <span>전체</span>
        <Radio
          value={CompleteType.TYPE_COMPLETE}
          onChange={onChangeCompleteType}
          checked={completeType === CompleteType.TYPE_COMPLETE}
        />
        <span>수료</span>
        <Radio
          value={CompleteType.TYPE_INCOMPLETE}
          onChange={onChangeCompleteType}
          checked={completeType === CompleteType.TYPE_INCOMPLETE}
        />
        <span>미수료</span>
      </Box>

      <Box>
        <Box>퇴교여부(상태)</Box>
        <Radio value={null} onChange={onChangeStatusType} checked={statusType === null} />
        <span>전체</span>
        <Radio
          value={StatusType.TYPE_NORMAL}
          onChange={onChangeStatusType}
          checked={statusType === StatusType.TYPE_NORMAL}
        />
        <span>정상</span>
        <Radio
          value={StatusType.TYPE_OUT}
          onChange={onChangeStatusType}
          checked={statusType === StatusType.TYPE_OUT}
        />
        <span>퇴교</span>
      </Box>

      <Typography>차량번호</Typography>
      <TextField
        onChange={onChangeCarNumber}
        value={carNumber}
        sx={{ mb: '12px' }}
        fullWidth
      />

      
      <SearchContainer>
        <SearchInput inputRef={searchInputRef} placeholder="이름 혹은 아이디 검색" />
      </SearchContainer>

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
    </HeadRows>
  );
});

HeadRowsCenter.displayName = 'HeadRowsCenter';

const HeadRows = styled(Box)`
  width: 33.3%;
`;
const SearchContainer = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 6px 0 6px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: 1px solid ${grey[300]};
`;

const SearchInput = styled(InputBase)`
  width: 100%;
`;


