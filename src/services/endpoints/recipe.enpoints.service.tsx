import { IRecipeModel } from "../../common/models/recipe.form";
import { APIROUTES } from "../../utils/data/api-routes";
import { endpointService } from "./endpoint.service";

export const recipeEndpointsService = {
  async getRecipeAsync(recipeId:string) : Promise<IRecipeModel>{
    let endpoint = APIROUTES.RECIPE.GETBYRECIPEID;
    let respone = await endpointService.getAsync<IRecipeModel>(endpoint,{recipeId});
    return respone.data;
  },
  async createRecipeAsync(recipe:IRecipeModel) : Promise<IRecipeModel>{
    let endpoint = APIROUTES.RECIPE.CREATE;
    let respone = await endpointService.postAsync<IRecipeModel,IRecipeModel>(endpoint,recipe);
    return respone.data;
  }
};