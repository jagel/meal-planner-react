import { useParams } from "react-router-dom";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { useEffect, useState } from "react";
import { IRecipeModel, StepModel } from "../../common/models/recipe.form";
import { RecipeForm } from "../../components/recipes/recipe.form";
import { recipeEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import { LayoutPage } from "../../common/layout/layout-page";
import { ButtonLoading } from "../../common/buttonLoader/button.loader";

export default function RecipeUpdate(){
    const [validated, setValidated] = useState(false);
    const textValue = SetLanguageText;
    let { recipeId } = useParams();

    const [recipeForm, setRecipeFormState] = useState({} as IRecipeModel);

    useEffect(()=>{
        recipeEndpointsService.getRecipeAsync(recipeId??'')
            .then(response => {
                console.log(response);
                setRecipeFormState(response??recipeForm);
            });
    },[])


    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{}
    const onDropDownChange = (event : React.ChangeEvent<HTMLSelectElement>) =>{}
  
    const updateSteps = (steps : StepModel[]) => {
        setRecipeFormState({
          ...recipeForm,
          steps: steps
        });
      }
      
    
    return  <LayoutPage params={{recipeId}}>
    <form onSubmit={() => console.log('')} noValidate >
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