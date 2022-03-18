interface RouteItem {
    path:string,
    code:string,
    description:string
}

const APP_ROUTES = {
    DASHBOARD:{
        path: "/",
        code: "home",
        description: "home"
    } as RouteItem,
    RECIPES:{
        path: "/recipes",
        code: "/recipes",
        description: "search"
    } as RouteItem,
    RECIPES_CREATE:{
        path:"/recipes/create"
    } as RouteItem,

    LOGIN : {
        path:"/login"
    } as RouteItem 
}

const EXTERNALROUTES = [
    APP_ROUTES.LOGIN.path
]

export { APP_ROUTES, EXTERNALROUTES };