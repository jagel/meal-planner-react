import { IRecipeModel, StepModel } from "../../common/models/recipe.form";

import { InputRequired } from "../form-items/input.required";
import { FormDescriptionInput } from "../form-items/form.description.input";
import { FormValidations } from "../../utils/data/form-defiinions";
import { RecipeFormSteps } from "../recipe.steps/recipe.steps.form";

import Box from "@mui/material/Box";

import './recipe.form.css';

export const RecipeForm = (props : {
  recipe:IRecipeModel, 
  displayError:boolean,
  onTextChange(event:React.ChangeEvent<HTMLInputElement>):void,
  updateSteps(steps:StepModel[]):void,
}) => {
      return <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <InputRequired 
          value={props.recipe.name}
          displayText="Name"
          name="name" onTextChange={props.onTextChange} 
          displayError={props.displayError}
          inputProps={{ maxLength: FormValidations.maxNameLength }} 
        />
        <FormDescriptionInput 
          value={props.recipe.description}
          displayText="Recipe Description"
          name="description" 
          onTextChange={props.onTextChange} 
        />
        <RecipeFormSteps 
          steps={props.recipe.steps} 
          updateSteps={props.updateSteps}
          displayError={props.displayError}
        />
    </Box>
  }