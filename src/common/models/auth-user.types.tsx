export interface IAuthContext{
  userSession: ApplicationDataType;
  changeLanguage: (datacode:string) => void;
  signinAsync: (userModel: UserRequestType) => Promise<boolean>;
  signoutAsync: (callback: VoidFunction) => Promise<boolean>;
  enableLoading: () => void;
  disableLoading: () => void;
};

export type UserRequestType = {
  email:string;
  password:string;
}

export type UserSessionType = {
  language:string;
  email:string;
  username:string;
  pictureEmail:string;
}

export type UserSessioResponeType = UserSessionType & {
  jwt:string;
}

export type ApplicationDataType = {
  isLoading: boolean;
  isAuthenticated:boolean;
  language:string;
  loadingCounter:number;
  name:string,
  email:string
}


export interface IUserSessionResponse{
  email:string,
  displayName:string,
  language:string
}