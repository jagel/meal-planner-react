import Paper from "@mui/material/Paper";
import { RecipeModel } from "../../common/models/recipe.form"
import { SetLanguageText } from "../../services/i18n/languageManager";
import { RecipeSearchCard } from "./recipe.search.card";

export interface RecipeSearchResultsProps {
    recipes:RecipeModel[],
    loading: boolean
} 

const RecipeSearchResults = (props: RecipeSearchResultsProps) => {
    const textValue = SetLanguageText;

    return <Paper>
        {props.recipes.map(recipeItem=><RecipeSearchCard key={recipeItem.recipeId} recipe={recipeItem} />)}
    </Paper>
}

export { RecipeSearchResults }