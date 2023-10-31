import { EducationItemContentWrapper,EducationItemFileButton,EducationItemFileChip,EducationItemFilesItem,EducationItemHeaderDateText,EducationItemHeaderDateWrapper,EducationItemHeaderWrapper,EducationItemWrapper,EducationWrapper } from '@layouts/Traffic/LearningMaterial/Education/style';
import { useCallback, useState } from 'react';
import { MaterialType,useGetLearningMaterial } from '@common/api/learningMaterial';
import { TableHeader,TableItem,TableWrapper } from '@layouts/Traffic/LearningMaterial/style';
import { format } from 'date-fns';
import { TuiViewer } from '@components/common/TuiEditor';
import { downloadFile } from '@common/api/file';
import { Box, Typography } from '@mui/material';
import ArrowDown from 'public/assets/images/ic_arrow_down.svg';
import SaveIcon from '@mui/icons-material/Save';
import createDownloadLink from '@utils/createDownloadLink';
interface Props {
  materialType: MaterialType;
}

export default function EducationLayout({ materialType }: Props) {
  const { data } = useGetLearningMaterial(materialType, '');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const handleClickPost = (id: number) => setSelectedPost(id === selectedPost ? null : id);

  const onDownloadFile = useCallback(async (value) => {
    try {
      const blobData = await downloadFile(
        value.s3Files[0].seq
      );
      const url = window.URL.createObjectURL(
        new Blob([blobData])
      );
      createDownloadLink(url, `${value.s3Files[0].name}`)
    } catch (e) {
      console.log(e);
    }
  },[])

  return (
    <EducationWrapper>
      <TableWrapper>
        <TableHeader>
          <TableItem width="10%">번호</TableItem>
          <TableItem width="65%">제목</TableItem>
          <TableItem width="25%">등록일</TableItem>
        </TableHeader>
      </TableWrapper>
      {data &&
        data.data.map(value => (
          <EducationItemWrapper
            open={selectedPost === value.seq}
            key={value.title}
            onClick={() => handleClickPost(value.seq)}
          >
            <EducationItemHeaderWrapper>
              <TableItem width="10%">{value.seq}</TableItem>
              <TableItem width="65%" textAlign="left">
                {value.title}
              </TableItem>
              <TableItem width="25%">
                <EducationItemHeaderDateWrapper
                  open={selectedPost === value.seq}
                >
                  <EducationItemHeaderDateText>
                    {format(new Date(value.createdDtime), 'yyyy. MM. dd')}
                  </EducationItemHeaderDateText>
                  <ArrowDown />
                </EducationItemHeaderDateWrapper>
              </TableItem>
            </EducationItemHeaderWrapper>
            <EducationItemContentWrapper>
              <TuiViewer initialValue={value.content} />
              <EducationItemFilesItem>
                {value.s3Files[0]?.name &&
                  <EducationItemFileButton onClick={() => onDownloadFile(value)}>
                    <EducationItemFileChip
                      icon={<SaveIcon />}
                      label={<Typography> {value.s3Files[0]?.name}</Typography>}
                    />
                  </EducationItemFileButton>
                }
              </EducationItemFilesItem>
            </EducationItemContentWrapper>
          </EducationItemWrapper>
        ))}
    </EducationWrapper>
  );
}