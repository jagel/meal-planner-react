import { RecipeModel, RecipeSearchModel } from "../../common/models/recipe.form";
import { APIROUTES } from "../../utils/data/api-routes";
import { endpointService } from "./endpoint.service";


export const recipeEndpointsService = {
  async getRecipeByIdAsync(props: {recipeId:string, includeProducts:boolean} = { recipeId:'',includeProducts:false }) : Promise<RecipeModel> {
    let endpoint = APIROUTES.RECIPE.GETBYRECIPEID;
    let respone = await endpointService.getAsync<RecipeModel>(endpoint,props);
    return respone.data;
  },
  async createRecipeAsync(recipe:RecipeModel) : Promise<RecipeModel>{
    let endpoint = APIROUTES.RECIPE.CREATE;
    let respone = await endpointService.postAsync<RecipeModel,RecipeModel>(endpoint,recipe);
    return respone.data;
  },
  async updateRecipeAsync(props: {recipe:RecipeModel, recipeId:string} = { recipe : new RecipeModel(), recipeId : '' }) : Promise<RecipeModel>{
    let recipeId = props.recipeId;
    let endpoint = APIROUTES.RECIPE.UPDATE;

    let respone = await endpointService.putAsync<RecipeModel,RecipeModel>(endpoint,props.recipe,{recipeId});
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