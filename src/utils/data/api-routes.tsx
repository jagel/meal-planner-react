import { EnvironmentRequests } from "./environment-request";


const CONTROLLERS ={
  AUTHCONTROLLER:'auth',
  RECIPECONTROLLER:'Recipe'
}
const AUTHROUTES = {
  LOGIN : `${CONTROLLERS.AUTHCONTROLLER}/login`,
  GOOGLE_LOGIN : `${CONTROLLERS.AUTHCONTROLLER}/signin-google?returnUrl=${EnvironmentRequests.AppUrl}`,
  GETUSER: `${CONTROLLERS.AUTHCONTROLLER}/getUser`,
}

const APIROUTES = {
  RECIPE : {
    CREATE : `${CONTROLLERS.RECIPECONTROLLER}/CreateRecipe`,
    UPDATE : `${CONTROLLERS.RECIPECONTROLLER}/UpdateRecipe/{recipeId}`,
    GETBYRECIPEID : `${CONTROLLERS.RECIPECONTROLLER}/getRecipeById/{recipeId}`
  }
}

export { AUTHROUTES, APIROUTES };