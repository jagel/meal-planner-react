import { RecipeModel, RecipeSearchModel } from "../../common/models/recipe.form";
import { APIROUTES } from "../../utils/data/api-routes";
import { endpointService } from "./endpoint.service";

export const recipeEndpointsService = {
  async getRecipeByIdAsync(recipeId:string) : Promise<RecipeModel>{
    let endpoint = APIROUTES.RECIPE.GETBYRECIPEID;
    let respone = await endpointService.getAsync<RecipeModel>(endpoint,{recipeId});
    return respone.data;
  },
  async createRecipeAsync(recipe:RecipeModel) : Promise<RecipeModel>{
    let endpoint = APIROUTES.RECIPE.CREATE;
    let respone = await endpointService.postAsync<RecipeModel,RecipeModel>(endpoint,recipe);
    return respone.data;
  },
  async updateRecipeAsync(recipe:RecipeModel, recipeId:string) : Promise<RecipeModel>{
    let endpoint = APIROUTES.RECIPE.UPDATE;

    let respone = await endpointService.putAsync<RecipeModel,RecipeModel>(endpoint,recipe,{recipeId});
    return respone.data;
  }
};

export const recipeSearchEndpointsService = {
  async searchAsync(recipe:RecipeSearchModel) : Promise<RecipeModel[]>{
    let endpoint = APIROUTES.RECIPEEARCH.SEARCH;
    endpoint += endpointService.generateQueryParams(recipe);
    let respone = await endpointService.getAsync<RecipeModel[]>(endpoint,recipe);
    return respone.data;
  },
};