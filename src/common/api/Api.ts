/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AccessTokenRefreshRequestDto {
  accessToken?: string;
  refreshToken?: string;
}

export interface BannerResponseDto {
  /** 배너 설명 */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 게시기간 종료일
   * @format date-time
   */
  endDate?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** s3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 게시기간 시작일
   * @format date-time
   */
  startDate?: string;

  /**
   * 사용 여부
   * @format int32
   */
  status?: number;

  /** 배너 제목 */
  title?: string;

  /** 이동 URL */
  toUrl?: string;
}

export interface BannerSaveRequestDto {
  /** 배너 내용 */
  content?: string;

  /**
   * 게시기간 종료일 (yyyy-MM-dd)
   * @format date
   */
  endDate?: string;

  /**
   * 게시기간 시작일 (yyyy-MM-dd)
   * @format date
   */
  startDate?: string;

  /**
   * 사용 여부
   * @format int32
   */
  status?: 1 | -1;

  /** 배너 제목 */
  title?: string;

  /** 이동 URL */
  toUrl?: string;
}

export interface BannerUpdateRequestDto {
  /** 배너 내용 */
  content?: string;

  /**
   * 게시기간 종료일 (yyyy-MM-dd)
   * @format date
   */
  endDate?: string;

  /**
   * 게시기간 시작일 (yyyy-MM-dd)
   * @format date
   */
  startDate?: string;

  /**
   * 사용 여부
   * @format int32
   */
  status?: 1 | -1;

  /** 배너 제목 */
  title?: string;

  /** 이동 URL */
  toUrl?: string;
}

export interface CompleteMultipartUploadResult {
  bucketName?: string;
  etag?: string;

  /** @format date-time */
  expirationTime?: string;
  expirationTimeRuleId?: string;
  key?: string;
  location?: string;
  requesterCharged?: boolean;
  serverSideEncryption?: string;
  ssealgorithm?: string;
  ssecustomerAlgorithm?: string;
  ssecustomerKeyMd5?: string;
  versionId?: string;
}

export interface Content {
  code?: string;

  /** @format int32 */
  contentHeight?: number;
  contentName?: string;
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /** @format int32 */
  contentWidth?: number;
  course?: Course;

  /** @format date-time */
  createdDtime?: string;
  examList?: Exam[];

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
}

export interface ContentDetailResponseDto {
  /** 폴더명/코드 */
  code?: string;

  /**
   * 콘텐츠 높이
   * @format int32
   */
  contentHeight?: number;

  /** 콘텐츠 이름 */
  contentName?: string;

  /** 콘텐트 타입 */
  contentType?: string;

  /**
   * 콘텐츠 넓이
   * @format int32
   */
  contentWidth?: number;

  /** 연결된 과정 이름 */
  courseName?: string;

  /**
   * 연결된 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface ContentResponseDto {
  /** 폴더명/코드 */
  code?: string;

  /**
   * 콘텐츠 높이
   * @format int32
   */
  contentHeight?: number;

  /** 콘텐츠 이름 */
  contentName?: string;

  /** 콘텐트 타입 */
  contentType?: string;

  /**
   * 콘텐츠 넓이
   * @format int32
   */
  contentWidth?: number;

  /** 연결된 과정명 */
  courseName?: string;

  /**
   * 연결된 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 시험 개수
   * @format int32
   */
  examCnt?: number;

  /**
   * 과제 개수
   * @format int32
   */
  homeworkCnt?: number;

  /**
   * 강의 개수
   * @format int32
   */
  lessonCnt?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 문제은행 개수
   * @format int32
   */
  questionCnt?: number;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface ContentSaveRequestDto {
  /** 폴더명/코드 */
  code?: string;

  /**
   * 콘텐트 높이
   * @format int32
   */
  contentHeight?: number;

  /** 콘텐트 이름 */
  contentName?: string;

  /** 콘텐트 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /**
   * 콘텐트 넓이
   * @format int32
   */
  contentWidth?: number;

  /**
   * 사용 상태 여부 1/-1
   * @format int32
   */
  status?: number;
}

export interface ContentUpdateRequestDto {
  /** 폴더명/코드 */
  code?: string;

  /**
   * 콘텐트 높이
   * @format int32
   */
  contentHeight?: number;

  /** 콘텐트 이름 */
  contentName?: string;

  /** 콘텐트 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /**
   * 콘텐트 넓이
   * @format int32
   */
  contentWidth?: number;

  /**
   * 사용 상태 여부 1 or -1
   * @format int32
   */
  status?: number;
}

export interface Course {
  content?: Content;
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";
  courseClass?: CourseClass[];
  courseFile?: string;
  courseFileName?: string;
  courseModules?: CourseModules[];
  courseName?: string;
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";
  courseThumbLink?: string;
  courseThumbLinkName?: string;
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /** @format date-time */
  createdDtime?: string;
  displayYn?: string;
  files?: File[];

  /** @format int32 */
  lessonTime?: number;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  survey?: Survey;
}

export interface CourseClass {
  /** @format date-time */
  cancelAvailEndDate?: string;

  /** @format date-time */
  cancelAvailStartDate?: string;
  course?: Course;
  courseUser?: CourseUser[];

  /** @format date-time */
  createdDtime?: string;

  /** @format int32 */
  limitPeople?: number;
  limitPeopleYn?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format date-time */
  requestEndDate?: string;

  /** @format date-time */
  requestStartDate?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;

  /** @format int32 */
  step?: number;

  /** @format date-time */
  studyEndDate?: string;

  /** @format date-time */
  studyStartDate?: string;

  /** @format int32 */
  year?: number;
}

export interface CourseClassResponseDto {
  /** 과정 엔티티 */
  course?: CourseResponseDto;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 수강신청가능여부 */
  enableToEnrollYn?: "Y" | "N";

  /**
   * 현재 수강 신청 인원
   * @format int32
   */
  enrolledPeopleCnt?: number;

  /**
   * 수강인원제한 인원수 / 0은 무제한
   * @format int32
   */
  limitPeople?: number;

  /** 수강인원제한여부 */
  limitPeopleYn?: "Y" | "N";

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 수강신청종료일자
   * @format date-time
   */
  requestEndDate?: string;

  /**
   * 수강신청시작일자
   * @format date-time
   */
  requestStartDate?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /**
   * 기수
   * @format int32
   */
  step?: number;

  /**
   * 학습종료일자
   * @format date-time
   */
  studyEndDate?: string;

  /**
   * 학습시작일자
   * @format date-time
   */
  studyStartDate?: string;

  /**
   * 연도
   * @format int32
   */
  year?: number;
}

export interface CourseClassSaveRequestDto {
  /**
   * 과정 시퀀스
   * @format int64
   * @example 1
   */
  courseSeq?: number;

  /**
   * 수강인원제한 인원수 / 0은 무제한
   * @format int32
   */
  limitPeople?: number;

  /** 수강인원제한여부 */
  limitPeopleYn?: "Y" | "N";

  /**
   * 수강신청종료일자
   * @format date
   * @example 2022-07-03
   */
  requestEndDate?: string;

  /**
   * 수강신청시작일자
   * @format date
   * @example 2022-07-01
   */
  requestStartDate?: string;

  /**
   * 기수
   * @format int32
   */
  step?: number;

  /**
   * 학습종료일자
   * @format date
   * @example 2022-07-30
   */
  studyEndDate?: string;

  /**
   * 학습시작일자
   * @format date
   * @example 2022-07-04
   */
  studyStartDate?: string;

  /**
   * 연도
   * @format int32
   * @example 2022
   */
  year?: number;
}

export interface CourseClassStepResponseDto {
  /**
   * 현재 수강신청인원
   * @format int32
   */
  enrolledPeopleCnt?: number;

  /**
   * 수강인원제한 인원수 - 0은 무제한
   * @format int32
   */
  limitPeople?: number;

  /** 수강인원제한여부 */
  limitPeopleYn?: "Y" | "N";

  /**
   * 수강신청종료일자
   * @format date-time
   */
  requestEndDate?: string;

  /**
   * 수강신청시작일자
   * @format date-time
   */
  requestStartDate?: string;

  /**
   * 클래스 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 기수
   * @format int32
   */
  step?: number;

  /**
   * 학습종료일자
   * @format date-time
   */
  studyEndDate?: string;

  /**
   * 학습시작일자
   * @format date-time
   */
  studyStartDate?: string;
}

export interface CourseClassUpdateRequestDto {
  /**
   * 과정 클래스 시퀀스
   * @format int64
   * @example 1
   */
  courseClassSeq?: number;

  /**
   * 수강인원제한 인원수 / 0은 무제한
   * @format int32
   */
  limitPeople?: number;

  /** 수강인원제한여부 */
  limitPeopleYn?: "Y" | "N";

  /**
   * 수강신청종료일자
   * @format date
   * @example 2022-07-03
   */
  requestEndDate?: string;

  /**
   * 수강신청시작일자
   * @format date
   * @example 2022-07-01
   */
  requestStartDate?: string;

  /**
   * 기수
   * @format int32
   */
  step?: number;

  /**
   * 학습종료일자
   * @format date
   * @example 2022-07-30
   */
  studyEndDate?: string;

  /**
   * 학습시작일자
   * @format date
   * @example 2022-07-04
   */
  studyStartDate?: string;

  /**
   * 연도
   * @format int32
   * @example 2022
   */
  year?: number;
}

export interface CourseContentLinkRequestDto {
  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;
}

export interface CourseDetailClientResponseDto {
  /** 연결된 콘텐츠 */
  content?: ContentDetailResponseDto;

  /**
   * 교육 분류, 보수/양성/신규 등
   *  * TYPE_SUP_COMMON -> 보수일반
   *  * TYPE_SUP_CONSTANT -> 보수수시
   *  * TYPE_CONSTANT -> 수시
   *  * TYPE_NEW -> 신규
   *  * TYPE_ILLEGAL -> 법령위반자
   *  * TYPE_HANDICAPPED -> 교통약자 이동편의 증진
   *  * TYPE_DANGEROUS -> 위험물진 운송차량 운전자
   */
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 과정 이름 */
  courseName?: string;

  /** 연결된 최근에 들었던 학습 진행사항 */
  courseProgressRecentResponseDto?: CourseProgressRecentResponseDto;

  /**
   * 연결된 학습 진행사항
   * 해당 유저-과정이 듣고있는 과정 차씨의 학습 진행사항들(차씨들의 진도율)
   */
  courseProgressResponseDtoList?: CourseProgressResponseDto[];

  /**
   * 업종*   버스 - BUS
   *     전세버스 - CHARTER_BUS
   *     특수여객 - SPECIAL_PASSENGER
   *     법인택시 - CORPORATE_TAXI
   *     일반화물 - GENERAL_CARGO
   *     개인택시 - PRIVATE_TAXI
   *     개별화물 - INDIVIDUAL_CARGO
   *     용달화물 - CONSIGNMENT
   *     특별교통수단 - SPECIAL_TRANSPORTATION
   *     저상버스 - KNEELING_BUS
   *     위험물 - DANGEROUS_GOODS
   *     지정폐기물 - DESIGNATED_WASTE
   *     유해화학물질 - HAZARDOUS_CHEMICALS
   *     고압가스(가연성) - HIGH_PRESSURE_GAS_FLAMMABLE
   *     고압가스(독성) - HIGH_PRESSURE_GAS_TOXIC
   */
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /**
   * 과정분류 운수종사자 / 저상버스
   *  * TYPE_TRANS_WOKER: 운수종사자
   *  * TYPE_LOW_FLOOR_BUS: 저상버스
   */
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /**
   * 과정 신청 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 노출여부 */
  displayYn?: string;

  /**
   * 과정 수료 시간
   * @format int32
   */
  lessonTime?: number;

  /** 연결된 차시 */
  lessons?: LessonDetailClientResponseDto[];

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** s3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 과정 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 사용 상태
   * @format int32
   */
  status?: number;

  /** 유저의 설문 완료 여부 */
  surveyCompletedYn?: "Y" | "N";

  /**
   * 설문 시퀀스
   * @format int64
   */
  surveySeq?: number;

  /**
   * 과정 전체 진도율
   * @format double
   */
  totalProgress?: number;
}

export interface CourseDetailResponseDto {
  /** 연결된 콘텐츠 */
  content?: ContentDetailResponseDto;

  /**
   * 교육 분류, 보수/양성/신규 등
   *  * TYPE_SUP_COMMON -> 보수일반
   *  * TYPE_SUP_CONSTANT -> 보수수시
   *  * TYPE_CONSTANT -> 수시
   *  * TYPE_NEW -> 신규
   *  * TYPE_ILLEGAL -> 법령위반자
   *  * TYPE_HANDICAPPED -> 교통약자 이동편의 증진
   *  * TYPE_DANGEROUS -> 위험물진 운송차량 운전자
   */
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 과정 이름 */
  courseName?: string;

  /**
   * 업종*   버스 - BUS
   *     전세버스 - CHARTER_BUS
   *     특수여객 - SPECIAL_PASSENGER
   *     법인택시 - CORPORATE_TAXI
   *     일반화물 - GENERAL_CARGO
   *     개인택시 - PRIVATE_TAXI
   *     개별화물 - INDIVIDUAL_CARGO
   *     용달화물 - CONSIGNMENT
   *     특별교통수단 - SPECIAL_TRANSPORTATION
   *     저상버스 - KNEELING_BUS
   *     위험물 - DANGEROUS_GOODS
   *     지정폐기물 - DESIGNATED_WASTE
   *     유해화학물질 - HAZARDOUS_CHEMICALS
   *     고압가스(가연성) - HIGH_PRESSURE_GAS_FLAMMABLE
   *     고압가스(독성) - HIGH_PRESSURE_GAS_TOXIC
   */
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /**
   * 과정분류 운수종사자 / 저상버스
   *  * TYPE_TRANS_WOKER: 운수종사자
   *  * TYPE_LOW_FLOOR_BUS: 저상버스
   */
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 노출여부 */
  displayYn?: string;

  /**
   * 과정 수료 시간
   * @format int32
   */
  lessonTime?: number;

  /** 연결된 차시 */
  lessons?: LessonDetailResponseDto[];

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** s3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 과정 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 사용 상태
   * @format int32
   */
  status?: number;
}

export interface CourseModuleFindResponseDto {
  /**
   * 과정 모듈 시퀀스
   * @format int64
   */
  courseModuleSeq?: number;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 최소진도율 0=>상관없음
   * @format int32
   */
  limitProgress?: number;

  /**
   * 최소진도율
   * @format int32
   */
  limitScore?: number;

  /** 모듈 명 */
  moduleName?: string;

  /**
   * 모듈 분류
   *  COURSE_MODULE_PROGRESS_RATE: 진도율
   *  COURSE_MODULE_TEST: 시험
   */
  moduleType?: "COURSE_MODULE_PROGRESS_RATE" | "COURSE_MODULE_TEST" | "COURSE_MODULE_SURVEY";

  /**
   * 상태코드 1 = 사용,-1 = 오류
   * @format int32
   */
  status?: number;

  /** 제출여부 */
  submitYn?: "Y" | "N";

  /**
   * 설문지 시퀀스
   * @format int64
   */
  surveySeq?: number;
}

export interface CourseModuleSaveRequestDto {
  /**
   * 모듈 타입이 시험일 경우 설문지 시퀀스
   * 이외 모듈분류에서는 NULL
   * @format int64
   */
  examSeq?: number;

  /**
   * 최소 진도율 0=>상관없음
   * @format int32
   */
  limitProgress?: number;

  /**
   * 최소 점수
   * @format int32
   */
  limitScore?: number;

  /** 모듈 명 */
  moduleName?: string;

  /**
   * 모듈 분류
   * * 진도율 :: COURSE_MODULE_PROGRESS_RATE
   * * 시험 :: COURSE_MODULE_TEST
   * * 설문 :: COURSE_MODULE_SURVEY
   */
  moduleType?: "COURSE_MODULE_PROGRESS_RATE" | "COURSE_MODULE_TEST" | "COURSE_MODULE_SURVEY";

  /**
   * 상태 코드 1 = 사용,-1 = 오류
   * @format int32
   */
  status?: number;

  /** 제출여부 */
  submitYn?: "Y" | "N";

  /**
   * 모듈 타입이 설문일 경우 설문지 시퀀스
   * 이외 모듈분류에서는 NULL
   * @format int64
   */
  surveySeq?: number;
}

export interface CourseModuleSaveResponseDto {
  /**
   * 과정 모듈 시퀀스
   * @format int64
   */
  courseModuleSeq?: number;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 최소 진도율 0=>상관없음
   * @format int32
   */
  limitProgress?: number;

  /**
   * 최소 점수
   * @format int32
   */
  limitScore?: number;

  /** 모듈 명 */
  moduleName?: string;

  /**
   * 모듈 분류
   *  COURSE_MODULE_PROGRESS_RATE: 진도율
   *  COURSE_MODULE_TEST: 시험
   */
  moduleType?: "COURSE_MODULE_PROGRESS_RATE" | "COURSE_MODULE_TEST" | "COURSE_MODULE_SURVEY";

  /**
   * 상태 코드 1 = 사용,-1 = 오류
   * @format int32
   */
  status?: number;

  /** 제출여부 */
  submitYn?: "Y" | "N";

  /**
   * 설문지 시퀀스
   * @format int64
   */
  surveySeq?: number;
}

export interface CourseModuleUpdateRequestDto {
  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /**
   * 최소 진도율 0=>상관없음
   * @format int32
   */
  limitProgress?: number;

  /**
   * 최소 점수
   * @format int32
   */
  limitScore?: number;

  /** 모듈 명 */
  moduleName?: string;

  /**
   * 모듈 분류
   *  COURSE_MODULE_PROGRESS_RATE: 진도율
   *  COURSE_MODULE_TEST: 시험
   */
  moduleType?: "COURSE_MODULE_PROGRESS_RATE" | "COURSE_MODULE_TEST" | "COURSE_MODULE_SURVEY";

  /**
   * 상태 코드 1 = 사용,-1 = 오류
   * @format int32
   */
  status?: number;

  /** 제출여부 */
  submitYn?: "Y" | "N";

  /**
   * 설문지 시퀀스
   * @format int64
   */
  surveySeq?: number;
}

export interface CourseModuleUpdateResponseDto {
  /**
   * 과정 모듈 시퀀스
   * @format int64
   */
  courseModuleSeq?: number;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 최소 진도율 0=>상관없음
   * @format int32
   */
  limitProgress?: number;

  /**
   * 최소 점수
   * @format int32
   */
  limitScore?: number;

  /** 모듈 명 */
  moduleName?: string;

  /**
   * 모듈 분류
   *  COURSE_MODULE_PROGRESS_RATE: 진도율
   *  COURSE_MODULE_TEST: 시험
   */
  moduleType?: "COURSE_MODULE_PROGRESS_RATE" | "COURSE_MODULE_TEST" | "COURSE_MODULE_SURVEY";

  /**
   * 상태 코드 1 = 사용,-1 = 오류
   * @format int32
   */
  status?: number;

  /** 제출여부 */
  submitYn?: "Y" | "N";

  /**
   * 설문지 시퀀스
   * @format int64
   */
  surveySeq?: number;
}

export interface CourseModules {
  course?: Course;

  /** @format date-time */
  createdDtime?: string;
  exam?: Exam;

  /** @format int32 */
  limitProgress?: number;

  /** @format int32 */
  limitScore?: number;

  /** @format date-time */
  modifiedDtime?: string;
  moduleName?: string;
  moduleType?: "COURSE_MODULE_PROGRESS_RATE" | "COURSE_MODULE_TEST" | "COURSE_MODULE_SURVEY";

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  submitYn?: string;
  survey?: Survey;
}

export interface CourseProgress {
  /** @format date-time */
  completeDtime?: string;
  completeYn?: string;
  courseUser?: CourseUser;

  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  lastViewDtime?: string;
  lesson?: Lesson;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format double */
  ratio?: number;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;

  /** @format double */
  studyLastTime?: number;

  /** @format double */
  studyTime?: number;

  /** @format int32 */
  viewCnt?: number;
}

export interface CourseProgressRecentResponseDto {
  /**
   * 챕터 수료 일자
   * @format date-time
   */
  completeDtime?: string;

  /** 챕터수료여부 */
  completeYn?: string;

  /**
   * 유저 진도율 시퀀스
   * @format int64
   */
  courseProgressSeq?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 마지막 수강 날짜
   * @format date-time
   */
  lastViewDtime?: string;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  lessonSeq?: number;

  /**
   * 진도율
   * @format double
   */
  ratio?: number;

  /**
   * 마지막 학습 시간
   * @format double
   */
  studyLastTime?: number;

  /**
   * 총 학습 시간
   * @format double
   */
  studyTime?: number;
}

export interface CourseProgressRequestDto {
  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 마지막 수강 날짜
   * @format date-time
   */
  lastViewDtime?: string;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  lessonSeq?: number;

  /**
   * 마지막 학습 시간
   * @format double
   */
  studyLastTime?: number;

  /**
   * 총 학습 시간
   * @format double
   */
  studyTime?: number;

  /**
   * 조회수
   * @format int32
   */
  viewCnt?: number;
}

export interface CourseProgressResponseDto {
  /**
   * 챕터 수료 일자
   * @format date-time
   */
  completeDtime?: string;

  /** 챕터수료여부 */
  completeYn?: string;

  /**
   * 유저 진도율 시퀀스
   * @format int64
   */
  courseProgressSeq?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 생성 날짜
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 마지막 수강 날짜
   * @format date-time
   */
  lastViewDtime?: string;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  lessonSeq?: number;

  /**
   * 수정 날짜
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 진도율
   * @format double
   */
  ratio?: number;

  /**
   * 마지막 학습 시간
   * @format double
   */
  studyLastTime?: number;

  /**
   * 총 학습 시간
   * @format double
   */
  studyTime?: number;

  /**
   * 조회수
   * @format int32
   */
  viewCnt?: number;
}

export interface CourseProgressUpdateRequestDto {
  /**
   * 유저 진도율 시퀀스
   * @format int64
   */
  courseProgressSeq?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  lessonSeq?: number;

  /**
   * 마지막 학습시간
   * @format double
   */
  studyLastTime?: number;
}

export interface CourseResponseDto {
  /** 연결된 콘텐츠 이름 */
  contentName?: string;

  /**
   * 연결된 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /**
   * 운수사업 타입
   * TYPE_ALL: 전체 But 사용하지 말 것
   * TYPE_PASSENGER: 여객
   * TYPE_CARGO: 운수
   */
  courseBusinessType?: "TYPE_ALL" | "TYPE_PASSENGER" | "TYPE_CARGO";

  /**
   * 교육 분류, 보수/양성/신규 등
   *  * TYPE_SUP_COMMON -> 보수일반
   *  * TYPE_SUP_CONSTANT -> 보수수시
   *  * TYPE_CONSTANT -> 수시
   *  * TYPE_NEW -> 신규
   *  * TYPE_ILLEGAL -> 법령위반자
   *  * TYPE_HANDICAPPED -> 교통약자 이동편의 증진
   *  * TYPE_DANGEROUS -> 위험물진 운송차량 운전자
   */
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 과정 이름 */
  courseName?: string;

  /**
   * 업종*   버스 - BUS
   *     전세버스 - CHARTER_BUS
   *     특수여객 - SPECIAL_PASSENGER
   *     법인택시 - CORPORATE_TAXI
   *     일반화물 - GENERAL_CARGO
   *     개인택시 - PRIVATE_TAXI
   *     개별화물 - INDIVIDUAL_CARGO
   *     용달화물 - CONSIGNMENT
   *     특별교통수단 - SPECIAL_TRANSPORTATION
   *     저상버스 - KNEELING_BUS
   *     위험물 - DANGEROUS_GOODS
   *     지정폐기물 - DESIGNATED_WASTE
   *     유해화학물질 - HAZARDOUS_CHEMICALS
   *     고압가스(가연성) - HIGH_PRESSURE_GAS_FLAMMABLE
   *     고압가스(독성) - HIGH_PRESSURE_GAS_TOXIC
   */
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /**
   * 과정분류 운수종사자 / 저상버스
   *  * TYPE_TRANS_WOKER: 운수종사자
   *  * TYPE_LOW_FLOOR_BUS: 저상버스
   */
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 노출여부 */
  displayYn?: string;

  /** 파일 이름 */
  fileName?: string;

  /**
   * 과정 수료 시간
   * @format int32
   */
  lessonTime?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** s3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 과정 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 사용 상태
   * @format int32
   */
  status?: number;
}

export interface CourseSaveRequestDto {
  /**
   * 교육 분류, 보수/양성/신규 등 * TYPE_SUP_COMMON -> 보수일반
   *  * TYPE_SUP_CONSTANT -> 보수수시
   *  * TYPE_CONSTANT -> 수시
   *  * TYPE_NEW -> 신규
   *  * TYPE_ILLEGAL -> 법령위반자
   *  * TYPE_HANDICAPPED -> 교통약자 이동편의 증진
   *  * TYPE_DANGEROUS -> 위험물진 운송차량 운전자
   */
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 과정 이름 */
  courseName?: string;

  /**
   * 업종*   버스 - BUS
   *     전세버스 - CHARTER_BUS
   *     특수여객 - SPECIAL_PASSENGER
   *     법인택시 - CORPORATE_TAXI
   *     일반화물 - GENERAL_CARGO
   *     개인택시 - PRIVATE_TAXI
   *     개별화물 - INDIVIDUAL_CARGO
   *     용달화물 - CONSIGNMENT
   *     특별교통수단 - SPECIAL_TRANSPORTATION
   *     저상버스 - KNEELING_BUS
   *     위험물 - DANGEROUS_GOODS
   *     지정폐기물 - DESIGNATED_WASTE
   *     유해화학물질 - HAZARDOUS_CHEMICALS
   *     고압가스(가연성) - HIGH_PRESSURE_GAS_FLAMMABLE
   *     고압가스(독성) - HIGH_PRESSURE_GAS_TOXIC
   */
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /**
   * 과정분류 운수종사자 / 저상버스 * TYPE_TRANS_WOKER: 운수종사자
   *  * TYPE_LOW_FLOOR_BUS: 저상버스
   */
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /** 노출여부 */
  displayYn?: string;

  /**
   * 과정 수료 인정 시간
   * @format int32
   */
  lessonTime?: number;

  /**
   * 사용 여부
   * @format int32
   */
  status?: 1 | -1;
}

export interface CourseSurveyLinkRequestDto {
  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 설문 시퀀스
   * @format int64
   */
  surveySeq?: number;
}

export interface CourseUpdateRequestDto {
  /** 교육 분류, 보수/양성/신규 등 */
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 과정 이름 */
  courseName?: string;

  /** 업종 */
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /** 과정분류 운수종사자 / 저상버스 */
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /** 노출여부 */
  displayYn?: string;

  /**
   * 과정 수료 인정 시간
   * @format int32
   */
  lessonTime?: number;

  /** S3 파일 */
  s3Files?: FileRequestDto[];

  /**
   * 사용 여부
   * @format int32
   */
  status?: 1 | -1;
}

export interface CourseUser {
  /** @format date-time */
  completeDtime?: string;
  completeNo?: string;
  completeYn?: string;
  courseClass?: CourseClass;
  courseProgressList?: CourseProgress[];
  courseUserSurvey?: CourseUserSurvey;

