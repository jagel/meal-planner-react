import { RecipeForm, RecipeFormProps } from "../../components/recipes/recipe.form";
import { RecipeModel, RecipeProduct, StepModel } from "../../common/models/recipe.form";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading, ButtonLoadingProp } from "../../common/buttons/button.loader";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import { useNavigate } from "react-router-dom";
import { RoutingServices } from "../../services/routing.service";
import { APP_ROUTES } from "../../utils/routing/app-routes";
import { useFormHandle } from "../../utils/custom-hooks/useFormHandle";

export default function RecipeCreate(){
  const routingService = RoutingServices;
  const navigate = useNavigate();

  const afterSave = (recipeModelSaved:RecipeModel) => {
    let route = routingService.generateRoute(APP_ROUTES.RECIPES_VIEW, {recipeId:recipeModelSaved.recipeId});
    navigate(route);
  }

  const [recipeForm, errorResponse, formEvents ] =
    useFormHandle(
      new RecipeModel(),
      recipeEndpointsService.createRecipeAsync,
      afterSave
    )

  const updateSteps = (steps : Array<StepModel> = []) =>
    formEvents.onModelChange<Array<StepModel>>('steps', steps);

  const updateIngredients = (ingredients: Array<RecipeProduct>) => 
    formEvents.onModelChange<Array<RecipeProduct>>('ingredients', ingredients);
    

  const formPoperties : RecipeFormProps = { recipeForm, onModelChange : formEvents.onModelChange, updateSteps, updateIngredients };
  const buttonProperties : ButtonLoadingProp = { text:"save", fullWidth:false, loading:recipeForm.isLoading };

  return <LayoutPage errorObject={errorResponse}>
    <form onSubmit={formEvents.handleSubmit} noValidate >
      <RecipeForm {...formPoperties} />
      <ButtonLoading {...buttonProperties} />
    </form>
  </LayoutPage>
  }