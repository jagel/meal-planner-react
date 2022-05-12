import Grid from "@mui/material/Grid";
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

    return <Paper style={{padding:'10px'}}>
    <div style={{display:'flex', gap:'10px'}}>
    {props.recipes.map(recipeItem=>
        <RecipeSearchCard key={recipeItem.recipeId} recipe={recipeItem} />
    )}
    </div>
    </Paper>
}

export { RecipeSearchResults }