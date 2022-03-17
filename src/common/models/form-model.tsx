export class FormModel<ModelForm>{
    isLoading:boolean = false;
    hasFormError:boolean = false;
    errorResponse:boolean = false;
    modelForm: ModelForm;

    constructor(initializeModel:ModelForm){
        this.modelForm = initializeModel;
    }
}