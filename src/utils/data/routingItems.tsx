import { RouteObject } from "react-router-dom"
import { NoMatch } from "../../pages/no-match/no-match"
import { MainComponent } from '../../common/main-component/main-component';
import Login from "../../pages/auth/login/login"
import Dashboard from "../../pages/dashboard/dashboard"
import RecipeCreate from "../../pages/recipes/recipe-create/recipe.create"
import RecipeUpdate from "../../pages/recipes/recipe-update/recipe.update"
import RecipeSearch from '../../pages/recipes/recipe-search/recipe-search';
import RecipeView from '../../pages/recipes/recipe-view/recipe.view';
import React from "react";

export const RoutesItems : RouteObject[] = [{
    path: "/",
    element: 
    //lazy load
        <React.Suspense fallback={<>...</>}> 
            <MainComponent />
        </React.Suspense>
    ,
    children: [
        {
            index:true,
            element: <Dashboard />
        },{
            path:"/recipes",
            children:[
                { index: true, element: <RecipeSearch />},
                { path:"/recipes/create", element: <RecipeCreate />},
                { path:"/recipes/view/:recipeId", element: <RecipeView />},
                { path:"/recipes/update/:recipeId", element: <RecipeUpdate />}
            ]
        },{
            path:"/meal-planner",
            children:[
                {index:true, element: <RecipeCreate />}
            ]
        }]
},{
    path:"/login",
    element: <Login />
},{
    path:"*", 
    element: <NoMatch />
}];

export default RoutesItems;