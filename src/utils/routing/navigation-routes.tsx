import { APP_ROUTES, RouteItem } from "./app-routes";

export interface NavigationRoutesModel {
    title: string;
    order:number;
    routes: RouteItem[]
}

export const NavigationRoutes : NavigationRoutesModel[] = [
    { 
        order:1,
        title:APP_ROUTES.RECIPES.title,
        routes: [APP_ROUTES.RECIPES, APP_ROUTES.RECIPES_CREATE]
    },
    { 
        order:2,
        title:APP_ROUTES.PLANNER.title,
        routes: [APP_ROUTES.PLANNER]
    },
]