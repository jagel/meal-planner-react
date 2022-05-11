export interface ModelErrorResponse
{
    title:string;
    description:string;
    messages:Record<string,string>
}

export interface ModelResponse<TDataResponse>{
    hasErrors:boolean,
    errorResponse: ModelErrorResponse,
    data:TDataResponse;
}