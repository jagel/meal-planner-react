import { EnvironmentRequests } from "./environment-request";

const AUTHROUTES = {
  GOOGLE_LOGIN : `Auth/signin-google?returnUrl=${EnvironmentRequests.AppUrl}`,
  
}

const ROUTES = {
  RECIPE : {
    CREATE : 'Recipe/CreateRecipe',
    UPDATE : 'Recipe/UpdateRecipe/{recipeId}',
    GETBYRECIPEID : 'Recipe/getRecipeById/{recipeId}'
  }
}

export { AUTHROUTES, ROUTES };