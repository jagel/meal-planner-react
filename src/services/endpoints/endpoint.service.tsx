import axios from "axios"
import { ModelResponse } from "../../common/models/model.response";
import { EnvironmentRequests } from "../../utils/data/environment-request"
import { errorHandler, ErrorObject } from "./error.handler";

const endpointService = {
    axiosInstance : axios.create({
        withCredentials:true,
        baseURL: EnvironmentRequests.APIUrl
    }),
    getAsync: async <TmodelResponse,>(getEndpoint:string, params?:any) : Promise<ModelResponse<TmodelResponse>> => {
        let getEndpointParams = endpointService.interpolateParams(getEndpoint, params);
        
        let httpResponse = await endpointService.axiosInstance.get<ModelResponse<TmodelResponse>>(getEndpointParams);

        return httpResponse.data;
    },
    postAsync: async <TmodelResponse,TmodelRequest>(postEndpoint:string, data: TmodelRequest) => {
        var postRequest = new Promise<ModelResponse<TmodelResponse>>((resolve,reject) => {
            endpointService.axiosInstance.post<ModelResponse<TmodelResponse>>(postEndpoint,data)
            .then(httpResponse =>{
                if(!httpResponse.data.hasErrors) resolve(httpResponse.data);
                else{
                    let errorResponse = errorHandler.errHandlerException(httpResponse.data.errorResponse);
                    reject(errorResponse);
                }
            }).catch(err => {
                let errorResponse = endpointService.errorHandler(err);
                reject(errorResponse);
            })
        });
        return postRequest;
    },
    putAsync: async <TmodelResponse,TmodelRequest>(putEndpoint:string, data: TmodelRequest, params?:any) => {
        let putEndpointParams = endpointService.interpolateParams(putEndpoint, params);
       
        let putRequest = new Promise<ModelResponse<TmodelResponse>>((resolve,reject) => {
            endpointService.axiosInstance.put<ModelResponse<TmodelResponse>>(putEndpointParams,data)
            .then(httpResponse => {
                if(!httpResponse.data.hasErrors) resolve(httpResponse.data);
                else{
                    let errorResponse = errorHandler.errHandlerException(httpResponse.data.errorResponse);
                    reject(errorResponse);
                }
            }).catch(err =>{
                let errorResponse = endpointService.errorHandler(err);
                reject(errorResponse);
            })
        });
           
        return putRequest;
    },
    interpolateParams: (endpoint:string, params:any) : string => {
        for (var prop in params??[]) 
        endpoint = endpoint.replace(`{${prop}}`,params[prop])
        
        if(endpoint.includes("{") || endpoint.includes("}"))
        throw `Parameters no defined correctly in endpoint ${endpoint}`;
        
        return endpoint;
    },
    generateQueryParams: (params:any) : string => {
        let paramsString = '?';
        for (var prop in params??[]) {
            paramsString += `${prop}=${params[prop]}&`
        }
        if(paramsString.length > 1)
            paramsString.substring(0,paramsString.length);
        return paramsString;
    },
    errorHandler: (err:any) : ErrorObject | null => {
        let response: ErrorObject | null = null
        if (err.response) { 
            if(err.response.status ===400){
                response = errorHandler.err400Handler(err.response.data.errors);
            }

            // client received an error response (5xx, 4xx)
          } else if (err.request) { 
            // client never received a response, or request never left 
          } else { 
            // anything else 
          }
        return response;
    }
}


export { endpointService };
