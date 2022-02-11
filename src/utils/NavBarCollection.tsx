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
        code:'meals',
        name:'Meals',
        hasRoute:false,
        route:'',
        isCurrentPage:false,
        navBarChilds:[{
            code:'meals.search',
            name:'Search',
            route:'/meals/search',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            code:'meals.manager',
            name:'Manager',
            route:'/meals/manager',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        }]
    };

    navegation.push(dashboard);
    navegation.push(meals);
    return navegation;
}