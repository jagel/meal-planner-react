import { LayoutPage } from "../../common/layout/layout-page";
import { RecipeSearchFrom, RecipeSearchFromProps } from "../../components/recipes/recipe.search.form";
import { RecipeSearchResults, RecipeSearchResultsProps } from "../../components/recipes/recipe.search.results";
import { useState } from 'react';
import { RecipeModel } from "../../common/models/recipe.form";
import Divider from "@mui/material/Divider";

export default function RecipeSearch(){
    const [recipes, setRecipes] = useState([] as RecipeModel[])
    const [loading, setLoading] = useState(false)

    const recipeResultProps : RecipeSearchResultsProps = { recipes, loading };
    const recipeSearchProps : RecipeSearchFromProps = { setRecipes, setLoading };

    return <LayoutPage>
    <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
      <RecipeSearchFrom {...recipeSearchProps} />
      <Divider />
      <RecipeSearchResults {...recipeResultProps} />
    </div>
  </LayoutPage>;
}