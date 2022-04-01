import { RecipeForm } from "../../components/recipes/recipe.form";
import { IRecipeModel, StepModel } from "../../common/models/recipe.form";
import { useState } from "react";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading } from "../../common/buttonLoader/button.loader";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import { Navigate, useNavigate } from "react-router-dom";
import { RoutingServices } from "../../services/routing.service";
import { APP_ROUTES } from "../../utils/routing/app-routes";


export default function RecipeCreate(){
    const [validated, setValidated] = useState(false);
    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);
    const [loading, setLoading] = useState(false);
 
    const routingService = RoutingServices;
    const navigate = useNavigate();
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
      const form = event.currentTarget;
      let isValid = form.checkValidity();

      if (isValid) {
        setLoading(true);
        recipeEndpointsService.createRecipeAsync(recipeForm)
          .then( response => {
            let route = routingService.generateRoute(APP_ROUTES.RECIPES_VIEW, {recipeId:response.recipeId});
            navigate(route);
          })
          .finally(() => setLoading(false));
      }
        
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
  
    return <LayoutPage>
      <form onSubmit={handleSubmit} noValidate >
        <RecipeForm 
          recipe={recipeForm} 
          onTextChange={onTextChange} 
          displayError={validated}
          updateSteps={updateSteps}
        />
        <ButtonLoading text="save" fullWidth={false} loading={loading} />
      </form>  
    </LayoutPage>
  }