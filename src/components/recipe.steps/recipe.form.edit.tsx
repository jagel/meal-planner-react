import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { StepModel } from "../../common/models/recipe.form";
import { FormDescriptionInput } from "../form-items/form.description.input";

export const RecipeFormEdit = (props:{
    step:StepModel,
    totalItems:number,
    editionCompleted:(step:StepModel)=>void
  }) => {
    const displayUpward = props.step.order == 1 ? 'none' : '';
    const displayDownward = props.step.order == props.totalItems ? 'none' : '';
    const [stepEditor, setStepEditor] = useState(props.step);
  
    const editorFinihsed = () =>{
      props.editionCompleted(stepEditor);
    }
  
    const onStepTextChanged = (event : React.ChangeEvent<HTMLInputElement>) => {
      setStepEditor({...stepEditor,  description: event.target.value });
    }
  
    return (
      <ListItem>
        <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%" }}>
        <IconButton sx={{ p: '10px', display:displayUpward}} aria-label={Icons.arrow_upward}>
          <GoogleIconsInheritance iconName={Icons.arrow_upward} />
        </IconButton>
        <FormDescriptionInput 
            value={stepEditor.description}
            displayText="Recipe Description"
            name="description" 
            onTextChange={onStepTextChanged} 
            displayError={false}
          />
        <IconButton type="button" sx={{ p: '10px', display:displayDownward }} aria-label={Icons.arrow_downward}>
          <GoogleIconsInheritance iconName={Icons.arrow_downward} />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label={Icons.check} onClick={editorFinihsed} >
          <GoogleIconsInheritance iconName={Icons.check} />
        </IconButton>
        </Paper>
      </ListItem>
    );
  }