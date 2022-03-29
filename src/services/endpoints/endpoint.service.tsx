import axios from "axios"
import { ModelResponse } from "../../common/models/model.response";
import { EnvironmentRequests } from "../../utils/data/environment-request"

const endpointService = {
    axiosInstance : axios.create({
        withCredentials:true,
        baseURL: EnvironmentRequests.APIUrl
    }),
    getAsync: async <TmodelResponse,>(endpoint:string, params:any) : Promise<ModelResponse<TmodelResponse>> => {
        let url = endpointService.interpolateParams(endpoint, params);
        
        let httpResponse = await endpointService.axiosInstance.get<ModelResponse<TmodelResponse>>(url);

        return httpResponse.data;
    },
    postAsync: async <TmodelResponse,TmodelRequest>(endpoint:string, data: TmodelRequest, params:any) => {
        let url = endpointService.interpolateParams(endpoint, params);

        let httpResponse = await endpointService.axiosInstance.post<ModelResponse<TmodelResponse>>(url,data);

        return httpResponse.data;
    },
    interpolateParams: (endpoint:string, params:any) : string => {
        for (var prop in params??[]) 
        endpoint = endpoint.replace(`{${prop}}`,params[prop])
        
        if(endpoint.includes("{") || endpoint.includes("}"))
        throw `Parameters no defined correctly in endpoint ${endpoint}`;
        
        return endpoint;
    }
}

export { endpointService };
