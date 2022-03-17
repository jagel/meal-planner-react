import { EnvironmentRequests } from "./environment-request";


const CONTROLLERS ={
  AUTHCONTROLLER:'auth'
}
const AUTHROUTES = {
  LOGIN : `${CONTROLLERS.AUTHCONTROLLER}/login`,
  GOOGLE_LOGIN : `${CONTROLLERS.AUTHCONTROLLER}/signin-google?returnUrl=${EnvironmentRequests.AppUrl}`,
  GETUSER: `${CONTROLLERS.AUTHCONTROLLER}/getUser`,
}

const ROUTES = {
  RECIPE : {
    CREATE : 'Recipe/CreateRecipe',
    UPDATE : 'Recipe/UpdateRecipe/{recipeId}',
    GETBYRECIPEID : 'Recipe/getRecipeById/{recipeId}'
  }
}

export { AUTHROUTES, ROUTES };