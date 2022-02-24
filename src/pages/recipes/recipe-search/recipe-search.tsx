import { SetLocalizationText } from "../../../utils/i18n/languageManager";
import { PageRoute } from "../../../components/navigation/page-routes/page-route";
import { ROUTESCODE } from "../../../utils/NavBarCollection";

export default function RecipeSearch(){
    const textValue = SetLocalizationText;
    let routeCode = ROUTESCODE.RECIPE_SEARCH;

    return <div>
        <PageRoute currenRoute={routeCode} />

        <div>
            
        </div>
    </div>
}