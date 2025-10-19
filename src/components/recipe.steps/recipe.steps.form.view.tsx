import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon"
import { StepModel } from "../../common/models/recipe.form"
import { SetLanguageText } from "../../services/i18n/languageManager"

export interface RecipeStepsFormViewProps{
  stepItem:StepModel;
  enableEditMode:(order:number) => void;
  onDeleteItemClick:(stepItem:StepModel) => void;
  disabledEdition?:boolean;
}

export const RecipeStepsFormView = (props:RecipeStepsFormViewProps) =>{
  const textValue = SetLanguageText;

    return  <ListItem style={{paddingRight:'84px'}} className="example" >
    <ListItemAvatar>
      <Avatar>{props.stepItem.order}</Avatar>
    </ListItemAvatar>
    <ListItemText style={{textAlign:'justify'}}
      primary={textValue('step {0}',[`${props.stepItem.order}`])}
      secondary={props.stepItem.description}
    />
    {!props.disabledEdition && <StepEditionButtons {...props}/>}
    </ListItem>
}

const StepEditionButtons = (props:RecipeStepsFormViewProps) => {
  return <ListItemSecondaryAction>
  <IconButton aria-label={Icons.edit} onClick={() => props.enableEditMode(props.stepItem.order)}>
    <GoogleIconsInheritance iconName={Icons.edit} />
  </IconButton>
  <IconButton edge="end" aria-label={Icons.delete} onClick={()=>props.onDeleteItemClick(props.stepItem)}>
      <GoogleIconsInheritance iconName={Icons.delete} />
  </IconButton>
  </ListItemSecondaryAction>
}
