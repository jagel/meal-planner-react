import { AUTHROUTES } from "../../utils/data/api-routes";
import { EnvironmentRequests } from "../../utils/data/environment-request";

class UserSessionService
{
    loginGoogleAuth(){
        let route = this.buildUrl(AUTHROUTES.GOOGLE_LOGIN);
        window.location.href = route;
    }

    setCredentials(){
    }

    private buildUrl(endpoint : string ):string{
        let route = (EnvironmentRequests.AuthUrl??"") + endpoint;
        return route;
    }
}

export const userSessionService = new UserSessionService();