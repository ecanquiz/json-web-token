// https://dev.to/charlintosh/setting-up-axios-interceptors-react-js-typescript-12k5
// https://axios-http.com/docs/interceptors
import { useAuthStore } from '@/stores'
import type { Init } from "./Http"
import type { AxiosError, AxiosRequestConfig } from "axios"; // InternalAxiosRequestConfig

export default<Init> {
  //baseURL: import.meta.env.VITE_APP_API_URL, //process.env.VUE_APP_API_URL,  
  baseURL: process.env.VUE_APP_API_URL,
  customHeaders: { 
    'Content-Type': 'application/json', 
    'secret': '', 
    'Authorization': 'Bearer '
  },
  withCredentials: true,
  withXSRFToken: true,
  handleRequestConfig(config: AxiosRequestConfig): AxiosRequestConfig {    
    const accessToken = localStorage.getItem('access-token');

    if (accessToken) {
      config.headers!.Authorization = `Bearer ${accessToken}`
    }

    return config;  
  },
  handleResponseError(error: AxiosError) {
    const storeAuth = useAuthStore()
    
    if (error.response
      && [401, 419].includes(error.response.status)    
      && storeAuth.authUser 
      && !storeAuth.guest
    ) {
      storeAuth.logout();
    }
    
    return Promise.reject(error);
  }
}


