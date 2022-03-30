import { RouteObject } from "react-router-dom"
import { NoMatch } from "../../pages/no-match/no-match"
import { Layout } from '../../common/layout/layout-component';
import { Login } from "../../pages/auth/login"
import Dashboard from "../../pages/dashboard/dashboard"
import RecipeCreate from "../../pages/recipes/recipe.create"
import RecipeUpdate from "../../pages/recipes/recipe.update"
import RecipeSearch from '../../pages/recipes/recipe-search';
import RecipeView from '../../pages/recipes/recipe.view';
import { APP_ROUTES } from "./app-routes";

export const RoutesItems : RouteObject[] = [{
    path:APP_ROUTES.LOGIN.path,
    element: <Login />
    },{
    path: APP_ROUTES.DASHBOARD.path,
    element: <Layout />,
    children: [
    {
        index:true,
        element: <Dashboard />
    },{
        path:  APP_ROUTES.RECIPES.path,
        children:[
            { index: true, element: <RecipeSearch />},
            { path: APP_ROUTES.RECIPES_CREATE.path, element: <RecipeCreate />},
            { path: APP_ROUTES.RECIPES_UPDATE.path, element: <RecipeUpdate />},
            { path: APP_ROUTES.RECIPES_VIEW.path, element: <RecipeView />}
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