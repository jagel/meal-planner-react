import React, { useEffect, useState } from "react";
import { ApplicationDataType, UserRequestType } from "../models/auth-user.types";
import { AuthContext } from "./auth.context";
import { localStorageService, LOC_SOTRAGE } from "../../services/localStorage/localStorage";
import { LanguageAvailable } from "../../services/i18n/languageAvailable";
import { ILanguageAvailable } from "../models/lang.model";
import { UserService } from "../../services/auth/user-service";

function AuthProvider({ children }: { children: React.ReactNode }) {
  let languageSelector = LanguageAvailable;
  let [userSession, setUserSession] = useState<ApplicationDataType>({
      isLoading:true,
      isAuthenticated:true,
      language:"",
      loadingCounter:0,
      name:"",
      email:""
    })

 useEffect(() => {
  (
     async () => {
      let response = await UserService.getUserDataAsync();
      if(response){
        setUserSession({...userSession, language:response?.language??"", isLoading:false, isAuthenticated:true, name: response.displayName, email: response.displayName });
        localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, response.language);
      }
      else
        setUserSession({...userSession, isLoading:false, isAuthenticated:false });
        localStorageService.removeLocalStorage(LOC_SOTRAGE.LANGUAGE);
      }
   )()
}, []);
  
    
    const signinAsync  = async (userModel: UserRequestType) => {
      //await UserService.singInAsync(userModel, response => {
      //  setUserSession(response);
      //});
      setUserSession({...userSession, isAuthenticated: true});
      return true;
    };
  
    let signoutAsync = async (callback: VoidFunction) => {
      //var data =  UserService.signOutAsync(() => {
        //setUser(null);
      //  callback();
      //});
      setUserSession({...userSession, isAuthenticated: false});
      return true;
    };

    let changeLanguage = (datacode:string) => {
      setUserSession({...userSession, language:datacode})
    }

    let enableLoading = () => {
      setUserSession({...userSession, loadingCounter:++userSession.loadingCounter});
      if(userSession.loadingCounter == 1)
        setUserSession({...userSession, isLoading:true});
    }

    let disableLoading = () => {
      setUserSession({...userSession, loadingCounter:--userSession.loadingCounter});
      if(userSession.loadingCounter == 0)
        setUserSession({...userSession, isLoading:false});
    }
  
    let value = { userSession, signinAsync, signoutAsync, changeLanguage, enableLoading, disableLoading };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

  export { AuthProvider };
