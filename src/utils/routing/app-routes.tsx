interface RouteItem {
    path:string,
    code:string,
    title:string
}

const APP_ROUTES = {
    DASHBOARD:{
        path: "/",
        code: "",
        title: "dashboard"
    } as RouteItem,
    RECIPES:{
        path: "/recipes",
        code: "recipes",
        title: "search"
    } as RouteItem,
    RECIPES_CREATE:{
        path:"/recipes/create",
        code: "recipes.create",
        title: "Create Recipe"
    } as RouteItem,
    RECIPES_UPDATE:{
        path:"/recipes/update/:recipeId",
        code: "recipes.update",
        title: "Update Recipe"
    } as RouteItem,
    RECIPES_VIEW:{
        path:"/recipes/view/:recipeId",
        code: "recipes.view",
        title: "Update Recipe"
    } as RouteItem,
    LOGIN : {
        path:"/login"        
    } as RouteItem 
}

const EXTERNALROUTES = [
    APP_ROUTES.LOGIN.path
]

export { APP_ROUTES, EXTERNALROUTES };