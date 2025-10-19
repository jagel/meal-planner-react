import React, { useEffect } from "react";

import { StepModel } from "../../common/models/recipe.form";
import { useState } from 'react';
import List from "@mui/material/List";
import { Button, Divider } from "@mui/material";

import { RecipeStepsEdit } from "./recipe.steps.edit";
import { RecipeStepsFormView } from "./recipe.steps.form.view";

import './recipe.steps.form.css';
import { SetLanguageText } from "../../services/i18n/languageManager";
import { DeleteMessageDialog } from "../../common/elements/message.delete";

export interface RecipeFormStepsProps {
  steps:Array<StepModel>;
  updateSteps(steps:Array<StepModel>):void;
  displayError: boolean;
  isOnSubTask:boolean;
  setIsOnSubTask:(isOnSubTask:boolean)=>void;
};

export const RecipeFormSteps = (props : RecipeFormStepsProps) =>{
  const [ editOrder, setEditOrder] = useState(0);
  const [ showDeleteMessage, setShowDeleteMessage] = useState(false);

  const steps = JSON.parse(JSON.stringify(props.steps)) as StepModel[];
  
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

  const disableEditMode = () : void => {
    props.setIsOnSubTask(false);
    setEditOrder(0)
  };
  const enableEditMode = (order :number) => {
    props.setIsOnSubTask(true);
    setEditOrder(order);
  }

  const replacePosition = (stepItem : StepModel, newOrder: number) : void => {
    const oldPositionIndex = stepItem.order - 1;
    const newPositionindex = newOrder - 1;
    const desc = stepItem.description;
    steps[oldPositionIndex].description = steps[newPositionindex].description;
    steps[newPositionindex].description = desc;

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
      {steps?.map(stepItem => 
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
          enableEditMode={enableEditMode}
          onDeleteItemClick={onDeleteItemClick}
          disabledEdition={props.isOnSubTask}
        />
     )}
    <Button fullWidth
      onClick={addStep} 
      variant="outlined"
      disabled={props.isOnSubTask}
      color={steps.length === 0 ? "error":"primary"}>
      {textValue('add step')}
    </Button>
  </List>
  <DeleteMessageDialog 
    open={showDeleteMessage}
    onClose={onDeleteResponseHandle}
  />
  </div>
}