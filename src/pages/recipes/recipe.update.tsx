import { RecipeModel, RecipeProduct, StepModel } from "../../common/models/recipe.form";
import { RecipeForm, RecipeFormProps } from "../../components/recipes/recipe.form";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading, ButtonLoadingProp } from "../../common/buttons/button.loader";
import { RoutingServices } from "../../services/routing.service";
import { APP_ROUTES } from "../../utils/routing/app-routes";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateRecipe } from "../../utils/custom-hooks/useUpdateRecipe";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import { SX_Properties } from "../../utils/data/jgl-styles";

export default function RecipeUpdate(){
  const { recipeId } = useParams();
  const routingService = RoutingServices;
  const navigate = useNavigate();

  const afterUpdate = (recipeModelSaved:RecipeModel) => {
    let route = routingService.generateRoute(APP_ROUTES.RECIPES_VIEW, {recipeId:recipeModelSaved.recipeId});
    navigate(route);
  }

  const [recipeForm, errorResponse, formEvents ] = useUpdateRecipe(recipeId??'', afterUpdate);
  const [isOnSubTask, setIsOnSubtask] = useState(false);

  const formPoperties : RecipeFormProps = { 
    recipeForm,
    isOnSubTask,
    setIsOnSubTask: (isOnSubtask:boolean) => setIsOnSubtask(isOnSubtask),
    onModelChange: formEvents.onModelChange, 
    updateSteps: formEvents.updateSteps,
    updateIngredients: formEvents.updateIngredients};

  const buttonProperties : ButtonLoadingProp = { 
    text:"save", 
    fullWidth:false, 
    loading:recipeForm.isLoading,
    disabled: isOnSubTask
  };
  
  return <LayoutPage params={{recipeId}} skeletonLoading={recipeForm.skeletonLoading} errorObject={errorResponse}>
     <Grid container sx={SX_Properties.BoxMainContainer} >
      <form onSubmit={formEvents.handleSubmit} noValidate >
        <RecipeForm {...formPoperties} />
        <ButtonLoading {...buttonProperties} />
      </form>
    </Grid>
  </LayoutPage>
}