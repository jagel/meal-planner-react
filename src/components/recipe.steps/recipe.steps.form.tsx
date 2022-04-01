import React from "react";

import { StepModel } from "../../common/models/recipe.form";
import { useState } from 'react';
import List from "@mui/material/List";
import { Button, Divider } from "@mui/material";

import { RecipeStepsEdit } from "./recipe.steps.edit";
import { RecipeStepsFormView } from "./recipe.steps.form.view";

import './recipe.steps.form.css';
import { SetLanguageText } from "../../services/i18n/languageManager";

export const RecipeFormSteps = (props :{
    steps:StepModel[],
    updateSteps(steps:StepModel[]):void,
}) =>{
  const [ editOrder, setEditOrder] = useState(0);
  const editMode = editOrder > 0;
  const textValue = SetLanguageText;

  const editionCompleted = (step:StepModel) => {
    let steps = props.steps;
    steps[(step.order-1)] = step;
    disableEditMode();
    props.updateSteps(steps);
  }

  const addStep = () => {
    let arraySteps = props.steps??[];
    let newArrayStep : StepModel = {order:(arraySteps.length +1), description:''};
    arraySteps.push(newArrayStep);
    enableEditMode(newArrayStep.order);
    props.updateSteps(arraySteps);
  }

  const enableEditMode = (order:number) : void => {
    setEditOrder(order);
  }

  const disableEditMode = () : void => {
    setEditOrder(0);
  }

  const replacePosition = (stepItem : StepModel, newOrder: number) : void => {
    const desc = stepItem.description;
    stepItem.description = props.steps[(newOrder-1)].description;
    props.steps[(newOrder-1)].description = desc;

    enableEditMode(newOrder);
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
        /> :
        <RecipeStepsFormView 
          key={stepItem.order}
          stepItem={stepItem}
          editMode={editMode}
          enableEditMode={enableEditMode}
        />
     )}
  <Button 
    onClick={addStep} 
    variant="outlined"
    disabled={editMode}>
    {textValue('add step')}
  </Button>
</List>
  </div>
}