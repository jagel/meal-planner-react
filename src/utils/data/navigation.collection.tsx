import { INavBarItems } from "../../common/models/navbar.model";

export function NavBarRequest(){
    let navegation : INavBarItems[] = [];
  
    let dashboard : INavBarItems = {
        code:ROUTESCODE.HOME,
        route:'/',
        hasRoute:true,
        isCurrentPage:false,
        navBarChilds:[]
    };

    let meals:INavBarItems = {
        code:'recipe',
        hasRoute:false,
        route:'',
        isCurrentPage:false,    
        navBarChilds:[{
            code: ROUTESCODE.RECIPE_SEARCH,
            route:'/recipes',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            code:ROUTESCODE.RECIPE_CREATE,
            route:'/recipes/create',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        }]
    };

    navegation.push(dashboard);
    navegation.push(meals);
    return navegation;
}

export const ROUTESCODE = {
    HOME : 'home',
    RECIPE : 'recipe',
    RECIPE_SEARCH : 'recipe.search',
    RECIPE_CREATE : 'recipe.create',
    RECIPE_UPDATE : 'recipe.update',
}