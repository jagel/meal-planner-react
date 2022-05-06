import { APP_ROUTES, RouteItem } from "./app-routes";

export interface NavigationRoutesModel {
    title: string;
    order:number;
    routes: RouteItem[]
}

export const NavigationRoutes : NavigationRoutesModel[] = [
    { 
        order:1,
        title: "Recipe",
        routes:[
            APP_ROUTES.RECIPES_SEARCH, 
            APP_ROUTES.RECIPES_CREATE,
        ]
    },
]