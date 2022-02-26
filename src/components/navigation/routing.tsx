import { Route, Routes } from "react-router-dom"
import Login from "../../pages/auth/login/login"
import Dashboard from "../../pages/dashboard/dashboard"
import RecipeCreate from "../../pages/recipes/recipe-create/recipe.create"
import RecipeUpdate from "../../pages/recipes/recipe-update/recipe.update"
import RecipeSearch from '../../pages/recipes/recipe-search/recipe-search';
import RecipeView from '../../pages/recipes/recipe-view/recipe.view';

export const RoutingItems = () => {
    return <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        
         {/* Recipes */}
        <Route path="/recipes" element={<RecipeSearch/>} />
        <Route path="/recipes/create" element={<RecipeCreate/>} />
        <Route path="/recipes/update/:recipeId" element={<RecipeUpdate/>} />
        <Route path="/recipes/view/:recipeId" element={<RecipeView/>} />

         {/* Planner */}
         <Route path="/meal-planner/day-view" element={<RecipeCreate/>} />

    </Routes>
}