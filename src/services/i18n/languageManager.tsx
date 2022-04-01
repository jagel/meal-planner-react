import { LanguageData as LangageDataEn } from "../../utils/languages/lang-en"
import { LanguageData as LangageDataEs } from "../../utils/languages/lang-es"
import { ILanguageModel } from "../../common/models/lang.model"
import { useAppContext } from "../../common/app/app-context";
import { LANG_DATA } from "../../utils/data/languageAvailable";

export const SetLanguageText = (text : string, params? : string[]) : string => {
    let appContext = useAppContext();

    let languageSelection : ILanguageModel[];

    switch(appContext.language){
        case LANG_DATA.EN:
            languageSelection = LangageDataEn;
        break;
        case LANG_DATA.ES:
            languageSelection = LangageDataEs;
        break;
        default:
            console.warn(`Language: ${appContext.language} does not exist`);
            return text;
    }

    let displayText = languageSelection.find(x=>x.code === text);

    if(displayText === undefined) console.warn(`Value: ${text} does not have translation for langauge ${appContext.language}`);
    
    text = interpolateText(displayText?.value??text, params);
    return text;
}

export const interpolateText = (text: string, params?: string[]) =>{
    if(params !== undefined){
        params.forEach( (param,index) => {
            text = text.replace(`{${index}}`,param);
        });
    }
    return text;
}

