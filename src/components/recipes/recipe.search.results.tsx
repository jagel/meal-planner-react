import { RecipeModel } from "../../common/models/recipe.form"
import { SetLanguageText } from "../../services/i18n/languageManager";

export interface RecipeSearchResultsProps {
    recipes:RecipeModel[],
    loading: boolean
} 

const RecipeSearchResults = (props: RecipeSearchResultsProps) => {
    const textValue = SetLanguageText;

    return <label>Results</label>
}

export { RecipeSearchResults }