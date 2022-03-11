import { ILanguageAvailable } from "../../common/models/lang.model";
import { LANG_DATA } from "./languageManager";

const LanguageAvailable: ILanguageAvailable[] = [
    {code:"EN", datacode : LANG_DATA.EN ,name : "English"},
    {code:"ES", datacode : LANG_DATA.ES ,name : "Español"},
]

export  { LanguageAvailable };