  /** @format date-time */
  createdDtime?: string;
  examMultipleChoiceResultList?: ExamMultipleChoiceResult[];

  /** @format double */
  examScore?: number;
  examSubjectiveResultList?: ExamSubjectiveResult[];
  examUser?: ExamUser;

  /** @format double */
  examValue?: number;
  failReason?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format date-time */
  outDtime?: string;
  outReason?: string;
  outYn?: string;

  /** @format double */
  progressRatio?: number;

  /** @format double */
  progressScore?: number;
  regType?: "TYPE_INDIVIDUAL" | "TYPE_ORGANIZATION";

  /** @format int64 */
  regUserSeq?: number;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;

  /** @format double */
  totalScore?: number;
  user?: User;
}

export interface CourseUserCompletionResponseDto {
  message?: string;
}

export interface CourseUserLogRequestDto {
  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  lessonSeq?: number;

  /**
   * 학습시간
   * @format double
   */
  studyTime?: number;
}

export interface CourseUserLogResponseDto {
  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  lessonSeq?: number;

  /** 유저 에이전트 */
  regAgent?: string;

  /** 유저 아이피 */
  regIp?: string;

  /**
   * 학습시간
   * @format double
   */
  studyTime?: number;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

export interface CourseUserMyInfoResponseDto {
  /**
   * 과정 클래스 시퀀스
   * @format int64
   * @example 1
   */
  courseClassSeq?: number;

  /**
   * 과정 시퀀스
   * @format int64
   * @example 1
   */
  courseSeq?: number;

  /**
   * 과정 제목
   * @example 과정 제목
   */
  courseTitle?: string;

  /**
   * 과정 신청 시퀀스
   * @format int64
   * @example 1
   */
  courseUserSeq?: number;

  /**
   * 교육 만료까지 남은 기한
   * @format int64
   * @example 180
   */
  leftDays?: number;

  /**
   * 진도율
   * @format double
   * @example 0
   */
  progress?: number;

  /**
   * 학습 중인 과정/학습 종료 과정 구분
   *  * TYPE_PROGRESSING: 학습 진행 중인 과정
   *  * TYPE_ENDED: 학습 종료된 과정
   */
  progressStatus?: "TYPE_PROGRESSING" | "TYPE_ENDED";

  /**
   * 기수
   * @format int32
   * @example 1
   */
  step?: number;

  /**
   * 교육 만료일
   * @format date-time
   */
  studyEndDate?: string;

  /**
   * 썸네일 이미지 S3 경로
   * @example https://...
   */
  thumbnailImage?: string;
}

export interface CourseUserResponseDto {
  /**
   * 수료일
   * @format date-time
   */
  completeDtime?: string;

  /** 수료 넘버 */
  completeNo?: string;

  /** 수료 여부 */
  completeYn?: string;

  /** 과정 엔티티 */
  courseClass?: CourseClassResponseDto;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 수료 실패 여부 */
  failReason?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** @format date-time */
  outDtime?: string;
  outReason?: string;
  outYn?: string;

  /**
   * 진도율 %
   * @format double
   */
  progressRatio?: number;

  /**
   * 진도율 점수
   * @format double
   */
  progressScore?: number;
  regType?: "TYPE_INDIVIDUAL" | "TYPE_ORGANIZATION";

  /** @format int64 */
  regUserSeq?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /**
   * 최종 점수
   * @format double
   */
  totalScore?: number;

  /** 유저 엔티티 */
  user?: UserResponseDto;
}

export interface CourseUserSurvey {
  completeYn?: string;
  courseUser?: CourseUser;

  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  survey?: Survey;
}

export interface CourseUserTransDetailsResponseDto {
  /**
   * 교육정보 - 업종구분
   *     TYPE_PASSENGER: 여객    TYPE_CARGO: 화물
   */
  businessType?: "TYPE_ALL" | "TYPE_PASSENGER" | "TYPE_CARGO";

  /** 교육신청자 정보 - 차량번호 */
  carNumber?: string;

  /**
   * 교육신청자 정보 - 차량 등록지
   * 천안 - CHEONAN
   * 공주 - PRINCESS
   * 보령 - BORYEONG
   * 아산 - ASAN
   * 서산 - SEOSAN
   * 논산 - NONSAN
   * 계룡 - GYERYONG
   * 당진 - DANGJIN
   * 금산 - GEUMSAN
   * 부여 - GRANT
   * 서천 - SEOCHEON
   * 청양 - CHEONGYANG
   * 홍성 - HONGSEONG
   * 예산 - BUDGET
   * 태안 - TAEAN
   * 충남 - CHUNGNAM
   * 세종 - SEJONG
   * 서울 - SEOUL
   * 부산 - BUSAN
   * 대구 - DAEGU
   * 인천 - INCHEON
   * 광주 - GWANGJU
   * 대전 - DAEJEON
   * 울산 - ULSAN
   * 경기 - GAME
   * 강원 - GANGWON
   * 충북 - CHUNGBUK
   * 전북 - JEONBUK
   * 전남 - JEONNAM
   * 경북 - GYEONGBUK
   * 경남 - GYEONGNAM
   * 제주 - JEJU
   */
  carRegisteredRegion?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /**
   * 교육정보 - 교육과정
   *  * TYPE_SUP_COMMON -> 보수일반
   *  * TYPE_SUP_CONSTANT -> 보수 수시
   *  * TYPE_CONSTANT -> 수시
   *  * TYPE_NEW -> 신규
   *  * TYPE_ILLEGAL -> 법령위반자
   *  * TYPE_HANDICAPPED -> 교통약자 이동편의 증진
   *  * TYPE_DANGEROUS -> 위험물진 운송차량 운전자
   */
  categoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 교육신청자 정보 - 주민등록번호 */
  identityNumber?: string;

  /** 교육신청자 정보 - 이름 */
  name?: string;

  /** 교육신청자 정보 - 휴대전화 */
  phone?: string;

  /**
   * 업체정보 - 예약구분
   *  * TYPE_INDIVIDUAL: 개인
   *  * TYPE_ORGANIZATION: 단체
   */
  regType?: "TYPE_INDIVIDUAL" | "TYPE_ORGANIZATION";

  /**
   * 과정 신청 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 교육정보 - 기수
   * @format int32
   */
  step?: number;

  /** 교육정보 - 교육일자 (시작 및 종료 일자) */
  studyDate?: string;

  /**
   * 업체정보 - 업종
   *  *  PASSENGER 여객
   *  *  FREIGHT 화물
   */
  userBusinessType?: "PASSENGER" | "FREIGHT";

  /** 업체정보 - 회사명 */
  userCompanyName?: string;

  /**
   * 업체정보 - 업종구분
   * *   버스 - BUS
   *     전세버스 - CHARTER_BUS
   *     특수여객 - SPECIAL_PASSENGER
   *     법인택시 - CORPORATE_TAXI
   *     일반화물 - GENERAL_CARGO
   *     개인택시 - PRIVATE_TAXI
   *     개별화물 - INDIVIDUAL_CARGO
   *     용달화물 - CONSIGNMENT
   *     특별교통수단 - SPECIAL_TRANSPORTATION
   *     저상버스 - KNEELING_BUS
   *     위험물 - DANGEROUS_GOODS
   *     지정폐기물 - DESIGNATED_WASTE
   *     유해화학물질 - HAZARDOUS_CHEMICALS
   *     고압가스(가연성) - HIGH_PRESSURE_GAS_FLAMMABLE
   *     고압가스(독성) - HIGH_PRESSURE_GAS_TOXIC
   */
  userSubBusinessType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";
}

export interface CourseUserTransResponseDto {
  /** 신청 과정명 */
  courseTitle?: string;

  /**
   * 신청 일시
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 신청 수정 일시
   * @format date-time
   */
  modifiedDtime?: string;

  /** 신청 타입 */
  regType?: "TYPE_INDIVIDUAL" | "TYPE_ORGANIZATION";

  /**
   * 신청 유저 시퀀스 (단체)
   * @format int64
   */
  regUserSeq?: number;

  /**
   * 과정 신청 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface CourseUserTransSaveRequestDto {
  /** 업체정보 - 회사명 */
  businessName?: string;

  /** 업체정보 - 업종구분 */
  businessSubType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /** 업체정보 - 업종 */
  businessType?: "PASSENGER" | "FREIGHT";

  /** 교육신청자정보 - 차량번호 */
  carNumber?: string;

  /**
   * 교육신청자정보 - 차량 등록지
   * 천안 - CHEONAN
   * 공주 - GONGJU
   * 보령 - BORYEONG
   * 아산 - ASAN
   * 서산 - SEOSAN
   * 논산 - NONSAN
   * 계룡 - GYERYONG
   * 당진 - DANGJIN
   * 금산 - GEUMSAN
   * 부여 - BUYEO
   * 서천 - SEOCHEON
   * 청양 - CHEONGYANG
   * 홍성 - HONGSEONG
   * 예산 - YESAN
   * 태안 - TAEAN
   * 충남 - CHUNGNAM
   * 세종 - SEJONG
   * 서울 - SEOUL
   * 부산 - BUSAN
   * 대구 - DAEGU
   * 인천 - INCHEON
   * 광주 - GWANGJU
   * 대전 - DAEJEON
   * 울산 - ULSAN
   * 경기 - GYEONGGI
   * 강원 - GANGWON
   * 충북 - CHUNGBUK
   * 전북 - JEONBUK
   * 전남 - JEONNAM
   * 경북 - GYEONGBUK
   * 경남 - GYEONGNAM
   * 제주 - JEJU
   */
  carRegisteredRegion?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /**
   * 과정 클래스 시퀀스
   * @format int64
   */
  courseClassSeq?: number;

  /** 교육신청자정보 - 주민등록번호 */
  identityNumber?: string;

  /** 교육신청자정보 - 이름 */
  name?: string;

  /** 휴대전화 */
  phone?: string;

  /**
   * 예약 구분
   *  * TYPE_INDIVIDUAL: 개인
   *  * TYPE_ORGANIZATION: 단체
   */
  registerType?: "TYPE_INDIVIDUAL" | "TYPE_ORGANIZATION";

  /** sms 수신 동의 여부 */
  smsYn?: "Y" | "N";
}

export interface CourseUserTransUpdateRequestDto {
  /** 업체정보 - 회사명 */
  businessName?: string;

  /** 업체정보 - 업종구분 */
  businessSubType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /** 업체정보 - 업종 */
  businessType?: "PASSENGER" | "FREIGHT";

  /** 교육신청자정보 - 차량번호 */
  carNumber?: string;

  /** 교육신청자정보 - 차량 등록지 */
  carRegisteredRegion?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /** 휴대전화 */
  phone?: string;
}

export interface CustomPartETagsDto {
  etag?: string;

  /** @format int32 */
  partNumber?: number;
}

export interface Exam {
  content?: Content;

  /** @format date-time */
  createdDtime?: string;
  examContent?: string;
  examName?: string;
  examQuestionList?: ExamQuestion[];

  /** @format int32 */
  examTime?: number;
  examType?: "EXAM_MIDDLE" | "EXAM_FINAL";

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int32 */
  objCnt?: number;

  /** @format double */
  objScore?: number;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;

  /** @format int32 */
  subCnt?: number;

  /** @format double */
  subScore?: number;
}

export interface ExamDetailResponseDto {
  /**
   * 콘텐츠 시퀀스
   * @format int64
   * @example 0
   */
  contentSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 내용 - 마크다운 */
  examContent?: string;

  /**
   * 시험 이름
   * @example 예제 시험 이름명
   */
  examName?: string;
  examQuestions?: ExamQuestion[];

  /**
   * 시험 시간 (min 단위)
   * @format int32
   * @example 60
   */
  examTime?: number;

  /**
   * 시험 타입
   * EXAM_MIDDLE: 중간평가
   * EXAM_FINAL: 기말평가
   */
  examType?: "EXAM_MIDDLE" | "EXAM_FINAL";

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 객관식 나오는 질문 개수
   * @format int32
   */
  objCnt?: number;

  /**
   * 객관식 개당 점수
   * @format double
   */
  objScore?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /**
   * 주관식 나오는 질문 개수
   * @format int32
   */
  subCnt?: number;

  /**
   * 주관식 개당 점수
   * @format double
   */
  subScore?: number;
}

export interface ExamExamSubjectiveResultUpdateRequestDto {
  /**
   * 선택 답안
   * @format int32
   */
  choice?: number;

  /** 평가 의견 */
  feedback?: string;

  /**
   * 점수
   * @format double
   */
  score?: number;

  /** 임시 저장 상태 */
  temporaryYn?: string;
}

export interface ExamFindUserDetailResponseDto {
  /** 정답 */
  answer?: string;

  /**
   * 객관식 선택 답안
   * @format int32
   */
  choice?: number;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /** 주관식 피드백 */
  feedback?: string;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamMultiSubjectUpdateResponseDto {
  examMultipleChoiceResultResponseDtoList?: ExamMultipleChoiceResultResponseDto[];
  examSubjectiveResultResponseDtoList?: ExamSubjectiveResultResponseDto[];
}

export interface ExamMultipleChoiceResult {
  /** @format int32 */
  choice?: number;
  courseUser?: CourseUser;

  /** @format date-time */
  createdDtime?: string;
  examQuestion?: ExamQuestion;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format double */
  score?: number;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  temporaryYn?: string;
}

export interface ExamMultipleChoiceResultRequestDto {
  /**
   * 선택답안
   * @format int32
   */
  choice?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 시험 객관식 결과 시퀀스
   * @format int64
   */
  examQuestionSeq?: number;

  /**
   * 점수
   * @format double
   */
  score?: number;

  /** 임시 저장 상태 */
  temporaryYn?: string;
}

export interface ExamMultipleChoiceResultResponseDto {
  /**
   * 선택답안
   * @format int32
   */
  choice?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 시험 객관식 결과 시퀀스
   * @format int64
   */
  examQuestionSeq?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 점수
   * @format double
   */
  score?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 임시 저장 상태 */
  temporaryYn?: string;
}

export interface ExamMultipleChoiceResultUpdateRequestDto {
  /**
   * 선택답안
   * @format int32
   */
  choice?: number;

  /**
   * 점수
   * @format double
   */
  score?: number;

  /** 임시 저장 상태 */
  temporaryYn?: string;
}

export interface ExamQuestion {
  answer?: string;

  /** @format date-time */
  createdDtime?: string;
  description?: string;
  exam?: Exam;
  examMultipleChoiceResult?: ExamMultipleChoiceResult[];
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";
  examSubjectiveResult?: ExamSubjectiveResult[];
  item1?: string;
  item10?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
  item8?: string;
  item9?: string;

  /** @format int32 */
  itemCnt?: number;

