import Http from "@/utils/Http";

export const login = async <T>(payload: T) => {  
  return Http.post("/api/auth/login", payload);
 }

export const getAuthMenu = () => {
  return Http.get("/api/users/auth-menu");
}

export const getAuthUser = () => {
  //return Http.get("/api/users/auth");
  return Http.get("/api/auth/profile");                    
}

export const logout = () => {
//  return Http.post("/api/logout");
  return Http.get("/api/auth/logout");

}

export const registerUser = async <T>(payload: T) => {  
  return Http.post("/api/register", payload);
}

/*export const forgotPassword = async <T>(payload: T) => {
  //await Http.get("/sanctum/csrf-cookie");
  return Http.post("/forgot-password", payload);
}

export const resetPassword = async <T>(payload: T) => {
  //await Http.get("/sanctum/csrf-cookie");
  return Http.post("/reset-password", payload);
}

export const updatePassword = <T>(payload: T) => {
  return Http.put("/user/password", payload);
}


export const sendVerification = <T>(payload: T) => {
  return Http.post("/email/verification-notification", payload);
}

export const updateUser = <T>(payload: T) => {
  return Http.put("/user/profile-information", payload);
}
*/