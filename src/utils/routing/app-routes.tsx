export interface RouteItem {
    path:string,
    code:string,
    title:string
}

const APP_ROUTES : { [key:string] : RouteItem} = {
    HOME:{
        path: "/",
        code: "",
        title: "home"
    },
    RECIPES:{
        path: "/recipes",
        code: ".recipes",
        title: "recipes"
    },
    RECIPES_CREATE:{
        path:"/recipes/create",
        code: ".recipes.create",
        title: "Create Recipe"
    },
    RECIPES_UPDATE:{
        path:"/recipes/update/:recipeId",
        code: ".recipes.update",
        title: "Update Recipe"
    },
    RECIPES_VIEW:{
        path:"/recipes/view/:recipeId",
        code: ".recipes.view",
        title: "Update Recipe"
    },
    LOGIN : {
        path:"/login",
        code:"login",
        title:"login"
    } 
}

const EXTERNALROUTES = [
    APP_ROUTES.LOGIN.path
]

const RoutesList : RouteItem[] = Object.keys(APP_ROUTES).map(key => APP_ROUTES[key])

export { APP_ROUTES, EXTERNALROUTES, RoutesList };