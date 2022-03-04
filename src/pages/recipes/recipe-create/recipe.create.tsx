import { Button, Form } from "react-bootstrap";
import { RecipeForm } from "../../../components/recipes/recipe.form";
import { SetLocalizationText } from "../../../services/i18n/languageManager";
import { IRecipeModel } from "../../../common/models/recipe.form";
import { requestService, ROUTES } from "../../../services/requests/api-request";
import { useState } from "react";
import { PageRoute } from "../../../components/navigation/page-routes/page-route";
import { ROUTESCODE } from "../../../utils/data/navigation.collection";

export default function RecipeCreate(){
    let routeCode = ROUTESCODE.RECIPE_CREATE;
   
    const [validated, setValidated] = useState(false);
    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);
    const textValue = SetLocalizationText;

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
  
    return (<div>
        <PageRoute currenRoute={routeCode} />

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <RecipeForm recipe={recipeForm} onTextChange={onTextChange} />
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>

    </div>
      
    );
  }

