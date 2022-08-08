import { CategoryBoardInput } from "@common/api/categoryBoard"
import { YN } from "@common/constant";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor as EditorType } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import '@toast-ui/editor/dist/toastui-editor.css';
import {
  Box,
  Button, Chip, FormControl,
  FormControlLabel, FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { TuiEditor } from '@components/common/TuiEditor';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { css } from '@emotion/css';
import { ErrorMessage } from '@hookform/error-message';
import { FileUploader } from '@components/ui/FileUploader';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';


interface Props {
  mode? : 'upload' | 'modify',
  category?: CategoryBoardInput,
  courseSeq?: number;
  onHandleSubmit: ({ categoryBoardInput, files, categorySeq, isFileDelete , courseSeq } :{
    categoryBoardInput: CategoryBoardInput;
    files: File[];
    isFileDelete: boolean;
    categorySeq?: number;
    courseSeq?: number;
  }) => void
}

interface FormType extends CategoryBoardInput {
  files: File[];
}

const defaultValues = {
  boardType: "TYPE_NOTICE",
    // TYPE_NOTICE -> 공지사항
    // TYPE_FAQ -> 자주묻는질문
    // TYPE_GUIDE_AUTH -> 회원가입 및 로그인
    // TYPE_GUIDE_EDU_REGI -> 교육신청방법
    // TYPE_GUIDE_EDU_LEARNING -> 학습방법
  noticeYn : YN.YES,
  publicYn : YN.YES,
  files: [],
};

export function CategoryUploadForm({ mode = 'upload', category, onHandleSubmit }: Props) {
  const editorRef = useRef<EditorType>(null);
  const [ isFileDelete, setIsFileDelete ] = useState(false);
  const [ fileName, setFileName ] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    resetField
  } = useForm<FormType>({ defaultValues });

  useEffect(() => {
    if (mode === 'modify' && !!category) {
      reset({ ...category });
      setFileName(category.s3Files[0]?.name || null);
    }
  }, [ mode, category, reset ]);

  const handleFileChange = (e: ChangeEvent) => {
    e.preventDefault();

    const files = (e.target as HTMLInputElement).files;
    if (!files?.length) return null;
    setFileName(files[0].name);
    setIsFileDelete(false);
  };

  const handleDeleteFile = () => {
    resetField('files');
    setFileName(null);
    setIsFileDelete(true);
  };

  const onSubmit: SubmitHandler<FormType> = async ({files, ...category }, event) => {
    event?.preventDefault();

    if (!editorRef.current) return;
    const markdownContent = editorRef.current.getInstance().getMarkdown();
    const categoryBoardInput = {
      ...category,
      content: markdownContent,
    };
    onHandleSubmit({ categoryBoardInput, files, isFileDelete });
  };

  
  return (

    <Container>
      <Box
        component="form"
        encType="multipart/form-data"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={boxStyles}
      >

        <FormControl className={pt20}>
          <FormLabel focused={false}>게시판타입</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="boardType"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value={"TYPE_NOTICE"} control={<Radio />} label="공지사항" />
                <FormControlLabel value={"TYPE_FAQ"} control={<Radio />} label="자주묻는질문" />
                <FormControlLabel value={"TYPE_GUIDE_AUTH"} control={<Radio />} label="회원가입 및 로그인" />
                <FormControlLabel value={"TYPE_GUIDE_EDU_REGI"} control={<Radio />} label="교육신청방법" />
                <FormControlLabel value={"TYPE_GUIDE_EDU_LEARNING"} control={<Radio />} label="학습방법" />
                {/* <FormControlLabel value={"TYPE_REVIEW"} control={<Radio />} label="문의 내역" /> */}
                {/* <FormControlLabel value={YN.NO} control={<Radio />} label="공개N" /> */}
              </RadioGroup>
            )}
          />
        </FormControl>

        <InputContainer>
          <FormControl className={textField}>
            <TextField
              {...register('subject', { required: '과정 명을 입력해주세요.' })}
              size="small"
              label="공지사항 제목"
              variant="outlined"
            />
            <ErrorMessage errors={errors} name="subject" as={<FormHelperText error />} />
          </FormControl>

        </InputContainer>

        <TuiEditor
          initialValue={(category && category.content) || ' '}
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
        />

        <div className="board-uploader">
          <FileUploader
            register={register}
            regName="files"
            onFileChange={handleFileChange}
          >
          </FileUploader>
          {fileName
            ? <Chip
              sx={{ mt: '8px' }}
              icon={<OndemandVideoOutlinedIcon />}
              label={fileName}
              onDelete={handleDeleteFile} />
            : null
          }
        </div>

        <FormControl className={pt20}>
          <FormLabel focused={false}>공지여부</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="noticeYn"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value={YN.YES} control={<Radio />} label="공지Y" />
                <FormControlLabel value={YN.NO} control={<Radio />} label="공지N" /> 
              </RadioGroup>
            )}
          />
        </FormControl>

        <FormControl className={pt20}>
          <FormLabel focused={false}>공개여부</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="publicYn"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value={YN.YES} control={<Radio />} label="공개Y" />
                <FormControlLabel value={YN.NO} control={<Radio />} label="공개N" />
              </RadioGroup>
            )}
          />
        </FormControl>
      
        <SubmitBtn variant="contained" type="submit">
          {mode === 'upload' ? '업로드하기' : '수정하기'}
        </SubmitBtn>
      </Box>
      
    </Container>
    
  )

}


const Container = styled.div`
  margin-bottom: 8px;

  .form-control {
    margin: 12px auto 12px 0;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  .thumbnail-uploader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 36px;

    .subtitle {
      margin-bottom: 8px;
    }
  }
`;

const SubmitBtn = styled(Button)`
  margin: 30px 30px 30px 0;
`;

const textField = css`
  margin-bottom: 20px;
`;

const boxStyles = css`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;

const pt20 = css`
  padding-top: 20px;
`;

