import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Box from "@mui/system/Box";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";

export interface IngredientViewProps {
  recipeProducts:Array<RecipeProduct>;
};

export const IngredientView = (props: IngredientViewProps) => {
  const textValue = SetLanguageText;
  
  const displayListItem = (recipeProduct: RecipeProduct, index:number ) => <ListItem key={index}>
  <ListItemText
      primary={`${recipeProduct.name}`}
      secondary={PrintMeassureText(recipeProduct)}/>
  </ListItem>

  return <Box sx={{ padding: '20px' }}>
  <Typography variant="h6" gutterBottom component="div">
    {textValue('ingredients')}
  </Typography>
  <List>
    {props.recipeProducts?.map(displayListItem)}
  </List>
</Box>;
}

export const PrintMeassureText = (recipeProduct : RecipeProduct) => {
  let text = '';

  if(recipeProduct.quantity > 0)
    text += ` ${recipeProduct.quantity}`;

  if(recipeProduct.fractionary)
    text += ` ${recipeProduct.fractionary}`;

  text += ` ${recipeProduct.measureType}`
  return text;
}