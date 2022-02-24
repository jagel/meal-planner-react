import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import { RecipeForm } from "../../../components/recipes/recipe.form";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";
import { IRecipeModel } from "../../../common/models/recipe.form";
import { postDataAsync } from "../../../utils/api-request";
import { useState } from "react";


export default function RecipeCreate(){
    const textValue = SetLocalizationText;
    const [recipeForm, setCreateFormSetState] = useState({validated:false, newRecipe: {} as IRecipeModel});
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation(); 
        
        const form = event.currentTarget;
        let isValid = form.checkValidity();

        if (isValid) {
            console.log(recipeForm.newRecipe)
            postDataAsync<IRecipeModel>('https://localhost:7242/api/Recipe/CreateRecipe',recipeForm.newRecipe)
        }
        else{
            setCreateFormSetState({validated:false, newRecipe: recipeForm.newRecipe});
        }
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

        <Form noValidate validated={recipeForm.validated} onSubmit={onSubmit}>
            <RecipeForm recipe={recipeForm.newRecipe} />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
    </div>
}

