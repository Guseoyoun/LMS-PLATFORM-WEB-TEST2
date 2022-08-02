import { GET } from "@common/httpClient";
import useSWR, { SWRResponse } from "swr";

export enum MainDisplayType{
    EDUCATION_TRANSPORT_WORKER='EDUCATION_TRANSPORT_WORKER',
    EDUCATION_GROUND_BUS_DRIVER='EDUCATION_GROUND_BUS_DRIVER',
    EDUCATION_PROVINCIAL_TRAFFIC_SAFETY ='EDUCATION_PROVINCIAL_TRAFFIC_SAFETY'
  }

export interface MainDisplayRes{
    seq:number;
    mainDisplayType:MainDisplayType;
    status:number | null
}

export function useMainDisplay(){
    const {data , error , mutate} = useSWR<SWRResponse<MainDisplayRes[]>>('/main-display',GET);
    return {
        data: data?.data,
        error
    }
}