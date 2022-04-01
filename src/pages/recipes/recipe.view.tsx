import { useParams } from "react-router-dom";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { useEffect, useState } from "react";
import { IRecipeModel } from "../../common/models/recipe.form";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { RecipeViewer } from "../../components/recipes/recipe.view";
import { LayoutPage } from "../../common/layout/layout-page";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import IconButton from "@mui/material/IconButton";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { RoutingServices } from "../../services/routing.service";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../utils/routing/app-routes";
import { RecipeStepsView } from "../../components/recipe.steps/recipe.steps.views";

export default function RecipeView(){
  const [initialLoading, setInitialLoading] = useState(true);
  const [recipe, setRecipeState] = useState({} as IRecipeModel);
  
  const { recipeId } = useParams();
  
  const routingService = RoutingServices;
  const navigate = useNavigate();
  
  useEffect(()=>{
    recipeEndpointsService.getRecipeAsync(recipeId??'')
        .then(response => {
            setRecipeState(response??recipe);
            setInitialLoading(false);
        });
    },[])

    const editRecipe = () =>{
        let route = routingService.generateRoute(APP_ROUTES.RECIPES_UPDATE, {recipeId});
        navigate(route);
    }
    return <LayoutPage params={{recipeId}} loadingPage={initialLoading} >
         <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography gutterBottom variant="h4" component="div">
              {recipe.name}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color="primary" sx={{ p: '10px' }} aria-label={Icons.check} onClick={editRecipe} >
                <GoogleIconsInheritance iconName={Icons.edit} />
            </IconButton>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
            {recipe.description}
        </Typography>
      </Box>
      <Divider variant="middle" />
      <RecipeStepsView steps={recipe.steps} />


    </Box>
  </LayoutPage>
}