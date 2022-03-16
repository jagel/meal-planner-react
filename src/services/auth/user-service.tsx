import axios from 'axios';
import { IUserSessionResponse, UserRequestType, UserSessioResponeType } from '../../common/models/auth-user.types';
import { ModelResponse } from '../../common/models/model.response';
import { AUTHROUTES } from '../../utils/data/api-routes';
import { EnvironmentRequests } from '../../utils/data/environment-request';
import authHeader from './auth-header';


const UserService = {
  isAuthenticated : false,
  axiosInstance : axios.create({
    withCredentials:true,
    baseURL:EnvironmentRequests.AuthUrl
  }),
  async singInAsync(userModel :UserRequestType){
    let httpResponse = await this.axiosInstance.post<ModelResponse<IUserSessionResponse>>(AUTHROUTES.LOGIN, userModel);
    console.log("done", httpResponse);
    // return httpResponse.data.hasErrors;
    return false;
  },
  signOutAsync(callBack:VoidFunction){
    let API_URL = EnvironmentRequests.AuthUrl;
    API_URL = API_URL + "";
    //let API_URL = EnvironmentRequests.AuthUrl;

    return axios.get("").then(callBack);
  },
  async getUserDataAsync(){
    try{
      let httpResponse = await this.axiosInstance.get<ModelResponse<IUserSessionResponse>>(AUTHROUTES.GETUSER);
      let response : ModelResponse<IUserSessionResponse> = httpResponse.data;
      return response.data;
    }catch{
      return null
    }
  },
  generateAuthUrl(endpoint:string): string{
    return `${EnvironmentRequests.AuthUrl}${endpoint}`;;
  }
}

export { UserService };