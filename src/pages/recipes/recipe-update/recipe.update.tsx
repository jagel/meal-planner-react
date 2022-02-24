import { Breadcrumb, Button, Container, Form } from "react-bootstrap"
import { useParams } from "react-router-dom";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";
import { useEffect, useState } from "react";
import { getData, ROUTES } from "../../../utils/api-request";
import { IRecipeModel } from "../../../common/models/recipe.form";
import { RecipeForm } from "../../../components/recipes/recipe.form";

export default function RecipeUpdate(){
    const textValue = SetLocalizationText;
    let { recipeId } = useParams();

    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);

    useEffect(()=>{
        getData(ROUTES.RECIPE.UPDATE, {recipeId:recipeId}).then(response => {
            console.log(response.data);
            setRecipeFormState(response.data)
        });
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    }
  
    return <div>
        <h1>{textValue('New Recipe')}</h1>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

        <Form>
            <RecipeForm recipe={recipeForm} onTextChange={onTextChange} />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
    </div>
}