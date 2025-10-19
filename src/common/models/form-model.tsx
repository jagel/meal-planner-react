export class FormModel<ModelForm>{
    isLoading:boolean = false;
    displayErrors:boolean = false;
    model : ModelForm;
    skeletonLoading?:boolean;

    constructor(model: ModelForm, props:{
        isLoading?:boolean,
        displayErrors?:boolean,
        skeletonLoading?:boolean
    }={
        isLoading : false,
        displayErrors : false,
        skeletonLoading:false,
    }) {
        this.model = model;
        this.isLoading = props.isLoading??false;
        this.displayErrors = props.displayErrors??false;
        this.skeletonLoading = props.skeletonLoading??false
    }
    
}