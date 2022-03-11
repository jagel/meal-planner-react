import React, { useEffect, useState } from "react";
import { ApplicationDataType, UserRequestType } from "../models/auth-user.types";
import { AuthContext } from "./auth.context";
import { localStorageService, LOC_SOTRAGE } from "../../services/localStorage/localStorage";
import { LanguageAvailable } from "../../services/i18n/languageAvailable";
import { ILanguageAvailable } from "../models/lang.model";

function AuthProvider({ children }: { children: React.ReactNode }) {
  let languageSelector = LanguageAvailable;
  let [userSession, setUserSession] = useState<ApplicationDataType>({
      isLoading:false,
      isAuthenticated:true,
      language:"",
      loadingCounter:0,
    })

    useEffect(() => {
      let datacode = localStorageService.getLocalStorage(LOC_SOTRAGE.LANGUAGE);

      if(!datacode){
        let languageItem = languageSelector[0];
        changeLanguage(languageItem.datacode);
        localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, languageItem.datacode);
      }else{
        let currentLanguage = languageSelector.find(x => x.datacode == datacode)?? {} as ILanguageAvailable;
        changeLanguage(currentLanguage.datacode);
      }
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
