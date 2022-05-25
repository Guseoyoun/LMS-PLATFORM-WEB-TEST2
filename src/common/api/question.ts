import { deleteRequest, get, post, put } from '@common/httpClient';
import useSWR, { SWRResponse } from 'swr';
import { PaginationResult } from 'types/fetch';

export enum ExamType {
  QUESTION_OBJ = 'QUESTION_OBJ',
  QUESTION_SUBJ = 'QUESTION_SUBJ'
}

export enum ExamLevel {
  LEVEL_EASY = 'LEVEL_EASY',
  LEVEL_MEDIUM = 'LEVEL_MEDIUM',
  LEVEL_HARD = 'LEVEL_HARD'
}

export interface QuestionInput {
  answer?: string;
  chapter?: number;
  contentSeq?: number;
  description?: string;
  examType: ExamType;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  itemCnt?: number;
  level: ExamLevel;
  question?: string;
  status?: number;
}

export interface Question {
  answer: string;
  chapter: number;
  contentSeq: number;
  createdDtime: string;
  description: string;
  examType: ExamType;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  itemCnt: number;
  level: ExamLevel;
  modifiedDtime: string;
  question: string;
  seq: number;
  status: number;
}

export function useQuestionList({ contentId, page, elementCnt }: {
  contentId: number, page: number, elementCnt?: number
}) {
  const key = contentId
    ? [ `/question/adm`, { params: { contentSeq: contentId, page, elementCnt } } ]
    : null;

  const { data, error, mutate } = useSWR<SWRResponse<PaginationResult<Question[]>>>(key, get);

  return {
    questionPaginationResult: data?.data,
    questionPaginationResultError: error,
    mutate
  };
}

export function useQuestion(questionId: number | null) {
  const { data, error } = useSWR<SWRResponse<Question>>(questionId ? `/question/adm/${questionId}` : null, get);

  return {
    question: data?.data,
    questionError: error,
  };
}

export function uploadQuestion(questionInput: QuestionInput) {
  return post(`/question/adm`, questionInput);
}

export function modifyQuestion({ lessonId, formData }: {
  lessonId: number,
  formData: FormData
}) {
  return put(`/lesson/adm/modification/${lessonId}`, formData, {
    headers: {
      'content-type': 'multipart/form-data'
    }
  });
}

export async function removeQuestion(lessonId: number) {
  return await deleteRequest(`/lesson/adm/delete/${lessonId}`);
}
