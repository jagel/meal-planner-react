import axios from "axios"
import { ModelResponse } from "../../common/models/model.response";
import { EnvironmentRequests } from "../../utils/data/environment-request"

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
        let httpResponse = await endpointService.axiosInstance.post<ModelResponse<TmodelResponse>>(postEndpoint,data);
        return httpResponse.data;
    },
    putAsync: async <TmodelResponse,TmodelRequest>(putEndpoint:string, data: TmodelRequest, params?:any) => {
        let putEndpointParams = endpointService.interpolateParams(putEndpoint, params);
       
        let httpResponse = await endpointService.axiosInstance.put<ModelResponse<TmodelResponse>>(putEndpointParams,data);
        return httpResponse.data;
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
    }
}

export { endpointService };
