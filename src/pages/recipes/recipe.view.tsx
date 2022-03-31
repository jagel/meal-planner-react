import { useParams } from "react-router-dom";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { useEffect, useState } from "react";
import { IRecipeModel } from "../../common/models/recipe.form";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { RecipeViewer } from "../../components/recipes/recipe.view";

export default function RecipeView(){
    const textValue = SetLanguageText;
    let { recipeId } = useParams();

    const [recipe, setRecipeState] = useState({} as IRecipeModel);

    useEffect(()=>{
       
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    }
  
    return <div>
        <BreadcrumbRoutes dynamicParams={{recipeId}}  />
        <RecipeViewer recipe={recipe}  />
    </div>
}