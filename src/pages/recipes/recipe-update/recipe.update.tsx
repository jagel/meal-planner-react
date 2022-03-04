import { Breadcrumb, Button, Container, Form } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { SetLocalizationText } from "../../../services/i18n/languageManager";
import { useEffect, useState } from "react";
import { requestService, ROUTES } from "../../../services/requests/api-request";
import { IRecipeModel } from "../../../common/models/recipe.form";
import { RecipeForm } from "../../../components/recipes/recipe.form";
import { PageRoute } from "../../../components/navigation/page-routes/page-route";
import { ROUTESCODE } from "../../../utils/data/navigation.collection";

export default function RecipeUpdate(){
    const textValue = SetLocalizationText;
    let routeCode = ROUTESCODE.RECIPE_UPDATE;
    let { recipeId } = useParams();

    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);

    useEffect(()=>{
        requestService.httpGetAsync<IRecipeModel>(ROUTES.RECIPE.GETBYRECIPEID, {recipeId})
            .then(response => {
                console.log(response);
                setRecipeFormState(response??recipeForm);
            });
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    }
  
    let dynamicParams : string[]= [`/${recipeId}`];
    return <div>
        <PageRoute currenRoute={routeCode} dynamicParams={dynamicParams}  />
        <Form>
            <RecipeForm recipe={recipeForm} onTextChange={onTextChange} />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
    </div>
}