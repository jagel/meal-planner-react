import { INavBarItems } from "../common/models/navbar.model";

export function NavBarRequest(){
    let navegation : INavBarItems[] = [];
  
    let dashboard : INavBarItems = {
        name:'Home',
        route:'/',
        hasRoute:true,
        isCurrentPage:false,
        navBarChilds:[]
    };

    let meals:INavBarItems = {
        name:'Meals',
        hasRoute:false,
        isCurrentPage:false,
        navBarChilds:[{
            name:'Search',
            route:'/meals/search',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        },{
            name:'Search',
            route:'/meals/manager',
            hasRoute:true,
            isCurrentPage:false,
            navBarChilds:[]
        }]
    };

    navegation.push(dashboard);
    navegation.push(meals);
    // INavBarItems[] 
   
    return navegation;
}