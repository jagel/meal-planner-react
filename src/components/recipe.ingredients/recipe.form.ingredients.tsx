import { Box, Button, Divider, List } from "@mui/material";
import { CSSProperties } from "react";
import { useState } from "react";
import { DeleteMessageDialog } from "../../common/elements/message.delete";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { IngredientForm, IngredientFormProps } from "./ingredients.form";
import { IngredientView, IngredientViewProps } from "./ingredients.view";


export interface RecipeFormIngredientsProps {
    ingredients:RecipeProduct[];
    updateIngredients(recipeProducts:RecipeProduct[]):void;
};

const mainDivStyle : CSSProperties = {display:'flex',flexDirection:'column',gap:'15px'};

const RecipeFormIngredients = (props: RecipeFormIngredientsProps) => {
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [ showDeleteMessage, setShowDeleteMessage] = useState(false);

  const textValue = SetLanguageText;

  const onAddIngredientClick = (evt:any) => {
    setUpdateIndex(props.ingredients.length)
    props.ingredients.push(new RecipeProduct());
    props.updateIngredients(props.ingredients);
  }

  const updateIngredient = (updateRecipeProduct:RecipeProduct, index:number) => {
    props.ingredients[index] = updateRecipeProduct;
    props.updateIngredients(props.ingredients);
    setUpdateIndex(-1);
  }

  const onDeleteItemClick = (index: number) => {
    setUpdateIndex(index);
    setShowDeleteMessage(true);
  }

  const onDeleteResponseHandle = (deleteStep:boolean) => {
    setShowDeleteMessage(false);
    if(deleteStep){
      props.ingredients.splice(updateIndex,1);
    }
    setUpdateIndex(-1);
  }

  const onUpdateIngredient = (index:number) => setUpdateIndex(index);

  return (<Box  className="recipe-form-steps" style={mainDivStyle}>
    <Divider textAlign="left">{textValue('ingredients')}</Divider>
    <List>
      {props.ingredients.map((ingredientForm, index)=>{
        let ingredientFormProps : IngredientFormProps = {index, ingredientForm,  updateIngredient };
        let ingredientViewProps: IngredientViewProps = {index, ingredientForm,onDeleteItemClick, onUpdateIngredient};
        
        return index == updateIndex ? 
          <IngredientForm key={index} {...ingredientFormProps} /> : 
          <IngredientView key={index} {...ingredientViewProps} />
      })}
    </List>
  

    <Button 
      variant="outlined" 
      color={props.ingredients?.length === 0 ? "error":"primary"}
      onClick={onAddIngredientClick}
    >{textValue('add ingredient')}
    </Button>

    <DeleteMessageDialog open={showDeleteMessage} onClose={onDeleteResponseHandle} />
  </Box>);
}

export { RecipeFormIngredients };