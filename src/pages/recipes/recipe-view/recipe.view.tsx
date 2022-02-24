import { Breadcrumb, Button, Container, Form } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";
import { useEffect, useState } from "react";
import { getData, ROUTES } from "../../../utils/api-request";
import { IRecipeModel } from "../../../common/models/recipe.form";
import { RecipeForm } from "../../../components/recipes/recipe.form";
import { PageRoute } from "../../../components/navigation/page-routes/page-route";
import { ROUTESCODE } from "../../../utils/NavBarCollection";
import { RecipeViewer } from "../../../components/recipes/recipe.view";

export default function RecipeView(){
    const textValue = SetLocalizationText;
    let routeCode = ROUTESCODE.RECIPE_UPDATE;
    let { recipeId } = useParams();

    const [recipe, setRecipeState] = useState({} as IRecipeModel);

    useEffect(()=>{
        getData(ROUTES.RECIPE.GETBYRECIPEID, {recipeId:recipeId}).then(response => {
            console.log(response.data);
            setRecipeState(response.data)
        });
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    }
  
    let dynamicParams : string[]= [`/${recipeId}`];
    return <div>
        <PageRoute currenRoute={routeCode} dynamicParams={dynamicParams}  />
        <RecipeViewer recipe={recipe}  />
    </div>
}