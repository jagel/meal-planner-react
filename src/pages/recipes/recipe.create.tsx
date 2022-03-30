import { RecipeForm } from "../../components/recipes/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { IRecipeModel } from "../../common/models/recipe.form";
import { ROUTES } from "../../utils/data/api-routes";
import { useState } from "react";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { requestService } from "../../services/api-service";

export default function RecipeCreate(){
    const [validated, setValidated] = useState(false);
    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);
    const textValue = SetLanguageText;

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        
      const form = event.currentTarget;
      let isValid = form.checkValidity();

      if (isValid) 
        requestService.httpPostAsync<IRecipeModel>(ROUTES.RECIPE.CREATE,recipeForm)
            .then((data) => console.log('completed',data))
      else
        setValidated(true);
    };

    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
      setRecipeFormState({
          ...recipeForm,
          [event.target.id]: event.target.value
        });
    }

    const onDropDownChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
      setRecipeFormState({
        ...recipeForm,
        [event.target.id]: event.target.value
      });
    }
  
    return <div>
        <BreadcrumbRoutes />
      
    </div>;
  }


  /*
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <RecipeForm 
            recipe={recipeForm} 
            onTextChange={onTextChange} 
            onDropDownChange={onDropDownChange} 
          />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
  */