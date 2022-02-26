import { IRecipeModel } from "../../common/models/recipe.form";
import { SetLocalizationText } from "../../services/i18n/languageManager";

export const RecipeViewer = (
    props : {
        recipe:IRecipeModel, 
    }) => {
   const textValue = SetLocalizationText;
   
   return <div>
       <h1>{props.recipe.name}</h1>
       <p>{props.recipe.description}</p>
   </div>
  }
