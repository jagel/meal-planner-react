import { IRecipeModel } from "../../common/models/recipe.form";
import { endpointService } from "./endpoint.service";

export const recipeEndpointsService = {
  async getRecipeAsync(recipeId:number) : Promise<IRecipeModel>{
    let endpoint = '';
    let respone = await endpointService.getAsync<IRecipeModel>(endpoint,recipeId);
    return respone.data;
  }
};