import React, { useEffect, useState }  from 'react';
import { UserService } from '../../services/auth/user-service';
import { LanguageAvailable, LANG_DATA } from '../../utils/data/languageAvailable';
import { localStorageService, LOC_SOTRAGE } from '../../services/localStorage/localStorage';
import { AppContext, AppManager, UserModel } from './app-context';

function ApplicationManager({children} : {children : React.ReactNode}){

    const [appManager, setAppManagerState ] = useState<AppManager>({ userValidated: false, authenticated: false });
    const [user , setUserState] = useState<UserModel>({displayname:'', email:'' });
    const [language , setLanguageState] = useState<string>();
    
    useEffect(() => {
        initializeLanguage();
    (
        async () => {
            let response = await UserService.getUserDataAsync();

            if(response){
                setAppManagerState({...appManager, userValidated:true, authenticated: true });
                setUserState({...user, displayname: response.displayName, email: response.email });
                localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, response.language);
            }
            else
                logOut();
        }
        )().catch((error) => {
            logOut();
        })
        }, []);

    function initializeLanguage(){
        let languageCode = localStorageService.getLocalStorage(LOC_SOTRAGE.LANGUAGE);
        if(!languageCode){
            languageCode = LanguageAvailable[0].languageCode;
            localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, languageCode);
        }
        setLanguageState(languageCode);
    }

    function logOut(){
        setAppManagerState({...appManager, userValidated:true, authenticated: false });
    }

    const initializePage = (initializeEvent: VoidFunction) =>{
        let timeOutInitialize = setTimeout(() => {
            if(appManager.userValidated){
                initializeEvent();
                clearTimeout(timeOutInitialize)
            }
        }, 1000);
    }

    const changeLanguage = (languageCode : string) => {
        localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, languageCode);
        setLanguageState(languageCode);
    }

    const value = { user, appManager, logOut, initializePage, language, changeLanguage };


    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export { ApplicationManager };