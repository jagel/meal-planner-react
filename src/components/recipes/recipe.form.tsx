import { RecipeModel, StepModel } from "../../common/models/recipe.form";

import { InputRequired } from "../form-items/input.required";
import { FormDescriptionInput } from "../form-items/form.description.input";
import { FormValidations } from "../../utils/data/form-defiinions";
import { RecipeFormSteps } from "../recipe.steps/recipe.steps.form";

import Box from "@mui/material/Box";

import './recipe.form.css';
import { FormModel } from "../../common/models/form-model";

export interface RecipeFormProps {
  recipeForm:FormModel<RecipeModel>,
  onTextChange:(event : React.ChangeEvent<HTMLInputElement>) => void,
  updateSteps:(steps:StepModel[])=>void,
  onEditionModel:(edionModelEnabled:boolean)=>void
}

export const RecipeForm = (props : RecipeFormProps) => {
      return <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <InputRequired 
          value={props.recipeForm.model.name}
          displayText="Name"
          name="name" onTextChange={props.onTextChange} 
          displayError={props.recipeForm.displayErrors}
          inputProps={{ maxLength: FormValidations.maxNameLength }} 
        />
        <FormDescriptionInput 
          value={props.recipeForm.model.description}
          displayText="Recipe Description"
          name="description" 
          onTextChange={props.onTextChange} 
        />
        <RecipeFormSteps 
          steps={props.recipeForm.model.steps} 
          updateSteps={props.updateSteps}
          displayError={props.recipeForm.displayErrors}
          onEditionModel={props.onEditionModel}
        />
    </Box>
  }