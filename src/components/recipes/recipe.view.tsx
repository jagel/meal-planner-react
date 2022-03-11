import { IRecipeModel } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";

export const RecipeViewer = (
    props : {
        recipe:IRecipeModel, 
    }) => {
   const textValue = SetLanguageText;
   
   return <div>
       <h1>{props.recipe.name}</h1>
       <p>{props.recipe.description}</p>
   </div>
  }
