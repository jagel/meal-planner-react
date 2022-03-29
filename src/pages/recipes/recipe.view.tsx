import { useParams } from "react-router-dom";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { useEffect, useState } from "react";
import { IRecipeModel } from "../../common/models/recipe.form";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { ROUTESCODE } from "../../utils/data/navigation.collection";
import { RecipeViewer } from "../../components/recipes/recipe.view";

export default function RecipeView(){
    const textValue = SetLanguageText;
    let routeCode = ROUTESCODE.RECIPE_UPDATE;
    let { recipeId } = useParams();

    const [recipe, setRecipeState] = useState({} as IRecipeModel);

    useEffect(()=>{
       
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    }
  
    let dynamicParams : string[]= [`/${recipeId}`];
    return <div>
        <BreadcrumbRoutes currenRoute={routeCode} dynamicParams={dynamicParams}  />
        <RecipeViewer recipe={recipe}  />
    </div>
}