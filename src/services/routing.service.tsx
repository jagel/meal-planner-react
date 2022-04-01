import { RouteItem } from "../utils/routing/app-routes";

export const RoutingServices = {
    generateRoute : (routeItem: RouteItem, params:any) : string =>{
        let route = routeItem.path;

        for (var prop in params??[]) route = route.replace(`:${prop}`,params[prop])
        
        if(route.includes(":")) throw `Parameters no defined correctly in route: ${routeItem.path}`;
        
        return route;
    }
}