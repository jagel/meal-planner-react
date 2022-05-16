import { Icons } from "../../common/app/google.icon";
import { Login } from "../../pages/auth/login";
import Dashboard from "../../pages/dashboard/dashboard";
import RecipeCreate from "../../pages/recipes/recipe.create";
import RecipeSearch from "../../pages/recipes/recipe.search";
import RecipeUpdate from "../../pages/recipes/recipe.update";
import RecipeView from "../../pages/recipes/recipe.view";
import { MealPlannerSettings } from "../../pages/settings/meal-planner-settings";

export interface RouteItem {
    path:string,
    code:string,
    title:string,
    icon?:string,
    node?: React.ReactNode
}

const APP_ROUTES : { [key:string] : RouteItem} = {
    HOME:{
        path: "/",
        code: "",
        title: "home",
        node: <Dashboard />
    },
    RECIPES:{
        path: "/recipes",
        code: ".recipes",
        title: "recipes",
        node: <RecipeSearch/>
    },
    RECIPES_SEARCH:{
        path: "/recipes",
        code: ".recipes",
        title: "search recipe",
        icon: Icons.search
    },
    RECIPES_CREATE:{
        path:"/recipes/create",
        code: ".recipes.create",
        title: "Create Recipe",
        icon: Icons.add_circle,
        node: <RecipeCreate />
    },
    RECIPES_UPDATE:{
        path:"/recipes/update/:recipeId",
        code: ".recipes.update",
        title: "Update Recipe",
        node: <RecipeUpdate />
    },
    RECIPES_VIEW:{
        path:"/recipes/view/:recipeId",
        code: ".recipes.view",
        title: "View Recipe",
        node: <RecipeView />
    },
    AGENDA_MEALPLANNER:{
        path:"/agenda/meal-planner",
        code: ".agenda.meal-planner",
        title: "meal planner",
        icon:Icons.restaurant,
        node: <RecipeView />
    },
    LOGIN : {
        path:"/login",
        code:"login",
        title:"login",
        node:<Login />
    },
    SETTINGS:{
        path:"/settings",
        code:".settings",
        title:"settings"
    },
    SETTINGS_MEALPLANNER:{
        path:"/settings/meal-planner",
        code:".settings",
        title:"meal planner",
        node:<MealPlannerSettings />,
        icon:Icons.restaurant
    }
}

const EXTERNALROUTES = [
    APP_ROUTES.LOGIN.path
]

const RoutesList : RouteItem[] = Object.keys(APP_ROUTES).map(key => APP_ROUTES[key])

export { APP_ROUTES, EXTERNALROUTES, RoutesList };