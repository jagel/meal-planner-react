import React, { useEffect, useState } from "react";
import { UserService } from "../../services/auth/user-service";
import { ApplicationDataType, UserRequestType, UserSessionType, UserSessioResponeType } from "../models/auth-user.types";
import { AuthContext } from "./auth.context";
import { EnvironmentRequests } from "../../utils/data/environment-request";

function AuthProvider({ children }: { children: React.ReactNode }) {
    let [userSession, setUserSession] = useState<ApplicationDataType>({
      isLoading:false,
      isAuthenticated:false
    })

    useEffect(() => {
    });
  
    
    const signinAsync  = async (userModel: UserRequestType) => {
      //await UserService.singInAsync(userModel, response => {
      //  setUserSession(response);
      //});
      setUserSession({
        isAuthenticated:true,
        isLoading:false
       });
      return true;
    };
  
    let signoutAsync = async (callback: VoidFunction) => {
      //var data =  UserService.signOutAsync(() => {
        //setUser(null);
      //  callback();
      //});
      setUserSession({
        isAuthenticated:false,
        isLoading:false
       });
      return true;
    };

    let changeLanguage = (datacode:string) => {

    }
  
    let value = { userSession, signinAsync, signoutAsync, changeLanguage };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

  export { AuthProvider };
