import { Button, Form } from "react-bootstrap";
import { RecipeForm } from "../../../components/recipes/recipe.form";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";
import { IRecipeModel } from "../../../common/models/recipe.form";
import { postDataAsync, ROUTES } from "../../../utils/api-request";
import { useState } from "react";

export default function RecipeCreate(){
    const [validated, setValidated] = useState(false);
    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);
    const textValue = SetLocalizationText;

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
      const form = event.currentTarget;
      let isValid = form.checkValidity();

      if (isValid) 
        postDataAsync<IRecipeModel>(ROUTES.RECIPE.CREATE,recipeForm)
            .then((data:any) => console.log('completed'))
      else
        setValidated(true);
    };

    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
        setRecipeFormState({
            ...recipeForm,
            [event.target.id]: event.target.value
          });
    } 
  
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <RecipeForm recipe={recipeForm} onTextChange={onTextChange} />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
      </Form>
    );
  }

