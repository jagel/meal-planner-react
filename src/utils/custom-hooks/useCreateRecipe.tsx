import React, { useState } from "react";
import { FormModel } from "../../common/models/form-model";
import { RecipeModel, RecipeProduct, StepModel } from "../../common/models/recipe.form";
import { ErrorObject } from "../../services/endpoints/error.handler";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";

export interface FormEvents{
    onModelChange:<TValue>(key:string, value:TValue)=> void,
    handleSubmit:(event:React.FormEvent<HTMLFormElement>)=> void
    setLoading:(isLoading:boolean)=>void,
    updateSteps:(steps : Array<StepModel>)=>void,
    updateIngredients:(ingredients: Array<RecipeProduct>)=>void
}

export function useCreateRecipe(
    afterSuccess:(modelSaved:RecipeModel) =>void)
    : [
        FormModel<RecipeModel>,
        ErrorObject|undefined,
        FormEvents,
    ] {

    const [recipeFormModel, setRecipeFormModel] = useState<FormModel<RecipeModel>>(new FormModel(new RecipeModel()));
    const [errorResponse, setErrorResponse] = useState<ErrorObject|undefined>();

    const loading = (isLoading:boolean=true) => setRecipeFormModel(prevState=>({...prevState, isLoading:isLoading }));
    const displayErrors = (showErrors:boolean=false) => setRecipeFormModel(prevState=>({...prevState, displayErrors:showErrors }));

    const onModelChange = function<TValue>(key:string, value:TValue){
        setRecipeFormModel(prevState=>({...prevState, model:{...prevState.model ,[key]: value} }));
    }

    const handleCallback = () => {
        let recipeSaved : RecipeModel;
        let savedSuccesfully : boolean;

        loading(true);
        setErrorResponse(undefined);

        recipeEndpointsService.createRecipeAsync(recipeFormModel.model)
            .then(response => {
                recipeSaved = response;
                savedSuccesfully = true;
            })
            .catch(err => setErrorResponse(err))
            .finally(() =>{
                loading(false);
                if(savedSuccesfully)
                    afterSuccess(recipeSaved);
            });
    }

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) :void => {
        event.preventDefault();
        event.stopPropagation();

        const isValid = event.currentTarget.checkValidity();
    
        if (isValid){
            handleCallback();
        } 
        else displayErrors(true);
    }

    const updateSteps = (steps : Array<StepModel> = []) =>
        setRecipeFormModel(prevState=>({...prevState, model:{...prevState.model, steps: steps } }));

    const updateIngredients = (ingredients: Array<RecipeProduct>) => 
        setRecipeFormModel(prevState=>({...prevState, model:{...prevState.model, ingredients: ingredients } }));

    const formEvents : FormEvents = {
        onModelChange,
        handleSubmit,
        setLoading:loading,
        updateSteps,
        updateIngredients
    }

    return [
        recipeFormModel,
        errorResponse,
        formEvents
    ]
}