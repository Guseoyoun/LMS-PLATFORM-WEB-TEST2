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
  learningMaterialRemove,
  MaterialSubType,
  MaterialType,
} from '@common/api/learningMaterial';
import { useSnackbar } from '@hooks/useSnackbar';
import { useDialog } from '@hooks/useDialog';
import router from 'next/router';
import { ProductStatus } from '@common/api/course';

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
  status: ProductStatus.APPROVE,
  files: [],
};

export function LearningMaterialUploadForm({
  mode = 'upload',
  learningMaterial,
  onHandleSubmit,
}: Props) {
  const editorRef = useRef<EditorType>(null);
  const [fileName, setFileName] = useState<string[] | null>(null);
  const [subType, setSubType] = useState<boolean>(true);
  const [openOrigin, setOpenOrigin] = useState<boolean>(false);
  const [openContent , setOpenContent] = useState<Boolean>(true);
  const [isEducationRoute , setIsEducationRoute] = useState<boolean>(false)
  const snackbar = useSnackbar();
  const dialog = useDialog();
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
      // setSubType(false);
      if (learningMaterial.materialSubType === null) {
        setSubType(false);
        if (learningMaterial.materialType === 'TYPE_VIDEO') {
          setOpenOrigin(true);
        }
      }
    }
  }, [mode, learningMaterial, reset]);

  const onClickOpenSubType = async (e:React.MouseEvent<HTMLLabelElement>) => {
    setSubType(true); // 서브타입 오픈여부
    setOpenOrigin(false); // url 오픈여부
    setOpenContent(true) // tui 오픈여부
    setIsEducationRoute(false) //다중 파일 업로드 사용여부
    setValue('materialSubType', MaterialSubType.TYPE_CHILDREN);
  };

  const onClickCloseSubType = async (e:React.MouseEvent<HTMLLabelElement>) => {
    setSubType(false);
    setOpenOrigin(false);
    setOpenContent(false)
    setIsEducationRoute(true)
    setValue('materialSubType', null);
  };

  const onClickCloseSubTypeAndOpenOrigin = async (e:React.MouseEvent<HTMLLabelElement>) => {
    setSubType(false);
    setOpenOrigin(true);
    setOpenContent(false) // tui 오픈여부
    setIsEducationRoute(true) //다중 파일 업로드 사용여부
    setValue('materialSubType', null);
  };

  const handleFileChange = (e: ChangeEvent) => {
    e.preventDefault();
    const files = (e.target as HTMLInputElement).files;
    console.log(files)
    if (!files?.length) return null;
    const fileNames = Array.from(files).map(r=>r.name)
    setFileName(fileNames)
    // setFileName(files[0].name);
    if(!isEducationRoute) return
  };

  const handleDeleteFile = async () => {
    resetField('files');
    setFileName(null);
  };

  // 삭제
  const onClickRemoveLM = async (seq: number) => {
    try {
      const dialogConfirmed = await dialog({
        title: '학습자료 삭제하기',
        description: '정말로 삭제하시겠습니까?',
        confirmText: '삭제하기',
        cancelText: '취소',
      });
      if (dialogConfirmed) {
        await learningMaterialRemove(seq);
        snackbar({ variant: 'success', message: '성공적으로 삭제되었습니다.' });
        router.push(`/admin-center/learning-material`);
        // await mutate();
      }
    } catch (e: any) {
      snackbar({ variant: 'error', message: e.data.message });
    }
  };

  const onSubmit: SubmitHandler<FormType> = async (
    { files, ...learningMaterial },
    event
  ) => {
    event?.preventDefault();

    console.log(files)
    return ;

    if (!editorRef.current) return;
    const markdownContent = editorRef.current.getInstance().getMarkdown();
    const learningMaterialInput = {
      ...learningMaterial,
      content: markdownContent,
    };
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
                  onClick={(e) => onClickOpenSubType(e)}
                />
                <FormControlLabel
                  value={MaterialType.TYPE_EDUCATIONAL}
                  control={<Radio />}
                  label="교육자료"
                  onClick={(e) => onClickCloseSubType(e)}
                />
                <FormControlLabel
                  value={MaterialType.TYPE_VIDEO}
                  control={<Radio />}
                  label="교육영상"
                  onClick={(e) => onClickCloseSubTypeAndOpenOrigin(e)}
                />
                <FormControlLabel
                  value={MaterialType.TYPE_OTHER_ORGAN}
                  control={<Radio />}
                  label="타기관자료모음"
                  onClick={(e) => onClickOpenSubType(e)}
                />
              </RadioGroup>
            )}
          />
        </FormControl>

        {/* {mode === 'upload' && subType ? ( */}
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

        {openContent && <TuiEditor
          initialValue={(learningMaterial && learningMaterial.content) || ' '}
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={editorRef}
        />}

        <div className="board-uploader">
          <FileUploader
            register={register}
            regName="files"
            onFileChange={handleFileChange}
          >
            {}
          </FileUploader>
          {fileName ? 
          // (
          //   <Chip
          //     sx={{ mt: '8px' }}
          //     icon={<OndemandVideoOutlinedIcon />}
          //     label={fileName}
          //     onDelete={handleDeleteFile}
          //   />
          // ) 
          fileName.map(r=>
            <Chip
            sx={{ mt: '8px' }}
            icon={<OndemandVideoOutlinedIcon />}
            label={r}
            onDelete={handleDeleteFile}
            />
            )
          : null}
        </div>

        <FormControl className={pt20}>
          <FormLabel focused={false}>상태</FormLabel>
          <Controller
            rules={{ required: true }}
            control={control}
            name="status"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel
                  value={ProductStatus.APPROVE}
                  control={<Radio />}
                  label="정상"
                />
                <FormControlLabel
                  value={ProductStatus.REJECT}
                  control={<Radio />}
                  label="중지"
                />{' '}
              </RadioGroup>
            )}
          />
        </FormControl>

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
        <DeleteBtn
          color="warning"
          variant="contained"
          onClick={() => onClickRemoveLM(learningMaterial.seq)}
        >
          삭제
        </DeleteBtn>
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
  /* margin: 30px 30px 30px 0; */
  margin-top: 10px;
  margin-bottom: 10px;
`;

const DeleteBtn = styled(Button)`
  /* background-color: #dd0000; */
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
