import { EnvironmentRequests } from "./environment-request";


const CONTROLLERS ={
  AUTHCONTROLLER:'auth',
  GOOGLEAUTHCONTROLLER:'authgoogle',
  ACCOUNTCONTROLLER:'account',
  RECIPECONTROLLER:'Recipe',
  RECIPESEARCHCONTROLLER:'Recipesearch',
}
const AUTHROUTES = {
  LOGIN : `${CONTROLLERS.AUTHCONTROLLER}/login`,
  GOOGLE_LOGIN : `${CONTROLLERS.GOOGLEAUTHCONTROLLER}/login?returnUrl=${EnvironmentRequests.AppUrl}`,

  GETUSER: `${CONTROLLERS.ACCOUNTCONTROLLER}/getUser`,
}

const APIROUTES = {
  RECIPE : {
    CREATE : `${CONTROLLERS.RECIPECONTROLLER}/CreateRecipe`,
    UPDATE : `${CONTROLLERS.RECIPECONTROLLER}/UpdateRecipe/{recipeId}`,
    GETBYRECIPEID : `${CONTROLLERS.RECIPECONTROLLER}/getRecipeById/{recipeId}?includeProducts={includeProducts}`
  },
  RECIPEEARCH : {
    SEARCH : `${CONTROLLERS.RECIPESEARCHCONTROLLER}/search`,
  },
  AGENDASETTINGS:{
    GETBYAGENDACODE:'',
    UPDATEBYAGENDACODE:''
  }
}

export { AUTHROUTES, APIROUTES };