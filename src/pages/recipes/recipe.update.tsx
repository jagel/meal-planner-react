import { useEffect, useState } from "react";
import { RecipeModel, RecipeProduct, StepModel } from "../../common/models/recipe.form";
import { RecipeForm, RecipeFormProps } from "../../components/recipes/recipe.form";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading, ButtonLoadingProp } from "../../common/buttons/button.loader";
import { RoutingServices } from "../../services/routing.service";
import { APP_ROUTES } from "../../utils/routing/app-routes";
import { useNavigate, useParams } from "react-router-dom";
import { FormModel } from "../../common/models/form-model";
import { FormValidationservice } from "../../services/form.validation.service";
import { ErrorObject } from "../../services/endpoints/error.handler";

export default function RecipeUpdate(){
  const [initialLoading, setInitialLoading] = useState(true);
  const [editionModel, setEditionMode] = useState(false);
  const [recipeForm, setRecipeFormState] = useState(new FormModel<RecipeModel>(new RecipeModel()));
  const [errorResponse, setErrorResponse] = useState<ErrorObject|undefined>();
  
  const routingService = RoutingServices;
  const navigate = useNavigate();

  const { recipeId } = useParams();

  useEffect(()=>{
    recipeEndpointsService.getRecipeByIdAsync(recipeId??'', true)
        .then(response => {
          setRecipeFormState(prevState => ({...prevState, model: response??recipeForm.model}) );
          setInitialLoading(false);
        });
  },[])

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => 
    FormValidationservice.validateForm(event, updateRecipe, () => setDisplayErrors(true));

  const updateRecipe = () => {
    let recipeResponse :RecipeModel;
    setLoading(true);
    recipeEndpointsService.updateRecipeAsync(recipeForm.model , recipeId??'')
      .then( modelSaved => recipeResponse = modelSaved)
      .catch((err) => setErrorResponse(err as ErrorObject))
      .finally(() => {
        setLoading(false);
        if(recipeResponse !== undefined) {
          let route = routingService.generateRoute(APP_ROUTES.RECIPES_VIEW, {recipeId:recipeResponse.recipeId});
          navigate(route);
        }
      });
  }

  const setLoading = (loading : boolean) => {
    setRecipeFormState(prevState => ({
      ...prevState,
      isLoading : loading
      })
    );
  }

  const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) => 
    setRecipeFormState(prevState => ({ 
        ...prevState, 
        model:{...prevState.model, [event.target.id] : event.target.value } 
      })
    );;

  const updateSteps = (steps : StepModel[] = []) =>  
    setRecipeFormState(prevState => ({ ...prevState,
        model:{ ...prevState.model, steps: steps }
      })
    );

  const updateIngredients = (ingredients: RecipeProduct[]) => {
    setRecipeFormState(prevState => ({ ...prevState,
        model:{ ...prevState.model, ingredients : ingredients }
      })
    );
  }


  const setDisplayErrors = (displayError : boolean) => {
    setRecipeFormState(prevState => ({
      ...prevState,
      displayErrors : displayError
      })
    );
  } 

  const formPoperties : RecipeFormProps = { recipeForm, onTextChange, updateSteps, updateIngredients, onEditionModel:setEditionMode };
  const buttonProperties : ButtonLoadingProp = { text:"save", fullWidth:false, loading:recipeForm.isLoading||editionModel };
  
  return <LayoutPage params={{recipeId}} loadingPage={initialLoading} errorObject={errorResponse}>
    <form onSubmit={handleSubmit} noValidate >
      <RecipeForm {...formPoperties} />
      <ButtonLoading {...buttonProperties} />
    </form>
  </LayoutPage>
}