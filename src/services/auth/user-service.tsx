import axios from 'axios';
import { UserRequestType, UserSessioResponeType } from '../../common/models/auth-user.types';
import { EnvironmentRequests } from '../../utils/data/environment-request';
import authHeader from './auth-header';


const UserService = {
  isAuthenticated : false,
  singInAsync(userModel :UserRequestType, callBack : (userResponse? : UserSessioResponeType) => void){
    const myPromise = new Promise((resolve, reject) => {
      //dispose myPromise
    });


    let API_URL = EnvironmentRequests.AuthUrl;
    API_URL = API_URL + "";

    return axios.post(API_URL,userModel)
      .then(response => { 
        var dataResponse = response.data as UserSessioResponeType;
        callBack(dataResponse);
      })
      .catch(e => {
        callBack();
      })
      .finally(() => console.log("finished"));

  },
  signOutAsync(callBack:VoidFunction){
    let API_URL = EnvironmentRequests.AuthUrl;
    API_URL = API_URL + "";
    //let API_URL = EnvironmentRequests.AuthUrl;

    return axios.get("").then(callBack);
  },
}

export { UserService };