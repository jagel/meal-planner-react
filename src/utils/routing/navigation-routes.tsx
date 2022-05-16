import { APP_ROUTES, RouteItem } from "./app-routes";

export interface NavigationRoutesModel {
    title: string;
    order:number;
    routes: RouteItem[]
}

export const NavigationRoutes : NavigationRoutesModel[] = [
    { 
        order:1,
        title: "recipe",
        routes:[
            APP_ROUTES.RECIPES_SEARCH, 
            APP_ROUTES.RECIPES_CREATE,
        ]
    },{
        order:2,
        title:"meal planner",
        routes:[
            APP_ROUTES.PLANNER_WEEK,
            APP_ROUTES.PLANNER_DAY
        ]
    },{
        order:99,
        title:"settings",
        routes:[
            APP_ROUTES.MEALPLANNERSETTINGS,
        ]
    }
]