import React, { useState } from "react";
import { FormModel } from "../../common/models/form-model";
import { ErrorObject } from "../../services/endpoints/error.handler";

export interface FormEvents{
    onModelChange:<TValue>(key:string, value:TValue)=> void,
    handleSubmit:(event:React.FormEvent<HTMLFormElement>)=> void
    setLoading:(isLoading:boolean)=>void
}

export function useFormHandle<TModel>(
    modelForm: TModel, 
    callback: (model:TModel)=> Promise<TModel>,
    afterSucces:(modelSaved:TModel) =>void)
    
    : [
        FormModel<TModel>,
        ErrorObject|undefined,
        FormEvents,
    ] {

    const [formModel, setFormModel] = useState<FormModel<TModel>>(new FormModel(modelForm));
    const [errorResponse, setErrorResponse] = useState<ErrorObject|undefined>();

    const loading = (isLoading:boolean=true) => setFormModel(prevState=>({...prevState, isLoading:isLoading }));
    const displayErrors = (showErrors:boolean=false) => setFormModel(prevState=>({...prevState, displayErrors:showErrors }));

    const onModelChange = function<TValue>(key:string, value:TValue){
        setFormModel(prevState=>({...prevState, model:{...prevState.model ,[key]: value} }));
    }

    const handleCallback = () => {
        let modelSaved : TModel;
        let savedSuccesfully : boolean;

        loading(true);
        setErrorResponse(undefined);

        callback(formModel.model)
            .then(response => {
                modelSaved = response;
                savedSuccesfully = true;
            })
            .catch(err => setErrorResponse(err))
            .finally(() =>{
                loading(false);
                if(savedSuccesfully)
                    afterSucces(modelSaved);
            });
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) :void => {
        event.preventDefault();
        event.stopPropagation();

        const isValid = event.currentTarget.checkValidity();
    
        if (isValid){
            handleCallback();
        } 
        else displayErrors(true);
    }

    const formEvents : FormEvents = {
        onModelChange,
        handleSubmit,
        setLoading:loading,
    }

    return [
        formModel,
        errorResponse,
        formEvents
    ]
}