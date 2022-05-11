import { Avatar,IconButton, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@mui/material";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { RecipeProduct } from "../../common/models/recipe.form";

export interface IngredientViewProps {
  index:number;
  ingredientForm:RecipeProduct;
  onDeleteItemClick:(index:number)=>void
  onUpdateIngredient:(index:number)=>void
};

export const IngredientView = (props: IngredientViewProps) => {
  return <ListItem>
    <ListItemAvatar>
      <Avatar>{props.index+1}</Avatar>
    </ListItemAvatar>
    <ListItemText 
      primary={props.ingredientForm.name} 
      secondary={`${props.ingredientForm.quantity} ${props.ingredientForm.fractionary} ${props.ingredientForm.measureType}`}>
    </ListItemText>
    <ListItemSecondaryAction>
      <IconButton onClick={()=>props.onUpdateIngredient(props.index)}>
        <GoogleIconsInheritance iconName={Icons.edit} />
      </IconButton>
      <IconButton edge="end" aria-label={Icons.delete} onClick={()=>props.onDeleteItemClick(props.index)}>
            <GoogleIconsInheritance iconName={Icons.delete} />
        </IconButton>
    </ListItemSecondaryAction>
</ListItem>
}