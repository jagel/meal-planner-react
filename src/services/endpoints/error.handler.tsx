import { ModelErrorResponse } from "../../common/models/model.response";

export interface ErrorDetails {
    title:string, 
    description:string[]
}

export interface ErrorObject {
    title:string;
    displayType:string;
    details:string;
    errors:ErrorDetails[]|undefined
}

export const errorHandler = {
    err400Handler:(err : Record<string,any>[] ) : ErrorObject | null =>{
        let errorObject : ErrorObject = {
            title:'Validation error',
            displayType:'01',
            details:'',
            errors: []
        }

        Object.entries(err).map((key,value) => {
            let data = key[1] as Array<string>;
            let errorDetail : ErrorDetails = {
                title:key[0],
                description:data
            } 
            errorObject.errors?.push(errorDetail)
        })
        return errorObject;
    },
    errHandlerException : (errorResponse:ModelErrorResponse) : ErrorObject | null => {
        let errorObject : ErrorObject = {
            title: errorResponse.title,
            displayType:'02',
            details:errorResponse.description,
            errors: []
        };

        for(let key in errorResponse.messages){
            let _errorDetail : ErrorDetails = {
                title:key,
                description: [errorResponse.messages[key]]
            }
            errorObject.errors?.push(_errorDetail)
        }
       
        return errorObject;
    }
}