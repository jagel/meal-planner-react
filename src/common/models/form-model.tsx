export class FormModel<ModelForm>{
    isLoading:boolean = false;
    displayErrors:boolean = false;
    onSubtask:boolean = false;
    model : ModelForm;
    
    constructor(initializeModel:ModelForm){
        this.model = initializeModel;
    }
}