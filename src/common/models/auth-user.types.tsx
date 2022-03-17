export type UserRequestType = {
  email:string;
  password:string;
}

export interface IUserSessionResponse{
  email:string,
  displayName:string,
  language:string
}