export interface ModelErrorResponse
{
    description:string;
    messages:Record<string,string>
}

export interface ModelResponse<TDataResponse>{
    hasErrors:boolean,
    errorResonse: ModelErrorResponse,
    data:TDataResponse;
}