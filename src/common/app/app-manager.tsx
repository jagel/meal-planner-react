import React, { useEffect, useState }  from 'react';
import { UserService } from '../../services/auth/user-service';
import { LanguageAvailable } from '../../utils/data/languageAvailable';
import { localStorageService, LOC_SOTRAGE } from '../../services/localStorage/localStorage';
import { AppContext, AppManager, UserModel } from './app-context';
import { useLocation } from 'react-router-dom';
import { EXTERNALROUTES } from '../../utils/routing/app-routes';

function ApplicationManager({children} : {children : React.ReactNode}){

    const [appManager, setAppManagerState ] = useState<AppManager>({ userValidated: false, authenticated: false });
    const [user , setUserState] = useState<UserModel>({displayname:'', email:'' });
    const [language , setLanguageState] = useState<string>();
    const location = useLocation();
    
    useEffect(() => {
        
        function initializeLanguage(){
            let languageCode = localStorageService.getLocalStorage(LOC_SOTRAGE.LANGUAGE);
            if(!languageCode){
                languageCode = LanguageAvailable[0].languageCode;
                localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, languageCode);
            }
            setLanguageState(languageCode);
        }

        initializeLanguage();
        if(EXTERNALROUTES.find(x=> x==location.pathname)?.length??0 == 0)
        (
            async () => {
                let response = await UserService.getUserDataAsync();

                if(response){
                    setAppManagerState({...appManager, userValidated:true, authenticated: true });
                    setUserState({...user, displayname: response.displayName, email: response.email });
                    localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, response.language);
                    
                }
                else
                    setAppManagerState({...appManager, userValidated:true, authenticated: false });
            }
        )().catch((error) => {
            logOut();
        })
        }, []);

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