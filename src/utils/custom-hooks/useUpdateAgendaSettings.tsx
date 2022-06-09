import React, { useEffect, useState } from "react";
import { AgendaSettingsModel, CustomColumnsModel } from "../../common/models/agenda.settings";
import { FormModel } from "../../common/models/form-model";
import { AgendaCodes, agendaSettingsEndpointsService } from "../../services/endpoints/agenda.settings.service";
import { ErrorObject } from "../../services/endpoints/error.handler";

export interface FormEvents{
    handleSubmit:(event:React.FormEvent<HTMLFormElement>)=> void
    setLoading:(isLoading:boolean)=>void,
    updateDisabledDays:(disabledDays : Array<string>)=>void,
    updateCustomColumns:(ingredients: Array<CustomColumnsModel>)=>void
}

export function useUpdateAgendaSettings(
    agendaCode: keyof AgendaCodes,
    afterUpdate:(AgendaSettingsModel:AgendaSettingsModel) =>void
    ) : [
        FormModel<AgendaSettingsModel>,
        ErrorObject|undefined,
        FormEvents,
    ] {
    const [agendaSettingFormModel, setAgendaSettingsFormModel] = useState<FormModel<AgendaSettingsModel>>(new FormModel(new AgendaSettingsModel(), {skeletonLoading:true}));
    const [errorResponse, setErrorResponse] = useState<ErrorObject|undefined>();
    const loading = (isLoading:boolean=true) => setAgendaSettingsFormModel(prevState=>({...prevState, isLoading:isLoading }));
    const displayErrors = (showErrors:boolean=false) => setAgendaSettingsFormModel(prevState=>({...prevState, displayErrors:showErrors }));

    useEffect(()=>{
        agendaSettingsEndpointsService.getByCode({agendaCode: agendaCode}).then(response => {
            setAgendaSettingsFormModel(prevState => ({...prevState, skeletonLoading: false, model: response??agendaSettingFormModel.model}) );
        }).catch(err => setErrorResponse(err));
      },[])

    const handleCallback = () => {
        let modelSaved : AgendaSettingsModel;
        let savedSuccesfully : boolean;

        loading(true);
        setErrorResponse(undefined);

        agendaSettingsEndpointsService.updateByCodeAsync({agendaSettings: agendaSettingFormModel.model, agendaCode})
            .then(response => {
                modelSaved = response;
                savedSuccesfully = true;
            })
            .catch(err => setErrorResponse(err))
            .finally(() =>{
                loading(false);
                if(savedSuccesfully)
                    afterUpdate(modelSaved);
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

    const updateDisabledDays = (disabledDays : Array<string> = []) =>
        setAgendaSettingsFormModel(prevState=>({...prevState, model:{...prevState.model, disabledDays: disabledDays } }));

    const updateCustomColumns = (customColumns: Array<CustomColumnsModel>) => 
        setAgendaSettingsFormModel(prevState=>({...prevState, model:{...prevState.model, customColumns: customColumns } }));

    const formEvents : FormEvents = {
        handleSubmit,
        setLoading:loading,
        updateDisabledDays,
        updateCustomColumns
    }

    return [
        agendaSettingFormModel,
        errorResponse,
        formEvents
    ]
}