import axios, { AxiosResponse } from "axios";

export const ROUTES = {
  RECIPE : {
    CREATE : 'Recipe/CreateRecipe',
    UPDATE : 'Recipe/UpdateRecipe/{recipeId}',
    GETBYRECIPEID : 'Recipe/getRecipeById/{recipeId}'
  }
}

class HttpRequestService{

  constructor() {
  }

  async httpGetAsync<TResponse>(endpoint:string, params?:any) : Promise<TResponse|undefined> {
    endpoint = this.replaceUrl(endpoint, params);
    var callRequest = this.getBaseAPI_URL() + endpoint;
   
    var responseData : TResponse | undefined = undefined;
    await axios.get<any,AxiosResponse<TResponse,any>,any>(callRequest)
        .then(response => {
          responseData = response.data;
        }).catch(x => {
          console.error(x);
        });
    return responseData;
  }

  async httpPostAsync<TResponse>(endpoint:string, data:any, params?:any) : Promise<TResponse|undefined> {
    endpoint = this.replaceUrl(endpoint, params);
    var endpointCall = this.getBaseAPI_URL() + endpoint;
   
    console.log(endpoint);

    var responseData : TResponse | undefined = undefined;

    await axios.post<any,AxiosResponse<TResponse,any>,any>(endpointCall, data)
        .then(response => {
          responseData = response.data;
        }).catch(x => {
          console.error(x);
        });
    return responseData;
  }

  getBaseAPI_URL = () : string => {
    var url = process.env.REACT_APP_ROOT_URL;

    if(url == undefined)
      throw "URL Root not defined";

      return url
  }

  replaceUrl = (endpoint :string, params? :any) : string => {

    for (var prop in params??[]) 
      endpoint = endpoint.replace(`{${prop}}`,params[prop])
    
    if(endpoint.includes("{") || endpoint.includes("}"))
      throw `Parameters no defined correctly in endpoint ${endpoint}`;
    
    return endpoint;
  }

  getHostURL = () : string =>{
    var url = process.env.REACT_APP_ROOT_URL;
  
    if(url == undefined)
      throw "URL Root not defined";
  
      return url
  }
}

export const requestService = new HttpRequestService();