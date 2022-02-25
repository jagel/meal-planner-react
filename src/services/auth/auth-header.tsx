import { LocalStorageService, LOC_SOTRAGE } from "../localStorage/localStorage";

export default function authHeader() : {}{
    let userToken = LocalStorageService.getLocalStorage(LOC_SOTRAGE.USER_TOKEN);
    const user = JSON.parse(userToken??''); // TODO: add user token validation if local storage is null
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }