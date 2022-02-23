import { INavBarItems } from "../common/models/navbar.model";

export function NavBarRequest(){
    let navegation : INavBarItems[] = [];
  
    let dashboard : INavBarItems = {
        code:'home',
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
            code:'recipe.search',
            route:'/recipe/search',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            code:'recipe.create',
            route:'/recipe/create',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            code:'recipe.manager',
            route:'/recipe/manager',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        }]
    };

    navegation.push(dashboard);
    navegation.push(meals);
    return navegation;
}