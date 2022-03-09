import React, { useState } from "react";
import { UserService } from "../../services/auth/user-service";
import { UserRequestType, UserSessionType, UserSessioResponeType } from "../models/auth-user.types";
import { AuthContext } from "./auth.context";

function AuthProvider({ children }: { children: React.ReactNode }) {
    let [userSession, setUserSession] = useState<UserSessionType|null>(null)
  
    const signinAsync  = async (userModel: UserRequestType) => {
      //await UserService.singInAsync(userModel, response => {
      //  setUserSession(response);
      //});
      setUserSession({
        language:"en",
        email:"example@mail.com",
        username:"example mail",
        pictureEmail:"no pic"});
      return true;
    };
  
    let signoutAsync = async (callback: VoidFunction) => {
      //var data =  UserService.signOutAsync(() => {
        //setUser(null);
      //  callback();
      //});
      setUserSession(null);
      return true;
    };
  
    let value = { userSession, signinAsync, signoutAsync };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

  export { AuthProvider };
