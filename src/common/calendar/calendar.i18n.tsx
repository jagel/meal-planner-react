import { LANG_DATA } from "../../utils/data/languageAvailable";
import { useAppContext } from "../app/app-context";

interface DaysOfWeekProps {
  disableDays?:Array<number>
}

export const DaysOfWeek = (props: DaysOfWeekProps) => {
  let appContext = useAppContext();
  let daysOfWeek = [];

  switch(appContext.language){
      case LANG_DATA.ES:
          daysOfWeek = ['Do','Lu', 'Ma', 'Mi','Ju','Vi','Sa'];
      break;
  
      case LANG_DATA.EN:
          daysOfWeek = ['Su','Mo', 'Tu', 'We','Th','Fr','Sa'];
      break;

      default:
        console.warn(`Language: ${appContext.language} does not exist`);
        return <></>;
  }
  
  return  <ul className="calendar-weekdays">
    {daysOfWeek.map((day,index) => <li key={day} className={props.disableDays?.includes(index)? 'day-disabled': 'day-available'}>{day}</li>)}
  </ul>
}


interface GetMonthAndYearDataProps {
  date: Date;
}
export const  GetMonthAndYearData = (props : GetMonthAndYearDataProps) => {
  let appContext = useAppContext();
  let month : string[] = [];
  let monthNumber : number = props.date.getMonth();

  switch(appContext.language){
      case LANG_DATA.ES:
        month = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
      break;
      
      case LANG_DATA.EN:
        month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      break;
      default:
        console.warn(`Language: ${appContext.language} does not exist`);
      return <></>;
    }

    return   <label>
    {month[monthNumber]}<br/>
    {props.date.getFullYear()}
  </label>
}