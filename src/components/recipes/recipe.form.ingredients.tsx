import { useEffect, useState } from "react";
import { IRecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";

interface IRecipeFormIngredientsProps {
    ingredients:IRecipeProduct[];
    onTextChange(event:React.ChangeEvent<HTMLInputElement>):void;
};


const RecipeFormIngredients = (props: IRecipeFormIngredientsProps) => {
    return <label>space</label>;
}

  export { RecipeFormIngredients };