import axios from "axios";
import { UserRequestType } from "../../common/models/auth-user.types";
import { LocalStorageService, LOC_SOTRAGE } from "../localStorage/localStorage";

class AuthService {  
    login(loginData : UserRequestType ) {
      let API_URL = 'tmp:/url';
      return axios
        .post(API_URL + "signin", loginData)
        .then((response) => {
          if (response.data.accessToken) {
            LocalStorageService.setLocalStorage(LOC_SOTRAGE.USER_TOKEN,JSON.stringify(response.data))
          }
          return response.data;
        });
    }
    logout() {
      LocalStorageService.removeLocalStorage(LOC_SOTRAGE.USER_TOKEN);
    }
    // register(username, email, password) {
    //   let API_URL = 'tmp:/url';
    //   return axios.post(API_URL + "signup", {
    //     username,
    //     email,
    //     password,
    //   });
    // }
  }
  export default new AuthService();