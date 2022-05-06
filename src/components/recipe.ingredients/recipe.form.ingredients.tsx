import { Box, Button, Divider, FormControlLabel, Grid, InputAdornment, List, ListItem, ListItemText, OutlinedInput, Radio, RadioGroup, TextField } from "@mui/material";
import React, { CSSProperties } from "react";
import { useState } from "react";
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
  const textValue = SetLanguageText;

  const onAddIngredientClick = (evt:any) => {
    setUpdateIndex(props.ingredients.length)
    props.ingredients.push(new RecipeProduct());
    props.updateIngredients(props.ingredients);
  }

  const updateIngredient = (event:React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  console.log(props.ingredients);

  return (<Box  className="recipe-form-steps" style={mainDivStyle}>
    <Divider textAlign="left">{textValue('ingredients')}</Divider>

    <Box>
      {props.ingredients.map((ingredientForm, index)=>{
        let ingredientFormProps : IngredientFormProps = {index, ingredientForm,  updateIngredient };
        let ingredientViewProps: IngredientViewProps = {index, ingredientForm};
        return index == updateIndex ?  <IngredientForm key={index} {...ingredientFormProps} /> : <IngredientView key={index} {...ingredientViewProps} />       
      })}
    </Box>


    <Button 
      variant="outlined" 
      color={props.ingredients?.length === 0 ? "error":"primary"}
      onClick={onAddIngredientClick}
    >{textValue('add ingredient')}
    </Button>
  </Box>);
}

export { RecipeFormIngredients };