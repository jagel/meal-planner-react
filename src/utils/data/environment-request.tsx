
export const EnvironmentRequests = {
    APIUrl : process.env.REACT_APP_ROOT_URL??"",
    AuthUrl : process.env.REACT_APP_AUTH_URL??"",
    AppUrl: process.env.REACT_APP_URL??"",
    cookieAuth: process.env.REACT_APP_COOKIE_AUTH??""
}