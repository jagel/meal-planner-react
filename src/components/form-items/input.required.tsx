import { SetLanguageText } from "../../services/i18n/languageManager";
import { FormValidationservice } from "../../services/form.validation.service";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { InputProperties } from "../../common/models/form-models";

export interface InputRequiredProps {
  value:string,
  onTextChange(event : React.ChangeEvent<HTMLInputElement>):void,
  displayError:boolean,
  name:string,
  displayText:string,
  inputProps:InputProperties
};

export const InputRequired = (props : InputRequiredProps) => {
    const displayName = SetLanguageText(props.displayText);
    const errorMessage = SetLanguageText('required field');
    const displayError =  FormValidationservice.displayRequiredError(props.value, props.displayError);;
    const helperText = displayError ? errorMessage  : '';
  
    return <FormControl fullWidth sx={{ m: 1 }} >
       <TextField required
          error={displayError} 
          id={props.name}
          label={displayName}
          defaultValue={props.value}
          helperText={helperText}
          onChange={props.onTextChange}
          inputProps={props.inputProps}
          variant="standard"
        />
    </FormControl>
  }