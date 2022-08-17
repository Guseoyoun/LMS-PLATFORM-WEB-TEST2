import { YN } from '@common/constant';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Editor as EditorType } from '@toast-ui/react-editor';
import styled from '@emotion/styled';
import '@toast-ui/editor/dist/toastui-editor.css';
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  FormHelperText,
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
import {
  LearningMaterialInput,
  MaterialSubType,
  MaterialType,
} from '@common/api/learningMaterial';

interface Props {
  mode?: 'upload' | 'modify';
  learningMaterial?: LearningMaterialInput;
  onHandleSubmit: ({
    learningMaterialInput,
    files,
  }: {
    learningMaterialInput: LearningMaterialInput;
    files?: File[];
  }) => void;
}

interface FormType extends LearningMaterialInput {
  files: File[];
}

const defaultValues = {
  materialType: MaterialType.TYPE_BY_AGE,
  materialSubType: MaterialSubType.TYPE_CHILDREN,
  files: [],
};

export function LearningMaterialUploadForm({
  mode = 'upload',
  learningMaterial,
  onHandleSubmit,
}: Props) {
  const editorRef = useRef<EditorType>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [subType, setSubType] = useState<boolean>(true);
  const [openOrigin, setOpenOrigin] = useState<boolean>(false);
  // const [materialSubType, setMaterialSubType] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    resetField,
    setValue,
  } = useForm<FormType>({ defaultValues });

  useEffect(() => {
    if (mode === 'modify' && !!learningMaterial) {
      reset({ ...learningMaterial });
      setFileName(learningMaterial.s3Files[0]?.name || null);
    }
  }, [mode, learningMaterial, reset]);

  const onClickOpenSubType = async () => {
    setSubType(true);
    setOpenOrigin(false);
    setValue('materialSubType', MaterialSubType.TYPE_CHILDREN);
  };

  const onClickCloseSubType = async () => {
    setSubType(false);
    setOpenOrigin(false);
    // setMaterialSubType(null);
    // console.log('materialSubType : ', materialSubType);
    setValue('materialSubType', null);
  };

  const onClickCloseSubTypeAndOpenOrigin = async () => {
    setSubType(false);
    setOpenOrigin(true);
    // setMaterialSubType(null);
    // console.log('materialSubType : ', materialSubType);
    setValue('materialSubType', null);
  };

  const handleFileChange = (e: ChangeEvent) => {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    if (!files?.length) return null;
    setFileName(files[0].name);
  };

  const handleDeleteFile = async () => {
    resetField('files');
    setFileName(null);
  };

  const onSubmit: SubmitHandler<FormType> = async (
    { files, ...learningMaterial },
    event
  ) => {
    event?.preventDefault();

    if (!editorRef.current) return;
    const markdownContent = editorRef.current.getInstance().getMarkdown();
    const learningMaterialInput = {
      ...learningMaterial,
      content: markdownContent,
    };
    console.log('learningMaterialInput : ', learningMaterialInput);
    onHandleSubmit({ learningMaterialInput, files });
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
          <FormLabel focused={false}>학습자료 타입</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="materialType"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel
                  value={MaterialType.TYPE_BY_AGE}
                  control={<Radio />}
                  label="연령별 교수학습 지도안"
                  onClick={() => onClickOpenSubType()}
                />
                <FormControlLabel
                  value={MaterialType.TYPE_EDUCATIONAL}
                  control={<Radio />}
                  label="교육자료"
                  onClick={() => onClickCloseSubType()}
                />
                <FormControlLabel
                  value={MaterialType.TYPE_VIDEO}
                  control={<Radio />}
                  label="교육영상"
                  onClick={() => onClickCloseSubTypeAndOpenOrigin()}
                />
                <FormControlLabel
                  value={MaterialType.TYPE_OTHER_ORGAN}
                  control={<Radio />}
                  label="타기관자료모음"
                  onClick={() => onClickOpenSubType()}
                />
              </RadioGroup>
            )}
          />
        </FormControl>

        {subType ? (
          <FormControl className={pt20}>
            <FormLabel focused={false}>수강생 타입</FormLabel>
            <Controller
              rules={{ required: true }}
              control={control}
              name="materialSubType"
              render={({ field }) => (
                <RadioGroup row {...field}>
                  <FormControlLabel
                    value={MaterialSubType.TYPE_CHILDREN}
                    control={<Radio />}
                    label="어린이"
                  />
                  <FormControlLabel
                    value={MaterialSubType.TYPE_TEENAGER}
                    control={<Radio />}
                    label="청소년"
                  />
                  <FormControlLabel
                    value={MaterialSubType.TYPE_ELDERLY}
                    control={<Radio />}
                    label="어르신"
                  />
                  <FormControlLabel
                    value={MaterialSubType.TYPE_SELF_DRIVING}
                    control={<Radio />}
                    label="자가운전자"
                  />
                </RadioGroup>
              )}
            />
          </FormControl>
        ) : null}

        <InputContainer>
          <FormControl className={textField}>
            <TextField
              {...register('title', { required: '학습자료 제목을 입력해주세요.' })}
              size="small"
              label="학습자료 제목"
              variant="outlined"
            />
            <ErrorMessage errors={errors} name="subject" as={<FormHelperText error />} />
          </FormControl>
        </InputContainer>

        {openOrigin ? (
          <FormControl className={textField}>
            <TextField
              {...register('origin', { required: 'URL을 입력해주세요.' })}
              size="small"
              label="URL"
              variant="outlined"
            />
            <ErrorMessage errors={errors} name="subject" as={<FormHelperText error />} />
          </FormControl>
        ) : null}

        <TuiEditor
          initialValue={(learningMaterial && learningMaterial.content) || ' '}
          previewStyle="vertical"
          height="500px"
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
            {}
          </FileUploader>
          {fileName ? (
            <Chip
              sx={{ mt: '8px' }}
              icon={<OndemandVideoOutlinedIcon />}
              label={fileName}
              onDelete={handleDeleteFile}
            />
          ) : null}
        </div>

        {/* <FormControl className={pt20}>
          <FormLabel focused={false}>공개여부</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="status"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value={YN.YES} control={<Radio />} label="공개Y" />
                <FormControlLabel value={YN.NO} control={<Radio />} label="공개N" />
              </RadioGroup>
            )}
          />
        </FormControl> */}

        <SubmitBtn variant="contained" type="submit">
          {mode === 'upload' ? '업로드하기' : '수정하기'}
        </SubmitBtn>
      </Box>
    </Container>
  );
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
