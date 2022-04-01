import React from "react";

import { StepModel } from "../../common/models/recipe.form";
import { useState } from 'react';
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { GoogleIconsInheritance, Icons } from '../../common/app/google.icon';
import { Button, IconButton, ListItemSecondaryAction, Step } from "@mui/material";

import { RecipeFormEdit } from "./recipe.form.edit";
import './recipe.form.steps.css';
import { RecipeFormView } from "./recipe.form.view";

export const RecipeFormSteps = (props :{
    steps:StepModel[],
    updateSteps(steps:StepModel[]):void,
}) =>{
  const [ editOrder, setEditOrder] = useState(0);
console.log(editOrder);
  const editMode = editOrder > 0;

  const editionCompleted = (step:StepModel) => {
    let steps = props.steps;
    steps[(step.order-1)] = step;
    disableEditMode();
    props.updateSteps(steps);
  }

  const addStep = () => {
    if(props.steps === undefined){
      let newArrayStep : StepModel[] = [{order:1, description:''}];
      enableEditMode(1);
      props.updateSteps(newArrayStep);
    }
    else{
      let newStep : StepModel = {order: (props.steps.length + 2 ), description:''};
      let arrayToAppend = props.steps;
      arrayToAppend.push(newStep)
      enableEditMode(newStep.order);
      props.updateSteps(arrayToAppend);
    }
  }

  const enableEditMode = (order:number) => {
    setEditOrder(order);
  }

  const disableEditMode = () => {
    setEditOrder(0);
  }


  return <div className="recipe-form-steps">
  <List>
    {props.steps?.map(stepItem => 
      stepItem.order == editOrder ?
        <RecipeFormEdit 
          key={stepItem.order}
          step={stepItem} 
          totalItems={(props.steps.length+1)} 
          editionCompleted={editionCompleted}
        /> :
        <RecipeFormView 
          key={stepItem.order}
          stepItem={stepItem}
          editMode={editMode}
          enableEditMode={enableEditMode}
        />
     )}
   

   
     
  <Button onClick={addStep}>Add step</Button>
</List>
  </div>
}






const StepListItem = () =>  <ListItem >
<ListItemAvatar>
  <Avatar>1</Avatar>
</ListItemAvatar>
<ListItemText
  primary="Step 1"
  secondary={""}
/>
<ListItemSecondaryAction style={{display:''}}>
    <IconButton aria-label={Icons.edit} onClick={() => console.log('')}>
      <GoogleIconsInheritance iconName={Icons.edit} />
    </IconButton>
    <IconButton edge="end" aria-label={Icons.delete}>
        <GoogleIconsInheritance iconName={Icons.delete} />
    </IconButton>
</ListItemSecondaryAction>
</ListItem>;
