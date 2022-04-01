import { useParams } from "react-router-dom";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { useEffect, useState } from "react";
import { ROUTES } from "../../utils/data/api-routes";
import { IRecipeModel } from "../../common/models/recipe.form";
import { RecipeForm } from "../../components/recipes/recipe.form";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { requestService } from "../../services/api-service";

export default function RecipeUpdate(){
    const textValue = SetLanguageText;
    let { recipeId } = useParams();

    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);

    useEffect(()=>{
        requestService.httpGetAsync<IRecipeModel>(ROUTES.RECIPE.GETBYRECIPEID, {recipeId})
            .then(response => {
                console.log(response);
                setRecipeFormState(response??recipeForm);
            });
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{}
    const onDropDownChange = (event : React.ChangeEvent<HTMLSelectElement>) =>{}
  
    
    return <div>
        <BreadcrumbRoutes dynamicParams={{recipeId}}  />
    </div>
}

/*
<Form>
            <RecipeForm recipe={recipeForm} onTextChange={onTextChange} onDropDownChange={onDropDownChange} />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
 */