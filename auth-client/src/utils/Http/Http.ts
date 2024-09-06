import type { GenericObject } from "@/utils/Types"
import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface Init {  
  baseURL?: string;
  withCredentials?: boolean;
  withXSRFToken?: boolean;
  customHeaders?: GenericObject;
  customParams?: GenericObject | URLSearchParams;
  handleRequestConfig?: (value: AxiosRequestConfig) => AxiosRequestConfig;
  handleRequestError?: ((error: any) => any) | undefined;
  handleResponseSuccess?: (value: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>;
  handleResponseError?: ((error: any) => any) | undefined;
}

export type HttpResponse = AxiosResponse;