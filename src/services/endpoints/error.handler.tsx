export interface errorDetails {
    title:string, 
    description:string[]
}

export interface ErrorObject {
    title:string;
    displayType:string;
    details:string;
    errors:errorDetails[]|undefined
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
            let errorDetail : errorDetails = {
                title:key[0],
                description:data
            } 
            errorObject.errors?.push(errorDetail)
        })
        return errorObject;
    }
}