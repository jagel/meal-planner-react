import { LanguageData as LangageDataEn } from "../../utils/languages/lang-en"
import { LanguageData as LangageDataEs } from "../../utils/languages/lang-es"
import { ILanguageModel } from "../../common/models/lang.model"
import { useAuthContext } from "../../common/auth/auth.context"

export const SetLanguageText = (text : string) => {
    let auth = useAuthContext();

    if(!auth.userSession.language)
        return text;
        
    const findMessage = (data : ILanguageModel[]) => {
        let displayText = data.find(x=>x.code === text);
        if(displayText === undefined)
            console.warn(`Value: ${text} does not have internationalization`);
        return displayText?.value ?? text;
    }
    if(auth.userSession.language === LANG_DATA.EN){
        return findMessage(LangageDataEn);
    }
    if(auth.userSession.language === LANG_DATA.ES){
        return findMessage(LangageDataEs);
    }

    console.warn(`Language: ${auth.userSession.language} does not exist`);
    return text;
}

export const LANG_DATA = {
    ES : 'es',
    EN : 'en',
}