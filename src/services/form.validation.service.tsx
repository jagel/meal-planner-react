export const FormValidationservice ={
    displayRequiredError: (value:string, displayError:boolean) => {
        if(!displayError)
            return false;
        let isEmpty = value === '' || value == undefined;
        return isEmpty
    }
}