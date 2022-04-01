import Avatar from "@mui/material/Avatar"
import IconButton from "@mui/material/IconButton"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction"
import ListItemText from "@mui/material/ListItemText"
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon"
import { StepModel } from "../../common/models/recipe.form"

export const RecipeFormView = (props:{
    stepItem:StepModel,
    editMode:boolean,
    enableEditMode:(order:number) => void
}) =>{

    return  <ListItem >
    <ListItemAvatar>
      <Avatar>{props.stepItem.order}</Avatar>
    </ListItemAvatar>
    <ListItemText
      primary="Step 1"
      secondary={props.stepItem.description}
    />
    {props.editMode ? <ListItemSecondaryAction>
        <IconButton aria-label={Icons.edit} onClick={() => props.enableEditMode(props.stepItem.order)}>
          <GoogleIconsInheritance iconName={Icons.edit} />
        </IconButton>
        <IconButton edge="end" aria-label={Icons.delete}>
            <GoogleIconsInheritance iconName={Icons.delete} />
        </IconButton>
    </ListItemSecondaryAction> : undefined}
    
  </ListItem>
}