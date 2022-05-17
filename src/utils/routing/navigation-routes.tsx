import { Icons } from "../../common/app/google.icon";
import { APP_ROUTES, RouteItem } from "./app-routes";

export interface NavigationRoutesModel {
    title: string;
    order:number;
    icon?:string;
    routes: RouteItem[]
}

export const NavigationRoutes : NavigationRoutesModel[] = [
    { 
        order:1,
        title: "recipe",
        icon: Icons.restaurant,
        routes:[
            APP_ROUTES.RECIPES_SEARCH, 
            APP_ROUTES.RECIPES_CREATE,
        ]
    },{
        order:2,
        title:"agenda",
        icon: Icons.edit_calendar,
        routes:[
            APP_ROUTES.AGENDA_MEALPLANNER,
        ]
    },{
        order:99,
        title:"settings",
        icon: Icons.settings,
        routes:[
            APP_ROUTES.SETTINGS_MEALPLANNER,
        ]
    }
]