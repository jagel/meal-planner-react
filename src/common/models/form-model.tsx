export class FormModel<ModelForm>{
    isLoading:boolean = false;
    displayErrors:boolean = false;
    model : ModelForm;

    constructor(model: ModelForm, props:{
        isLoading?:boolean,
        displayErrors?:boolean,
    }={
        isLoading : false,
        displayErrors : false,
    }) {
        this.model = model;
        this.isLoading = props.isLoading??false;
        this.displayErrors = props.displayErrors??false;
    }

}