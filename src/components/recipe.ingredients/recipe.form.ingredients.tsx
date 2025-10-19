import { Box, Button, Divider, List } from "@mui/material";
import { CSSProperties } from "react";
import { useState } from "react";
import { DeleteMessageDialog } from "../../common/elements/message.delete";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { IngredientForm, IngredientFormProps } from "./ingredients.form";
import { IngredientViewForm, IngredientViewFormProps } from "./ingredients.view.form";


export interface RecipeFormIngredientsProps {
    ingredients:RecipeProduct[];
    updateIngredients(recipeProducts:RecipeProduct[]):void;
    isOnSubTask:boolean;
    setIsOnSubTask:(isOnSubTask:boolean)=>void;
};

const mainDivStyle : CSSProperties = {display:'flex',flexDirection:'column',gap:'15px'};

const RecipeFormIngredients = (props: RecipeFormIngredientsProps) => {
  const [updateIndex, setUpdateIndex] = useState(-1);
  const [ showDeleteMessage, setShowDeleteMessage] = useState(false);

  const textValue = SetLanguageText;

  const onAddIngredientClick = (evt:any) => {
    props.setIsOnSubTask(true);
    setUpdateIndex(props.ingredients.length)
    props.ingredients.push(new RecipeProduct());
    props.updateIngredients(props.ingredients);
  }

  const disableEditionMode = () => {
    props.setIsOnSubTask(false);
    setUpdateIndex(-1);
  }

  const updateIngredient = (updateRecipeProduct:RecipeProduct, index:number) => {
    props.ingredients[index] = updateRecipeProduct;
    props.updateIngredients(props.ingredients);
    disableEditionMode();
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
    disableEditionMode();
  }

  const onUpdateIngredient = (index:number) => {
    props.setIsOnSubTask(true);
    setUpdateIndex(index);
  }

  const displayIngredientComponent = (ingredientForm: RecipeProduct, index:number) => {
    if(index === updateIndex){
      let ingredientFormProps : IngredientFormProps = { index, ingredientForm, updateIngredient };
      return <IngredientForm key={index} {...ingredientFormProps} />;
    }else{
      let ingredientViewProps: IngredientViewFormProps = { index, ingredientForm, onDeleteItemClick, onUpdateIngredient, disableEdition: props.isOnSubTask};
      return <IngredientViewForm key={index} {...ingredientViewProps} />
    }
  }

  return (<Box  className="recipe-form-steps" style={mainDivStyle}>
    <Divider textAlign="left">{textValue('ingredients')}</Divider>
    <List>{props.ingredients.map(displayIngredientComponent)}</List>
  
    <Button 
      variant="outlined" 
      color={props.ingredients?.length === 0 ? "error":"primary"}
      disabled={props.isOnSubTask}
      onClick={onAddIngredientClick}
    >{textValue('add ingredient')}
    </Button>

    <DeleteMessageDialog open={showDeleteMessage} onClose={onDeleteResponseHandle} />
  </Box>);
}

export { RecipeFormIngredients };