import axios, { AxiosResponse } from "axios";
import { EnvironmentRequests } from "../utils/data/environment-request";

class HttpRequestService{

    constructor() {
    }

    async httpGetAsync<TResponse>(endpoint:string, params?:any) : Promise<TResponse|undefined> {
        var urlAPI = this.buildURLEndpoint(endpoint, params);
        
        var responseData : TResponse | undefined = undefined;
        await axios.get<any,AxiosResponse<TResponse,any>,any>(urlAPI)
            .then(response => {
                responseData = response.data;
            }).catch(x => {
                console.error(x);
            });
        return responseData;
    }

    async httpPostAsync<TResponse>(endpoint:string, data:any, params?:any) : Promise<TResponse|undefined> {
        var urlAPI = this.buildURLEndpoint(endpoint, params);
        var responseData : TResponse | undefined = undefined;

        await axios.post<any,AxiosResponse<TResponse,any>,any>(urlAPI, data)
            .then(response => {
            responseData = response.data;
            }).catch(x => {
            console.error(x);
            });
        return responseData;
    }

    buildURLEndpoint = (endpoint:string, params?: any) : string => {
        var url = EnvironmentRequests.APIUrl;

        if(url == undefined)
            throw 'URL Root undefined, check environment variables';

        if(params != undefined)
            endpoint = this.endpointReplace(endpoint, params);

        url = url + endpoint;
        return url
    }

    private endpointReplace = (endpoint :string, params? :any) : string => {

        for (var prop in params??[]) 
        endpoint = endpoint.replace(`{${prop}}`,params[prop])
        
        if(endpoint.includes("{") || endpoint.includes("}"))
        throw `Parameters no defined correctly in endpoint ${endpoint}`;
        
        return endpoint;
    }
}

export const requestService = new HttpRequestService();
