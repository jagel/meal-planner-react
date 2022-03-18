import axios from 'axios';
import {  IUserSessionResponse, UserRequestType } from '../../common/models/auth-user.types';
import { ModelResponse } from '../../common/models/model.response';
import { AUTHROUTES } from '../../utils/data/api-routes';
import { EnvironmentRequests } from '../../utils/data/environment-request';


const UserService = {
  isAuthenticated : false,
  axiosInstance : axios.create({
    withCredentials:true,
    baseURL:EnvironmentRequests.AuthUrl
  }),
  async singInAsync(userModel :UserRequestType){
    let httpResponse = await this.axiosInstance.post<ModelResponse<IUserSessionResponse>>(AUTHROUTES.LOGIN, userModel);
    return httpResponse.data.hasErrors;
  },
  signOutAsync(callBack:VoidFunction){
   
  },
  async getUserDataAsync(){
    try{
      let httpResponse = await this.axiosInstance.get<ModelResponse<IUserSessionResponse>>(AUTHROUTES.GETUSER);
      let response : ModelResponse<IUserSessionResponse> = httpResponse.data;
      if(!response.hasErrors)
        return response.data;
      else
        return null;
    }catch{
      return null;
    }
  },
  generateAuthUrl(endpoint:string): string{
    return `${EnvironmentRequests.AuthUrl}${endpoint}`;;
  }
}

export { UserService };