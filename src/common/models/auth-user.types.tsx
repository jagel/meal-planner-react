export interface IAuthContext{
  userSession: UserSessionType | null;
  signinAsync: (userModel: UserRequestType) => Promise<boolean>;
  signoutAsync: (callback: VoidFunction) => Promise<boolean>;
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