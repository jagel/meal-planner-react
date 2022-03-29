import { SetLanguageText } from "../../services/i18n/languageManager";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { ROUTESCODE } from "../../utils/data/navigation.collection";

export default function RecipeSearch(){
    const textValue = SetLanguageText;
    let routeCode = ROUTESCODE.RECIPE_SEARCH;

    return <div>
        <BreadcrumbRoutes currenRoute={routeCode} />

        <div>
            
        </div>
    </div>
}