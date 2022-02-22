import { LocalStorageService, LOC_SOTRAGE } from "../localStorage/localStorage"
import { LanguageData as LangageDataEn } from "./languages/lang-en"
import { LanguageData as LangageDataEs } from "./languages/lang-es"
import { ILanguageModel } from "./languages/lang-model"

export const SetLocalizationText = (text : string) => {

    const findMessage = (data : ILanguageModel[]) => {
        let displayText = data.find(x=>x.code == text);
        if(displayText == undefined)
            console.warn(`Value: ${text} does not have internationalization`);
        return displayText?.value ?? text;
    }
    let lang = LocalStorageService.getLocalStorage(LOC_SOTRAGE.LANGUAGE)??LANG_DATA.EN;
    
    if(lang == LANG_DATA.EN){
        return findMessage(LangageDataEn);
    }
    if(lang == LANG_DATA.ES){
        return findMessage(LangageDataEs);
    }

    console.warn(`Language: ${lang} does not exist`);
    return text;
}

export const LANG_DATA = {
    ES : 'es',
    EN : 'en',
}