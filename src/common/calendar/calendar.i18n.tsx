import { DayOfWeekArray, MonthArray } from "./calendar.data";

interface DaysOfWeekProps {
  disableDays?:Array<number>
}

export const DaysOfWeek = (props: DaysOfWeekProps) => {
  let daysOfWeek = DayOfWeekArray();
  
  return  <ul className="calendar-weekdays">
    {daysOfWeek.map((day,index) => <li key={day} className={props.disableDays?.includes(index)? 'day-disabled': 'day-available'}>{day}</li>)}
  </ul>
}


interface GetMonthAndYearDataProps {
  date: Date;
}
export const  GetMonthAndYearData = (props : GetMonthAndYearDataProps) => {
  let month : string[] = MonthArray();
  let monthNumber : number = props.date.getMonth();

  return <label>
  {month[monthNumber]}<br/>
  {props.date.getFullYear()}
</label>
}