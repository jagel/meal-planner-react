import { RecipeForm, RecipeFormProps } from "../../components/recipes/recipe.form";
import { RecipeModel } from "../../common/models/recipe.form";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading, ButtonLoadingProp } from "../../common/buttons/button.loader";
import { useNavigate } from "react-router-dom";
import { RoutingServices } from "../../services/routing.service";
import { APP_ROUTES } from "../../utils/routing/app-routes";
import { useCreateRecipe } from "../../utils/custom-hooks/useCreateRecipe";
import { useState } from "react";

export default function RecipeCreate(){
  const routingService = RoutingServices;
  const navigate = useNavigate();

  const afterSave = (recipeModelSaved:RecipeModel) => {
    let route = routingService.generateRoute(APP_ROUTES.RECIPES_VIEW, {recipeId:recipeModelSaved.recipeId});
    navigate(route);
  }

  const [recipeForm, errorResponse, formEvents ] = useCreateRecipe(afterSave);
  const [isOnSubTask, setIsOnSubtask] = useState(false);

  const formPoperties : RecipeFormProps = {
    recipeForm,
    isOnSubTask,
    setIsOnSubTask: (isOnSubtask:boolean) => setIsOnSubtask(isOnSubtask),
    onModelChange : formEvents.onModelChange,
    updateSteps: formEvents.updateSteps,
    updateIngredients: formEvents.updateIngredients,
  };

  const buttonProperties : ButtonLoadingProp = { 
    text:"save", 
    fullWidth:false, 
    loading:recipeForm.isLoading,
    disabled:isOnSubTask
  };

  return <LayoutPage errorObject={errorResponse}>
    <form onSubmit={formEvents.handleSubmit} noValidate >
      <RecipeForm {...formPoperties} />
      <ButtonLoading {...buttonProperties} />
    </form>
  </LayoutPage>
  }