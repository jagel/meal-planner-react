import { LANG_DATA } from "../../utils/data/languageAvailable";
import { useAppContext } from "../app/app-context";

export const DayOfWeekArray = (longText:boolean=false) => {
    let appContext = useAppContext();
    let daysOfWeek : Array<string> = [];
    switch(appContext.language){
        case LANG_DATA.ES:
            daysOfWeek = longText ? 
            ['Domingo','Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado'] :
            ['Do','Lu', 'Ma', 'Mi','Ju','Vi','Sa'] ;
        break;
    
        case LANG_DATA.EN:
            daysOfWeek = longText ?
            ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] :
            ['Su','Mo', 'Tu', 'We','Th','Fr','Sa'];
        break;
  
        default:
          console.warn(`Language: ${appContext.language} does not exist`);
    }
    return daysOfWeek;
}

export const MonthArray = () => {
    let appContext = useAppContext();
    let month : Array<string> = [];
    switch(appContext.language){
        case LANG_DATA.ES:
            month = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        break;
    
        case LANG_DATA.EN:
            month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        break;
  
        default:
          console.warn(`Language: ${appContext.language} does not exist`);
    }
    return month;
}