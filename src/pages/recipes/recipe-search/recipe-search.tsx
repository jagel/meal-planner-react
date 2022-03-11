import { SetLanguageText } from "../../../services/i18n/languageManager";
import { PageRoute } from "../../../components/navigation/page-routes/page-route";
import { ROUTESCODE } from "../../../utils/data/navigation.collection";

export default function RecipeSearch(){
    const textValue = SetLanguageText;
    let routeCode = ROUTESCODE.RECIPE_SEARCH;

    return <div>
        <PageRoute currenRoute={routeCode} />

        <div>
            
        </div>
    </div>
}