import { ILanguageAvailable } from "../../common/models/lang.model";

export const LANG_DATA = {
    ES : 'es',
    EN : 'en',
}

const LanguageAvailable: ILanguageAvailable[] = [
    {code:"EN", languageCode : LANG_DATA.EN , name : "English"},
    {code:"ES", languageCode : LANG_DATA.ES , name : "Español"},
]

export  { LanguageAvailable };