import React from "react";

import { StepModel } from "../../common/models/recipe.form";
import { useState } from 'react';
import List from "@mui/material/List";
import { Button, Divider } from "@mui/material";

import { RecipeStepsEdit } from "./recipe.steps.edit";
import { RecipeStepsFormView } from "./recipe.steps.form.view";

import './recipe.steps.form.css';
import { SetLanguageText } from "../../services/i18n/languageManager";
import { DeleteMessageDialog } from "../../common/elements/message.delete";

export const RecipeFormSteps = (props :{
    steps:StepModel[],
    updateSteps(steps:StepModel[]):void,
    displayError: boolean
}) =>{
  console.log(props)
  const [ editOrder, setEditOrder] = useState(0);
  const [ showDeleteMessage, setShowDeleteMessage] = useState(false);
  const steps = props.steps??[];
  
  const editMode = editOrder > 0;
  const textValue = SetLanguageText;

  const editionCompleted = (step:StepModel) => { 
    steps[(step.order-1)] = step;
    disableEditMode();
    props.updateSteps(steps);
  }
  const addStep = () => {
    let newArrayStep : StepModel = {order:(steps.length +1), description:''};
    steps.push(newArrayStep);
    enableEditMode(newArrayStep.order);
    props.updateSteps(steps);
  }

  const enableEditMode = (order:number) : void => setEditOrder(order);

  const disableEditMode = () : void => setEditOrder(0);

  const replacePosition = (stepItem : StepModel, newOrder: number) : void => {
    const desc = stepItem.description;
    stepItem.description = steps[(newOrder-1)].description;
    steps[(newOrder-1)].description = desc;

    enableEditMode(newOrder);
  }

  const onDeleteItemClick = (stepItem:StepModel) => {
    enableEditMode(stepItem.order);
    setShowDeleteMessage(true);
  }
  const onDeleteResponseHandle = (deleteStep:boolean) => {
    setShowDeleteMessage(false);
    if(deleteStep){
      steps.splice((editOrder-1),1);
      steps.map((x,index)=> {x.order = (index+1)})
    }
    disableEditMode();
  }

  return <div className="recipe-form-steps">
    <Divider textAlign="left">{textValue('directions')}</Divider>
  <List>
    {props.steps?.map(stepItem => 
      stepItem.order == editOrder ?
        <RecipeStepsEdit 
          key={stepItem.order}
          step={stepItem} 
          totalItems={(props.steps.length)} 
          editionCompleted={editionCompleted}
          replacePosition={replacePosition}
          displayError={props.displayError}
        /> :
        <RecipeStepsFormView 
          key={stepItem.order}
          stepItem={stepItem}
          editMode={editMode}
          enableEditMode={enableEditMode}
          onDeleteItemClick={onDeleteItemClick}
        />
     )}
  <Button 
    onClick={addStep} 
    variant="outlined"
    disabled={editMode}>
    {textValue('add step')}
  </Button>
</List>
  <DeleteMessageDialog 
    open={showDeleteMessage}
    onClose={onDeleteResponseHandle}
  />
  </div>
}