import { REFRESH_TOKEN, ACCESS_TOKEN, STATUS_CODE } from '@common/constant';
import { api, post } from '@common/httpClient';
import { localStore } from '@common/storage';
import { AxiosError } from 'axios';

type ErrorResponse = {
  "success": boolean
  "statusCode": number
  "message": string
  "data": string | object
}

type Response = {
  config: any;
  data: ErrorResponse;
  headers: any;
  request: any;
  status: number;
  statusText: string
}

export const tokenInterceptor = () => {
  api.interceptors.response.use(
    (response) => response,
    async (err: AxiosError<Response>) => {
      const { response } = err;
      if (response?.status === STATUS_CODE.ACCESS_TOKEN_EXPIRED) {
        const authorization = localStore.getItem(ACCESS_TOKEN);
        const refreshToken = localStore.getItem(REFRESH_TOKEN);

        if (!!authorization && !!refreshToken) {
          const res = await getNewToken(authorization, refreshToken);
          const newAccessToken = res.data.authorization;
          localStore.setItem(ACCESS_TOKEN, newAccessToken);
        }
      } else {
        return Promise.reject(err);
      }
    }
  );


  const getNewToken = async (authorization: string, refreshToken: string) => {
    return await post(`/api/v1/auth/token`, {
        authorization: `Bearer ${authorization}`,
        'refresh-token': refreshToken
      },
    )
      .catch(err => {
        if (err.status === STATUS_CODE.REFRESH_TOKEN_EXPIRED) {
          localStore.removeItem(ACCESS_TOKEN);
          localStore.removeItem(REFRESH_TOKEN);
        }

        return Promise.reject(err);
      });
  };
};