import { RecipeModel, RecipeProduct, StepModel } from "../../common/models/recipe.form";

import { InputRequired, InputRequiredProps } from "../form-items/input.required";
import { FormDescriptionInput, FormDescriptionInputProps } from "../form-items/form.description.input";
import { FormValidations } from "../../utils/data/form-defiinions";
import { RecipeFormSteps, RecipeFormStepsProps } from "../recipe.steps/recipe.steps.form";

import Box from "@mui/material/Box";

import './recipe.form.css';
import { FormModel } from "../../common/models/form-model";
import { RecipeFormIngredients, RecipeFormIngredientsProps } from "../recipe.ingredients/recipe.form.ingredients";

export interface RecipeFormProps {
  recipeForm:FormModel<RecipeModel>;
  isOnSubTask:boolean;
  setIsOnSubTask:(isOnSubTask:boolean)=>void;
  onModelChange:<TValue>(key:string, value : TValue) => void;
  updateSteps:(steps:StepModel[])=>void;
  updateIngredients:(recipeProducts:RecipeProduct[])=>void;
}

export const RecipeForm = (props : RecipeFormProps) => {

  const handleTextChange = (event : React.ChangeEvent<HTMLInputElement>) => 
    props.onModelChange<string>(event.target.id, event.target.value);
  

  const inputRequiredProps : InputRequiredProps = {
    value:props.recipeForm.model.name,
    displayText:"Name",
    name:"name",
    onTextChange: handleTextChange,
    displayError:props.recipeForm.displayErrors,
    inputProps:{ maxLength: FormValidations.maxNameLength } 
  }

  const formDescriptionProps : FormDescriptionInputProps = {
    value:props.recipeForm.model.description,
    displayText:"Recipe Description",
    name:"description",
    onTextChange:handleTextChange
  } 

  const recipeFormIngredientsProps : RecipeFormIngredientsProps = {
    ingredients: props.recipeForm.model.recipeProducts,
    updateIngredients: props.updateIngredients,
    isOnSubTask:props.isOnSubTask,
    setIsOnSubTask:props.setIsOnSubTask
  };

  const recipeFormStepsProps : RecipeFormStepsProps = {
    steps: props.recipeForm.model.steps,
    updateSteps: props.updateSteps,
    displayError: props.recipeForm.displayErrors,
    isOnSubTask:props.isOnSubTask,
    setIsOnSubTask:props.setIsOnSubTask
  };

  return <Box sx={{ display: 'flex', flexWrap: 'wrap' }} >
    <InputRequired {...inputRequiredProps} />
    <FormDescriptionInput {...formDescriptionProps} />
    <RecipeFormIngredients {...recipeFormIngredientsProps} />
    <RecipeFormSteps {...recipeFormStepsProps} />
  </Box>
}