import { SetLanguageText } from "../../services/i18n/languageManager";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export const TextArea = (props :{
    value:string,
    onTextChange(event : React.ChangeEvent<HTMLInputElement>):void,
    displayError:boolean,
    name:string,
    displayText:string
  }) => {
    const displayName = SetLanguageText(props.displayText);
  
    return <FormControl fullWidth sx={{ m: 1 }} >
       <TextField
          id={props.name}
          label={displayName}
          multiline
          maxRows={4}
          defaultValue={props.value}
          onChange={props.onTextChange}
          variant="standard"
        />
    </FormControl>
  }