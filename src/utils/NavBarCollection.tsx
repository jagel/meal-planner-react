import { INavBarItems } from "../common/models/navbar.model";

export function NavBarRequest(){
    let navegation : INavBarItems[] = [];
  
    let dashboard : INavBarItems = {
        code:'home',
        name:'Home',
        route:'/',
        hasRoute:true,
        isCurrentPage:false,
        navBarChilds:[]
    };

    let meals:INavBarItems = {
        code:'recipe',
        name:'Recipe',
        hasRoute:false,
        route:'',
        isCurrentPage:false,    
        navBarChilds:[{
            code:'recipe.search',
            name:'Search',
            route:'/recipe/search',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            code:'recipe.create',
            name:'New Recipe',
            route:'/meals/create',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            code:'recipe.manager',
            name:'Manager',
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