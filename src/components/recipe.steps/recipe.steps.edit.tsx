import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { StepModel } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { FormDescriptionRequiredInput } from "../form-items/form.description.required.input";

export const RecipeStepsEdit = (props:{
    step:StepModel,
    totalItems:number,
    editionCompleted:(step:StepModel)=>void,
    replacePosition:(currentOrder : StepModel, newOrder : number)=>void
  }) => {
    const [stepEditor, setStepEditor] = useState(props.step);
    const [displayError, setDisplayError] = useState(false);
    const onStepTextChanged = (event : React.ChangeEvent<HTMLInputElement>) => {
      setDisplayError(false);
      setStepEditor({...stepEditor,  description: event.target.value });
    }

    const editorValidator = () => {
      if(stepEditor.description.length > 0){
        props.editionCompleted(stepEditor);
      }else{
        setDisplayError(true);
      }
    }

    const upwardButton = () => props.step.order > 1 ? 
        <IconButton sx={{ p: '10px'}} aria-label={Icons.arrow_upward} onClick={() =>props.replacePosition(stepEditor,(stepEditor.order-1))} >
          <GoogleIconsInheritance iconName={Icons.arrow_upward} /> 
        </IconButton> : undefined;

    const downwardButton = () => props.step.order < props.totalItems ? 
      <IconButton type="button" sx={{ p: '10px' }} aria-label={Icons.arrow_downward} onClick={() =>props.replacePosition(stepEditor,(stepEditor.order+1))} >
      <GoogleIconsInheritance iconName={Icons.arrow_downward} />
    </IconButton> : undefined;
    
    return (
      <ListItem>
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}>
        {upwardButton()}
        <FormDescriptionRequiredInput 
            value={stepEditor.description}
            displayText="step"
            name="description" 
            onTextChange={onStepTextChanged} 
            displayError={displayError}
          />
        {downwardButton()}        
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label={Icons.check} onClick={editorValidator} >
          <GoogleIconsInheritance iconName={Icons.check} />
        </IconButton>
        </Paper>
      </ListItem>
    );
  }