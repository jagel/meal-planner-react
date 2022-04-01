import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon"
import { StepModel } from "../../common/models/recipe.form"
import { SetLanguageText } from "../../services/i18n/languageManager"

export const RecipeStepsFormView = (props:{
    stepItem:StepModel,
    editMode:boolean,
    enableEditMode:(order:number) => void
    onDeleteItemClick:(stepItem:StepModel) => void
}) =>{
  const textValue = SetLanguageText;

    return  <ListItem >
    <ListItemAvatar>
      <Avatar>{props.stepItem.order}</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={textValue('step {0}',[`${props.stepItem.order}`])}
      secondary={props.stepItem.description}
    />
    {!props.editMode ? <ListItemSecondaryAction>
        <IconButton aria-label={Icons.edit} onClick={() => props.enableEditMode(props.stepItem.order)}>
          <GoogleIconsInheritance iconName={Icons.edit} />
        </IconButton>
        <IconButton edge="end" aria-label={Icons.delete} onClick={()=>props.onDeleteItemClick(props.stepItem)}>
            <GoogleIconsInheritance iconName={Icons.delete} />
        </IconButton>
    </ListItemSecondaryAction> : undefined}
  </ListItem>
}