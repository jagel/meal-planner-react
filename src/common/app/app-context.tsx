import React from "react";

export interface UserModel{
    displayname:string;
    email:string;
}

export interface AppManager{
    userValidated:boolean;
    authenticated:boolean;
}

export interface ApppContext{
    user :UserModel;
    appManager:AppManager;
    language:string | undefined;

    changeLanguage: (languageCode : string) => void;
    initializePage:(initializeEvent: VoidFunction) => void;
    logOut:() =>void;
}

export const AppContext = React.createContext<ApppContext>(null!);

export const useAppContext = () => React.useContext(AppContext);