  /** @format date-time */
  modifiedDtime?: string;
  question?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
}

export interface ExamQuestionBankSaveRequestDto {
  questionSeqList?: number[];
}

export interface ExamQuestionFindResponseDto {
  /** 정답 */
  answer?: string;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamQuestionResponseDto {
  /** 정답 */
  answer?: string;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamQuestionSaveRequestDto {
  /** 정답 */
  answer?: string;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;
}

export interface ExamQuestionSaveResponseDto {
  /** 정답 */
  answer?: string;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamQuestionUpdateRequestDto {
  /** 정답 */
  answer?: string;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 객관식 결과 시퀀스
   * @format int64
   */
  examMultipleChoiceResultSeq?: number;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /**
   * 시험 주관식 결과 시퀀스
   * @format int64
   */
  examSubjectiveResultSeq?: number;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamResponseDto {
  /**
   * 콘텐츠 시퀀스
   * @format int64
   * @example 0
   */
  contentSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 내용 - 마크다운 */
  examContent?: string;

  /**
   * 시험 이름
   * @example 예제 시험 이름명
   */
  examName?: string;

  /**
   * 시험 시간 (min 단위)
   * @format int32
   * @example 60
   */
  examTime?: number;

  /**
   * 시험 타입
   * EXAM_MIDDLE: 중간평가
   * EXAM_FINAL: 기말평가
   */
  examType?: "EXAM_MIDDLE" | "EXAM_FINAL";

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 내용 - 객관식 나오는 질문 개수
   * @format int32
   */
  objCnt?: number;

  /**
   * 내용 - 객관식 개당 점수
   * @format double
   */
  objScore?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /**
   * 내용 - 주관식 나오는 질문 개수
   * @format int32
   */
  subCnt?: number;

  /**
   * 내용 - 주관식 개당 점수
   * @format double
   */
  subScore?: number;
}

export interface ExamSaveRequestDto {
  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 내용 - 마크다운 */
  examContent?: string;

  /** 시험 이름 */
  examName?: string;

  /**
   * 시험 시간 (min 단위)
   * @format int32
   */
  examTime?: number;

  /**
   * 시험 타입
   * EXAM_MIDDLE: 중간평가
   * EXAM_FINAL: 기말평가
   */
  examType?: "EXAM_MIDDLE" | "EXAM_FINAL";

  /**
   * 객관식 개당 점수
   * @format double
   */
  objScore?: number;

  /**
   * 상태 1 또는 -1
   * @format int32
   */
  status?: number;

  /**
   * 주관식 개당 점수
   * @format double
   */
  subScore?: number;
}

export interface ExamSubjectiveResult {
  /** @format int32 */
  choice?: number;
  courseUser?: CourseUser;

  /** @format date-time */
  createdDtime?: string;
  examQuestion?: ExamQuestion;
  feedback?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format double */
  score?: number;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  temporaryYn?: string;
}

export interface ExamSubjectiveResultRequestSaveDto {
  /**
   * 선택 답안
   * @format int32
   */
  choice?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 시험 문제 시퀀스
   * @format int64
   */
  examQuestionSeq?: number;

  /** 평가 의견 */
  feedback?: string;

  /**
   * 점수
   * @format double
   */
  score?: number;

  /** 임시 저장 상태 */
  temporaryYn?: string;
}

export interface ExamSubjectiveResultResponseDto {
  /**
   * 선택 답안
   * @format int32
   */
  choice?: number;

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 시험 문제 시퀀스
   * @format int64
   */
  examQuestionSeq?: number;

  /** 평가 의견 */
  feedback?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 점수
   * @format double
   */
  score?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 임시 저장 상태 */
  temporaryYn?: string;
}

export interface ExamTestResponseDto {
  /** 정답 */
  answer?: string;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamTestTemporaryResponseDto {
  /** 정답 */
  answer?: string;

  /**
   * 객관식 선택 답안
   * @format int32
   */
  choice?: number;

  /** 정답 설명 - 255자 */
  description?: string;

  /**
   * 시험 타입
   *  QUESTION_OBJ : 객관식
   *  QUESTION_SUBJ : 주관식
   */
  examQuestionTypeEnums?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시험 시퀀스
   * @format int64
   */
  examSeq?: number;

  /** 주관식 피드백 */
  feedback?: string;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 10 제목 */
  item10?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /** 보기 6 제목 */
  item6?: string;

  /** 보기 7 제목 */
  item7?: string;

  /** 보기 8 제목 */
  item8?: string;

  /** 보기 9 제목 */
  item9?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 질문내용 */
  question?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;
}

export interface ExamUpdateRequestDto {
  /** 내용 - 마크다운 */
  examContent?: string;

  /** 시험 이름 */
  examName?: string;

  /**
   * 시험 시간 (min 단위)
   * @format int32
   */
  examTime?: number;

  /**
   * 시험 타입
   * EXAM_MIDDLE: 중간평가
   * EXAM_FINAL: 기말평가
   */
  examType?: "EXAM_MIDDLE" | "EXAM_FINAL";

  /**
   * 객관식 개당 개수
   * @format int32
   */
  objCnt?: number;

  /**
   * 객관식 개당 점수
   * @format double
   */
  objScore?: number;

  /**
   * 상태 1 또는 -1
   * @format int32
   */
  status?: number;

  /**
   * 주관식 개당 개수
   * @format int32
   */
  subCnt?: number;

  /**
   * 주관식 개당 점수
   * @format double
   */
  subScore?: number;
}

export interface ExamUser {
  /** @format date-time */
  confirmDtime?: string;

  /** @format int64 */
  confirmUserSeq?: number;
  confirmYn?: string;
  courseUser?: CourseUser;

  /** @format date-time */
  createdDtime?: string;
  feedback?: string;

  /** @format date-time */
  modifiedDtime?: string;
  regTutorIp?: string;
  regUserIp?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;

  /** @format date-time */
  submitDtime?: string;
  submitYn?: string;

  /** @format double */
  totalScore?: number;
}

export interface ExamUserRequestDto {
  /**
   * 채점날짜
   * @format date-time
   */
  confirmDtime?: string;

  /**
   * 채점한 사람
   * @format int64
   */
  confirmUserSeq?: number;

  /** 채점 여부 */
  confirmYn?: string;

  /**
   * 시험 유저 채점 시퀀스
   * @format int64
   */
  examUserSeq?: number;

  /** 내용 마크다운 */
  feedback?: string;

  /** 채점 유저 IP */
  regTutorIp?: string;

  /** 유저 IP */
  regUserIp?: string;

  /**
   * 제출날짜
   * @format date-time
   */
  submitDtime?: string;

  /** 제출 여부 */
  submitYn?: string;

  /**
   * 총 점수
   * @format double
   */
  totalScore?: number;
}

export interface ExamUserResponseDto {
  /**
   * 채점날짜
   * @format date-time
   */
  confirmDtime?: string;

  /**
   * 채점한 사람
   * @format int64
   */
  confirmUserSeq?: number;

  /** 채점 여부 */
  confirmYn?: string;

  /**
   * 생성 날짜
   * @format date-time
   */
  createdDtime?: string;

  /** 내용 마크다운 */
  feedback?: string;

  /**
   * 수정 날짜
   * @format date-time
   */
  modifiedDtime?: string;

  /** 유저 IP */
  regUserIp?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 제출날짜
   * @format date-time
   */
  submitDtime?: string;

  /** 제출 여부 */
  submitYn?: string;

  /**
   * 총 점수
   * @format double
   */
  totalScore?: number;
}

export interface ExampleHtmlSaveRequestDto {
  html?: string;
}

export interface ExampleMultipartCompleteResponseDto {
  result?: CompleteMultipartUploadResult;
}

export interface ExampleMultipartEtagResponseDto {
  /** eTag */
  partETag?: PartETag;
}

export interface ExampleMultipartResponseDto {
  /** 인코딩된 파일 이름 */
  encFileName?: string;

  /** 업로드 요청 키 */
  uploadRequestKey?: string;
}

export interface ExampleResponseDto {
  /** @format int64 */
  seq?: number;
  title?: string;
}

export interface ExampleSaveRequestDto {
  title?: string;
}

export interface File {
  /** @format date-time */
  createdDtime?: string;

  /** @format int32 */
  downloadCnt?: number;
  fileName?: string;
  filePath?: string;

  /** @format int64 */
  fileSize?: number;
  fileType?: string;

  /** @format date-time */
  modifiedDtime?: string;
  realFileName?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
}

export interface FileMultipartCompleteRequestDto {
  /**
   * 업로드 타입에 대한 데이터(레슨 등) 시퀀스
   * @format int64
   */
  dataSeq?: number;

  /** 경로와 인코딩된 파일명 */
  encFileName?: string;
  etagList?: CustomPartETagsDto[];

  /** 오리지널 파일명 */
  fileOriginalName?: string;

  /** 업로드 키 */
  uploadRequestKey?: string;

  /** 업로드 타입 Enum */
  uploadType?:
    | "RESOURCE_COURSE_IMAGE"
    | "RESOURCE_COURSE_VIDEO"
    | "RESOURCE_IMAGE"
    | "RESOURCE_VIDEO"
    | "RESOURCE_HOMEWORK_FILE"
    | "RESOURCE_FORUM_FILE"
    | "RESOURCE_LIBRARY_FILE"
    | "RESOURCE_LESSON_FILE"
    | "RESOURCE_POST_NOTICE_FILE"
    | "RESOURCE_POST_QUESTION_FILE"
    | "RESOURCE_POST_FAQ_FILE"
    | "RESOURCE_POST_REVIEW_FILE"
    | "RESOURCE_POST_GUIDE_AUTH"
    | "RESOURCE_POST_GUIDE_EDU_REG"
    | "RESOURCE_POST_GUIDE_EDU_LEARNING"
    | "RESOURCE_BANNER_FILE"
    | "RESOURCE_QNA_FILE"
    | "RESOURCE_QNA_ANSWER_FILE"
    | "RESOURCE_LEARNING_MATERIAL_FILE"
    | "RESOURCE_USER_PROFILE_FILE"
    | "RESOURCE_USER_CERTIFICATES";
}

export interface FileMultipartCreateRequestDto {
  /** 파일 타입 */
  fileContentType?: string;

  /** 파일 이름 */
  fileOriginalName?: string;

  /** 업로드 타입 Enum */
  uploadType?:
    | "RESOURCE_COURSE_IMAGE"
    | "RESOURCE_COURSE_VIDEO"
    | "RESOURCE_IMAGE"
    | "RESOURCE_VIDEO"
    | "RESOURCE_HOMEWORK_FILE"
    | "RESOURCE_FORUM_FILE"
    | "RESOURCE_LIBRARY_FILE"
    | "RESOURCE_LESSON_FILE"
    | "RESOURCE_POST_NOTICE_FILE"
    | "RESOURCE_POST_QUESTION_FILE"
    | "RESOURCE_POST_FAQ_FILE"
    | "RESOURCE_POST_REVIEW_FILE"
    | "RESOURCE_POST_GUIDE_AUTH"
    | "RESOURCE_POST_GUIDE_EDU_REG"
    | "RESOURCE_POST_GUIDE_EDU_LEARNING"
    | "RESOURCE_BANNER_FILE"
    | "RESOURCE_QNA_FILE"
    | "RESOURCE_QNA_ANSWER_FILE"
    | "RESOURCE_LEARNING_MATERIAL_FILE"
    | "RESOURCE_USER_PROFILE_FILE"
    | "RESOURCE_USER_CERTIFICATES";
}

export interface FileMultipartCreateResponseDto {
  /** 인코딩된 파일 이름 */
  encFileName?: string;

  /** 업로드 요청 키 */
  uploadRequestKey?: string;
}

export interface FileMultipartUploadResponseDto {
  /** 개별 eTag */
  partETag?: PartETag;
}

export interface FileRequestDto {
  /**
   * 파일 다운로드 수
   * @format int32
   */
  downloadCnt?: number;

  /** 파일 이름 */
  name?: string;

  /** S3 파일 경로 */
  path?: string;

  /** S3 파일명 */
  realName?: string;

  /**
   * 파일 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * S3 파일 사이즈
   * @format int64
   */
  size?: number;

  /** S3 파일 타입 */
  type?: string;
}

export interface FileResponseDto {
  /**
   * 파일 다운로드 수
   * @format int32
   */
  downloadCnt?: number;

  /** 파일 이름 */
  name?: string;

  /** S3 파일 경로 */
  path?: string;

  /** S3 파일명 */
  realName?: string;

  /**
   * 파일 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * S3 파일 사이즈
   * @format int64
   */
  size?: number;

  /** S3 파일 타입 */
  type?: string;
}

export interface FileSeqListRequestDto {
  fileSeqList?: number[];
}

export interface ForumCommentResponseDto {
  /** 토론 댓글 내용 */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 게시글 시퀀스
   * @format int64
   */
  forumSeq?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 부모 댓글 시퀀스 (대댓글일 시)
   * @format int64
   */
  reference?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 삭제 여부
   * @format int32
   */
  status?: number;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 작성자 아이디 */
  username?: string;
}

export interface ForumCommentSaveRequestDto {
  /** 토론 댓글 내용 */
  content?: string;

  /**
   * 게시글 시퀀스
   * @format int64
   */
  forumSeq?: number;

  /**
   * 부모 댓글 시퀀스 (대댓글일 시)
   * @format int64
   */
  reference?: number;
}

export interface ForumCommentUpdateRequestDto {
  /** 토론 댓글 내용 */
  content?: string;
}

export interface ForumDetailResponseDto {
  /** 토론 내용 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 생성자 아이피 */
  regIp?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 토론 제목 */
  subject?: string;

  /** 수정자 아이피 */
  updIp?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

export interface ForumResponseDto {
  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 생성자 아이피 */
  regIp?: string;

  /** s3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 토론 제목 */
  subject?: string;

  /** 수정자 아이피 */
  updIp?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

export interface ForumSaveRequestDto {
  /** 토론 내용 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 토론 제목 */
  subject?: string;
}

export interface ForumUpdateRequestDto {
  /** 토론 내용 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /** S3 파일 */
  s3Files?: FileRequestDto[];

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 토론 제목 */
  subject?: string;
}

export interface HomeworkDetailResponseDto {
  /** 모범답안 */
  bestAnswer?: string;

  /** 과제 내용 마크다운 */
  content?: string;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 점수규칙 */
  markingRole?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 사용 여부
   * @format int32
   */
  status?: number;

  /** 과제 이름 */
  subject?: string;
}

export interface HomeworkResponseDto {
  /** 모범답안 */
  bestAnswer?: string;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 점수규칙 */
  markingRole?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 사용 여부
   * @format int32
   */
  status?: number;

  /** 과제 이름 */
  subject?: string;
}

export interface HomeworkSaveRequestDto {
  /** 모범 답안 */
  bestAnswer?: string;

  /** 과제 내용 마크다운 */
  content?: string;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 점수 규칙 */
  markingRole?: string;

  /**
   * 사용 상태
   * @format int32
   */
  status?: 1 | -1;

  /** 과제 이름 */
  subject?: string;
}

export interface HomeworkUpdateRequestDto {
  /** 모범 답안 */
  bestAnswer?: string;

  /** 과제 내용 마크다운 */
  content?: string;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 점수 규칙 */
  markingRole?: string;

  /** S3 파일 */
  s3Files?: FileRequestDto[];

  /**
   * 사용 상태
   * @format int32
   */
  status?: 1 | -1;

  /** 과제 이름 */
  subject?: string;
}

export type InputStream = object;

export interface LearningMaterialResponseDto {
  /** 내용 */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 자료 상세 타입 -> 연령별교수학습 및 타기관자료학습만 해당 */
  materialSubType?: "TYPE_CHILDREN" | "TYPE_TEENAGER" | "TYPE_ELDERLY" | "TYPE_SELF_DRIVING";

  /** 자료 타입 */
  materialType?: "TYPE_BY_AGE" | "TYPE_EDUCATIONAL" | "TYPE_VIDEO" | "TYPE_OTHER_ORGAN";

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 영상 출처 -> 교육영상 유튜브 링크만 해당 */
  origin?: string;

  /** S3 파일 정보 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: 1 | -1;

  /** 제목 */
  title?: string;
}

export interface LearningMaterialSaveRequestDto {
  /** 내용 */
  content?: string;

  /** 자료 상세 타입 -> 연령별교수학습 및 타기관자료학습만 해당 */
  materialSubType?: "TYPE_CHILDREN" | "TYPE_TEENAGER" | "TYPE_ELDERLY" | "TYPE_SELF_DRIVING";

  /** 자료 타입 */
  materialType?: "TYPE_BY_AGE" | "TYPE_EDUCATIONAL" | "TYPE_VIDEO" | "TYPE_OTHER_ORGAN";

  /** 영상 출처 -> 교육영상 유튜브 링크만 해당 */
  origin?: string;

  /**
   * 상태
   * @format int32
   */
  status?: 1 | -1;

  /** 제목 */
  title?: string;
}

export interface LearningMaterialUpdateRequestDto {
  /** 내용 */
  content?: string;

  /** 자료 상세 타입 -> 연령별교수학습 및 타기관자료학습만 해당 */
  materialSubType?: "TYPE_CHILDREN" | "TYPE_TEENAGER" | "TYPE_ELDERLY" | "TYPE_SELF_DRIVING";

  /** 자료 타입 */
  materialType?: "TYPE_BY_AGE" | "TYPE_EDUCATIONAL" | "TYPE_VIDEO" | "TYPE_OTHER_ORGAN";

  /** 영상 출처 -> 교육영상 유튜브 링크만 해당 */
  origin?: string;

  /**
   * 상태
   * @format int32
   */
  status?: 1 | -1;

  /** 제목 */
  title?: string;
}

export interface Lesson {
  /** @format int32 */
  chapter?: number;

  /** @format double */
  completeTime?: number;

  /** @format int64 */
  contentSeq?: number;
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /** @format date-time */
  createdDtime?: string;
  files?: File[];
  lessonNm?: string;

  /** @format int32 */
  min?: number;
  mobileUrl?: string;

  /** @format date-time */
  modifiedDtime?: string;
  pcUrl?: string;

  /** @format int32 */
  sec?: number;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;

  /** @format int32 */
  totalPage?: number;

  /** @format double */
  totalTime?: number;
}

export interface LessonDetailClientResponseDto {
  /**
   * 차시 (1차시, 2차시 ... N차시)
   * @format int32
   * @example 3
   */
  chapter?: number;

  /**
   * 수료 시간 sec 단위
   * @format double
   * @example 1532
   */
  completeTime?: number;

  /** 유저 수강 완료 여부 */
  completedYn?: "Y" | "N";

  /** 레슨 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /**
   * 생성일시
   * @format date-time
   */
  createdDtime?: string;

  /** 레슨 이름 */
  lessonNm?: string;

  /**
   * 총 시간 분 단위 파트
   * @format int32
   */
  min?: number;

  /**
   * 수정일시
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 차시 진도율
   * @format double
   */
  progressRatio?: number;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 총 시간 초 단위 파트
   * @format int32
   */
  sec?: number;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태 -1->중지 1->사용
   * @format int32
   */
  status?: number;

  /**
   * 마지막 학습 시간
   * @format double
   */
  studyLastTime?: number;

  /**
   * 총 시간 sec 단위
   * @format double
   * @example 1532
   */
  totalTime?: number;
}

export interface LessonDetailResponseDto {
  /**
   * 차시 (1차시, 2차시 ... N차시)
   * @format int32
   * @example 3
   */
  chapter?: number;

  /**
   * 수료 시간 sec 단위
   * @format double
   * @example 1532
   */
  completeTime?: number;

  /**
   * 콘텐트 높이
   * @format int32
   * @example 720
   */
  contentHeight?: number;

  /**
   * 콘텐트 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 레슨 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /**
   * 콘텐트 폭
   * @format int32
   * @example 1280
   */
  contentWidth?: number;

  /**
   * 생성일시
   * @format date-time
   */
  createdDtime?: string;

  /** 파일 이름 */
  fileName?: string;

  /** 레슨 이름 */
  lessonNm?: string;

  /**
   * 총 시간 분 단위 파트
   * @format int32
   */
  min?: number;

  /** 모바일 경로 */
  mobileUrl?: string;

  /**
   * 수정일시
   * @format date-time
   */
  modifiedDtime?: string;

  /** PC 경로 */
  pcUrl?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 총 시간 초 단위 파트
   * @format int32
   */
  sec?: number;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태 -1->중지 1->사용
   * @format int32
   */
  status?: number;

  /**
   * 총 페이지
   * @format int32
   * @example 12
   */
  totalPage?: number;

  /**
   * 총 시간 sec 단위
   * @format double
   * @example 1532
   */
  totalTime?: number;
}

export interface LessonResponseDto {
  /**
   * 정렬 (1차시, 2차시 ... N차시)
   * @format int32
   * @example 3
   */
  chapter?: number;

  /**
   * 수료 시간 sec 단위
   * @format double
   * @example 1532
   */
  completeTime?: number;

  /**
   * 콘텐트 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 레슨 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /**
   * 생성일시
   * @format date-time
   */
  createdDtime?: string;

  /** 파일 이름 */
  fileName?: string;

  /** 레슨 이름 */
  lessonNm?: string;

  /**
   * 총 시간 분 단위 파트
   * @format int32
   */
  min?: number;

  /** 모바일 경로 */
  mobileUrl?: string;

  /**
   * 수정일시
   * @format date-time
   */
  modifiedDtime?: string;

  /** PC 경로 */
  pcUrl?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 총 시간 초 단위 파트
   * @format int32
   */
  sec?: number;

  /**
   * 레슨 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태 -1->중지 1->사용
   * @format int32
   */
  status?: number;

  /**
   * 총 페이지
   * @format int32
   * @example 12
   */
  totalPage?: number;

  /**
   * 총 시간 sec 단위
   * @format double
   * @example 1532
   */
  totalTime?: number;
}

export interface LessonSaveRequestDto {
  /**
   * 정렬 (1차시, 2차시 ... N차시)
   * @format int32
   * @example 3
   */
  chapter?: number;

  /**
   * 수료 시간 sec 단위
   * @format double
   * @example 1532
   */
  completeTime?: number;

  /**
   * 콘텐트 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 레슨 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";

  /** 레슨 이름 */
  lessonNm?: string;

  /**
   * 총 시간 분 단위 파트
   * @format int32
   */
  min?: number;

  /** 모바일 경로 */
  mobileUrl?: string;

  /** PC 경로 */
  pcUrl?: string;

  /**
   * 총 시간 초 단위 파트
   * @format int32
   */
  sec?: number;

  /**
   * 총 페이지
   * @format int32
   * @example 12
   */
  totalPage?: number;

  /**
   * 총 시간 sec 단위
   * @format double
   * @example 1532
   */
  totalTime?: number;
}

export interface LessonUpdateRequestDto {
  /**
   * 차시 (1차시, 2차시 ... N차시)
   * @format int32
   * @example 3
   */
  chapter?: number;

  /**
   * 수료 시간 sec 단위
   * @format double
   * @example 1532
   */
  completeTime?: number;

  /** 레슨 타입 */
  contentType?: "CONTENT_HTML" | "CONTENT_MP4" | "CONTENT_EXTERNAL";
  file?: File[];

  /** 레슨 이름 */
  lessonNm?: string;

  /**
   * 총 시간 분 단위 파트
   * @format int32
   */
  min?: number;

  /** S3 파일 */
  s3Files?: FileRequestDto[];

  /**
   * 총 시간 초 단위 파트
   * @format int32
   */
  sec?: number;

  /**
   * 사용 여부 -1 또는 1
   * @format int32
   * @example 1
   */
  status?: number;

  /**
   * 총 페이지
   * @format int32
   * @example 12
   */
  totalPage?: number;

  /**
   * 총 시간 sec 단위
   * @format double
   * @example 1532
   */
  totalTime?: number;
}

export interface LibraryDetailResponseDto {
  /** 강의 자료 내용 마크다운 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 조회수
   * @format int32
   */
  hit?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 작성자 IP */
  regIp?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 강의 자료 제목 */
  subject?: string;

  /** 수정자 IP */
  updIp?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

export interface LibraryResponseDto {
  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 조회수
   * @format int32
   */
  hit?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 작성자 IP */
  regIp?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 강의 자료 제목 */
  subject?: string;

  /** 수정자 IP */
  updIp?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

export interface LibrarySaveRequestDto {
  /** 강의 자료 내용 마크다운 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 강의 자료 제목 */
  subject?: string;
}

export interface LibraryUpdateRequestDto {
  /** 강의 자료 내용 마크다운 */
  content?: string;

  /** S3 파일 */
  s3Files?: FileRequestDto[];

  /** 강의 자료 제목 */
  subject?: string;
}

export interface MainDisplayResponseDto {
  /** 버튼 타입 Enum */
  mainDisplayType?:
    | "EDUCATION_TRANSPORT_WORKER"
    | "EDUCATION_GROUND_BUS_DRIVER"
    | "EDUCATION_PROVINCIAL_TRAFFIC_SAFETY";

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태 여부
   * @format int32
   */
  status?: 1 | -1;
}

export interface MainDisplayUpdateRequestDto {
  /** 버튼 타입 Enum */
  mainDisplayType?:
    | "EDUCATION_TRANSPORT_WORKER"
    | "EDUCATION_GROUND_BUS_DRIVER"
    | "EDUCATION_PROVINCIAL_TRAFFIC_SAFETY";

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태 여부
   * @format int32
   */
  status?: 1 | -1;
}

export interface MainDisplayUpdateResponseDto {
  /** 버튼 타입 Enum */
  mainDisplayType?:
    | "EDUCATION_TRANSPORT_WORKER"
    | "EDUCATION_GROUND_BUS_DRIVER"
    | "EDUCATION_PROVINCIAL_TRAFFIC_SAFETY";

  /**
   * 상태 여부
   * @format int32
   */
  status?: 1 | -1;
}

export interface MobileCourseClassResponseDto {
  /** 과정 클래스 리스트 */
  courseClassList?: CourseClassResponseDto[];

  /**
   * 일자
   * @format date
   * @example 2022-07-05
   */
  date?: string;
}

export interface MultipartUpload {
  /** @format date-time */
  initiated?: string;
  initiator?: Owner;
  key?: string;
  owner?: Owner;
  storageClass?: string;
  uploadId?: string;
}

export interface MultipartUploadListing {
  bucketName?: string;
  commonPrefixes?: string[];
  delimiter?: string;
  encodingType?: string;
  keyMarker?: string;

  /** @format int32 */
  maxUploads?: number;
  multipartUploads?: MultipartUpload[];
  nextKeyMarker?: string;
  nextUploadIdMarker?: string;
  prefix?: string;
  truncated?: boolean;
  uploadIdMarker?: string;
}

export interface NicePhoneResultResponseDto {
  /** 이름 */
  name?: string;

  /** UUID 시퀀스값 */
  requestNo?: string;

  /**
   * 결과 코드 :: 0000 성공
   * 0003	기타인증오류
   * 0010	인증번호 불일치(소켓)
   * 0012	요청정보오류(입력값오류)
   * 0013	암호화 시스템 오류
   * 0014	암호화 처리 오류
   * 0015	암호화 데이터 오류
   * 0016	복호화 처리 오류
   * 0017	복호화 데이터 오류
   * 0018	통신오류
   * 0019	데이터베이스 오류
   * 0020	유효하지않은 CP코드
   * 0021	중단된 CP코드
   * 0022	휴대전화본인확인 사용불가 CP코드
   * 0023	미등록 CP코드
   * 0031	유효한 인증이력 없음
   * 0035	기인증완료건(소켓)
   * 0040	본인확인차단고객(통신사)
   * 0041	인증문자발송차단고객(통신사)
   * 0050	NICE 명의보호서비스 이용고객차단
   * 0052	부정사용차단
   * 0070	간편인증앱 미설치
   * 0071	앱인증 미완료
   * 0072	간편인증 처리중 오류
   * 0073	간편인증앱 미설치(LG U+ Only)
   * 0074	간편인증앱 재설치필요
   * 0075	간편인증사용불가-스마트폰아님
   * 0076	간편인증앱 미설치
   * 0078	14세 미만 인증 오류
   * 0079	간편인증 시스템 오류
   * 9097	인증번호 3회 불일치
   *
   */
  resultCode?: string;
}

export interface Owner {
  displayName?: string;
  id?: string;
}

export interface PartETag {
  etag?: string;

  /** @format int32 */
  partNumber?: number;
}

export interface PostCommentResponseDto {
  /** 댓글 내용 */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 게시글 시퀀스
   * @format int64
   */
  postSeq?: number;

  /**
   * 부모 댓글 시퀀스 (대댓글일 시)
   * @format int64
   */
  reference?: number;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 삭제 여부
   * @format int32
   */
  status?: number;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 작성자 아이디 */
  username?: string;
}

export interface PostCommentSaveRequestDto {
  /** 댓글 내용 */
  content?: string;

  /**
   * 게시글 시퀀스
   * @format int64
   */
  postSeq?: number;

  /**
   * 부모 댓글 시퀀스 (대댓글일 시)
   * @format int64
   */
  reference?: number;
}

export interface PostCommentUpdateRequestDto {
  /** 게시글 댓글 내용 */
  content?: string;
}

export interface PostDetailResponseDto {
  /** 타입 구분 */
  boardType?:
    | "TYPE_NOTICE"
    | "TYPE_REVIEW"
    | "TYPE_FAQ"
    | "TYPE_GUIDE_AUTH"
    | "TYPE_GUIDE_EDU_REGI"
    | "TYPE_GUIDE_EDU_LEARNING";

  /** 내용 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 조회수
   * @format int32
   */
  hit?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 공지 상단 노출 여부 - 공지만 해당, 이외는 N */
  noticeYn?: string;

  /** 공개여부 */
  publicYn?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 삭제 여부
   * @format int32
   */
  status?: 1 | -1;

  /** 제목 */
  subject?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 유저 아이디 */
  username?: string;
}

export interface PostResponseDto {
  /** 타입 구분 */
  boardType?:
    | "TYPE_NOTICE"
    | "TYPE_REVIEW"
    | "TYPE_FAQ"
    | "TYPE_GUIDE_AUTH"
    | "TYPE_GUIDE_EDU_REGI"
    | "TYPE_GUIDE_EDU_LEARNING";

  /** 내용 */
  content?: string;

  /**
   * 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 생성일 - yyyy. MM. dd. 형식 */
  createdDtimeYmd?: string;

  /**
   * 조회수
   * @format int32
   */
  hit?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 공지 상단 노출 여부 - 공지만 해당, 이외는 N */
  noticeYn?: string;

  /** 공개여부 */
  publicYn?: string;

  /** S3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 삭제 여부
   * @format int32
   */
  status?: 1 | -1;

  /** 제목 */
  subject?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 유저 아이디 */
  username?: string;
}

export interface PostSaveRequestDto {
  /** 타입 구분 */
  boardType?:
    | "TYPE_NOTICE"
    | "TYPE_REVIEW"
    | "TYPE_FAQ"
    | "TYPE_GUIDE_AUTH"
    | "TYPE_GUIDE_EDU_REGI"
    | "TYPE_GUIDE_EDU_LEARNING";

  /** 내용 */
  content?: string;

  /**
   * 과정 시퀀스, 0이면 과정 없음(0->전역적으로 보여져야하는 게시글만 해당, 공지, 자주묻는 질문, 가이드 등)
   * @format int64
   */
  courseSeq?: number;

  /** 공지 상단 노출 여부 - 공지만 해당, 이외는 N */
  noticeYn?: "Y" | "N";

  /** 공개여부 */
  publicYn?: "Y" | "N";

  /** 제목 */
  subject?: string;
}

export interface PostUpdateRequestDto {
  /** 내용 */
  content?: string;

  /** 공지 상단 노출 여부 - 공지만 해당, 이외는 N */
  noticeYn?: "Y" | "N";

  /** 공개 여부 */
  publicYn?: "Y" | "N";

  /** S3 파일 */
  s3Files?: FileRequestDto[];

  /** 제목 */
  subject?: string;
}

export interface QnaAnswerResponseDto {
  /** 답변 내용 */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** S3 파일 리스트 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface QnaAnswerSaveRequestDto {
  /**
   * 답변 내용
   * @example 답변 내용입니다.
   */
  content?: string;
}

export interface QnaResponseDto {
  /** 답변 여부 */
  answeredYn?: string;

  /** 문의 내용 */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 답변 내용 */
  qnaAnswer?: QnaAnswerResponseDto;

  /** S3 파일 리스트 */
  s3Files?: FileResponseDto[];

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 문의 제목 */
  title?: string;

  /** 문의 유형 Enum */
  type?: "TYPE_SIGNUP_OR_SIGNIN" | "TYPE_EDU_OR_COMPLETE" | "TYPE_WEB_OR_APP" | "TYPE_ETC";

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

export interface QnaSaveRequestDto {
  /**
   * 문의 내용
   * @example 1:1 문의 내용입니다.
   */
  content?: string;

  /**
   * 문의자 휴대번호
   * @example 01012345678
   */
  phone?: string;

  /**
   * SMS 수신 동의 여부
   * @example Y
   */
  smsYn?: string;

  /**
   * 문의 제목
   * @example 1:1 문의 제목
   */
  title?: string;

  /** 문의 유형 Enum */
  type?: "TYPE_SIGNUP_OR_SIGNIN" | "TYPE_EDU_OR_COMPLETE" | "TYPE_WEB_OR_APP" | "TYPE_ETC";
}

export interface QuestionResponseDto {
  /** 정답 */
  answer?: string;

  /**
   * 차시
   * @format int32
   */
  chapter?: number;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 정답 설명 - 255자 */
  description?: string;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /**
   * 난이도
   * LEVEL_EASY: 쉬움
   * LEVEL_MEDIUM: 중간
   * LEVEL_HARD: 어려움
   */
  level?: "LEVEL_EASY" | "LEVEL_MEDIUM" | "LEVEL_HARD";

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 질문 내용 */
  question?: string;

  /**
   * 시험 타입
   * QUESTION_OBJ: 객관식
   * QUESTION_SUBJ: 주관식
   */
  questionType?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface QuestionSaveRequestDto {
  /** 정답 */
  answer?: string;

  /**
   * 차시
   * @format int32
   */
  chapter?: number;

  /**
   * 콘텐츠 시퀀스
   * @format int64
   */
  contentSeq?: number;

  /** 정답 설명 - 255자 */
  description?: string;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /**
   * 난이도
   * LEVEL_EASY: 쉬움
   * LEVEL_MEDIUM: 중간
   * LEVEL_HARD: 어려움
   */
  level?: "LEVEL_EASY" | "LEVEL_MEDIUM" | "LEVEL_HARD";

  /** 질문 내용 */
  question?: string;

  /**
   * 시험 타입
   * QUESTION_OBJ: 객관식
   * QUESTION_SUBJ: 주관식
   */
  questionType?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface QuestionUpdateRequestDto {
  /** 정답 */
  answer?: string;

  /**
   * 차시
   * @format int32
   */
  chapter?: number;

  /** 정답 설명 - 255자 */
  description?: string;

  /** 보기 1 제목 */
  item1?: string;

  /** 보기 2 제목 */
  item2?: string;

  /** 보기 3 제목 */
  item3?: string;

  /** 보기 4 제목 */
  item4?: string;

  /** 보기 5 제목 */
  item5?: string;

  /**
   * 보기 개수
   * @format int32
   */
  itemCnt?: number;

  /** 난이도 */
  level?: "LEVEL_EASY" | "LEVEL_MEDIUM" | "LEVEL_HARD";

  /** 질문 내용 */
  question?: string;

  /** 시험 타입 */
  questionType?: "QUESTION_OBJ" | "QUESTION_SUBJ";

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface Resource {
  description?: string;
  file?: File;
  filename?: string;
  inputStream?: InputStream;
  open?: boolean;
  readable?: boolean;
  uri?: URI;
  url?: URL;
}

export interface RoleUpdateRequestDto {
  roles?: (
    | "ROLE_TRANS_USER"
    | "ROLE_TRANS_MANAGER"
    | "ROLE_TRAFFIC_SAFETY_USER"
    | "ROLE_TRAFFIC_SAFETY_MANAGER"
    | "ROLE_ADMIN"
  )[];
  username?: string;
}

export interface SignInRequestDto {
  /**
   * 로그인 유형
   *  * TYPE_TRANS_EDU: 운수/저상
   *  * TYPE_TRAFFIC_SAFETY_EDU: 도민교통
   */
  loginType?: "TYPE_TRANS_EDU" | "TYPE_TRAFFIC_SAFETY_EDU";

  /** 유저 실명 - 운수/저상 로그인 유형인 경우만 해당 */
  name?: string;

  /** 유저 패스워드 */
  password?: string;

  /** 유저 아이디 */
  username?: string;
}

export interface SignInResponseDto {
  /** Access Token */
  accessToken?: string;

  /** Fake Refresh Token */
  refreshToken?: string;

  /** 유저 권한 */
  roles?: string[];

  /** Authorization Type */
  type?: string;

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 유저 아이디 */
  username?: string;
}

export interface SignUpRequestDto {
  /** 이메일 - 도민 */
  email?: string;

  /**
   * 유저 이메일수신동의여부 - 도민
   * @example N
   */
  emailYn?: string;

  /** 유저 실명 - 운수/저상, 도민 */
  name?: string;

  /** 유저 비밀번호 - 운수/저상의 경우 주민등록번호 */
  password?: string;

  /** 유저 휴대폰 번호 - 도민 */
  phone?: string;

  /**
   * 가입 카테고리 Enum
   *  * TYPE_TRANS_EDU: 운수/저상
   *  * TYPE_TRAFFIC_SAFETY_EDU: 도민교통
   */
  regCategory?: "TYPE_TRANS_EDU" | "TYPE_TRAFFIC_SAFETY_EDU";

  /**
   * 유저 SMS수신동의여부 - 도민
   * @example N
   */
  smsYn?: string;

  /** 유저 아이디 - 운수/저상의 경우 주민등록번호 */
  username?: string;
}

export interface SpecificQuestionInExamTabResponseDto {
  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 난이도
   * @format int32
   */
  level?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 문제 제목 */
  questionTitle?: string;

  /**
   * 문제 유형
   * @format int32
   */
  questionType?: number;

  /**
   * 문항 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface Survey {
  course?: Course;

  /** @format date-time */
  createdDtime?: string;

  /** @format int32 */
  itemCnt?: number;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  surveyQuestionList?: SurveyQuestion[];
  title?: string;
}

export interface SurveyMultipleChoice {
  /** @format date-time */
  createdDtime?: string;
  item1?: string;
  item10?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
  item6?: string;
  item7?: string;
  item8?: string;
  item9?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  surveyMultipleChoiceResultList?: SurveyMultipleChoiceResult[];
  surveyQuestion?: SurveyQuestion;
}

export interface SurveyMultipleChoiceRequestDto {
  /** 문항 1 */
  item1?: string;

  /** 문항 10 */
  item10?: string;

  /** 문항 2 */
  item2?: string;

  /** 문항 3 */
  item3?: string;

  /** 문항 4 */
  item4?: string;

  /** 문항 5 */
  item5?: string;

  /** 문항 6 */
  item6?: string;

  /** 문항 7 */
  item7?: string;

  /** 문항 8 */
  item8?: string;

  /** 문항 9 */
  item9?: string;
}

export interface SurveyMultipleChoiceResponseDto {
  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 문항 1 */
  item1?: string;

  /** 문항 10 */
  item10?: string;

  /** 문항 2 */
  item2?: string;

  /** 문항 3 */
  item3?: string;

  /** 문항 4 */
  item4?: string;

  /** 문항 5 */
  item5?: string;

  /** 문항 6 */
  item6?: string;

  /** 문항 7 */
  item7?: string;

  /** 문항 8 */
  item8?: string;

  /** 문항 9 */
  item9?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;
}

export interface SurveyMultipleChoiceResult {
  /** @format int32 */
  answer?: number;
  courseUser?: CourseUser;

  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  surveyMultipleChoice?: SurveyMultipleChoice;
}

export interface SurveyParticipantQuestionRequestDto {
  /**
   * 사용자가 선택한 문항 인덱스(문자열) 또는 주관식에 대한 답변
   * (item1~item10)
   * item1: 1
   * item2: 2
   * itemN: N
   *
   * @example 3 또는 주관식일 경우 '나는 집에 가고 싶다 등'
   */
  answer?: string;

  /** 객관식 기타일 경우 이에 대한 답변 */
  etcAnswer?: string;

  /**
   * 설문에 대한 질문 시퀀스
   * @format int64
   */
  surveyQuestionSeq?: number;
}

export interface SurveyParticipateRequestDto {
  /**
   * 설문 질문에 대한 답변 리스트
   * @example [{"answer":"6","etcAnswer":"기타는 영어로 Guitar -> 이건 객관식인데 기타에 해당하는 문항 눌렀을 때, 바로 밑에건 객관식에 객관식 문항 선택했을 때","surveyQuestionSeq":61},{"answer":"1","surveyQuestionSeq":62},{"answer":"아 만들기 힘들다 -> 이건 주관식 바로 위에건 객관식 ","surveyQuestionSeq":63}]
   */
  answerList?: SurveyParticipantQuestionRequestDto[];

  /**
   * 유저 과정 신청 시퀀스
   * @format int64
   * @example 3
   */
  courseUserSeq?: number;

  /**
   * 설문 시퀀스
   * @format int64
   * @example 20
   */
  surveySeq?: number;
}

export interface SurveyQuestion {
  content?: string;

  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  modifiedDtime?: string;
  questionType?: "TYPE_MULTIPLE_CHOICE" | "TYPE_SUBJECTIVE";

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  survey?: Survey;
  surveyMultipleChoice?: SurveyMultipleChoice;
}

export interface SurveyQuestionRequestDto {
  /**
   * 질문 내용
   * @example 나는 이번 교육을 통해 ~를 잘 이해했다.
   */
  content?: string;

  /** 질문 타입 */
  questionType?: "TYPE_MULTIPLE_CHOICE" | "TYPE_SUBJECTIVE";

  /** 질문 문항 (객관식일 경우) */
  surveyMultipleChoice?: SurveyMultipleChoiceRequestDto;
}

export interface SurveyQuestionResponseDto {
  /**
   * 질문 내용
   * @example 나는 이번 교육을 통해 ~를 잘 이해했다.
   */
  content?: string;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 질문 타입 */
  questionType?: "TYPE_MULTIPLE_CHOICE" | "TYPE_SUBJECTIVE";

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 질문 문항 (객관식일 경우) */
  surveyMultipleChoice?: SurveyMultipleChoiceResponseDto;
}

export interface SurveyRequestDto {
  /** 설문 질문 리스트 */
  surveyQuestionList?: SurveyQuestionRequestDto[];

  /**
   * 설문 제목
   * @example 교육만족도 조사 설문
   */
  title?: string;
}

export interface SurveyResponseDto {
  /**
   * 연결된 과정 시퀀스
   * @format int64
   */
  courseSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /**
   * 문항 개수
   * @format int32
   * @example 7
   */
  itemCnt?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /**
   * 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 상태
   * @format int32
   */
  status?: number;

  /** 설문 질문 리스트 */
  surveyQuestionList?: SurveyQuestionResponseDto[];

  /**
   * 설문 제목
   * @example 교육만족도 조사 설문
   */
  title?: string;
}

export interface TermsResponseDto {
  /** 약관 내용 */
  content?: string;

  /**
   * 약관 시퀀스
   * @format int64
   */
  termsSeq?: number;

  /**
   * 약관 제목
   *  CONDITIONS_TERMS :: 이용 약관
   *  PERSONAL_INFORMATION_TERMS :: 개인정보 수집 및 이용 동의
   *  LOCATION_BASED_TERMS :: 위치기반 서비스 이용 약관
   */
  termsTypeEnums?: "CONDITIONS_TERMS" | "PERSONAL_INFORMATION_TERMS" | "LOCATION_BASED_TERMS";
}

export interface TermsSaveRequestDto {
  /** 약관 내용 */
  content?: string;

  /**
   * 약관 제목
   *  CONDITIONS_TERMS :: 이용 약관
   *  PERSONAL_INFORMATION_TERMS :: 개인정보 수집 및 이용 동의
   *  LOCATION_BASED_TERMS :: 위치기반 서비스 이용 약관
   */
  termsTypeEnums?: "CONDITIONS_TERMS" | "PERSONAL_INFORMATION_TERMS" | "LOCATION_BASED_TERMS";
}

export interface TermsUpdateRequestDto {
  /** 약관 내용 */
  content?: string;

  /**
   * 약관 제목
   *  CONDITIONS_TERMS :: 이용 약관
   *  PERSONAL_INFORMATION_TERMS :: 개인정보 수집 및 이용 동의
   *  LOCATION_BASED_TERMS :: 위치기반 서비스 이용 약관
   */
  termsTypeEnums?: "CONDITIONS_TERMS" | "PERSONAL_INFORMATION_TERMS" | "LOCATION_BASED_TERMS";
}

export interface URI {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;

  /** @format int32 */
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

export interface URL {
  authority?: string;
  content?: object;

  /** @format int32 */
  defaultPort?: number;
  deserializedFields?: URLStreamHandler;
  file?: string;
  host?: string;
  path?: string;

  /** @format int32 */
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;

  /** @format int32 */
  serializedHashCode?: number;
  userInfo?: string;
}

export type URLStreamHandler = object;

export interface User {
  birth?: string;
  courseUsers?: CourseUser[];

  /** @format date-time */
  createdDtime?: string;
  email?: string;
  emailYn?: string;
  failedYn?: string;
  files?: File[];
  gender?: string;
  identityNumber?: string;

  /** @format date-time */
  lastPwUpdDtime?: string;

  /** @format int32 */
  loginFailedCount?: number;

  /** @format date-time */
  modifiedDtime?: string;
  name?: string;
  phone?: string;
  pushToken?: string;
  regCategory?: "TYPE_TRANS_EDU" | "TYPE_TRAFFIC_SAFETY_EDU";

  /** @format int64 */
  seq?: number;
  smsYn?: string;

  /** @format int32 */
  status?: number;
  userProvincial?: UserProvincial;
  userTransport?: UserTransport;
  username?: string;
}

export interface UserDetailsImpl {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;

  /** 유저 생년월일 */
  birth?: string;

  /**
   * 유저 생성일
   * @format date-time
   */
  createdDtime?: string;
  credentialsNonExpired?: boolean;

  /** 유저 이메일 */
  email?: string;

  /** 유저 이메일수신동의여부 */
  emailYn?: string;
  enabled?: boolean;

  /** 유저 로그인 잠김여부 */
  failedYn?: string;

  /** 유저 성별 */
  gender?: string;

  /**
   * 유저 마지막 비밀번호 변경 일시
   * @format date-time
   */
  lastPwUpdDtime?: string;

  /** 현재 수강 중인 과정 DTO */
  learningCourses?: CourseUserMyInfoResponseDto[];

  /**
   * 유저 로그인 실패 횟수
   * @format int32
   */
  loginFailedCount?: number;

  /**
   * 유저 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 유저 실명 */
  name?: string;

  /** 유저 휴대폰 번호 */
  phone?: string;

  /** 유저 FCM 푸시토큰 */
  pushToken?: string;

  /** 유저 가입 카테고리 */
  regCategory?: "TYPE_TRANS_EDU" | "TYPE_TRAFFIC_SAFETY_EDU";

  /** 유저 권한 Enum */
  roles?: (
    | "ROLE_TRANS_USER"
    | "ROLE_TRANS_MANAGER"
    | "ROLE_TRAFFIC_SAFETY_USER"
    | "ROLE_TRAFFIC_SAFETY_MANAGER"
    | "ROLE_ADMIN"
  )[];

  /** 유저 프로필 S3 정보 */
  s3Files?: FileResponseDto[];

  /**
   * 유저 시퀀스
   * @format int64
   */
  seq?: number;

  /** 유저 SMS수신동의여부 */
  smsYn?: string;

  /** 유저 아이디 */
  username?: string;
}

export interface UserFindChangeRequestDto {
  /** 유저 실명 */
  name?: string;

  /** 유저 비밀번호 */
  password?: string;

  /** 유저 휴대번호 */
  phone?: string;

  /** 유저 아이디 */
  username?: string;
}

export interface UserFindIdRequestDto {
  /** 유저 실명 */
  name?: string;

  /** 유저 휴대번호 */
  phone?: string;
}

export interface UserFindIdResponseDto {
  /**
   * 유저 생성 날짜
   * @format date-time
   */
  createdDTime?: string;

  /** 유저 이름 */
  username?: string;
}

export interface UserFindPasswordRequestDto {
  /** 유저 실명 */
  name?: string;

  /** 유저 휴대번호 */
  phone?: string;

  /** 유저 아이디 */
  username?: string;
}

export interface UserFindPasswordResponseDto {
  /** 유저 실명 */
  name?: string;

  /** 유저 휴대번호 */
  phone?: string;

  /** 유저 아이디 */
  username?: string;
}

export interface UserInfoUpdateRequestDto {
  /** 유저 생년월일 */
  birth?: string;

  /** 이메일수신동의여부 */
  emailYn?: string;

  /** 유저 성별 */
  gender?: string;

  /** 유저 실명 */
  name?: string;

  /** 유저 패스워드 */
  password?: string;

  /** 유저 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;
}

export interface UserLoginHistoryResponseDto {
  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  modifiedDtime?: string;
  regIp?: string;

  /** @format int64 */
  seq?: number;

  /** @format int64 */
  userSeq?: number;
}

export interface UserModifyRequestDto {
  /** 이메일수신동의여부 */
  emailYn?: string;

  /** SMS수신동의여부 */
  smsYn?: string;
}

export interface UserModifyResponseDto {
  /** 유저 이메일수신동의여부 */
  emailYn?: string;

  /** 유저 SMS수신동의여부 */
  smsYn?: string;

  /** 유저 아이디 */
  username?: string;
}

export interface UserMyinfoCertificatesResponseDto {
  /** 수료 여부 */
  completeYn?: string;

  /**
   * 교육 분류, 보수/양성/신규 등
   *  * TYPE_SUP_COMMON -> 보수일반
   *  * TYPE_SUP_CONSTANT -> 보수수시
   *  * TYPE_CONSTANT -> 수시
   *  * TYPE_NEW -> 신규
   *  * TYPE_ILLEGAL -> 법령위반자
   *  * TYPE_HANDICAPPED -> 교통약자 이동편의 증진
   *  * TYPE_DANGEROUS -> 위험물진 운송차량 운전자
   */
  courseCategoryType?:
    | "TYPE_SUP_COMMON"
    | "TYPE_SUP_CONSTANT"
    | "TYPE_CONSTANT"
    | "TYPE_NEW"
    | "TYPE_ILLEGAL"
    | "TYPE_HANDICAPPED"
    | "TYPE_DANGEROUS";

  /** 썸네일 이미지 */
  courseFile?: string;

  /** 과정 이름 */
  courseName?: string;

  /**
   * 업종*   버스 - BUS
   *     전세버스 - CHARTER_BUS
   *     특수여객 - SPECIAL_PASSENGER
   *     법인택시 - CORPORATE_TAXI
   *     일반화물 - GENERAL_CARGO
   *     개인택시 - PRIVATE_TAXI
   *     개별화물 - INDIVIDUAL_CARGO
   *     용달화물 - CONSIGNMENT
   *     특별교통수단 - SPECIAL_TRANSPORTATION
   *     저상버스 - KNEELING_BUS
   *     위험물 - DANGEROUS_GOODS
   *     지정폐기물 - DESIGNATED_WASTE
   *     유해화학물질 - HAZARDOUS_CHEMICALS
   *     고압가스(가연성) - HIGH_PRESSURE_GAS_FLAMMABLE
   *     고압가스(독성) - HIGH_PRESSURE_GAS_TOXIC
   */
  courseSubCategoryType?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /**
   * 과정분류 운수종사자 / 저상버스
   *  * TYPE_TRANS_WOKER: 운수종사자
   *  * TYPE_LOW_FLOOR_BUS: 저상버스
   */
  courseType?: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";

  /**
   * 유저-과정 시퀀스
   * @format int64
   */
  courseUserSeq?: number;

  /**
   * 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 노출 여부 */
  displayYn?: string;

  /** 파일 이름 */
  fileName?: string;

  /**
   * 과정 수료 시간
   * @format int32
   */
  lessonTime?: number;

  /**
   * 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** s3 파일 */
  s3Files?: FileResponseDto[];

  /**
   * 과정 시퀀스
   * @format int64
   */
  seq?: number;

  /**
   * 사용 상태
   * @format int32
   */
  status?: number;
}

export interface UserPasswordModifyRequestDto {
  /** 현재 사용자 비밀번호 */
  currentPw?: string;

  /** 변경할 사용자 비밀번호 */
  modifiedPw?: string;
}

export interface UserProvincial {
  company?: string;

  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  user?: User;
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";
}

export interface UserProvincialFindResponseDto {
  /** 회사 */
  company?: string;

  /** 이메일 */
  email?: string;

  /** 이름 */
  name?: string;

  /** 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;

  /** 지역등록 */
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /** 아이디 */
  username?: string;
}

export interface UserProvincialUpdateRequestDto {
  /** 회사 */
  company?: string;

  /** 이메일 */
  email?: string;

  /** 이름 */
  name?: string;

  /** 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;

  /** 지역등록 */
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 아이디 */
  username?: string;
}

export interface UserProvincialUpdateResponseDto {
  /** 회사 */
  company?: string;

  /** 이메일 */
  email?: string;

  /** 이름 */
  name?: string;

  /** 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;

  /** 지역등록 */
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;

  /** 아이디 */
  username?: string;
}

export interface UserResponseDto {
  /** 유저 생년월일 */
  birth?: string;

  /**
   * 유저 생성일
   * @format date-time
   */
  createdDtime?: string;

  /** 이메일수신동의여부 */
  emailYn?: string;

  /** 로그인 잠김 여부 */
  failedYn?: string;

  /** 유저 성별 */
  gender?: string;

  /**
   * 마지막 비밀번호 변경일시
   * @format date-time
   */
  lastPwUpdDtime?: string;

  /**
   * 로그인 실패 횟수
   * @format int32
   */
  loginFailedCount?: number;

  /**
   * 유저 수정일
   * @format date-time
   */
  modifiedDtime?: string;

  /** 유저 실명 */
  name?: string;

  /** 유저 휴대번호 */
  phone?: string;

  /** 유저 가입 구분 */
  regCategory?: "TYPE_TRANS_EDU" | "TYPE_TRAFFIC_SAFETY_EDU";

  /**
   * 유저 시퀀스
   * @format int64
   */
  seq?: number;

  /** SMS 수신동의여부 */
  smsYn?: string;

  /**
   * 유저 삭제여부
   * @format int32
   */
  status?: number;

  /** 유저 아이디 */
  username?: string;
}

export interface UserTransport {
  carNumber?: string;
  company?: string;

  /** @format date-time */
  createdDtime?: string;

  /** @format date-time */
  modifiedDtime?: string;

  /** @format int64 */
  seq?: number;

  /** @format int32 */
  status?: number;
  user?: User;
  userBusinessTypeOne?: "PASSENGER" | "FREIGHT";
  userBusinessTypeTwo?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";
}

export interface UserTransportFindResponseDto {
  /** 차량번호 */
  carNumber?: string;

  /** 회사 */
  company?: string;

  /** 이름 */
  name?: string;

  /** 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;

  /** 업종선택1 */
  userBusinessTypeOne?: "PASSENGER" | "FREIGHT";

  /** 업종선택2  */
  userBusinessTypeTwo?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /** 차량등록 */
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";
}

export interface UserTransportUpdateRequestDto {
  /** 차량번호 */
  carNumber?: string;

  /** 회사 */
  company?: string;

  /** 이름 */
  name?: string;

  /** 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;

  /** 업종선택1 */
  userBusinessTypeOne?: "PASSENGER" | "FREIGHT";

  /** 업종선택2  */
  userBusinessTypeTwo?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /** 차량등록 */
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";
}

export interface UserTransportUpdateResponseDto {
  /** 차량번호 */
  carNumber?: string;

  /** 회사 */
  company?: string;

  /** 유저 프로필 사진 */
  files?: File[];

  /** 이름 */
  name?: string;

  /** 휴대번호 */
  phone?: string;

  /** SMS수신동의여부 */
  smsYn?: string;

  /** 업종선택1 */
  userBusinessTypeOne?: "PASSENGER" | "FREIGHT";

  /** 업종선택2  */
  userBusinessTypeTwo?:
    | "BUS"
    | "CHARTER_BUS"
    | "SPECIAL_PASSENGER"
    | "CORPORATE_TAXI"
    | "GENERAL_CARGO"
    | "PRIVATE_TAXI"
    | "INDIVIDUAL_CARGO"
    | "CONSIGNMENT"
    | "SPECIAL_TRANSPORTATION"
    | "KNEELING_BUS"
    | "DANGEROUS_GOODS"
    | "DESIGNATED_WASTE"
    | "HAZARDOUS_CHEMICALS"
    | "HIGH_PRESSURE_GAS_FLAMMABLE"
    | "HIGH_PRESSURE_GAS_TOXIC";

  /** 차량등록 */
  userRegistrationType?:
    | "CHEONAN"
    | "GONGJU"
    | "BORYEONG"
    | "ASAN"
    | "SEOSAN"
    | "NONSAN"
    | "GYERYONG"
    | "DANGJIN"
    | "GEUMSAN"
    | "BUYEO"
    | "SEOCHEON"
    | "CHEONGYANG"
    | "HONGSEONG"
    | "YESAN"
    | "TAEAN"
    | "CHUNGNAM"
    | "SEJONG"
    | "SEOUL"
    | "BUSAN"
    | "DAEGU"
    | "INCHEON"
    | "GWANGJU"
    | "DAEJEON"
    | "ULSAN"
    | "GYEONGGI"
    | "GANGWON"
    | "CHUNGBUK"
    | "JEONBUK"
    | "JEONNAM"
    | "GYEONGBUK"
    | "GYEONGNAM"
    | "JEJU";

  /**
   * 유저 시퀀스
   * @format int64
   */
  userSeq?: number;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "//api.bonobono.dev/api/v1" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title eGov Mirim LMS API Document
 * @version 1.0.0
 * @baseUrl //api.bonobono.dev/api/v1
 * @contact 정지현 (dinb1242@naver.com)
 *
 * 미림미디어랩 LMS 프로젝트 API 를 명세하는 문서
 *
 * 개발 방향 변경으로 인한 기존 미림 LMS 개발에서 충남형 LMS 로 변경됨.
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * @description Request DTO 를 전달받아 로그인을 수행한다. 이때, aT 와 rT, 간략한 사용자의 정보와 ROLE 등을 전달한다. <b>로그인 타입이 운수/저상</b>의 경우, loginType, name, username, password 를 필요로 하며, name 은 사용자의 실명을, 주민등록번호는 username 과 password 에 동일하게 입력한다. 이때, 전달받은 성명과 주민등록번호는 나이스 API 국내 실명 인증 확인을 통해 검증된다. <b>로그인 타입이 도민교통</b>인 경우, loginType, username, password 만 필요로 하며, 이때 username 은 도민교통 타입의 유저가 회원가입 시 입력한 아이디, password 는 회원가입시 기입한 Plain text 로 이루어진 password 를 입력한다.
     *
     * @tags [App & 관리자] 인증 API
     * @name SignInUsingPost
     * @summary 로그인 API
     * @request POST:/auth/signin
     */
    signInUsingPost: (signInRequestDto: SignInRequestDto, params: RequestParams = {}) =>
      this.request<SignInResponseDto, void>({
        path: `/auth/signin`,
        method: "POST",
        body: signInRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Access Token 을 전달받아 특정 사용자의 로그아웃을 수행한다.
     *
     * @tags [App & 관리자] 인증 API
     * @name SignOutUsingPost
     * @summary [App] 로그아웃 API - JWT 사용
     * @request POST:/auth/signout
     */
    signOutUsingPost: (params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/auth/signout`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 전용 계정을 생성한다.
     *
     * @tags [App & 관리자] 인증 API
     * @name SignUpAdminUsingPost
     * @summary [관리자] 관리자 계정 생성 - JWT 사용
     * @request POST:/auth/signup/admin
     */
    signUpAdminUsingPost: (signUpRequestDto: SignUpRequestDto, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/auth/signup/admin`,
        method: "POST",
        body: signUpRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Request DTO 를 전달받아 일반 회원가입을 수행한다. <b>운수/저상의 경우 username 과 password 는 주민번호로 저장한다.</b>
     *
     * @tags [App & 관리자] 인증 API
     * @name SignUpCommonUsingPost
     * @summary 일반 회원가입 API
     * @request POST:/auth/signup/common
     */
    signUpCommonUsingPost: (signUpRequestDto: SignUpRequestDto, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/auth/signup/common`,
        method: "POST",
        body: signUpRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 사용자의 aT 와 rT 를 전달받아 새 aT 를 발급한다. <br/>이때, rT 가 만료되었을 경우, DB 내 해당 사용자의 토큰 정보를 제거하며, rT 만료를 알리는 998번 커스텀 예외를 발생시킨다.
     *
     * @tags [App & 관리자] 인증 API
     * @name AccessTokenRefreshUsingPost
     * @summary Access Token 재발급 API
     * @request POST:/auth/token/refresh
     */
    accessTokenRefreshUsingPost: (
      accessTokenRefreshRequestDto: AccessTokenRefreshRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<InputStream, void>({
        path: `/auth/token/refresh`,
        method: "POST",
        body: accessTokenRefreshRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  banner = {
    /**
     * @description 사용자 인터페이스에서 전체 배너를 조회한다. 이때, 현재 일자와 배너의 게시 시작일, 게시 종료일 사이에 해당하는 데이터만 반환되며, 상태 여부가 -1인 데이터는 조회하지 않는다.
     *
     * @tags [App & 관리자] 배너 API
     * @name FindAllBannersUsingGet
     * @summary [App] 배너 전체 조회
     * @request GET:/banner
     */
    findAllBannersUsingGet: (params: RequestParams = {}) =>
      this.request<BannerResponseDto[], any>({
        path: `/banner`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 전체 배너를 조회한다. 이때, 상태 여부에 관계 없이 전체 데이터를 반환한다.
     *
     * @tags [App & 관리자] 배너 API
     * @name AdmFindAllBannersUsingGet
     * @summary [App & 관리자] 배너 전체 조회 API
     * @request GET:/banner/adm
     */
    admFindAllBannersUsingGet: (params: RequestParams = {}) =>
      this.request<BannerResponseDto[], any>({
        path: `/banner/adm`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 새로운 메인 배너를 등록한다.
     *
     * @tags [App & 관리자] 배너 API
     * @name AdmCreateBannerUsingPost
     * @summary [관리자] 배너 등록 API
     * @request POST:/banner/adm
     */
    admCreateBannerUsingPost: (requestDto: BannerSaveRequestDto, params: RequestParams = {}) =>
      this.request<BannerResponseDto, any>({
        path: `/banner/adm`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 배너에 대한 bannerSeq 를 PathVariable 로 전달받아 특정 배너 데이터를 반환한다.
     *
     * @tags [App & 관리자] 배너 API
     * @name AdmFindBannerUsingGet
     * @summary [관리자] 배너 단건 조회 API
     * @request GET:/banner/adm/{bannerSeq}
     */
    admFindBannerUsingGet: (bannerSeq: number, params: RequestParams = {}) =>
      this.request<BannerResponseDto, void>({
        path: `/banner/adm/${bannerSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 배너에 대한 시퀀스인 bannerSeq 를 PathVariable 로, 수정할 DTO 를 RequestBody 로 전달받아 특정 배너를 수정한다.
     *
     * @tags [App & 관리자] 배너 API
     * @name AdmUpdateBannerUsingPut
     * @summary [관리자] 배너 수정 API
     * @request PUT:/banner/adm/{bannerSeq}
     */
    admUpdateBannerUsingPut: (bannerSeq: number, requestDto: BannerUpdateRequestDto, params: RequestParams = {}) =>
      this.request<BannerResponseDto, void>({
        path: `/banner/adm/${bannerSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 배너에 대한 시퀀스인 bannerSeq 를 PathVariable 로 전달받아 해당하는 배너를 제거한다.
     *
     * @tags [App & 관리자] 배너 API
     * @name AdmDeleteBannerUsingDelete
     * @summary [관리자] 배너 삭제 API
     * @request DELETE:/banner/adm/{bannerSeq}
     */
    admDeleteBannerUsingDelete: (bannerSeq: number, params: RequestParams = {}) =>
      this.request<BannerResponseDto, void>({
        path: `/banner/adm/${bannerSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  content = {
    /**
     * @description 관리자 페이지 내에서 콘텐츠 전체 데이터를 조회한다.
     *
     * @tags [관리자] 콘텐츠 API
     * @name FindContentsUsingGet
     * @summary [관리자] 콘텐츠 전체 조회 API - JWT, Pagination
     * @request GET:/content/adm
     */
    findContentsUsingGet: (
      query: { contentName?: string; elementCnt?: number; page: number },
      params: RequestParams = {},
    ) =>
      this.request<ContentResponseDto, any>({
        path: `/content/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Course 에 탑재하기 위한 Content 를 생성한다.
     *
     * @tags [관리자] 콘텐츠 API
     * @name CreateContentUsingPost
     * @summary [관리자] 콘텐츠 생성 API - JWT 필요
     * @request POST:/content/adm
     */
    createContentUsingPost: (contentSaveRequestDto: ContentSaveRequestDto, params: RequestParams = {}) =>
      this.request<ContentResponseDto, any>({
        path: `/content/adm`,
        method: "POST",
        body: contentSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지 내에서 콘텐츠에 대한 상세 정보를 조회한다.
     *
     * @tags [관리자] 콘텐츠 API
     * @name FindContentUsingGet
     * @summary [관리자] 콘텐츠 단건 조회 API
     * @request GET:/content/adm/{contentSeq}
     */
    findContentUsingGet: (contentSeq: number, params: RequestParams = {}) =>
      this.request<ContentDetailResponseDto, void>({
        path: `/content/adm/${contentSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 콘텐츠를 제거한다. 만일, 연결된 과정이 있다면, 해당 과정 내에 수강 인원이 한 명이라도 있을 경우(운영 중인 상태) 예외를 발생시킨다. 삭제 시, 콘텐츠에 연결된 시험, 레슨도 모두 제거된다.
     *
     * @tags [관리자] 콘텐츠 API
     * @name DeleteContentUsingDelete
     * @summary [관리자] 콘텐츠 삭제 API - JWT
     * @request DELETE:/content/adm/{contentSeq}
     */
    deleteContentUsingDelete: (contentSeq: number, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/content/adm/${contentSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags [관리자] 콘텐츠 API
     * @name UpdateContentUsingPut
     * @summary [관리자] 콘텐츠 수정 API - JWT 필요
     * @request PUT:/content/adm/{seq}
     */
    updateContentUsingPut: (
      seq: number,
      contentUpdateRequestDto: ContentUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<InputStream, any>({
        path: `/content/adm/${seq}`,
        method: "PUT",
        body: contentUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  course = {
    /**
     * @description 검색에 필요한 키워드를 전달받아 현재 등록된 모든 과정에 대한 정보를 elementCnt 개수 만큼 조회한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name FindCoursesUsingGet
     * @summary [App] 과정 전체 조회 API - Pagination
     * @request GET:/course
     */
    findCoursesUsingGet: (
      query: { contentTitle?: string; elementCnt?: number; page: number; sort?: string },
      params: RequestParams = {},
    ) =>
      this.request<CourseResponseDto[], any>({
        path: `/course`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 검색에 필요한 키워드를 전달받아 현재 등록된 모든 과정에 대한 정보를 elementCnt 개수 만큼 조회한다.<br/>이때, status 가 -1인 데이터들도 모두 조회한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name FindCoursesAdminUsingGet
     * @summary [관리자] 과정 전체 조회 API - JWT 사용/Pagination
     * @request GET:/course/adm
     */
    findCoursesAdminUsingGet: (
      query: { courseTitle?: string; elementCnt?: number; page: number; sort?: string },
      params: RequestParams = {},
    ) =>
      this.request<CourseResponseDto[], any>({
        path: `/course/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자의 Access Token 을 통해 과정을 생성한다.<br/>data 명세<br/>{ "content1": "과정설명 마크다운", "courseName": "과정제목", "courseSubName": "과정부제목", "displayYn": "노출여부 Y/N", "fullScore": 0, "lessonTerm": 0, "lessonTime": 0, "limitPeople": 0, "limitPeopleYn": "수강제한인원 설정 Y/N", "limitTotalScore": 0, "price": 0, "restudyDay": 0, "restudyYn": "복습허용여부 Y/N", "saleYn": "판매여부 Y/N" "status": "사용 여부 1 or -1" }
     *
     * @tags [App & 관리자] 과정 API
     * @name CreateCourseUsingPost
     * @summary [관리자] 과정 생성 API - JWT 사용
     * @request POST:/course/adm
     */
    createCourseUsingPost: (courseSaveRequestDto: CourseSaveRequestDto, params: RequestParams = {}) =>
      this.request<CourseResponseDto, any>({
        path: `/course/adm`,
        method: "POST",
        body: courseSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 과정 시퀀스와 연결할 콘텐츠 시퀀스를 전달받아 해당하는 콘텐츠를 과정에 연결한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name LinkCourseAndContentUsingPost
     * @summary [관리자] 과정-콘텐츠 연동 API
     * @request POST:/course/adm/link/content
     */
    linkCourseAndContentUsingPost: (requestDto: CourseContentLinkRequestDto, params: RequestParams = {}) =>
      this.request<CourseDetailResponseDto, void>({
        path: `/course/adm/link/content`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 과정 시퀀스를 Path Variable 로 전달받아 해당하는 과정과 연결된 콘텐츠의 연결을 해제한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name DeleteLinkedContentUsingDelete
     * @summary [관리자] 과정-콘텐츠 연동 해제 API
     * @request DELETE:/course/adm/link/content/{courseSeq}
     */
    deleteLinkedContentUsingDelete: (courseSeq: number, params: RequestParams = {}) =>
      this.request<CourseDetailResponseDto, void>({
        path: `/course/adm/link/content/${courseSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 과정 시퀀스와 특정 설문을 시퀀스로 전달받아 설문을 연결한다. 연결에 성공하면 설문에 대한 ResponseDTO 를 반환한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name LinkCourseAndSurveyUsingPut
     * @summary [관리자] 과정-설문 연결 API
     * @request PUT:/course/adm/link/survey
     */
    linkCourseAndSurveyUsingPut: (requestDto: CourseSurveyLinkRequestDto, params: RequestParams = {}) =>
      this.request<SurveyResponseDto, void>({
        path: `/course/adm/link/survey`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 과정 시퀀스를 시퀀스로 전달받아 연결되어있는 설문을 제거한다. 해제에 성공하면 설문에 대한 ResponseDTO 를 반환한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name DeleteLinkedSurveyUsingDelete
     * @summary [관리자] 과정-설문 연결 해제 API
     * @request DELETE:/course/adm/link/survey/{courseSeq}
     */
    deleteLinkedSurveyUsingDelete: (courseSeq: number, params: RequestParams = {}) =>
      this.request<SurveyResponseDto, void>({
        path: `/course/adm/link/survey/${courseSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 과정의 seq 를 Path Variable 로 전달받아 해당 과정에 대한 정보를 조회한다
     *
     * @tags [App & 관리자] 과정 API
     * @name AdmFindCourseUsingGet
     * @summary [관리자] 특정 과정 조회 API
     * @request GET:/course/adm/{seq}
     */
    admFindCourseUsingGet: (seq: number, params: RequestParams = {}) =>
      this.request<CourseDetailResponseDto, void>({
        path: `/course/adm/${seq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자의 Access Token 을 통해 과정을 생성한다.<br/>data 명세<br/>{ "content1": "과정설명 마크다운", "courseName": "과정제목", "courseSubName": "과정부제목", "displayYn": "노출여부 Y/N", "fullScore": 0 -> 총 점수, "lessonTerm": 0 -> 과정 수강일, "lessonTime": 0 -> 과정 수료 인정시간, "limitPeople": 0 -> 수강제한인원 수, "limitPeopleYn": "수강제한인원 설정 Y/N", "limitTotalScore": 0 -> 최소 수료 점수, "price": 0 -> 가격, "restudyDay": 0 -> 복습기간, "restudyYn": "복습허용여부 Y/N", "saleYn": "판매여부 Y/N" "status": "사용 여부 1 or -1" }
     *
     * @tags [App & 관리자] 과정 API
     * @name UpdateCourseUsingPut
     * @summary [관리자] 과정 수정 API - JWT 사용
     * @request PUT:/course/adm/{seq}
     */
    updateCourseUsingPut: (seq: number, courseUpdateRequestDto: CourseUpdateRequestDto, params: RequestParams = {}) =>
      this.request<CourseResponseDto, void>({
        path: `/course/adm/${seq}`,
        method: "PUT",
        body: courseUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description <b>현재는 과정 수강생에 관계 없이 삭제되나, 추후 업데이트 예정</b><br/>관리자의 Access Token 을 통해 과정를 삭제한다. 과정을 수강 중인 사람이 한 명이라도 존재할 경우 삭제 할 수 없으며, S3 내에서 오브젝트가 삭제되지는 않는다.
     *
     * @tags [App & 관리자] 과정 API
     * @name DeleteCourseUsingDelete
     * @summary [관리자] 과정 삭제 API - JWT 사용
     * @request DELETE:/course/adm/{seq}
     */
    deleteCourseUsingDelete: (seq: number, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/course/adm/${seq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 유저의 과정 신청 시퀀스인 courseUserSeq 를 Path Variable 로 전달받아 해당 과정에 대한 정보를 조회한다 이때, 사용자의 학습 진행 상황도 함께 포함하여 DTO 로 반환한다.
     *
     * @tags [App & 관리자] 과정 API
     * @name FindCourseUsingGet
     * @summary [App] 특정 과정 조회 API
     * @request GET:/course/{courseUserSeq}
     */
    findCourseUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<CourseDetailClientResponseDto, any>({
        path: `/course/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),
  };
  courseClass = {
    /**
     * @description 클라이언트의 캘린더에서 과정 클래스에 대한 전체 데이터를 조회한다. 과정타입(courseType) 을 통해 운수 또는 저상에 해당하는 클래스를 조회한다. status 가 -1인 데이터는 조회하지 않는다. <courseType Enum 목록> * TYPE_TRANS_WORKER: 운수종사자 * TYPE_LOW_FLOOR_BUS: 저상버스 * TYPE_PROVINCIAL: 도민교통
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name FindAllCourseClassesUsingGet
     * @summary [App] 과정 클래스 전체 조회 API
     * @request GET:/course-class
     */
    findAllCourseClassesUsingGet: (
      query: {
        businessType: "TYPE_ALL" | "TYPE_PASSENGER" | "TYPE_CARGO";
        courseType: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";
        date?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<CourseClassResponseDto[], any>({
        path: `/course-class`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지의 클래스 관리 캘린더에서 전체 과정 클래스 정보를 조회한다.
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name AdmFindAllCourseClassesUsingGet
     * @summary [관리자] 과정 클래스 전체 조회 API
     * @request GET:/course-class/adm
     */
    admFindAllCourseClassesUsingGet: (
      query: { businessType: "TYPE_ALL" | "TYPE_PASSENGER" | "TYPE_CARGO"; date?: string },
      params: RequestParams = {},
    ) =>
      this.request<CourseClassResponseDto[], any>({
        path: `/course-class/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 과정에 대한 클래스를 생성한다.
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name AdmCreateCourseClassUsingPost
     * @summary [관리자] 과정 클래스 생성 API
     * @request POST:/course-class/adm
     */
    admCreateCourseClassUsingPost: (requestDto: CourseClassSaveRequestDto, params: RequestParams = {}) =>
      this.request<CourseClassResponseDto, void>({
        path: `/course-class/adm`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 과정 클래스를 수정한다.
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name AdmModifyCourseClassUsingPut
     * @summary [관리자] 과정 클래스 수정 API
     * @request PUT:/course-class/adm
     */
    admModifyCourseClassUsingPut: (requestDto: CourseClassUpdateRequestDto, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/course-class/adm`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지의 클래스 관리 캘린더에서 특정 과정에 대한 클래스 정보를 단건 조회한다.
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name AdmFindCourseClassUsingGet
     * @summary [관리자] 과정 클래스 단건 조회 API
     * @request GET:/course-class/adm/{courseClassSeq}
     */
    admFindCourseClassUsingGet: (courseClassSeq: number, params: RequestParams = {}) =>
      this.request<CourseClassResponseDto, void>({
        path: `/course-class/adm/${courseClassSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 특정 과정 클래스를 제거한다. 이때, 만일 한 명이라도 수강 중일 경우 제거가 불가능하다. 실제로 DB 내에서 제거되지는 않으며, status 값만 -1로 변경한다.
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name AdmDeleteCourseClassUsingDelete
     * @summary [관리자] 과정 클래스 삭제 API
     * @request DELETE:/course-class/adm/{courseClassSeq}
     */
    admDeleteCourseClassUsingDelete: (courseClassSeq: number, params: RequestParams = {}) =>
      this.request<CourseClassResponseDto, void>({
        path: `/course-class/adm/${courseClassSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 모바일 클라이언트의 과정 클래스 리스트에 대한 전체 데이터를 조회한다. status 가 -1인 데이터는 조회하지 않는다. <courseType Enum 목록> * TYPE_TRANS_WORKER: 운수종사자 * TYPE_LOW_FLOOR_BUS: 저상버스 * TYPE_PROVINCIAL: 도민교통
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name MobileFindAllCourseClassesUsingGet
     * @summary [App - 모바일 전용] 과정 클래스 전체 조회 API
     * @request GET:/course-class/mobile
     */
    mobileFindAllCourseClassesUsingGet: (
      query: { courseType: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL"; date?: string },
      params: RequestParams = {},
    ) =>
      this.request<MobileCourseClassResponseDto[], any>({
        path: `/course-class/mobile`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 교육 과정과 업종 구분 Enum 을 쿼리 스트링으로 전달받아 해당하는 과정 클래스(기수) 정보를 조회한다. 조회 이후, 일치하는 클래스의 정보를 리스트로 반환한다. 검색 시, 현재 일자를 기준으로 신청이 가능한 클래스만 조회한다. [courseType Enum - 운수종사자/저상버스교육자 구분] * TYPE_TRANS_WORKER: 운수종사자 * TYPE_LOW_FLOOR_BUS: 저상버스 * TYPE_PROVINCIAL: 도민교통(사용 X) [courseCategoryType Enum - 교육 과정] * TYPE_SUP_COMMON -> 보수일반 * TYPE_SUP_CONSTANT -> 보수 수시 * TYPE_CONSTANT -> 수시 * TYPE_NEW -> 신규 * TYPE_ILLEGAL -> 법령위반자 * TYPE_HANDICAPPED -> 교통약자 이동편의 증진 * TYPE_DANGEROUS -> 위험물진 운송차량 운전자 [CourseClassBusinessTypeEnum Enum - 업종 구분] TYPE_ALL: 전체 (여기서는 사용하지 말 것.) TYPE_PASSENGER: 여객 TYPE_CARGO: 화물
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name FindClassStepUsingGet
     * @summary [App] 과정 클래수(기수) 검색 API
     * @request GET:/course-class/step
     */
    findClassStepUsingGet: (
      query: {
        courseBusinessType: "TYPE_ALL" | "TYPE_PASSENGER" | "TYPE_CARGO";
        courseCategoryType:
          | "TYPE_SUP_COMMON"
          | "TYPE_SUP_CONSTANT"
          | "TYPE_CONSTANT"
          | "TYPE_NEW"
          | "TYPE_ILLEGAL"
          | "TYPE_HANDICAPPED"
          | "TYPE_DANGEROUS";
        courseType: "TYPE_TRANS_WORKER" | "TYPE_LOW_FLOOR_BUS" | "TYPE_PROVINCIAL";
      },
      params: RequestParams = {},
    ) =>
      this.request<CourseClassStepResponseDto[], any>({
        path: `/course-class/step`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 클라이언트의 캘린더에서 특정 과정 클래스에 대해 단건 조회한다.
     *
     * @tags [App & 관리자] 과정 클래스(기수) API
     * @name FindCourseClassUsingGet
     * @summary [App] 과정 클래스 단건 조회 API
     * @request GET:/course-class/{courseClassSeq}
     */
    findCourseClassUsingGet: (courseClassSeq: number, params: RequestParams = {}) =>
      this.request<CourseClassResponseDto, void>({
        path: `/course-class/${courseClassSeq}`,
        method: "GET",
        ...params,
      }),
  };
  courseLog = {
    /**
     * @description 과정 학습로그 생성 수강생이 강의를 들을때마다 기본값 ( 0 ) API 입력 5분에 한번씩 API 입력 <b>수강생이 강의를 나갈때 CourseProgress (/course-progress) Put API 호출</b>수강을 완료해도 API 입력
     *
     * @tags [App] 과정 학습 로그 API
     * @name CreateCourseModulesUsingPost1
     * @summary [App] 과정 학습로그 생성 API - JWT 사용
     * @request POST:/course-log
     */
    createCourseModulesUsingPost1: (courseUserLogRequestDto: CourseUserLogRequestDto, params: RequestParams = {}) =>
      this.request<CourseUserLogResponseDto, void>({
        path: `/course-log`,
        method: "POST",
        body: courseUserLogRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  courseModule = {
    /**
     * @description 클라이언트에서 과정에 대한 모듈을 전체조회
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name ClientFindAllCourseModulesUsingGet
     * @summary [App] 과정 모듈 전체 조회 API - JWT 사용
     * @request GET:/course-module
     */
    clientFindAllCourseModulesUsingGet: (query: { courseSeq: number }, params: RequestParams = {}) =>
      this.request<CourseModuleFindResponseDto, void>({
        path: `/course-module`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 과정에 대한 모듈을 전체조회
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name FindAllCourseModulesUsingGet
     * @summary [관리자] 과정 모듈 전체 조회 API - JWT 사용
     * @request GET:/course-module/adm
     */
    findAllCourseModulesUsingGet: (query: { courseSeq: number }, params: RequestParams = {}) =>
      this.request<CourseModuleFindResponseDto, void>({
        path: `/course-module/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 과정에 대한 모듈을 상세 조회
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name FindByCourseModulesUsingGet
     * @summary [관리자] 과정 모듈 상세 조회 API - JWT 사용
     * @request GET:/course-module/adm/{courseModuleSeq}
     */
    findByCourseModulesUsingGet: (courseModuleSeq: number, params: RequestParams = {}) =>
      this.request<CourseModuleFindResponseDto, void>({
        path: `/course-module/adm/${courseModuleSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 과정에 대한 모듈을 수정
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name UpdateCourseModulesUsingPut
     * @summary [관리자] 과정 모듈 수정 API - JWT 사용
     * @request PUT:/course-module/adm/{courseModuleSeq}
     */
    updateCourseModulesUsingPut: (
      courseModuleSeq: number,
      courseModuleUpdateRequestDto: CourseModuleUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<CourseModuleUpdateResponseDto, void>({
        path: `/course-module/adm/${courseModuleSeq}`,
        method: "PUT",
        body: courseModuleUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 과정에 대한 모듈을 삭제
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name UpdateCourseModulesUsingDelete
     * @summary [관리자] 과정 모듈 삭제 API - JWT 사용
     * @request DELETE:/course-module/adm/{courseModuleSeq}
     */
    updateCourseModulesUsingDelete: (courseModuleSeq: number, params: RequestParams = {}) =>
      this.request<CourseModuleUpdateResponseDto, void>({
        path: `/course-module/adm/${courseModuleSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 과정에 대한 모듈을 입력
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name CreateCourseModulesUsingPost
     * @summary [관리자] 과정 모듈 생성 API - JWT 사용
     * @request POST:/course-module/adm/{courseSeq}
     */
    createCourseModulesUsingPost: (
      courseSeq: number,
      courseModuleSaveRequestDto: CourseModuleSaveRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<CourseModuleSaveResponseDto, void>({
        path: `/course-module/adm/${courseSeq}`,
        method: "POST",
        body: courseModuleSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 클라이언트에서 과정에 대한 모듈을 상세 조회
     *
     * @tags [App & 관리자] 과정 모듈 API
     * @name ClientFindByCourseModulesUsingGet
     * @summary [App] 과정 모듈 상세 조회 API - JWT 사용
     * @request GET:/course-module/{courseModuleSeq}
     */
    clientFindByCourseModulesUsingGet: (courseModuleSeq: number, params: RequestParams = {}) =>
      this.request<CourseModuleFindResponseDto, void>({
        path: `/course-module/${courseModuleSeq}`,
        method: "GET",
        ...params,
      }),
  };
  courseProgress = {
    /**
     * @description 과정 진도율 생성
     *
     * @tags [App & 관리자] 과정 진도율 API - * 관리자 통계 로직 등은 추후 논의
     * @name CreateCourseProgressUsingPost
     * @summary [App & 관리자] 과정 진도율 API - JWT 사용
     * @request POST:/course-progress
     */
    createCourseProgressUsingPost: (courseProgressRequestDto: CourseProgressRequestDto, params: RequestParams = {}) =>
      this.request<CourseProgressResponseDto, void>({
        path: `/course-progress`,
        method: "POST",
        body: courseProgressRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 과정 진도율 수정 수강생이 강의를 듣고 페이지를 나갈때 실행되는 API
     *
     * @tags [App & 관리자] 과정 진도율 API - * 관리자 통계 로직 등은 추후 논의
     * @name UpdateCourseProgressUsingPut
     * @summary [App & 관리자] 과정 진도율 수정  API - JWT 사용
     * @request PUT:/course-progress
     */
    updateCourseProgressUsingPut: (
      courseProgressRequestDto: CourseProgressUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<CourseProgressResponseDto, void>({
        path: `/course-progress`,
        method: "PUT",
        body: courseProgressRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  courseUser = {
    /**
     * @description 클라이언트에서 특정 사용자가 신청한 과정 클래스 정보를 조회한다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name FindAllTransCourseUsersUsingGet
     * @summary [App] 운수/저상 교육 전체 조회 API - JWT
     * @request GET:/course-user
     */
    findAllTransCourseUsersUsingGet: (params: RequestParams = {}) =>
      this.request<CourseUserTransResponseDto[], void>({
        path: `/course-user`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 특정 교육 신청 건에 대한 시퀀스를 전달받아 해당하는 교육을 제거(취소)한다. 데이터베이스에서 outYn 과 관련된 데이터를 수정하고, status 를 -1로 수정한다. 제거 시, 제거하려는 대상(courseUser)의 신청자 시퀀스가 요청자의 시퀀스와 다를 경우 오류를 발생시킨다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name CancelTransIndvUsingDelete
     * @summary [App] 운수/저상 교육 취소 API (개인) - JWT
     * @request DELETE:/course-user/cancel/individual/{courseUserSeq}
     */
    cancelTransIndvUsingDelete: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<CourseUserResponseDto, void>({
        path: `/course-user/cancel/individual/${courseUserSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 운수/저상 관리자가 특정 사용자에 대한 특정 교육 신청 건을 취소한다. 데이터베이스에서 outYn 과 관련된 데이터를 수정하고, status 를 -1로 수정한다. 제거 시, 제거하려는 대상(courseUser)의 regUserSeq 가 요청자(관리자)의 시퀀스와 다를 경우 오류를 발생시킨다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name CancelTransOrganUsingDelete
     * @summary [App] 운수/저상 교육 취소 API (단체) - JWT
     * @request DELETE:/course-user/cancel/organization/{courseUserSeq}
     */
    cancelTransOrganUsingDelete: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<CourseUserResponseDto, void>({
        path: `/course-user/cancel/organization/${courseUserSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 해당 과정에 대한 수료 여부 체크
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name UserCourseCompletionUsingGet
     * @summary 과정 수료 여부 API - JWT 사용
     * @request GET:/course-user/complete/{courseUserSeq}
     */
    userCourseCompletionUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<CourseUserCompletionResponseDto, void>({
        path: `/course-user/complete/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 클라이언트에서 운수/저상에 대한 <b>개인 교육</b>을 신청한다. 교육신청자 정보 란에서, 이름과 주민등록번호와 같은 개인정보는 유저 API 의 회원정보 조회 API 를 통해 가져온다. 개인 신청의 경우, 이름과 주민등록번호 란은 Read-only 이다. 업체 정보 혹은 차량 정보와 같은 추가 정보는 유저 (운수종사자 / 저상버스운전자) 조회 API 를 통해 가져온다. 교육신청자 정보 중, 차량 번호에 대한 정규식은 체크하지 않는다. 기입한 정보를 바탕으로 해당 유저의 추가정보(예. 업종, 차량번호 등. 마이페이지 내 정보 수정에서도 기입 가능)를 DB 에 업데이트 시켜준다. 최종적으로 신청된 과정 정보를 반환한다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name EnrollTransIndvUsingPost
     * @summary [App] 운수/저상 교육신청 API (개인) - JWT
     * @request POST:/course-user/enroll/individual
     */
    enrollTransIndvUsingPost: (requestDto: CourseUserTransSaveRequestDto, params: RequestParams = {}) =>
      this.request<CourseUserResponseDto, void>({
        path: `/course-user/enroll/individual`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 클라이언트에서 운수/저상에 대한 <b>단체 교육</b>을 신청한다. 단체 신청의 경우, 이름과 주민등록번호 입력란은 쓰기 작업이 가능하다. 운수/저상에 대한 관리자만 신청이 가능하며, 교육신청자 정보 란은 유저 API 의 회원정보 조회 API 를 통해 가져온다. 교육신청자 정보는 화면 상에서 N 개의 개수만큼 추가할 수 있으며, <b>새로운 폼을 추가할 때마다(신청 버튼 클릭 시) 입력한 데이터가 실제 데이터베이스에 즉각 저장된다.(단건 신청)</b> 입력한 교육신청자 정보에 대하여 이미 DB 에 존재하는 운수/저상 회원일 경우, 바로 과정이 신청되며 해당 유저에 대한 추가정보 데이터가 업데이트 된다. DB 에 존재하지 않는 사람인 경우 회원가입 진행 후 과정이 신청된다. 매 신청 시마다, 신청된 과정 정보가 리턴된다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name EnrollTransOrganUsingPost
     * @summary [App] 운수/저상 교육신청 API (단체, 단건 신청) - JWT
     * @request POST:/course-user/enroll/organization
     */
    enrollTransOrganUsingPost: (requestDto: CourseUserTransSaveRequestDto, params: RequestParams = {}) =>
      this.request<CourseResponseDto, void>({
        path: `/course-user/enroll/organization`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 클라이언트에서 개인에 대한 특정 교육 신청 건에 대한 내용을 조회한다. outYn 이 'Y' 데이터는 조회되지 않는다. 요청자의 JWT 내 유저 시퀀스와 반환될 데이터의 userSeq 가 자기 자신이 아닐 경우 예외를 호출한다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name FindTransCourseUserIndvUsingGet
     * @summary [App] 운수/저상 교육 신청 단건 조회 API (개인) - JWT
     * @request GET:/course-user/find/individual/{courseUserSeq}
     */
    findTransCourseUserIndvUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<CourseUserTransDetailsResponseDto, void>({
        path: `/course-user/find/individual/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 클라이언트에서 개인에 대한 특정 교육 신청 건에 대한 내용을 조회한다. outYn 이 'Y' 데이터는 조회되지 않는다. 요청자의 유저 시퀀스가 실제 교육 신청 정보자의 유저 시퀀스와 다르더라도 조회가 가능하다. 다만, regUserSeq(단체 신청해준 사람의 시퀀스) 로 요청자의 시퀀스와 비교하고, 다를 경우 예외를 발생시킨다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name FindTransCourseUserOrganUsingGet
     * @summary [App] 운수/저상 교육 신청 단건 조회 API (단체) - JWT
     * @request GET:/course-user/find/organization/{courseUserSeq}
     */
    findTransCourseUserOrganUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<CourseUserTransDetailsResponseDto, void>({
        path: `/course-user/find/organization/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 개인의 특정 교육 신청 건에 대한 정보를 수정한다. 이름과 주민번호를 제외한 모든 정보를 수정 가능하다. 수정된 개인정보/추가정보는 유저 DB 데이터에 반영된다. 개인이 신청한 courseUserSeq 의 userSeq 와 요청자의 userSeq 를 비교하여 서로 일치하지 않을 경우 예외를 발생시킨다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name ModifyTransCourseUserIndvUsingPut
     * @summary [App] 운수/저상 교육 수정 API (개인) - JWT
     * @request PUT:/course-user/modify/individual/{courseUserSeq}
     */
    modifyTransCourseUserIndvUsingPut: (
      courseUserSeq: number,
      requestDto: CourseUserTransUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<CourseUserTransDetailsResponseDto, void>({
        path: `/course-user/modify/individual/${courseUserSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 단체의 특정 교육 신청 건에 대한 정보를 수정한다. 이름과 주민번호를 제외한 모든 정보를 수정 가능하다. 수정된 개인정보/추가정보는 유저 DB 데이터에 반영된다. 단체의 관리자가 신청한 courseUserSeq 의 regUserSeq 와 요청자의 userSeq 를 비교하여 서로 일치하지 않을 경우 예외를 발생시킨다.
     *
     * @tags [App & 관리자] 과정 교육 신청 API
     * @name ModifyTransCourseUserOrganUsingPut
     * @summary [App] 운수/저상 교육 수정 API (단체) - JWT
     * @request PUT:/course-user/modify/organization/{courseUserSeq}
     */
    modifyTransCourseUserOrganUsingPut: (
      courseUserSeq: number,
      requestDto: CourseUserTransUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<CourseUserTransDetailsResponseDto, void>({
        path: `/course-user/modify/organization/${courseUserSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  examMultipleChoice = {
    /**
     * @description 유저-과정 시퀀스와 시험문제 시퀀스를 받아 해당과정의 유저가 시험을 푼 결과값 저장
     *
     * @tags [관리자] 시험 질문 테이블 객관식 API
     * @name CreateExamMultipleChoiceUsingPost
     * @summary 시험 문제 결과 테이블 객관식 생성 API
     * @request POST:/exam-multiple-choice
     */
    createExamMultipleChoiceUsingPost: (
      examMultipleChoiceResultRequestDto: ExamMultipleChoiceResultRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ExamMultipleChoiceResultResponseDto, void>({
        path: `/exam-multiple-choice`,
        method: "POST",
        body: examMultipleChoiceResultRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 해당 객관식의 시퀀스로 유저가 답안을 선택할때마다 실행되는 API
     *
     * @tags [관리자] 시험 질문 테이블 객관식 API
     * @name UpdateExamMultipleChoiceUsingPut
     * @summary 시험 문제 선택답안 API
     * @request PUT:/exam-multiple-choice/{examMultiSeq}
     */
    updateExamMultipleChoiceUsingPut: (
      examMultiSeq: number,
      examMultipleChoiceResultUpdateRequestDto: ExamMultipleChoiceResultUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ExamMultipleChoiceResultResponseDto, void>({
        path: `/exam-multiple-choice/${examMultiSeq}`,
        method: "PUT",
        body: examMultipleChoiceResultUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  examQuestion = {
    /**
     * @description 문제은행에서 해당과정에 등록한 시험문제들 출력
     *
     * @tags [관리자] 시험 문제 API
     * @name FindExamUserUsingGet
     * @summary 시험 문제 조회 (문제은행에서 등록된 과정) API - Pagination
     * @request GET:/exam-question
     */
    findExamUserUsingGet: (query: { elementCnt?: number; examSeq: number; page: number }, params: RequestParams = {}) =>
      this.request<ExamQuestionFindResponseDto[], void>({
        path: `/exam-question`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 examSeq 를 Request Param 으로 전달받아 전체 시험 문제 데이터를 조회한다.
     *
     * @tags [관리자] 시험 문제 API
     * @name FindExamUsingGet
     * @summary 시험 문제 전체 조회 API - Pagination
     * @request GET:/exam-question/adm
     */
    findExamUsingGet: (query: { elementCnt?: number; examSeq: number; page: number }, params: RequestParams = {}) =>
      this.request<ExamQuestionFindResponseDto[], void>({
        path: `/exam-question/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 시험 문제 생성 Enum QUESTION_OBJ : 객관식 QUESTION_SUBJ : 주관식 * 객관식일땐 정답 설명 컬럼에 값을 넣지않는다. * 주관식일땐 보기 컬럼에 값을 넣지않는다.
     *
     * @tags [관리자] 시험 문제 API
     * @name CreateExamQuestionUsingPost
     * @summary 시험 문제 생성 API
     * @request POST:/exam-question/adm
     */
    createExamQuestionUsingPost: (examQuestionSaveRequestDto: ExamQuestionSaveRequestDto, params: RequestParams = {}) =>
      this.request<ExamQuestionSaveResponseDto, void>({
        path: `/exam-question/adm`,
        method: "POST",
        body: examQuestionSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 examSeq 를 Path Var 로 전달받아 해당하는 데이터를 가져온다.
     *
     * @tags [관리자] 시험 문제 API
     * @name FindExamDetailUsingGet1
     * @summary [관리자] 시험 문제 단건 조회 API
     * @request GET:/exam-question/adm/{examQuestionSeq}
     */
    findExamDetailUsingGet1: (examQuestionSeq: number, params: RequestParams = {}) =>
      this.request<ExamQuestionFindResponseDto, void>({
        path: `/exam-question/adm/${examQuestionSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 examSeq 를 Path Variable 로, 수정을 위한 DTO 를 전달받아 해당하는 시험 문제를 수정한다.
     *
     * @tags [관리자] 시험 문제 API
     * @name UpdateExamQuestionUsingPut
     * @summary 시험 문제 수정 API
     * @request PUT:/exam-question/adm/{examQuestionSeq}
     */
    updateExamQuestionUsingPut: (
      examQuestionSeq: number,
      examQuestionUpdateRequestDto: ExamQuestionUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ExamQuestionResponseDto, void>({
        path: `/exam-question/adm/${examQuestionSeq}`,
        method: "PUT",
        body: examQuestionUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 exam 에 대한 seq 를 Path Variable 로 전달받아 해당하는 시험 문제를 삭제한다.
     *
     * @tags [관리자] 시험 문제 API
     * @name DeleteExamUsingDelete1
     * @summary 시험 문제 삭제 API
     * @request DELETE:/exam-question/adm/{examQuestionSeq}
     */
    deleteExamUsingDelete1: (examSeq: number, examQuestionSeq: string, params: RequestParams = {}) =>
      this.request<ExamQuestionResponseDto, void>({
        path: `/exam-question/adm/${examQuestionSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  examSubject = {
    /**
     * @description 유저-과정 시퀀스와 시험문제 시퀀스를 받아 해당과정의 유저가 시험을 푼 결과값 저장
     *
     * @tags [관리자] 시험 문제 결과 테이블 주관식 API
     * @name CreateExamSubjectUsingPost
     * @summary 시험 문제 결과 테이블 주관식 생성 API
     * @request POST:/exam-subject
     */
    createExamSubjectUsingPost: (
      examSubjectiveResultRequestSaveDto: ExamSubjectiveResultRequestSaveDto,
      params: RequestParams = {},
    ) =>
      this.request<ExamSubjectiveResultRequestSaveDto, void>({
        path: `/exam-subject`,
        method: "POST",
        body: examSubjectiveResultRequestSaveDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 해당 주관식의 시퀀스로 유저가 Input 타입을 벗어날때 실행되는 API
     *
     * @tags [관리자] 시험 문제 결과 테이블 주관식 API
     * @name UpdateExamSubjectUsingPut
     * @summary 시험 문제 주관식답안 API
     * @request PUT:/exam-subject/{examSubjectSeq}
     */
    updateExamSubjectUsingPut: (
      examSubjectSeq: number,
      examExamSubjectiveResultUpdateRequestDto: ExamExamSubjectiveResultUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ExamMultipleChoiceResultResponseDto, void>({
        path: `/exam-subject/${examSubjectSeq}`,
        method: "PUT",
        body: examExamSubjectiveResultUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  examUser = {
    /**
     * @description 관리자 페이지에서 유저가 제출한 시험 채점여부 Y 대한 전체 조회
     *
     * @tags [관리자] 유저 시험 채점 API
     * @name FindAllExamUserConfirmCompleteUsingGet
     * @summary [관리자] 유저 시험 채점여부 Y (전체) 조회 API
     * @request GET:/exam-user/adm/complete
     */
    findAllExamUserConfirmCompleteUsingGet: (
      query: { elementCnt?: number; page: number },
      params: RequestParams = {},
    ) =>
      this.request<ExamUserResponseDto, void>({
        path: `/exam-user/adm/complete`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 유저가 제출한 시험 채점여부 N 대한 전체 조회
     *
     * @tags [관리자] 유저 시험 채점 API
     * @name FindAllExamUserTemporaryUsingGet
     * @summary [관리자] 유저 시험 채점여부 N (전체) 조회 API
     * @request GET:/exam-user/adm/temporary
     */
    findAllExamUserTemporaryUsingGet: (query: { elementCnt?: number; page: number }, params: RequestParams = {}) =>
      this.request<ExamUserResponseDto, void>({
        path: `/exam-user/adm/temporary`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 유저가 제출한 시험에 관리자가 채점을 하기위한 단건 조회 제출한 시험의 채첨을 위한 상세 내역 조회
     *
     * @tags [관리자] 유저 시험 채점 API
     * @name FindExamUserDetailUsingGet
     * @summary [관리자] 유저 시험 채점 제출시험지 조회 API
     * @request GET:/exam-user/adm/{courseUserSeq}
     */
    findExamUserDetailUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<ExamFindUserDetailResponseDto, void>({
        path: `/exam-user/adm/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 유저가 제출한 시험 채점을 위한 단건 조회
     *
     * @tags [관리자] 유저 시험 채점 API
     * @name FindExamUserUsingGet1
     * @summary [관리자] 유저 시험 채점 (단건) 조회 API
     * @request GET:/exam-user/adm/{examUserSeq}
     */
    findExamUserUsingGet1: (examUserSeq: number, params: RequestParams = {}) =>
      this.request<ExamUserResponseDto, void>({
        path: `/exam-user/adm/${examUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 유저가 제출한 시험에 관리자가 채점
     *
     * @tags [관리자] 유저 시험 채점 API
     * @name ExamManagerGradingUsingPut
     * @summary [관리자] 유저 시험 채점 API
     * @request PUT:/exam-user/adm/{examUserSeq}
     */
    examManagerGradingUsingPut: (
      examUserSeq: number,
      examUserRequestDto: ExamUserRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ExamFindUserDetailResponseDto, void>({
        path: `/exam-user/adm/${examUserSeq}`,
        method: "PUT",
        body: examUserRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 제출한 유저시험에 대한 관리자의 평가 삭제
     *
     * @tags [관리자] 유저 시험 채점 API
     * @name DeleteExamUserDetailUsingDelete
     * @summary [관리자] 유저 시험 채점 삭제 API
     * @request DELETE:/exam-user/adm/{examUserSeq}
     */
    deleteExamUserDetailUsingDelete: (examUserSeq: number, params: RequestParams = {}) =>
      this.request<ExamFindUserDetailResponseDto, void>({
        path: `/exam-user/adm/${examUserSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  exam = {
    /**
     * @description 관리자 페이지에서 contentSeq 를 Request Param 으로 전달받아 전체 시험 데이터를 조회한다.
     *
     * @tags [관리자] 시험 API
     * @name FindExamsUsingGet
     * @summary 시험 전체 조회 API - Pagination
     * @request GET:/exam/adm
     */
    findExamsUsingGet: (query: { contentSeq: number; elementCnt?: number; page: number }, params: RequestParams = {}) =>
      this.request<ExamResponseDto[], void>({
        path: `/exam/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 DTO 를 전달받아 시험을 생성한다.
     *
     * @tags [관리자] 시험 API
     * @name CreateExamUsingPost
     * @summary 시험 생성 API
     * @request POST:/exam/adm
     */
    createExamUsingPost: (examSaveRequestDto: ExamSaveRequestDto, params: RequestParams = {}) =>
      this.request<ExamResponseDto, void>({
        path: `/exam/adm`,
        method: "POST",
        body: examSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 시험 시퀀스에 해당하는 examSeq 를 Path Var 로 전달받아 현재 시험에 등록된 문제 은행 목록을 조회한다.
     *
     * @tags [관리자] 시험 API
     * @name FindEnrolledQuestionOntoExamUsingGet
     * @summary [관리자] 시험 내 등록된 문제 은행 조회 API - 문항관리
     * @request GET:/exam/adm/question-bank/{examSeq}
     */
    findEnrolledQuestionOntoExamUsingGet: (examSeq: number, params: RequestParams = {}) =>
      this.request<ExamQuestionResponseDto[], void>({
        path: `/exam/adm/question-bank/${examSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 시험 시퀀스에 해당하는 examSeq 를 Path Var 로 전달받아 문제 은행을 등록한다.<br/>문제 은행에 대한 DTO 내 문제 시퀀스를 리스트로 전달받아 수행한다
     *
     * @tags [관리자] 시험 API
     * @name EnrollQuestionOntoExamUsingPost
     * @summary [관리자] 시험 내 문제 은행 등록 API - 문항관리
     * @request POST:/exam/adm/question-bank/{examSeq}
     */
    enrollQuestionOntoExamUsingPost: (
      examSeq: number,
      requestDto: ExamQuestionBankSaveRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<InputStream, any>({
        path: `/exam/adm/question-bank/${examSeq}`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 시험 시퀀스에 해당하는 examSeq 를 Path Var 로, 삭제할 문제은행 시퀀스를 리스트로 전달받아 등록된 문제 은행을 제거한다.
     *
     * @tags [관리자] 시험 API
     * @name DeleteEnrolledQuestionOnExamUsingDelete
     * @summary [관리자] 시험 내 등록된 특정 문제 은행 제거 API - 문항관리
     * @request DELETE:/exam/adm/question-bank/{examSeq}
     */
    deleteEnrolledQuestionOnExamUsingDelete: (
      examSeq: number,
      query: { questionSeqList: number[] },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, any>({
        path: `/exam/adm/question-bank/${examSeq}`,
        method: "DELETE",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 examSeq 를 Path Var 로 전달받아 해당하는 데이터를 가져온다.
     *
     * @tags [관리자] 시험 API
     * @name FindExamDetailUsingGet
     * @summary [관리자] 시험 단건 조회 API
     * @request GET:/exam/adm/{examSeq}
     */
    findExamDetailUsingGet: (examSeq: number, params: RequestParams = {}) =>
      this.request<ExamDetailResponseDto, void>({
        path: `/exam/adm/${examSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 examSeq 를 Path Variable 로, 수정을 위한 DTO 를 전달받아 해당하는 시험을 수정한다.
     *
     * @tags [관리자] 시험 API
     * @name UpdateExamUsingPut
     * @summary 시험 수정 API
     * @request PUT:/exam/adm/{examSeq}
     */
    updateExamUsingPut: (examSeq: number, examUpdateRequestDto: ExamUpdateRequestDto, params: RequestParams = {}) =>
      this.request<ExamResponseDto, void>({
        path: `/exam/adm/${examSeq}`,
        method: "PUT",
        body: examUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 exam 에 대한 seq 를 Path Variable 로 전달받아 해당하는 시험을 삭제한다.
     *
     * @tags [관리자] 시험 API
     * @name DeleteExamUsingDelete
     * @summary 시험 삭제 API
     * @request DELETE:/exam/adm/{examSeq}
     */
    deleteExamUsingDelete: (examSeq: number, params: RequestParams = {}) =>
      this.request<ExamResponseDto, void>({
        path: `/exam/adm/${examSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 유저-과정 시퀀스를 받아 유저가 시험을 제출할때 호출되는 API
     *
     * @tags [관리자] 시험 API
     * @name FindExamUsingPut
     * @summary 유저 시험 제출 API
     * @request PUT:/exam/submission/{courseUserSeq}
     */
    findExamUsingPut: (
      courseUserSeq: string,
      query: { courseUserSeq: number; examSeq: number },
      params: RequestParams = {},
    ) =>
      this.request<ExamMultiSubjectUpdateResponseDto, void>({
        path: `/exam/submission/${courseUserSeq}`,
        method: "PUT",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 유저가 시험을 시작하면 해당 시험리스트를 뿌려주고 임시 저장이 시작되는 API
     *
     * @tags [관리자] 시험 API
     * @name ExamTestListUsingGet
     * @summary 시험 (유저) 테스트 API
     * @request GET:/exam/test
     */
    examTestListUsingGet: (query: { courseUserSeq: number; examSeq: number }, params: RequestParams = {}) =>
      this.request<ExamTestResponseDto, void>({
        path: `/exam/test`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 유저가 입력 하던 시험에 관한 정보를 보여주는 API * 임시 저장된 값을 불러온다 * 시간이 지났다면 재응시 해야한다.
     *
     * @tags [관리자] 시험 API
     * @name FindTestListTemporaryUsingGet
     * @summary 시험 임시 저장화면 조회 API
     * @request GET:/exam/test/temporary
     */
    findTestListTemporaryUsingGet: (query: { courseUserSeq: number; examSeq: number }, params: RequestParams = {}) =>
      this.request<ExamTestTemporaryResponseDto, void>({
        path: `/exam/test/temporary`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  example = {
    /**
     * No description
     *
     * @tags 실험장 API
     * @name CreateExampleUsingPost
     * @summary createExample
     * @request POST:/example
     */
    createExampleUsingPost: (requestDto: ExampleSaveRequestDto, params: RequestParams = {}) =>
      this.request<ExampleResponseDto, any>({
        path: `/example`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name PostFileUsingPost
     * @summary 파일 업로드 테스트
     * @request POST:/example/file
     */
    postFileUsingPost: (data: any, params: RequestParams = {}) =>
      this.request<boolean, any>({
        path: `/example/file`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name UploadHtmlUsingPost
     * @summary HTML 업로드
     * @request POST:/example/html
     */
    uploadHtmlUsingPost: (requestDto: ExampleHtmlSaveRequestDto, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/example/html`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description identity 를 Path Variable 로 전달받아 해당하는 HTML String 을 전송한다.
     *
     * @tags 실험장 API
     * @name GetHtmlUsingGet
     * @summary HTML 조회
     * @request GET:/example/html/{identity}
     */
    getHtmlUsingGet: (identity: number, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/example/html/${identity}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name DoNothingUsingGet
     * @summary doNothing
     * @request GET:/example/none
     */
    doNothingUsingGet: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/example/none`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name EncTokenTestUsingGet
     * @summary encTokenTest
     * @request GET:/example/none/encToken
     */
    encTokenTestUsingGet: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/example/none/encToken`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name ConvertHtmlToPdfUsingGet
     * @summary HTML to PDF 변환 실험
     * @request GET:/example/pdf
     */
    convertHtmlToPdfUsingGet: (query: { courseUserSeq: number }, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/example/pdf`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name IndexUsingGet
     * @summary index
     * @request GET:/example/pdf/index
     */
    indexUsingGet: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/example/pdf/index`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 실험장 API
     * @name FindAllMultipartRequestsUsingGet
     * @summary [실험] 멀티파트 전체 요청 조회 API
     * @request GET:/example/s3/multipart/all
     */
    findAllMultipartRequestsUsingGet: (params: RequestParams = {}) =>
      this.request<MultipartUploadListing, any>({
        path: `/example/s3/multipart/all`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 처리 이후, 삭제된 요청들을 반환한다.
     *
     * @tags 실험장 API
     * @name DeleteAllMultipartRequestsUsingDelete
     * @summary [실험] 전체 멀티파트 삭제 API
     * @request DELETE:/example/s3/multipart/all
     */
    deleteAllMultipartRequestsUsingDelete: (params: RequestParams = {}) =>
      this.request<MultipartUpload[], any>({
        path: `/example/s3/multipart/all`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 멀티파트 S3 에 대한 업로드가 모두 완료되었음을 S3 에 알린 후, 지금까지 업로드한 청크 파일을 최종적으로 하나로 합쳐 버킷에 업로드한다.
     *
     * @tags 실험장 API
     * @name CompleteMultipartFileUsingPost
     * @summary [실험] 멀티파트 업로드 완료 API
     * @request POST:/example/s3/multipart/complete
     */
    completeMultipartFileUsingPost: (requestDto: FileMultipartCompleteRequestDto, params: RequestParams = {}) =>
      this.request<ExampleMultipartCompleteResponseDto, any>({
        path: `/example/s3/multipart/complete`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description S3 에 멀티파트 업로드를 위한 요청을 생성한다. 반환되는 값은 인코딩된 파일 이름과 업로드 키이다.
     *
     * @tags 실험장 API
     * @name CreateMultipartRequestUsingPost
     * @summary [실험] 멀티파트 업로드 요청 생성 API
     * @request POST:/example/s3/multipart/init
     */
    createMultipartRequestUsingPost: (
      query: {
        dirType?:
          | "RESOURCE_COURSE_IMAGE"
          | "RESOURCE_COURSE_VIDEO"
          | "RESOURCE_IMAGE"
          | "RESOURCE_VIDEO"
          | "RESOURCE_HOMEWORK_FILE"
          | "RESOURCE_FORUM_FILE"
          | "RESOURCE_LIBRARY_FILE"
          | "RESOURCE_LESSON_FILE"
          | "RESOURCE_POST_NOTICE_FILE"
          | "RESOURCE_POST_QUESTION_FILE"
          | "RESOURCE_POST_FAQ_FILE"
          | "RESOURCE_POST_REVIEW_FILE"
          | "RESOURCE_POST_GUIDE_AUTH"
          | "RESOURCE_POST_GUIDE_EDU_REG"
          | "RESOURCE_POST_GUIDE_EDU_LEARNING"
          | "RESOURCE_BANNER_FILE"
          | "RESOURCE_QNA_FILE"
          | "RESOURCE_QNA_ANSWER_FILE"
          | "RESOURCE_LEARNING_MATERIAL_FILE"
          | "RESOURCE_USER_PROFILE_FILE"
          | "RESOURCE_USER_CERTIFICATES";
        fileContentType: string;
        fileOriginalName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<InputStream, any>({
        path: `/example/s3/multipart/init`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 청크 파일과 업로드 키를 전달받아 청크파일을 S3 에 업로드한다. 업로드 이후, 식별가능한 청크 고유 키인 eTag 를 반환한다.
     *
     * @tags 실험장 API
     * @name UploadMultipartUsingPost
     * @summary [실험] 멀티파트 업로드 API
     * @request POST:/example/s3/multipart/upload
     */
    uploadMultipartUsingPost: (data: any, params: RequestParams = {}) =>
      this.request<ExampleMultipartEtagResponseDto, any>({
        path: `/example/s3/multipart/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 처리 이후, 삭제된 요청을 반환한다.
     *
     * @tags 실험장 API
     * @name DeleteMultipartRequestUsingDelete
     * @summary [실험] 특정 멀티파트 요청 삭제 API
     * @request DELETE:/example/s3/multipart/{uploadRequestId}
     */
    deleteMultipartRequestUsingDelete: (uploadRequestId: string, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/example/s3/multipart/${uploadRequestId}`,
        method: "DELETE",
        ...params,
      }),
  };
  file = {
    /**
     * No description
     *
     * @tags [관리자] 파일 API
     * @name FindAllMultipartRequestsUsingGet1
     * @summary [관리자] 멀티파트 전체 요청 조회 API
     * @request GET:/file/multipart/all
     */
    findAllMultipartRequestsUsingGet1: (params: RequestParams = {}) =>
      this.request<MultipartUploadListing, any>({
        path: `/file/multipart/all`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 처리 이후, 삭제된 요청들을 반환한다.
     *
     * @tags [관리자] 파일 API
     * @name DeleteAllMultipartRequestsUsingDelete1
     * @summary [관리자] 전체 멀티파트 삭제 API
     * @request DELETE:/file/multipart/all
     */
    deleteAllMultipartRequestsUsingDelete1: (params: RequestParams = {}) =>
      this.request<MultipartUpload[], any>({
        path: `/file/multipart/all`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 멀티파트 S3 에 대한 업로드가 모두 완료되었음을 S3 에 알린 후, 지금까지 업로드한 청크 파일을 최종적으로 하나로 합쳐 버킷에 업로드한다.
     *
     * @tags [관리자] 파일 API
     * @name CompleteMultipartRequestUsingPost
     * @summary [관리자] 멀티파트 업로드 완료 API
     * @request POST:/file/multipart/complete
     */
    completeMultipartRequestUsingPost: (requestDto: FileMultipartCompleteRequestDto, params: RequestParams = {}) =>
      this.request<CompleteMultipartUploadResult, any>({
        path: `/file/multipart/complete`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description S3 에 멀티파트 업로드를 위한 요청을 생성한다. 반환되는 값은 인코딩된 파일 이름과 업로드 키이다.
     *
     * @tags [관리자] 파일 API
     * @name CreateMultipartRequestUsingPost1
     * @summary [관리자] 멀티파트 업로드 요청 생성 API
     * @request POST:/file/multipart/init
     */
    createMultipartRequestUsingPost1: (requestDto: FileMultipartCreateRequestDto, params: RequestParams = {}) =>
      this.request<FileMultipartCreateResponseDto, void>({
        path: `/file/multipart/init`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 청크 파일과 업로드 키를 전달받아 청크파일을 S3 에 업로드한다. 업로드 이후, 식별가능한 청크 고유 키인 eTag 를 반환한다. { uploadRequestKey: "업로드 키" encFileName: "인코딩 파일 이름" }
     *
     * @tags [관리자] 파일 API
     * @name UploadMultipartUsingPost1
     * @summary [관리자] 멀티파트 업로드 API
     * @request POST:/file/multipart/upload
     */
    uploadMultipartUsingPost1: (data: any, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/file/multipart/upload`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description 처리 이후, 삭제된 요청을 반환한다.
     *
     * @tags [관리자] 파일 API
     * @name DeleteMultipartRequestUsingDelete1
     * @summary [관리자] 특정 멀티파트 요청 삭제 API
     * @request DELETE:/file/multipart/{uploadRequestId}
     */
    deleteMultipartRequestUsingDelete1: (uploadRequestId: string, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/file/multipart/${uploadRequestId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 업로드하고자하는 bbsType Enum(TYPE_FORUM, TYPE_CONTENT 등)과 특정 시퀀스를(토론, 과정 시퀀스 등) Path Varialble 로 전달받고, 업로드 하고자하는 파일을 전달받아 해당하는 S3 에 단일파일 업로드를 수행한다. 50MB 를 초과하는 파일은 업로드할 수 없다. .exe, .ico, .link 파일은 업로드할 수 없다.
     *
     * @tags [관리자] 파일 API
     * @name UploadFilesUsingPost
     * @summary [App & 관리자] 파일 업로드
     * @request POST:/file/{bbsType}/{bbsSeq}
     */
    uploadFilesUsingPost: (
      bbsSeq: number,
      bbsType:
        | "TYPE_FORUM"
        | "TYPE_POST_FAQ"
        | "TYPE_POST_REVIEW"
        | "TYPE_POST_NOTICE"
        | "TYPE_POST_GUIDE_AUTH"
        | "TYPE_POST_GUIDE_EDU_REG"
        | "TYPE_POST_GUIDE_EDU_LEARNING"
        | "TYPE_COURSE"
        | "TYPE_HOMEWORK"
        | "TYPE_LIBRARY"
        | "TYPE_LESSON"
        | "TYPE_BANNER"
        | "TYPE_QNA"
        | "TYPE_QNA_ANSWER"
        | "TYPE_LEARNING_MATERIAL"
        | "TYPE_USER_PROFILE",
      data: { files: File[] },
      params: RequestParams = {},
    ) =>
      this.request<FileResponseDto[], void>({
        path: `/file/${bbsType}/${bbsSeq}`,
        method: "POST",
        body: data,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * @description bbsType Enum(TYPE_FORUM, TYPE_CONTENT 등)과 특정 시퀀스를(토론, 과정 시퀀스 등)을 Path Variable 로, 삭제하고자하는 파일 시퀀스 리스트를 RequestBody 로 전달받아 해당하는 시퀀스의 파일을 제거한다.
     *
     * @tags [관리자] 파일 API
     * @name DeleteFilesUsingDelete
     * @summary [App & 관리자] 파일 삭제
     * @request DELETE:/file/{bbsType}/{bbsSeq}
     */
    deleteFilesUsingDelete: (
      bbsSeq: number,
      bbsType:
        | "TYPE_FORUM"
        | "TYPE_POST_FAQ"
        | "TYPE_POST_REVIEW"
        | "TYPE_POST_NOTICE"
        | "TYPE_POST_GUIDE_AUTH"
        | "TYPE_POST_GUIDE_EDU_REG"
        | "TYPE_POST_GUIDE_EDU_LEARNING"
        | "TYPE_COURSE"
        | "TYPE_HOMEWORK"
        | "TYPE_LIBRARY"
        | "TYPE_LESSON"
        | "TYPE_BANNER"
        | "TYPE_QNA"
        | "TYPE_QNA_ANSWER"
        | "TYPE_LEARNING_MATERIAL"
        | "TYPE_USER_PROFILE",
      requestDto: FileSeqListRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<InputStream, any>({
        path: `/file/${bbsType}/${bbsSeq}`,
        method: "DELETE",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  forum = {
    /**
     * @description 특정 토론 시퀀스에 대해 등록된 모든 댓글 데이터를 조회한다. 페이징을 위한 파라미터도 함께 RequestParam 으로 전달받는다.
     *
     * @tags [App] 토론 댓글 API
     * @name FindForumCommentsUsingGet
     * @summary [App] 댓글 전체 조회 API - Pagination
     * @request GET:/forum/comment
     */
    findForumCommentsUsingGet: (
      query: { elementCnt?: number; forumSeq: number; page: number },
      params: RequestParams = {},
    ) =>
      this.request<ForumCommentResponseDto[], void>({
        path: `/forum/comment`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 특정 토론 시퀀스 forumSeq 에 대해 댓글을 작성한다.<br/><b>부모 댓글일 경우, DTO 내 reference 가 null 이어야하며, 부모 댓글에 대한 대댓글일 경우 DTO 내 reference 는 부모 댓글 시퀀스를 가져야한다.</b>
     *
     * @tags [App] 토론 댓글 API
     * @name CreateForumCommentUsingPost
     * @summary [App] 댓글 등록 API
     * @request POST:/forum/comment
     */
    createForumCommentUsingPost: (requestDto: ForumCommentSaveRequestDto, params: RequestParams = {}) =>
      this.request<ForumCommentResponseDto, void>({
        path: `/forum/comment`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 댓글 시퀀스를 수정한다. 이때 요청한 사용자는 작성한 사용자와 동일한 사용자여야한다. 그렇지 않을 경우, 예외를 발생시킨다.
     *
     * @tags [App] 토론 댓글 API
     * @name UpdateForumCommentUsingPut
     * @summary [App] 댓글 수정 API
     * @request PUT:/forum/comment/{forumCommentSeq}
     */
    updateForumCommentUsingPut: (
      forumCommentSeq: number,
      requestDto: ForumCommentUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<ForumCommentResponseDto, void>({
        path: `/forum/comment/${forumCommentSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 댓글 시퀀스를 Path Var 로 전달받아 해당 댓글을 삭제한다. 이때 요청한 사용자는 작성한 사용자와 동일한 사용자여야한다. 그렇지 않을 경우, 예외를 발생시킨다.<br/>댓글 및 게시글 삭제의 경우, status 를 -1 로 변경시킨다.<br/>관리자는 댓글을 자유롭게 삭제할 수 있다.
     *
     * @tags [App] 토론 댓글 API
     * @name DeleteForumCommentUsingDelete
     * @summary [App] 댓글 삭제 API
     * @request DELETE:/forum/comment/{forumCommentSeq}
     */
    deleteForumCommentUsingDelete: (forumCommentSeq: number, params: RequestParams = {}) =>
      this.request<ForumCommentResponseDto, void>({
        path: `/forum/comment/${forumCommentSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 관리자 페이지 내 특정 강의에 대한 courseSeq 와 페이징 처리를 위한 인자를 RequestParam 으로 전달받아 해당하는 토론을 전체 조회한다.
     *
     * @tags [App & 관리자 & 튜터] 토론 API
     * @name FindForumsUsingGet
     * @summary [관리자 & 튜터] 토론 전체 조회 API - Pagination, JWT, 파일
     * @request GET:/forum/tutor
     */
    findForumsUsingGet: (query: { courseSeq: number; elementCnt?: number; page: number }, params: RequestParams = {}) =>
      this.request<ForumResponseDto, void>({
        path: `/forum/tutor`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지 내 강의에서 DTO 를 전달받아 토론을 생성한다.
     *
     * @tags [App & 관리자 & 튜터] 토론 API
     * @name CreateForumUsingPost
     * @summary [관리자 & 튜터] 토론 생성 API - JWT, 파일
     * @request POST:/forum/tutor
     */
    createForumUsingPost: (requestDto: ForumSaveRequestDto, params: RequestParams = {}) =>
      this.request<ForumResponseDto, void>({
        path: `/forum/tutor`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지 내 특정 토론에 대한 forumSeq 를 PathVar 로 전달받아 해당 토론을 조회한다.
     *
     * @tags [App & 관리자 & 튜터] 토론 API
     * @name FindForumUsingGet
     * @summary [관리자 & 튜터] 토론 단건 조회 API
     * @request GET:/forum/tutor/{forumSeq}
     */
    findForumUsingGet: (forumSeq: number, params: RequestParams = {}) =>
      this.request<ForumDetailResponseDto, void>({
        path: `/forum/tutor/${forumSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 forumSeq 를 PathVar 로 전달받아 해당하는 토론을 수정한다.{ "content": "string", "courseSeq": 0, "status": 0, "subject": "string", "userSeq": 0 }
     *
     * @tags [App & 관리자 & 튜터] 토론 API
     * @name UpdateForumUsingPut
     * @summary [관리자 & 튜터] 토론 수정 API
     * @request PUT:/forum/tutor/{forumSeq}
     */
    updateForumUsingPut: (forumSeq: number, requestDto: ForumUpdateRequestDto, params: RequestParams = {}) =>
      this.request<ForumResponseDto, void>({
        path: `/forum/tutor/${forumSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지 내 토론 시퀀스에 해당하는 forumSeq 를 전달받아 해당 토론을 DB 에서 제거한다.
     *
     * @tags [App & 관리자 & 튜터] 토론 API
     * @name DeleteForumUsingDelete
     * @summary [관리자 & 튜터] 토론 삭제 API
     * @request DELETE:/forum/tutor/{forumSeq}
     */
    deleteForumUsingDelete: (forumSeq: number, params: RequestParams = {}) =>
      this.request<ForumResponseDto, void>({
        path: `/forum/tutor/${forumSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  homework = {
    /**
     * @description 관리자 페이지의 콘텐츠 내 과제 탭에서 전체 과제를 조회한다. RequestParam 으로 contentSeq 와 페이징에 관련된 인자를 전달받는다.
     *
     * @tags [App & 관리자] 과제 API
     * @name FindHomeworksUsingGet
     * @summary [관리자] 과제 전체 조회 API - pagination
     * @request GET:/homework/adm
     */
    findHomeworksUsingGet: (
      query: { contentSeq: number; elementCnt?: number; page: number },
      params: RequestParams = {},
    ) =>
      this.request<HomeworkResponseDto[], void>({
        path: `/homework/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지의 콘텐츠 내 과제 탭에서 DTO 와 파일 리스트를 전달받아 과제를 생성한다.{ "bestAnswer": "모범답안", "content": "내용 마크다운", "contentSeq": 1, "markingRole": "채점기준", "status": 1, "subject": "제목" }
     *
     * @tags [App & 관리자] 과제 API
     * @name CreateHomeworkUsingPost
     * @summary [관리자] 과제 생성 API
     * @request POST:/homework/adm
     */
    createHomeworkUsingPost: (requestDto: HomeworkSaveRequestDto, params: RequestParams = {}) =>
      this.request<HomeworkResponseDto, any>({
        path: `/homework/adm`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지의 콘텐츠 내 과제 탭에서 콘텐츠 시퀀스인 contentSeq 를 PathVariable 로 전달받고, DTO 리스트를 전달받아 과제를 생성한다.<br/><b>일괄 생성의 경우, DTO 내의 contentSeq 는 비우거나 삭제해도 무관하다.</b><br/>일괄 등록 시 파일은 업로드 할 수없다.
     *
     * @tags [App & 관리자] 과제 API
     * @name CreateHomeworksUsingPost
     * @summary [관리자] 과제 일괄 생성 API
     * @request POST:/homework/adm/{contentSeq}
     */
    createHomeworksUsingPost: (
      contentSeq: number,
      requestDtoList: HomeworkSaveRequestDto[],
      params: RequestParams = {},
    ) =>
      this.request<HomeworkResponseDto[], void>({
        path: `/homework/adm/${contentSeq}`,
        method: "POST",
        body: requestDtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지의 콘텐츠 내 과제 탭에서 특정 과제를 조회한다. 이때, homeworkSeq 를 Path Var 로 전달받아 조회한다.
     *
     * @tags [App & 관리자] 과제 API
     * @name FindHomeworkUsingGet
     * @summary [관리자] 과제 단건 조회 API
     * @request GET:/homework/adm/{homeworkSeq}
     */
    findHomeworkUsingGet: (homeworkSeq: number, params: RequestParams = {}) =>
      this.request<HomeworkDetailResponseDto, void>({
        path: `/homework/adm/${homeworkSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지의 콘텐츠 내 특정 과제에서 수정할 DTO 와 파일 리스트를 RequestPart 로, 그리고 homeworkSeq 를 Path Var 로 전달받아 과제를 수정한다.{ "bestAnswer": "string", "content": "string", "contentSeq": 0, "markingRole": "string", "status": 0, "subject": "string" }
     *
     * @tags [App & 관리자] 과제 API
     * @name UpdateHomeworkUsingPut
     * @summary [관리자] 과제 수정 API
     * @request PUT:/homework/adm/{homeworkSeq}
     */
    updateHomeworkUsingPut: (homeworkSeq: number, requestDto: HomeworkUpdateRequestDto, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/homework/adm/${homeworkSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지의 콘텐츠 내 과제 탭에서 특정 과제를 제거한다. 이때, homewworkSeq 를 Path Var 로 전달받아 삭제한다.
     *
     * @tags [App & 관리자] 과제 API
     * @name DeleteHomeworkUsingDelete
     * @summary [관리자] 과제 삭제 API
     * @request DELETE:/homework/adm/{homeworkSeq}
     */
    deleteHomeworkUsingDelete: (homeworkSeq: number, params: RequestParams = {}) =>
      this.request<HomeworkResponseDto, void>({
        path: `/homework/adm/${homeworkSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  learningMaterial = {
    /**
     * @description 클라이언트에서 전체 학습 자료를 조회한다. 이때, keyword 를 Query String 으로 전달받아 제목과 내용에 해당되는 데이터들을 검색한다.
     *
     * @tags [App & 관리자] 학습 자료 API
     * @name FindAllLearningMaterialsUsingGet
     * @summary [App] 학습자료 전체 조회 API - 검색(제목, 내용)
     * @request GET:/learning-material
     */
    findAllLearningMaterialsUsingGet: (
      query?: {
        keyword?: string;
        materialSubType?: "TYPE_CHILDREN" | "TYPE_TEENAGER" | "TYPE_ELDERLY" | "TYPE_SELF_DRIVING";
        materialType?: "TYPE_BY_AGE" | "TYPE_EDUCATIONAL" | "TYPE_VIDEO" | "TYPE_OTHER_ORGAN";
      },
      params: RequestParams = {},
    ) =>
      this.request<LearningMaterialResponseDto[], any>({
        path: `/learning-material`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 등록된 전체 학습 자료를 조회한다.
     *
     * @tags [App & 관리자] 학습 자료 API
     * @name AdmFindAllLearningMaterialUsingGet
     * @summary [관리자] 학습 자료 전체 조회 API - JWT, Pagination
     * @request GET:/learning-material/adm
     */
    admFindAllLearningMaterialUsingGet: (
      query: {
        elementCnt?: number;
        keyword?: string;
        materialSubType?: "TYPE_CHILDREN" | "TYPE_TEENAGER" | "TYPE_ELDERLY" | "TYPE_SELF_DRIVING";
        materialType?: "TYPE_BY_AGE" | "TYPE_EDUCATIONAL" | "TYPE_VIDEO" | "TYPE_OTHER_ORGAN";
        page: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<LearningMaterialResponseDto[], any>({
        path: `/learning-material/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 학습 자료를 등록한다. 파일은 File API 를 호출하여 따로 생성한다.
     *
     * @tags [App & 관리자] 학습 자료 API
     * @name AdmCreateLearningMaterialUsingPost
     * @summary [관리자] 학습 자료 생성 API - JWT, 파일
     * @request POST:/learning-material/adm
     */
    admCreateLearningMaterialUsingPost: (requestDto: LearningMaterialSaveRequestDto, params: RequestParams = {}) =>
      this.request<LearningMaterialResponseDto, any>({
        path: `/learning-material/adm`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 학습자료를 조회한다.
     *
     * @tags [App & 관리자] 학습 자료 API
     * @name AdmFindLearningMaterialUsingGet
     * @summary [관리자] 학습자료 단건 조회 API - JWT
     * @request GET:/learning-material/adm/{learningMaterialSeq}
     */
    admFindLearningMaterialUsingGet: (learningMaterialSeq: number, params: RequestParams = {}) =>
      this.request<LearningMaterialResponseDto, void>({
        path: `/learning-material/adm/${learningMaterialSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 학습자료를 수정한다.
     *
     * @tags [App & 관리자] 학습 자료 API
     * @name AdmUpdateLearningMaterialUsingPut
     * @summary [관리자] 학습자료 수정 API - JWT
     * @request PUT:/learning-material/adm/{learningMaterialSeq}
     */
    admUpdateLearningMaterialUsingPut: (
      learningMaterialSeq: number,
      requestDto: LearningMaterialUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<LearningMaterialResponseDto, void>({
        path: `/learning-material/adm/${learningMaterialSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 학습자료를 삭제한다.
     *
     * @tags [App & 관리자] 학습 자료 API
     * @name AdmDeleteLearningMaterialUsingDelete
     * @summary [관리자] 학습자료 삭제 API - JWT
     * @request DELETE:/learning-material/adm/{learningMaterialSeq}
     */
    admDeleteLearningMaterialUsingDelete: (learningMaterialSeq: number, params: RequestParams = {}) =>
      this.request<LearningMaterialResponseDto, void>({
        path: `/learning-material/adm/${learningMaterialSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  lesson = {
    /**
     * @description 관리자 권한으로 Lesson 의 시퀀스를 Path Variable 로 전달받아 해당 Lesson 을 DB 에서 영구 제거한다.
     *
     * @tags [관리자] 레슨 API
     * @name DeleteLessonUsingDelete
     * @summary [관리자] 레슨 삭제 API
     * @request DELETE:/lesson/adm/delete/{lessonSeq}
     */
    deleteLessonUsingDelete: (lessonSeq: number, params: RequestParams = {}) =>
      this.request<LessonDetailResponseDto, void>({
        path: `/lesson/adm/delete/${lessonSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 관리자 권한으로 Lesson 의 시퀀스를 전달받아 해당 Lesson 을 단건 조회한다.
     *
     * @tags [관리자] 레슨 API
     * @name FindLessonUsingGet
     * @summary [관리자] 레슨 단건 조회 API
     * @request GET:/lesson/adm/detail/{lessonSeq}
     */
    findLessonUsingGet: (lessonSeq: number, params: RequestParams = {}) =>
      this.request<LessonDetailResponseDto, void>({
        path: `/lesson/adm/detail/${lessonSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 권한으로 Lesson 의 시퀀스를 Path Variable 로 전달받아 해당 Lesson 을 수정한다.{ "completeTime": 1532 -> 수료시간, "lessonNm": "string" -> 레슨 이름, "lessonType": 0 -> 레슨 타입 Enum, "chapter": 3 -> 차시, "status": 1 -> 사용 여부, "totalPage": 12 -> 전체 페이지, "totalTime": 1532 -> 총 시간 }
     *
     * @tags [관리자] 레슨 API
     * @name UpdateLessonUsingPut
     * @summary [관리자] 레슨 수정 API
     * @request PUT:/lesson/adm/modification/{lessonSeq}
     */
    updateLessonUsingPut: (
      lessonSeq: number,
      lessonUpdateRequestDto: LessonUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<LessonResponseDto, void>({
        path: `/lesson/adm/modification/${lessonSeq}`,
        method: "PUT",
        body: lessonUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 권한으로 콘텐트의 seq 를 Path Variable 로 전달받아 해당 콘텐트에 해당하는 전체 Lesson 을 chapter(차시) 순으로 조회한다.
     *
     * @tags [관리자] 레슨 API
     * @name FindLessonsUsingGet
     * @summary [관리자] 레슨 전체 조회 API
     * @request GET:/lesson/adm/{contentSeq}
     */
    findLessonsUsingGet: (contentSeq: number, params: RequestParams = {}) =>
      this.request<LessonResponseDto[], void>({
        path: `/lesson/adm/${contentSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 권한으로 contentSeq 를 PathVar 로, DTO를 Body 로 전달받아 Lesson 을 일괄 생성한다.<br/><b>일괄 생성의 경우, DTO 내의 contentSeq 는 비우거나 삭제해도 무관하다.</b>
     *
     * @tags [관리자] 레슨 API
     * @name CreateLessonUsingPost
     * @summary [관리자] 레슨 일괄 생성 API
     * @request POST:/lesson/adm/{contentSeq}
     */
    createLessonUsingPost: (
      contentSeq: number,
      lessonSaveRequestDtoList: LessonSaveRequestDto[],
      params: RequestParams = {},
    ) =>
      this.request<LessonResponseDto[], any>({
        path: `/lesson/adm/${contentSeq}`,
        method: "POST",
        body: lessonSaveRequestDtoList,
        type: ContentType.Json,
        ...params,
      }),
  };
  library = {
    /**
     * @description 관리자 페이지에서 과정에 해당하는 시퀀스와 페이징에 필요한 인자를 RequestParam 으로 전달받아 해당하는 강의 자료들을 전체 조회한다.
     *
     * @tags [관리자 & 튜터] 강의자료 API
     * @name FindLibrariesUsingGet
     * @summary [관리자 & 튜터] 강의 자료 전체 조회 - Pagination
     * @request GET:/library/tutor
     */
    findLibrariesUsingGet: (
      query: { courseSeq: number; elementCnt?: number; page: number },
      params: RequestParams = {},
    ) =>
      this.request<LibraryResponseDto, void>({
        path: `/library/tutor`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 Request DTO 를 전달받아 강의 자료 등록을 수행한다.{ "subject": "string" -> 강의 자료 제목 "content": "string" -> 강의 자료 내용 마크다운, "courseSeq": 0 -> 과정 시퀀스, "status": 0 -> 사용 여부 1 or -1, }
     *
     * @tags [관리자 & 튜터] 강의자료 API
     * @name CreateLibraryUsingPost
     * @summary [관리자 & 튜터] 강의 자료 생성 API
     * @request POST:/library/tutor
     */
    createLibraryUsingPost: (requestDto: LibrarySaveRequestDto, params: RequestParams = {}) =>
      this.request<LibraryResponseDto, void>({
        path: `/library/tutor`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 강의자료에 해당하는 시퀀스를 Path Variable 로 전달받아 해당하는 강의 자료를 단건 조회한다.
     *
     * @tags [관리자 & 튜터] 강의자료 API
     * @name FindLibraryUsingGet
     * @summary [관리자 & 튜터] 강의 자료 상세조회 API
     * @request GET:/library/tutor/{librarySeq}
     */
    findLibraryUsingGet: (librarySeq: number, params: RequestParams = {}) =>
      this.request<LibraryDetailResponseDto, void>({
        path: `/library/tutor/${librarySeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 강의자료에 해당하는 시퀀스를 Path Variable 로 전달받아 해당 강의 자료를 수정한다. { "subject": "강의 자료 제목" "content": "강의 자료 내용 마크다운" "status": "상태 1 or -1" }
     *
     * @tags [관리자 & 튜터] 강의자료 API
     * @name UpdateLibraryUsingPut
     * @summary [관리자 & 튜터] 강의 자료 수정 API
     * @request PUT:/library/tutor/{librarySeq}
     */
    updateLibraryUsingPut: (librarySeq: number, requestDto: LibraryUpdateRequestDto, params: RequestParams = {}) =>
      this.request<LibraryResponseDto, void>({
        path: `/library/tutor/${librarySeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 강의자료에 해당하는 시퀀스를 Path Var 로 전달받아 해당 강의 자료를 수정한다.
     *
     * @tags [관리자 & 튜터] 강의자료 API
     * @name DeleteLibraryUsingDelete
     * @summary [관리자 & 튜터] 강의 자료 삭제 API
     * @request DELETE:/library/tutor/{librarySeq}
     */
    deleteLibraryUsingDelete: (librarySeq: number, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/library/tutor/${librarySeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  mainDisplay = {
    /**
     * @description 유저페이지나 관리자페이지에서의 화면 조회
     *
     * @tags [App & 관리자] 메인 화면 API
     * @name FindMainDisplayUsingGet
     * @summary [App & 관리자] 메인 화면 조회 API
     * @request GET:/main-display
     */
    findMainDisplayUsingGet: (params: RequestParams = {}) =>
      this.request<MainDisplayResponseDto[], void>({
        path: `/main-display`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 해당 화면에 상태 수정 한다.
     *
     * @tags [App & 관리자] 메인 화면 API
     * @name UpdateMainDisplayUsingPut
     * @summary [관리자] 메인 화면 수정 API
     * @request PUT:/main-display/adm/{mainDisplaySeq}
     */
    updateMainDisplayUsingPut: (
      mainDisplaySeq: string,
      mainDisplayUpdateRequestDto: MainDisplayUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<MainDisplayUpdateResponseDto, void>({
        path: `/main-display/adm/${mainDisplaySeq}`,
        method: "PUT",
        body: mainDisplayUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  nice = {
    /**
     * @description uuid 값으로 휴대폰 본인인증을 성공한 유저를 조회한다.
     *
     * @tags NICE 휴대폰 본인인증 API
     * @name PhoneConfirmUsingGet
     * @summary 휴대폰 본인인증 (성공) 조회 API
     * @request GET:/nice/phone/confirm
     */
    phoneConfirmUsingGet: (query: { uuid: string }, params: RequestParams = {}) =>
      this.request<NicePhoneResultResponseDto, void>({
        path: `/nice/phone/confirm`,
        method: "GET",
        query: query,
        ...params,
      }),
  };
  post = {
    /**
     * @description 앱에서 게시글의 타입을 전달받아 해당하는 타입의 전체 게시글을 조회한다.
     *
     * @tags [App & 관리자] 게시글 API
     * @name FindPostsUsingGet
     * @summary [App] 게시글 전체 조회 - Pagination
     * @request GET:/post
     */
    findPostsUsingGet: (
      query: {
        boardType:
          | "TYPE_NOTICE"
          | "TYPE_REVIEW"
          | "TYPE_FAQ"
          | "TYPE_GUIDE_AUTH"
          | "TYPE_GUIDE_EDU_REGI"
          | "TYPE_GUIDE_EDU_LEARNING";
        courseSeq?: number;
        elementCnt?: number;
        page: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PostResponseDto, void>({
        path: `/post`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 게시글을 작성한다. 이때, 공지, FAQ, 가이드 타입의 게시글은 관리자만 허용된다. 해당 타입에 대해서 관리자 권한이 없을 경우 예외를 발생시킨다. <b>courseSeq 가 0일 경우, 전체 공지 및 전체 자주묻는 질문, 전체 가이드로 등록된다.</b>
     *
     * @tags [App & 관리자] 게시글 API
     * @name CreatePostUsingPost
     * @summary [App & 관리자] 게시글 작성 API - JWT
     * @request POST:/post
     */
    createPostUsingPost: (requestDto: PostSaveRequestDto, params: RequestParams = {}) =>
      this.request<PostResponseDto, void>({
        path: `/post`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 게시글의 타입을 전달받아 해당하는 타입의 전체 게시글을 조회한다.
     *
     * @tags [App & 관리자] 게시글 API
     * @name AdmFindPostsUsingGet
     * @summary [관리자] 게시글 전체 조회 - Pagination
     * @request GET:/post/adm
     */
    admFindPostsUsingGet: (
      query: {
        boardType:
          | "TYPE_NOTICE"
          | "TYPE_REVIEW"
          | "TYPE_FAQ"
          | "TYPE_GUIDE_AUTH"
          | "TYPE_GUIDE_EDU_REGI"
          | "TYPE_GUIDE_EDU_LEARNING";
        elementCnt?: number;
        page: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PostResponseDto, any>({
        path: `/post/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 게시글의 시퀀스를 Path Var 로 전달받아 해당 게시글을 단건 조회한다.
     *
     * @tags [App & 관리자] 게시글 API
     * @name AdmFindPostUsingGet
     * @summary [관리자] 게시글 단건 조회
     * @request GET:/post/adm/{postSeq}
     */
    admFindPostUsingGet: (postSeq: number, params: RequestParams = {}) =>
      this.request<PostDetailResponseDto, void>({
        path: `/post/adm/${postSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 특정 게시글 시퀀스에 대해 등록된 모든 댓글 데이터를 조회한다. 페이징을 위한 파라미터도 함께 RequestParam 으로 전달받는다.
     *
     * @tags [App] 게시글 댓글 API
     * @name FindPostCommentsUsingGet
     * @summary [App] 댓글 전체 조회 API - Pagination
     * @request GET:/post/comment
     */
    findPostCommentsUsingGet: (
      query: { elementCnt?: number; page: number; postSeq: number },
      params: RequestParams = {},
    ) =>
      this.request<PostCommentResponseDto[], void>({
        path: `/post/comment`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 특정 게시글 시퀀스 postSeq 에 대해 댓글을 작성한다.<br/><b>부모 댓글일 경우, DTO 내 reference 가 null 이어야하며, 부모 댓글에 대한 대댓글일 경우 DTO 내 reference 는 부모 댓글 시퀀스를 가져야한다.</b>
     *
     * @tags [App] 게시글 댓글 API
     * @name CreatePostCommentUsingPost
     * @summary [App] 댓글 등록 API
     * @request POST:/post/comment
     */
    createPostCommentUsingPost: (requestDto: PostCommentSaveRequestDto, params: RequestParams = {}) =>
      this.request<PostCommentResponseDto, void>({
        path: `/post/comment`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 댓글 시퀀스를 수정한다. 이때 요청한 사용자는 작성한 사용자와 동일한 사용자여야한다. 그렇지 않을 경우, 예외를 발생시킨다.
     *
     * @tags [App] 게시글 댓글 API
     * @name UpdatePostCommentUsingPut
     * @summary [App] 댓글 수정 API
     * @request PUT:/post/comment/{postCommentSeq}
     */
    updatePostCommentUsingPut: (
      postCommentSeq: number,
      requestDto: PostCommentUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<PostCommentResponseDto, void>({
        path: `/post/comment/${postCommentSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 댓글 시퀀스를 Path Var 로 전달받아 해당 댓글을 삭제한다. 이때 요청한 사용자는 작성한 사용자와 동일한 사용자여야한다. 그렇지 않을 경우, 예외를 발생시킨다.<br/>댓글 및 게시글 삭제의 경우, status 를 -1 로 변경시킨다.<br/>관리자는 댓글을 자유롭게 삭제할 수 있다.
     *
     * @tags [App] 게시글 댓글 API
     * @name DeletePostCommentUsingDelete
     * @summary [App] 댓글 삭제 API
     * @request DELETE:/post/comment/{postCommentSeq}
     */
    deletePostCommentUsingDelete: (postCommentSeq: number, params: RequestParams = {}) =>
      this.request<PostCommentResponseDto, void>({
        path: `/post/comment/${postCommentSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 앱에서 게시글의 시퀀스를 Path Var 로 전달받아 해당 게시글을 단건 조회한다.또한 게시글 상세조회가 호출되면 조회수를 증가시킨다.
     *
     * @tags [App & 관리자] 게시글 API
     * @name FindPostUsingGet
     * @summary [App] 게시글 단건 조회
     * @request GET:/post/{postSeq}
     */
    findPostUsingGet: (postSeq: number, params: RequestParams = {}) =>
      this.request<PostDetailResponseDto, void>({
        path: `/post/${postSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 앱에서 게시글 시퀀스를 Path Variable 로 전달받아 해당 게시글을 수정한다. 이때, 요청자는 작성자의 유저 시퀀스와 일치해야한다. 관리자 페이지에서 수정하는 게시글(공지, FAQ 등)은 요청자와 작성자의 시퀀스가 동일하지 않아도 동작한다.{ "content": "string", "noticeYn": "Y", "publicYn": "Y", "subject": "string" }
     *
     * @tags [App & 관리자] 게시글 API
     * @name UpdatePostUsingPut
     * @summary [App] 게시글 수정 API - JWT
     * @request PUT:/post/{postSeq}
     */
    updatePostUsingPut: (postSeq: number, requestDto: PostUpdateRequestDto, params: RequestParams = {}) =>
      this.request<PostResponseDto, void>({
        path: `/post/${postSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 앱에서 특정 게시글에 대한 시퀀스를 Path variable 로 전달받아 해당 게시글을 제거한다. 이때, 요청자는 작성자와 일치해야하며, 관리자 권한의 경우 작성자에 관계 없이 게시글 제거가 가능하다. 바로 DB 에서 삭제되지 않으며, status 값이 -1 로 변경된다.
     *
     * @tags [App & 관리자] 게시글 API
     * @name DeletePostUsingDelete
     * @summary [App] 게시글 삭제 - JWT
     * @request DELETE:/post/{postSeq}
     */
    deletePostUsingDelete: (postSeq: number, params: RequestParams = {}) =>
      this.request<PostResponseDto, void>({
        path: `/post/${postSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  qna = {
    /**
     * @description 클라이언트로부터 현재 유저의 Access Token 을 Header 로 전달받아 해당하는 사용자의 1:1 문의 내역을 전체 조회한다.
     *
     * @tags [App & 관리자] 1:1 문의 API
     * @name FindAllQnaUsingGet
     * @summary [App] 1:1 문의 내역 전체 조회 API - JWT
     * @request GET:/qna
     */
    findAllQnaUsingGet: (query?: { elementCnt?: number; page?: number }, params: RequestParams = {}) =>
      this.request<QnaResponseDto[], any>({
        path: `/qna`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 사용자 페이지에서 1:1 문의를 등록한다. 파일 첨부가 필요할 경우 별도의 파일 API 를 사용하여 등록한다. 첨부파일은 50MB 이내 첨부불가 타입: .exe, .link, .ico
     *
     * @tags [App & 관리자] 1:1 문의 API
     * @name CreateQnaUsingPost
     * @summary [App] 1:1 문의 등록 - JWT, 파일[별도 API 이용]
     * @request POST:/qna
     */
    createQnaUsingPost: (requestDto: QnaSaveRequestDto, params: RequestParams = {}) =>
      this.request<QnaResponseDto, any>({
        path: `/qna`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 등록된 1:1 문의를 전체 조회한다.
     *
     * @tags [App & 관리자] 1:1 문의 API
     * @name AdmFindAllQnaUsingGet
     * @summary [관리자] 1:1 문의 전체 조회 - JWT, Pagination
     * @request GET:/qna/adm
     */
    admFindAllQnaUsingGet: (query?: { elementCnt?: number; page?: number }, params: RequestParams = {}) =>
      this.request<QnaResponseDto[], any>({
        path: `/qna/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 1:1 문의를 조회한다.
     *
     * @tags [App & 관리자] 1:1 문의 API
     * @name AdmFindQnaUsingGet
     * @summary [관리자] 1:1 문의 단건 조회 - JWT
     * @request GET:/qna/adm/{qnaSeq}
     */
    admFindQnaUsingGet: (qnaSeq: number, params: RequestParams = {}) =>
      this.request<QnaResponseDto, void>({
        path: `/qna/adm/${qnaSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 1:1 문의에 대한 답변을 작성한다.
     *
     * @tags [App & 관리자] 1:1 문의 API
     * @name AdmCreateQnaAnswerUsingPost
     * @summary [관리자] 1:1 문의 답변 - JWT, 파일[별도 API 이용]
     * @request POST:/qna/adm/{qnaSeq}
     */
    admCreateQnaAnswerUsingPost: (qnaSeq: number, requestDto: QnaAnswerSaveRequestDto, params: RequestParams = {}) =>
      this.request<QnaAnswerResponseDto, void>({
        path: `/qna/adm/${qnaSeq}`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  question = {
    /**
     * @description 관리자 페이지에서 contentSeq 를 Request Param 으로 전달받아 전체 문제 데이터를 조회한다.
     *
     * @tags [관리자] 문제은행 API
     * @name FindQuestionsUsingGet
     * @summary [관리자] 문제은행 전체 조회 API - Pagination
     * @request GET:/question/adm
     */
    findQuestionsUsingGet: (
      query: { contentSeq: number; elementCnt?: number; page: number },
      params: RequestParams = {},
    ) =>
      this.request<QuestionResponseDto[], void>({
        path: `/question/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 DTO 를 전달받아 문제를 생성한다.
     *
     * @tags [관리자] 문제은행 API
     * @name CreateQuestionUsingPost
     * @summary [관리자] 문제은행 생성 API
     * @request POST:/question/adm
     */
    createQuestionUsingPost: (questionSaveRequestDto: QuestionSaveRequestDto, params: RequestParams = {}) =>
      this.request<QuestionResponseDto, void>({
        path: `/question/adm`,
        method: "POST",
        body: questionSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 콘텐츠의 시험 탭 내 문제은행에 대한 문항 등록 시 문항 검색을 수행한다.<br/>현재 콘텐츠의 seq 를 Path Var 로 전달받고, 문항의 제목을 Optional 하게 Request Param 으로 전달받아 검색을 수행한다. 또한, 현재 Page 또한 Request param 으로 전달받아 페이지네이션을 수행한다.<br/>반환되는 결과는 해당하는 문항에 대한 정보들이다.<br/><b>이때, 문제 은행에서 사용 중지인 상태의 데이터는 조회되지 않는다.<b/>
     *
     * @tags [관리자] 문제은행 API
     * @name FindSpecificQuestionInExamTabUsingGet
     * @summary [관리자] 콘텐츠 내 시험 탭 내 문제은행->문항등록 검색 API
     * @request GET:/question/adm/exam/{contentSeq}
     */
    findSpecificQuestionInExamTabUsingGet: (
      contentSeq: number,
      query: { elementCnt?: number; page: number; questionTitle?: string },
      params: RequestParams = {},
    ) =>
      this.request<SpecificQuestionInExamTabResponseDto, void>({
        path: `/question/adm/exam/${contentSeq}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 contentSeq 를 Path Var 로, Body 로 DTO 리스트를 전달받아 문제를 일괄 생성한다.<br/><b>일괄 생성의 경우, DTO 내의 contentSeq 는 비우거나 삭제해도 무관하다.</b>
     *
     * @tags [관리자] 문제은행 API
     * @name CreateQuestionsUsingPost
     * @summary [관리자] 문제은행 일괄 생성 API
     * @request POST:/question/adm/{contentSeq}
     */
    createQuestionsUsingPost: (
      contentSeq: number,
      requestDtoList: QuestionSaveRequestDto[],
      params: RequestParams = {},
    ) =>
      this.request<QuestionResponseDto[], void>({
        path: `/question/adm/${contentSeq}`,
        method: "POST",
        body: requestDtoList,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 questionSeq 를 Path Variable 로 전달받아 해당하는 문제은행 데이터를 단건 조회한다.
     *
     * @tags [관리자] 문제은행 API
     * @name FindQuestionUsingGet
     * @summary [관리자] 문제은행 단건 조회 API
     * @request GET:/question/adm/{questionSeq}
     */
    findQuestionUsingGet: (questionSeq: number, params: RequestParams = {}) =>
      this.request<QuestionResponseDto, void>({
        path: `/question/adm/${questionSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 Update DTO 와 questionSeq 를 Path Var 로 전달받아 문제은행 데이터를 수정한다.
     *
     * @tags [관리자] 문제은행 API
     * @name UpdateQuestionUsingPut
     * @summary [관리자] 문제은행 수정 API
     * @request PUT:/question/adm/{questionSeq}
     */
    updateQuestionUsingPut: (
      questionSeq: number,
      questionUpdateRequestDto: QuestionUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<InputStream, any>({
        path: `/question/adm/${questionSeq}`,
        method: "PUT",
        body: questionUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 questionSeq 를 Path Variable 로 전달받아 해당 문제은행을 삭제한다.
     *
     * @tags [관리자] 문제은행 API
     * @name DeleteQuestionUsingDelete
     * @summary [관리자] 문제은행 삭제 API
     * @request DELETE:/question/adm/{questionSeq}
     */
    deleteQuestionUsingDelete: (questionSeq: number, params: RequestParams = {}) =>
      this.request<QuestionResponseDto, void>({
        path: `/question/adm/${questionSeq}`,
        method: "DELETE",
        ...params,
      }),
  };
  survey = {
    /**
     * @description 관리자 페이지에서 설문에 대하여 전체 조회를 수행한다. 쿼리 스트링으로 페이징 및 검색을 위한 데이터를 전달받는다.
     *
     * @tags [App & 관리자] 설문 API
     * @name AdmFindAllSurveysUsingGet
     * @summary [관리자] 설문 전체 조회 API
     * @request GET:/survey/adm
     */
    admFindAllSurveysUsingGet: (
      query?: { elementCnt?: number; page?: number; title?: string },
      params: RequestParams = {},
    ) =>
      this.request<SurveyResponseDto[], any>({
        path: `/survey/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 설문을 생성한다. Json 형태로 Request Body 를 전달받는다.
     *
     * @tags [App & 관리자] 설문 API
     * @name AdmCreateSurveyUsingPost
     * @summary [관리자] 설문 생성 API
     * @request POST:/survey/adm
     */
    admCreateSurveyUsingPost: (requestDto: SurveyRequestDto, params: RequestParams = {}) =>
      this.request<SurveyResponseDto, any>({
        path: `/survey/adm`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 설문을 단건 조회한다.
     *
     * @tags [App & 관리자] 설문 API
     * @name AdmFindSurveyUsingGet
     * @summary [관리자] 설문 단건 조회 API
     * @request GET:/survey/adm/{surveySeq}
     */
    admFindSurveyUsingGet: (surveySeq: number, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/survey/adm/${surveySeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 설문을 수정한다.
     *
     * @tags [App & 관리자] 설문 API
     * @name AdmModifySurveyUsingPut
     * @summary [관리자] 설문 수정 API
     * @request PUT:/survey/adm/{surveySeq}
     */
    admModifySurveyUsingPut: (surveySeq: number, requestDto: SurveyRequestDto, params: RequestParams = {}) =>
      this.request<SurveyResponseDto, void>({
        path: `/survey/adm/${surveySeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 특정 설문을 제거한다.
     *
     * @tags [App & 관리자] 설문 API
     * @name AdmDeleteSurveyUsingDelete
     * @summary [관리자] 특정 설문 삭제 API
     * @request DELETE:/survey/adm/{surveySeq}
     */
    admDeleteSurveyUsingDelete: (surveySeq: number, params: RequestParams = {}) =>
      this.request<SurveyResponseDto, void>({
        path: `/survey/adm/${surveySeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 클라이언트 단에서 현재 유저가 수강중인 과정 신청 시퀀스를 전달받아 특정 설문을 조회한다. 설문 조회 시, 요청자의 유저 시퀀스에 대하여 현재 과정에 대한 전체 진도율이 100%인지 체크한다. 진도율이 100% 이 아닐 경우 예외를 발생시킨다.
     *
     * @tags [App & 관리자] 설문 API
     * @name FindSurveyUsingGet
     * @summary [App] 설문 조회 API
     * @request GET:/survey/course-class/{courseUserSeq}
     */
    findSurveyUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<SurveyResponseDto, void>({
        path: `/survey/course-class/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 클라이언트에서 특정 surveySeq 에 대해 설문 참여 이후, 결과를 제출한다. 요청 데이터 중, answer 프로퍼티는 사용자가 선택한 문항 인덱스 또는 주관식에 대한 답변이다. (객관식의 경우 -> item1~item10) item1: 1 item2: 2 itemN: N then 'answer': '3' 주관식의 경우 'answer': '나는 집에 가고 싶다 등' <b>객관식의 '기타' 항목일 경우 etcAnswer 에 값을 포함하여 전송. 이외에는 반드시 null 혹은 공백이어야한다.</b>
     *
     * @tags [App & 관리자] 설문 API
     * @name ParticipateSurveyUsingPost
     * @summary [App] 설문 참여(제출) API
     * @request POST:/survey/participant
     */
    participateSurveyUsingPost: (requestDto: SurveyParticipateRequestDto, params: RequestParams = {}) =>
      this.request<InputStream, any>({
        path: `/survey/participant`,
        method: "POST",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  terms = {
    /**
     * @description 관리자 페이지에서 생성한 이용 약관을 전체 조회한다.
     *
     * @tags [관리자] 이용 약관 API
     * @name AdmFindAllTermsUsingGet
     * @summary [관리자] 이용 약관 전체 조회 API
     * @request GET:/terms/adm
     */
    admFindAllTermsUsingGet: (params: RequestParams = {}) =>
      this.request<TermsResponseDto, void>({
        path: `/terms/adm`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 이용 약관을 생성한다.
     *
     * @tags [관리자] 이용 약관 API
     * @name AdmSaveTermsUsingPost
     * @summary [관리자] 이용 약관 생성 API
     * @request POST:/terms/adm
     */
    admSaveTermsUsingPost: (termsSaveRequestDto: TermsSaveRequestDto, params: RequestParams = {}) =>
      this.request<TermsResponseDto, void>({
        path: `/terms/adm`,
        method: "POST",
        body: termsSaveRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 생성한 이용 약관을 조회한다.
     *
     * @tags [관리자] 이용 약관 API
     * @name AdmFindTermsUsingGet
     * @summary [관리자] 이용 약관 단건 조회 API
     * @request GET:/terms/adm/{termsSeq}
     */
    admFindTermsUsingGet: (termsSeq: number, params: RequestParams = {}) =>
      this.request<TermsResponseDto, void>({
        path: `/terms/adm/${termsSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 이용 약관을 수정한다.
     *
     * @tags [관리자] 이용 약관 API
     * @name AdmUpdateTermsUsingPut
     * @summary [관리자] 이용 약관 수정 API
     * @request PUT:/terms/adm/{termsSeq}
     */
    admUpdateTermsUsingPut: (
      termsSeq: number,
      termsUpdateRequestDto: TermsUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<TermsResponseDto, void>({
        path: `/terms/adm/${termsSeq}`,
        method: "PUT",
        body: termsUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
  user = {
    /**
     * @description Access Token 을 헤더로 전달받아 해당하는 유저를 DB 에서 영구 제거한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name DeleteUserUsingDelete
     * @summary [App] 특정 유저 삭제 API - JWT 사용
     * @request DELETE:/user
     */
    deleteUserUsingDelete: (params: RequestParams = {}) =>
      this.request<UserDetailsImpl, any>({
        path: `/user`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 전체 유저 리스트를 조회한다. 이때, 페이징을 위한 인자를 Request Param 으로 전달받는다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmFindUsersUsingGet
     * @summary [관리자] 전체 유저 API - JWT | Pagination
     * @request GET:/user/adm
     */
    admFindUsersUsingGet: (query: { elementCnt?: number; page: number }, params: RequestParams = {}) =>
      this.request<UserResponseDto[], any>({
        path: `/user/adm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description 유저의 시퀀스를 RequestParam 으로 전달받아 해당하는 유저의 계정 잠금을 해제한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmReleaseAccountLockUsingPost
     * @summary [관리자] 유저 계정 잠김 해제 API - JWT
     * @request POST:/user/adm/account/release
     */
    admReleaseAccountLockUsingPost: (query: { userSeq: number }, params: RequestParams = {}) =>
      this.request<boolean, void>({
        path: `/user/adm/account/release`,
        method: "POST",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 사용자의 접근 권한을 추가한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmAddRoleUsingPut
     * @summary [관리자] 유저 권한 수정(추가) API - JWT 사용
     * @request PUT:/user/adm/role/add
     */
    admAddRoleUsingPut: (roleUpdateRequestDto: RoleUpdateRequestDto, params: RequestParams = {}) =>
      this.request<RoleUpdateRequestDto, any>({
        path: `/user/adm/role/add`,
        method: "PUT",
        body: roleUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 사용자의 접근 권한을 삭제한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmDeleteRoleUsingPut
     * @summary [관리자] 유저 권한 수정(삭제) API - JWT 사용
     * @request PUT:/user/adm/role/delete
     */
    admDeleteRoleUsingPut: (roleUpdateRequestDto: RoleUpdateRequestDto, params: RequestParams = {}) =>
      this.request<RoleUpdateRequestDto, any>({
        path: `/user/adm/role/delete`,
        method: "PUT",
        body: roleUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자페이지에서 특정 유저에 대한 시퀀스를 Path Variable 로 전달받아 해당하는 사용자의 상세 정보를 조회한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmFindUserUsingGet
     * @summary [관리자] 유저 단건 조회 API - JWT
     * @request GET:/user/adm/{userSeq}
     */
    admFindUserUsingGet: (userSeq: number, params: RequestParams = {}) =>
      this.request<UserResponseDto, void>({
        path: `/user/adm/${userSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 수정할 유저의 시퀀스를 PathVar 로 전달받아 해당하는 유저를 수정한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmUpdateUserInfoUsingPut
     * @summary [관리자] 유저 수정 API - JWT
     * @request PUT:/user/adm/{userSeq}
     */
    admUpdateUserInfoUsingPut: (userSeq: number, requestDto: UserInfoUpdateRequestDto, params: RequestParams = {}) =>
      this.request<UserResponseDto, void>({
        path: `/user/adm/${userSeq}`,
        method: "PUT",
        body: requestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 관리자 페이지에서 삭제할 유저의 시퀀스를 PathVar 으로 전달받아 해당하는 유저를 제거한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name AdmDeleteUserUsingDelete
     * @summary [관리자] 유저 제거 API
     * @request DELETE:/user/adm/{userSeq}
     */
    admDeleteUserUsingDelete: (userSeq: number, params: RequestParams = {}) =>
      this.request<UserResponseDto, void>({
        path: `/user/adm/${userSeq}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * @description 받아온 인증정보로 유저가 있는지 확인한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name ChangePasswordUsingPut
     * @summary [App] 유저 비밀번호 찾기로 비밀번호 변경 API
     * @request PUT:/user/change-password
     */
    changePasswordUsingPut: (userFindChangeRequestDto: UserFindChangeRequestDto, params: RequestParams = {}) =>
      this.request<UserFindChangeRequestDto, void>({
        path: `/user/change-password`,
        method: "PUT",
        body: userFindChangeRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 받아온 인증정보로 유저가 있는지 확인한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name ExistsIdUsingPost
     * @summary [App] 비밀번호 찾기 API
     * @request POST:/user/exists-id
     */
    existsIdUsingPost: (userFIndPasswordRequestDto: UserFindPasswordRequestDto, params: RequestParams = {}) =>
      this.request<UserFindPasswordResponseDto, void>({
        path: `/user/exists-id`,
        method: "POST",
        body: userFIndPasswordRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 받아온 인증정보로 유저 아이디를 찾아 보여준다
     *
     * @tags [관리자 & App] 유저 API
     * @name FindUserIdUsingPost
     * @summary [App] 아이디 찾기 API
     * @request POST:/user/find-id
     */
    findUserIdUsingPost: (userFindIdRequestDto: UserFindIdRequestDto, params: RequestParams = {}) =>
      this.request<UserFindIdResponseDto, void>({
        path: `/user/find-id`,
        method: "POST",
        body: userFindIdRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Access Token 을 헤더로 전달받아 해당 유저의 로그인 히스토리를 등록한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name CreateLoginHistoryUsingPost
     * @summary [App] 유저 로그인 히스토리 등록 API - JWT 사용
     * @request POST:/user/login-history
     */
    createLoginHistoryUsingPost: (params: RequestParams = {}) =>
      this.request<UserLoginHistoryResponseDto, any>({
        path: `/user/login-history`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 특정 유저의 aT 를 헤더로 전달받아 해당하는 유저의 정보를 반환한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name FindMyInfoUsingGet
     * @summary [App] 특정 유저 조회 API - JWT 사용
     * @request GET:/user/myinfo
     */
    findMyInfoUsingGet: (params: RequestParams = {}) =>
      this.request<UserDetailsImpl, any>({
        path: `/user/myinfo`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 해당하는 유저가 증명서 발급을 위해 수강중인 모든 과정에 대한 전체 조회.
     *
     * @tags [관리자 & App] 유저 API
     * @name FindAllMyCourseListUsingGet
     * @summary [App] 유저 마이페이지 증명서 발급을 위한 과정 전체조회 API
     * @request GET:/user/myinfo/certificates
     */
    findAllMyCourseListUsingGet: (params: RequestParams = {}) =>
      this.request<UserMyinfoCertificatesResponseDto, void>({
        path: `/user/myinfo/certificates`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 해당하는 유저가 증명서 발급을 위해 수강중인 특정 과정에 대한 확인.
     *
     * @tags [관리자 & App] 유저 API
     * @name FindCertificatesConfirmUsingGet
     * @summary [App] 유저 마이페이지 증명서 발급을 위한 확인 API
     * @request GET:/user/myinfo/certificates/confirm/{courseUserSeq}
     */
    findCertificatesConfirmUsingGet: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<UserMyinfoCertificatesResponseDto, void>({
        path: `/user/myinfo/certificates/confirm/${courseUserSeq}`,
        method: "GET",
        ...params,
      }),

    /**
     * @description courseUserSeq 를 PathVariable 로 전달받아 수료가 완료된 건에 대하여 수료증을 PDF 로 발급한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name DownloadCertPdfUsingPost
     * @summary [App] 유저 마이페이지 내 증명서 PDF 다운로드
     * @request POST:/user/myinfo/certificates/download/{courseUserSeq}
     */
    downloadCertPdfUsingPost: (courseUserSeq: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/myinfo/certificates/download/${courseUserSeq}`,
        method: "POST",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 클라이언트에서 현재 유저에 대한 aT 를 헤더로 전달받아 학습 중인 과정, 학습 종료 과정을 조회한다. 학습 중인 과정과 종료된 과정은 수강 가능 기간에 따라 구분된다.
     *
     * @tags [관리자 & App] 유저 API
     * @name FindLearningStatusUsingGet
     * @summary [App] 학습현황 조회 API - JWT
     * @request GET:/user/myinfo/learning-status
     */
    findLearningStatusUsingGet: (params: RequestParams = {}) =>
      this.request<CourseUserMyInfoResponseDto[], any>({
        path: `/user/myinfo/learning-status`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Access Token 을 헤더로 전달받아 해당하는 유저의 정보를 수정한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name ModifyMyInfoUsingPut
     * @summary [App] 특정 유저 수정 API - JWT 사용
     * @request PUT:/user/myinfo/modify
     */
    modifyMyInfoUsingPut: (userModifyRequestDto: UserModifyRequestDto, params: RequestParams = {}) =>
      this.request<UserModifyResponseDto, any>({
        path: `/user/myinfo/modify`,
        method: "PUT",
        body: userModifyRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Access Token 을 헤더로 전달받아 해당하는 유저의 비밀번호를 변경한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name ModifyMyPasswordUsingPut
     * @summary [App] 특정 유저 패스워드 변경 API - JWT 사용
     * @request PUT:/user/myinfo/modify/password
     */
    modifyMyPasswordUsingPut: (
      userPasswordModifyRequestDto: UserPasswordModifyRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<UserDetailsImpl, void>({
        path: `/user/myinfo/modify/password`,
        method: "PUT",
        body: userPasswordModifyRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 해당하는 유저 (도민교통 안전교육자)의 정보를 조회한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name ProvincialFindUserUsingGet
     * @summary [App] 유저 (도민교통 안전교육자) 조회 API
     * @request GET:/user/provincial
     */
    provincialFindUserUsingGet: (params: RequestParams = {}) =>
      this.request<UserProvincialFindResponseDto, void>({
        path: `/user/provincial`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 해당(로그인한)하는 유저 (도민교통 안전교육자)의 정보를 수정한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name ProvincialTrafficSafetyUpdateUserUsingPut
     * @summary [App] 유저 (도민교통 안전교육자) 수정 API, 파일
     * @request PUT:/user/provincial
     */
    provincialTrafficSafetyUpdateUserUsingPut: (
      userProvincialUpdateRequestDto: UserProvincialUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<UserProvincialUpdateResponseDto, void>({
        path: `/user/provincial`,
        method: "PUT",
        body: userProvincialUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description 해당하는 유저 (운수종사자 / 저상버스운전자)의 정보를 조회한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name TransportFindUserUsingGet
     * @summary [App] 유저 (운수종사자 / 저상버스운전자) 조회 API
     * @request GET:/user/transport
     */
    transportFindUserUsingGet: (params: RequestParams = {}) =>
      this.request<UserTransportFindResponseDto, void>({
        path: `/user/transport`,
        method: "GET",
        ...params,
      }),

    /**
     * @description 해당(로그인한)하는 유저 (운수종사자 / 저상버스운전자)의 정보를 수정한다.
     *
     * @tags [관리자 & App] 유저 API
     * @name TransWorkerUpdateUserUsingPut
     * @summary [App] 유저 (운수종사자 / 저상버스운전자) 수정 API, 파일
     * @request PUT:/user/transport
     */
    transWorkerUpdateUserUsingPut: (
      userTransportUpdateRequestDto: UserTransportUpdateRequestDto,
      params: RequestParams = {},
    ) =>
      this.request<UserTransportUpdateResponseDto, void>({
        path: `/user/transport`,
        method: "PUT",
        body: userTransportUpdateRequestDto,
        type: ContentType.Json,
        ...params,
      }),
  };
}