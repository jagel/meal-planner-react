import { LayoutPage } from "../../common/layout/layout-page";
import { RecipeSearchFrom, RecipeSearchFromProps } from "../../components/recipes/recipe.search.form";
import { RecipeSearchResults, RecipeSearchResultsProps } from "../../components/recipes/recipe.search.results";
import { useState } from 'react';
import { RecipeModel } from "../../common/models/recipe.form";

export default function RecipeSearch(){
    const [recipes, setRecipes] = useState([] as RecipeModel[])
    const [loading, setLoading] = useState(false)

    const recipeResultProps : RecipeSearchResultsProps = { recipes, loading };
    const recipeSearchProps : RecipeSearchFromProps = { setRecipes, setLoading };

    return <LayoutPage>
    <div>
        <RecipeSearchFrom {...recipeSearchProps} />
        <RecipeSearchResults {...recipeResultProps} />
    </div>
  </LayoutPage>;
}