import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IRecipeModel, StepModel } from "../../common/models/recipe.form";
import { RecipeForm } from "../../components/recipes/recipe.form";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading } from "../../common/buttonLoader/button.loader";

export default function RecipeUpdate(){
  const [validated, setValidated] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  let { recipeId } = useParams();

  const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);

  useEffect(()=>{
      recipeEndpointsService.getRecipeAsync(recipeId??'')
          .then(response => {
            setRecipeFormState(response??recipeForm);
            setInitialLoading(false);
          });
  },[])

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    
  const form = event.currentTarget;
  let isValid = form.checkValidity();

  if (isValid) 
    recipeEndpointsService.updateRecipeAsync(recipeForm,recipeId??'')
      .then( response => console.log(response.recipeId));
  else
    setValidated(true);      
};  


const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
  setRecipeFormState({
      ...recipeForm,
      [event.target.id]: event.target.value
    });
}

const updateSteps = (steps : StepModel[]) => {
  setRecipeFormState({
    ...recipeForm,
    steps: steps
  });
}
    
  
  return  <LayoutPage params={{recipeId}} loadingPage={initialLoading}>
      <form onSubmit={handleSubmit} noValidate >
        <RecipeForm 
          recipe={recipeForm} 
          onTextChange={onTextChange} 
          displayError={validated}
          updateSteps={updateSteps}
        />
        <ButtonLoading text="update" fullWidth={false} loading={false} />
      </form>  
</LayoutPage>
}