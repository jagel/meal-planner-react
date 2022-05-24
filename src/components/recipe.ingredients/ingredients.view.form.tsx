import { Avatar,IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { RecipeProduct } from "../../common/models/recipe.form";
import { PrintMeassureText } from "./ingredients.view";

export interface IngredientViewFormProps {
  index:number;
  ingredientForm:RecipeProduct;
  disableEdition?:boolean;
  onDeleteItemClick:(index:number)=>void;
  onUpdateIngredient:(index:number)=>void;
};

export const IngredientViewForm = (props: IngredientViewFormProps) => {
  return <ListItem style={{paddingRight:'84px'}}>
    <ListItemAvatar>
      <Avatar>{props.index+1}</Avatar>
    </ListItemAvatar>
    <ListItemText style={{textAlign:'justify'}}
      primary={props.ingredientForm.name} 
      secondary={PrintMeassureText(props.ingredientForm)}>
    </ListItemText>
    {!props.disableEdition && <EditionElements {...props}/>}
</ListItem>
}

const EditionElements = (props:IngredientViewFormProps) => {
  return <ListItemSecondaryAction>
  <IconButton onClick={()=>props.onUpdateIngredient(props.index)}>
    <GoogleIconsInheritance iconName={Icons.edit} />
  </IconButton>
  <IconButton edge="end" aria-label={Icons.delete} onClick={()=>props.onDeleteItemClick(props.index)}>
        <GoogleIconsInheritance iconName={Icons.delete} />
    </IconButton>
  </ListItemSecondaryAction>
}