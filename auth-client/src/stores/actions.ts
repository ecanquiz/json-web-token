// @ts-nocheck
import { ref } from "vue"
import router from "@/router";
import Http from "@/utils/Http"; 
import * as AuthService from "@/services";
import { getError } from "@/utils/helpers";
// https://medium.com/@velja/token-refresh-with-axios-interceptors-for-a-seamless-authentication-experience-854b06064bde
// https://www.thedutchlab.com/en/insights/using-axios-interceptors-for-refreshing-your-api-token
// https://medium.com/@sanchit0496/what-is-axios-interceptor-how-to-handle-refresh-tokens-in-frontend-7e8bbdbb8ac9


export default {
  async login(payload) {
    try {
      this.pending = true;
      const {data} = await AuthService.login(payload);
      if (data.success) {
          this.setLoggedIn(data.data.access_token)         
          await router.push("/dashboard");
      }
    } catch (err) {
      this.error = getError(err);
    } finally {
      this.pending = false;
    }
  },

  /*async login(payload) {
    try {
      this.pending = true;
      const {data} = await AuthService.login(payload);
      if (data.status) {
          this.setLoggedIn(data.access_token)
          const authUser = await this.getAuthUser();
          if (authUser) {
            await router.push("/dashboard");
          } else {
            const err = Error("Unable to fetch user after login, check your API settings.");
            err.name = "Fetch User";
            throw err;
          }
      }
    } catch (err) {
      this.error = getError(err);
    } finally {
      this.pending = false;
    }
  }*/


  logout() {
    return AuthService.logout()    
      .then(() => this.setLoggedOut())
      .catch((err) => this.error = getError(err));
  },
  async getAuthUser() {
    try {
      const response = await AuthService.getAuthUser();      
      this.user = response.data.data;
      //this.user = response.data.authUser;

      return this.user;
    } catch (err) {
      this.setLoggedOut()         
      this.error = getError(err);        
    } finally {
      this.pending = false;
    }
  },
  setLoggedIn(accessToken: string) {   
    this.setAccessToken(accessToken);
    this.setGuest({ value: "isNotGuest" });
  },
  setLoggedOut() {
    this.user = null;
    this.removeAccessToken();
    this.setGuest({ value: "isGuest" });
    if (router.currentRoute.value.name !== "login")
      router.push({ path: "/login" });
  },
  setAccessToken(accessToken: string) {
    Http.service.defaults.headers.Authorization=`Bearer ${accessToken}`
    window.localStorage.setItem("access-token", accessToken);    
  },
  removeAccessToken() {    
    Http.service.defaults.headers.Authorization=`Bearer `
    window.localStorage.removeItem("access-token");
  },
  setGuest({ value }: { value: string}) { 
    window.localStorage.setItem("guest", value);
  },  
}
