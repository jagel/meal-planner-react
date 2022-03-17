import { LanguageData as LangageDataEn } from "../../utils/languages/lang-en"
import { LanguageData as LangageDataEs } from "../../utils/languages/lang-es"
import { ILanguageModel } from "../../common/models/lang.model"
import { useAppContext } from "../../common/app/app-context";
import { LANG_DATA } from "../../utils/data/languageAvailable";

export const SetLanguageText = (text : string) => {
    let appContext = useAppContext();

    if(!appContext.language)
        return text;
        
    const findMessage = (data : ILanguageModel[]) => {
        let displayText = data.find(x=>x.code === text);
        if(displayText === undefined)
            console.warn(`Value: ${text} does not have internationalization`);
        return displayText?.value ?? text;
    }
    if(appContext.language === LANG_DATA.EN){
        return findMessage(LangageDataEn);
    }
    if(appContext.language === LANG_DATA.ES){
        return findMessage(LangageDataEs);
    }

    console.warn(`Language: ${appContext.language} does not exist`);
    return text;
}

