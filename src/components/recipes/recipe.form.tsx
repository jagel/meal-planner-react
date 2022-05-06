import { RecipeModel, RecipeProduct, StepModel } from "../../common/models/recipe.form";

import { InputRequired, InputRequiredProps } from "../form-items/input.required";
import { FormDescriptionInput, FormDescriptionInputProps } from "../form-items/form.description.input";
import { FormValidations } from "../../utils/data/form-defiinions";
import { RecipeFormSteps } from "../recipe.steps/recipe.steps.form";

import Box from "@mui/material/Box";

import './recipe.form.css';
import { FormModel } from "../../common/models/form-model";
import { RecipeFormIngredients, RecipeFormIngredientsProps } from "../recipe.ingredients/recipe.form.ingredients";

export interface RecipeFormProps {
  recipeForm:FormModel<RecipeModel>,
  onTextChange:(event : React.ChangeEvent<HTMLInputElement>) => void,
  updateSteps:(steps:StepModel[])=>void,
  updateIngredients:(recipeProducts:RecipeProduct[])=>void,
  onEditionModel:(edionModelEnabled:boolean)=>void
}

export const RecipeForm = (props : RecipeFormProps) => {

  const inputRequiredProps : InputRequiredProps = {
    value:props.recipeForm.model.name,
    displayText:"Name",
    name:"name",
    onTextChange:props.onTextChange,
    displayError:props.recipeForm.displayErrors,
    inputProps:{ maxLength: FormValidations.maxNameLength } 
  }

  const formDescriptionProps : FormDescriptionInputProps = {
    value:props.recipeForm.model.description,
    displayText:"Recipe Description",
    name:"description",
    onTextChange:props.onTextChange
  } 

  const recipeFormIngredientsProps : RecipeFormIngredientsProps = {
    ingredients: props.recipeForm.model.ingredients,
    updateIngredients: props.updateIngredients
  };

  const recipeFormStepsProps = {
    steps: props.recipeForm.model.steps,
    updateSteps: props.updateSteps,
    displayError: props.recipeForm.displayErrors,
    onEditionModel: props.onEditionModel
  };

  return <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
    <InputRequired {...inputRequiredProps} />
    <FormDescriptionInput {...formDescriptionProps} />
    <RecipeFormIngredients {...recipeFormIngredientsProps} />
    <RecipeFormSteps {...recipeFormStepsProps} />
  </Box>
}