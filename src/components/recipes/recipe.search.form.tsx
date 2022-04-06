import { JglButtonSearch } from "../../common/buttons/button.search"
import { RecipeModel } from "../../common/models/recipe.form"
import { FormValidationservice } from "../../services/form.validation.service"
import { useState } from 'react';
import { InputRequired } from "../form-items/input.required";
import { FormModel } from "../../common/models/form-model";
import { FormValidations } from "../../utils/data/form-defiinions";
import { recipeSearchEndpointsService } from "../../services/endpoints/recipe.enpoints.service";

export interface RecipeSearchFromProps {
    setRecipes:(recipes:RecipeModel[]) => void
    setLoading:(recipes:boolean) => void
}

const RecipeSearchFrom = (props : RecipeSearchFromProps) => {
    const [loading, setLoading] = useState(false);
    const [recipeForm, setRecipeSearch] = useState(new FormModel<RecipeModel>(new RecipeModel()));

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => 
        FormValidationservice.validateForm(event, searchRecipe, () => {} )
    

    const searchRecipe = () => {
        let recipesResponse :RecipeModel[];
        setLoading(true);
        recipeSearchEndpointsService.searchAsync(recipeForm.model)
          .then( recipes => recipesResponse = recipes)
          .finally(() => {
            setLoading(false);
            console.log(recipesResponse)
            props.setRecipes(recipesResponse);
          });
      }

    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) => 
        setRecipeSearch(prevState => ({ 
        ...prevState, 
        model:{...prevState.model, [event.target.id] : event.target.value } 
      })
    );
   

    return <div>
        <form onSubmit={handleSubmit} noValidate >
            <InputRequired
                value={recipeForm.model.name}
                displayText="Name"
                name="name" 
                onTextChange={onTextChange} 
                displayError={recipeForm.displayErrors}
                inputProps={{ maxLength: FormValidations.maxNameLength }} 
            />
              <JglButtonSearch isLoading={loading} />
        </form>
    </div>
}

export { RecipeSearchFrom }