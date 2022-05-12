import { SetLanguageText } from "../../services/i18n/languageManager";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { FormValidations } from "../../utils/data/form-defiinions";
import { FormValidationservice } from "../../services/form.validation.service";

export const FormDescriptionRequiredInput = (props :{
    value:string,
    onTextChange(event : React.ChangeEvent<HTMLInputElement>):void,
    displayError:boolean,
    name:string,
    displayText:string,
    displayTextParams?:string[],
    maxlength?:number
  }) => {
    const displayName = SetLanguageText(props.displayText, props.displayTextParams);
    const errorMessage = SetLanguageText('required field');
    const displayError =  FormValidationservice.displayRequiredError(props.value, props.displayError);;
    const helperText = displayError ? errorMessage  : '';
    const maxLength = props.maxlength == undefined ? FormValidations.maxDescriptionLength : (props.maxlength??0);

    
    return <FormControl fullWidth sx={{ m: 1 }} >
       <TextField
          autoFocus
          error={displayError}
          id={props.name}
          label={displayName}
          multiline
          required
          rows={3}
          defaultValue={props.value}
          onChange={props.onTextChange}
          inputProps={{ maxLength }}
          helperText={helperText}
          variant="standard"
        />
    </FormControl>
  }