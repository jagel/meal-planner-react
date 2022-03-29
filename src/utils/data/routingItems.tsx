import { RouteObject } from "react-router-dom"
import { NoMatch } from "../../pages/no-match/no-match"
import { Layout } from '../../common/layout/layout-component';
import { Login } from "../../pages/auth/login"
import Dashboard from "../../pages/dashboard/dashboard"
import RecipeCreate from "../../pages/recipes/recipe.create"
import RecipeUpdate from "../../pages/recipes/recipe.update"
import RecipeSearch from '../../pages/recipes/recipe-search';
import RecipeView from '../../pages/recipes/recipe.view';

export const RoutesItems : RouteObject[] = [{
    path:"/login",
    element: <Login />
    },{
    path: "/",
    element: <Layout />,
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
    },{
        path:"*", 
        element: <NoMatch />
    }]
}];

export default RoutesItems;