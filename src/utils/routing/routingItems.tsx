import { RouteObject } from "react-router-dom"
import { NoMatch } from "../../pages/no-match/no-match"
import { Layout } from '../../common/layout/layout-component';
import RecipeCreate from "../../pages/recipes/recipe.create"
import { APP_ROUTES } from "./app-routes";

export const RoutesItems : RouteObject[] = [{
    path:APP_ROUTES.LOGIN.path,
    element: APP_ROUTES.LOGIN.node
    },{
    path: APP_ROUTES.HOME.path,
    element: <Layout />,
    children: [
    {
        index:true,
        element: APP_ROUTES.HOME.node
    },{
        path:  APP_ROUTES.RECIPES.path,
        children:[
            { index: true, element: APP_ROUTES.RECIPES.node},
            { path: APP_ROUTES.RECIPES_CREATE.path, element:  APP_ROUTES.RECIPES_CREATE.node},
            { path: APP_ROUTES.RECIPES_UPDATE.path, element: APP_ROUTES.RECIPES_UPDATE.node},
            { path: APP_ROUTES.RECIPES_VIEW.path, element: APP_ROUTES.RECIPES_VIEW.node}
        ]
    },{
        path:"agenda",
        children:[
            {path: 'agenda/meal-planner', element: <RecipeCreate />} //TODO: create nodes <<tmp solution>>
        ]
    },{
        path:APP_ROUTES.SETTINGS.path,
        children:[
            { path: APP_ROUTES.SETTINGS_MEALPLANNER.path, element: APP_ROUTES.SETTINGS_MEALPLANNER.node },
        ]
    },{
        path:"*", 
        element: <NoMatch />
    }]
}];



export default RoutesItems;
