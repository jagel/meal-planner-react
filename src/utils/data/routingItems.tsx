import { RouteObject } from "react-router-dom"
import { NoMatch } from "../../pages/no-match/no-match"
import { MainComponent } from '../../common/main-component/main-component';
import Login from "../../pages/auth/login/login"
import Dashboard from "../../pages/dashboard/dashboard"
import RecipeCreate from "../../pages/recipes/recipe-create/recipe.create"
import RecipeUpdate from "../../pages/recipes/recipe-update/recipe.update"
import RecipeSearch from '../../pages/recipes/recipe-search/recipe-search';
import RecipeView from '../../pages/recipes/recipe-view/recipe.view';

export const RoutesItems : RouteObject[] = [{
    path: "/",
    element: <MainComponent />,
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
},{
    path:"/login",
    element: <Login />
}];

export default RoutesItems;