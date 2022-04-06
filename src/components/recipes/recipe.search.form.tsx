import { RecipeModel, RecipeSearchModel } from "../../common/models/recipe.form"
import { FormValidationservice } from "../../services/form.validation.service"
import { useState } from 'react';
import { FormModel } from "../../common/models/form-model";
import { FormValidations } from "../../utils/data/form-defiinions";
import { recipeSearchEndpointsService } from "../../services/endpoints/recipe.enpoints.service";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { SetLanguageText } from "../../services/i18n/languageManager";

export interface RecipeSearchFromProps {
    setRecipes:(recipes:RecipeModel[]) => void
    setLoading:(recipes:boolean) => void
}

const RecipeSearchFrom = (props : RecipeSearchFromProps) => {
    const [loading, setLoading] = useState(false);
    const [recipeSearchForm, setRecipeSearch] = useState(new FormModel<RecipeSearchModel>(new RecipeSearchModel()));
    const displayText = SetLanguageText;

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => 
        FormValidationservice.validateForm(event, searchRecipe, () => {} )
        
    const searchRecipe = () => {
        setLoading(true);
        recipeSearchEndpointsService.searchAsync(recipeSearchForm.model)
          .then( recipesResponse => props.setRecipes(recipesResponse) )
          .finally(() => {
            setLoading(false);
          });
      }

    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>     
        setRecipeSearch(prevState => ({ 
        ...prevState, 
        model:{...prevState.model, [event.target.id] : event.target.value } 
      })
    );
   
      return (
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", flexDirection:"row" }}
          onSubmit={handleSubmit} 
          noValidate 
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder={displayText("Recipe Search")}
            onChange={onTextChange}
            id="name"
            inputProps={{ 'aria-label': 'search recipe', maxLength: FormValidations.maxNameLength }}
          />
          <IconButton disabled={loading} type="submit" sx={{ p: '10px' }} aria-label="search">
            <GoogleIconsInheritance iconName={Icons.search} />
          </IconButton>
        </Paper>
      );
}

export { RecipeSearchFrom }