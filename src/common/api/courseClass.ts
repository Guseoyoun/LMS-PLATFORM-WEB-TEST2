import { YN } from '@common/constant';
import { GET } from '@common/httpClient';
import useSWR, { SWRResponse } from 'swr';
import { CourseRes, ProductStatus } from './course';

export enum businessType {
  TYPE_ALL = 'TYPE_ALL',
  TYPE_PASSENGER = 'TYPE_PASSENGER',
  TYPE_CARGO = 'TYPE_CARGO',
}

export enum courseCategoryType {
  TYPE_SUP_COMMON = 'TYPE_SUP_COMMON', //보수일반
  TYPE_CONSTANT = 'TYPE_CONSTANT', //수시
  TYPE_NEW = 'TYPE_NEW', //신규
  TYPE_ILLEGAL = 'TYPE_ILLEGAL', //법령위반자
  TYPE_HANDICAPPED = 'TYPE_HANDICAPPED', //교통약자 이동편의 증진
  TYPE_DANGEROUS = 'TYPE_DANGEROUS', // 위험물진 운송차량 운전자
}

export enum courseSubCategoryType {
  BUS = 'BUS', //버스
  CHARTER_BUS = 'CHARTER_BUS', //전세버스
  SPECIAL_PASSENGER = 'SPECIAL_PASSENGER', //특수여객
  CORPORATE_TAXI = 'CORPORATE_TAXI', //법인택시
  GENERAL_CARGO = 'GENERAL_CARGO', //일반화물
  PRIVATE_TAXI = 'PRIVATE_TAXI', //개인택시
  INDIVIDUAL_CARGO = 'INDIVIDUAL_CARGO', //개별화물
  CONSIGNMENT = 'CONSIGNMENT', //용달화물
  SPECIAL_TRANSPORTATION = 'SPECIAL_TRANSPORTATION', //특별교통수단
  KNEELING_BUS = 'KNEELING_BUS', //저상버스
  DANGEROUS_GOODS = 'DANGEROUS_GOODS', //위험물
  DESIGNATED_WASTE = 'DESIGNATED_WASTE', //지정폐기물
  HAZARDOUS_CHEMICALS = 'HAZARDOUS_CHEMICALS', //유해화학물질
  HIGH_PRESSURE_GAS_FLAMMABLE = 'HIGH_PRESSURE_GAS_FLAMMABLE', //고압가스(가연성)
  HIGH_PRESSURE_GAS_TOXIC = 'HIGH_PRESSURE_GAS_TOXIC', //고압가스(독성)
}

export interface CourseClassRes {
  seq: number; //시퀀스
  course: CourseRes;
  year: number; //연도
  step: number; //기수
  requestStartDate: string; //신청일
  requestEndDate: string;
  studyStartDate: string; //시작일
  studyEndDate: string;
  enrolledPeopleCnt: number;
  limitPeople: number;
  eduStart: string;
  eduEnd: string;
  start: string;
  end: string;
  status: ProductStatus;
}

export interface CourseClassStepsRes {
  enrolledPeopleCnt: number;
  limitPeople: number;
  limitPeopleYn: YN;
  requestEndDate: string;
  requestStartDate: string;
  seq: number;
  step: number;
  studyEndDate: string;
  studyStartDate: string;
}

export function useCourseClass({ businessType, date }: { businessType: businessType; date: string }) {
  const { data, error, mutate } = useSWR<SWRResponse<CourseClassRes[]>>(['/course-class', { params: { businessType, date } }], GET);
  return {
    data: data?.data,
    error,
    mutate,
  };
}

export function useSingleCourseClass(classSeq: number) {
  const { data, error, mutate } = useSWR<SWRResponse<CourseClassRes>>(`/course-class/${classSeq}`, GET);
  return {
    data: data?.data,
    error,
    mutate,
  };
}

export function getCourseClassStep(courseCategoryType: courseCategoryType, courseSubCategoryType: courseSubCategoryType) {
  return GET<{ data: CourseClassStepsRes[] }>('/course-class/step', { params: { courseCategoryType, courseSubCategoryType } });
}