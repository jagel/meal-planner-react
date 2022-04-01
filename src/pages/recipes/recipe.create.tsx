import { RecipeForm } from "../../components/recipes/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { IRecipeModel, StepModel } from "../../common/models/recipe.form";
import { useState } from "react";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading } from "../../common/buttonLoader/button.loader";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";


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
        recipeEndpointsService.createRecipeAsync(recipeForm)
          .then( response => console.log(response.recipeId));
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

    const updateSteps = (steps : StepModel[]) => {
      setRecipeFormState({
        ...recipeForm,
        steps: steps
      });
    }
  
    return <LayoutPage>
      <form onSubmit={handleSubmit} noValidate >
        <RecipeForm 
          recipe={recipeForm} 
          onTextChange={onTextChange} 
          onDropDownChange={onDropDownChange} 
          displayError={validated}
          updateSteps={updateSteps}
        />
        <ButtonLoading text="save" fullWidth={false} />

      </form>  
    </LayoutPage>
  }


  /*
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
         
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
  */