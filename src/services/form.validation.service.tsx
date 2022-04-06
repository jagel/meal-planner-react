export const FormValidationservice ={
    displayRequiredError: (value:string, displayError:boolean) => {
        if(!displayError)
            return false;
        let isEmpty = value === '' || value == undefined;
        return isEmpty
    },
    validateForm: (event:React.FormEvent<HTMLFormElement>, validEvent: ()=>void, invalidEvent: ()=>void) =>{
        event.preventDefault();
        event.stopPropagation();
        const isValid = event.currentTarget.checkValidity();
    
        if (isValid) validEvent();
        else invalidEvent();
    },
}
