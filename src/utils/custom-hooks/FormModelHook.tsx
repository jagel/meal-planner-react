import { useEffect, useState } from "react";
import { FormModel } from "../../common/models/form-model";

export interface FormEvents{
    loading:(isLoading:boolean)=>void;
    subTask:(subtaskEnable:boolean)=>void;
    displayErrors:(showErrors:boolean)=>void;
}

export function useFormModel<TModel>(modelForm: TModel):[TModel, (model:TModel) =>void,FormEvents]{
    const [formModel, setFormModel] = useState<FormModel<TModel>>(new FormModel(modelForm));

    const loading = (isLoading:boolean=true) => setFormModel(prevState=>({...prevState, isLoading:isLoading }));
    const subTask = (subtaskEnable:boolean=false) => setFormModel(prevState=>({...prevState, onSubtask:subtaskEnable }));
    const displayErrors = (showErrors:boolean=false) => setFormModel(prevState=>({...prevState, displayErrors:showErrors }));

    const onModelChange = function(model:TModel){
        setFormModel(prevState=>({...prevState, model:{...model} }));
    }

    const events : FormEvents = {
        loading,
        subTask,
        displayErrors
    };

    return [formModel.model,onModelChange, events]
}