import axios from "axios";
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import type { Paiload } from "@/utils/Types"
import type { Init } from "./Http";
import init from "./init";

export class Http {
  private service:AxiosInstance;
  constructor( init: Init ) {    
    this.defaultInit()
    let config =  {
      headers: init.customHeaders,
      params: init.customParams,
      baseURL: init.baseURL,  
      withCredentials: init.withCredentials,
    }    
    let service = axios.create(config);    
    service.interceptors.request.use(init.handleRequestConfig, init.handleRequestError);    
    service.interceptors.response.use(init.handleResponseSuccess, init.handleResponseError);
    this.service = service;    
  }

  defaultInit () {    
    init.customHeaders = init.customHeaders !== undefined ? init.customHeaders : {}
    init.customParams = init.customParams !== undefined ? init.customParams : {}
    init.baseURL = init.baseURL !== undefined ? init.baseURL : "http://localhost"
    init.withCredentials = init.withCredentials !== undefined ? init.withCredentials : false
    init.handleRequestConfig = init.handleRequestConfig !== undefined
      ? init.handleRequestConfig : this.defaultHandleRequestConfig
    init.handleRequestError = init.handleRequestError !== undefined
      ? init.handleRequestError : this.defaultHandleRequestError
    init.handleResponseSuccess = init.handleResponseSuccess !== undefined
      ? init.handleResponseSuccess : this.defaultHandleResponseSuccess
    init.handleResponseError = init.handleResponseError !== undefined
      ? init.handleResponseError : this.defaultHandleResponseError
  }
  
  defaultHandleRequestConfig(config: AxiosRequestConfig) { return config; }
  defaultHandleRequestError(error: AxiosError) { return Promise.reject(error); }

  defaultHandleResponseSuccess(response: AxiosResponse) { return Promise.resolve(response); }  
  defaultHandleResponseError(error: AxiosError) { return Promise.reject(error); }

  get(path: string, payload: Paiload = '') {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  patch(path: string, payload: Paiload = {}) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path: string, payload: Paiload = {}) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  put(path: string, payload: Paiload = {}) {
    return this.service.request({
      method: "PUT",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  delete(path: string, payload: Paiload = {}) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: payload
    });
  }
}

export default new Http( init );