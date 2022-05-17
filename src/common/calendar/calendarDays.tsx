
export interface CalendarDaysProps {
    current:Date, 
    selected:Date, 
    onDayClick(day:number): void,
    disableDays?:Array<number>
}

export const CalendarDays = (props: CalendarDaysProps) => {
    const getDateSplit = (date : Date) : {day:number, month: number, year: number} => {return {day:date.getDate(),month:date.getMonth(), year:date.getFullYear()}};
    
    let currentDate = getDateSplit(props.current);
    let selectedDate = getDateSplit(props.selected);
    let dayofWeek = 0;
  
    const getFisrtEmpySpaces = () : number => {
      let firstDayMonth = new Date(currentDate.year , currentDate.month , 1);
      let emptyItems = firstDayMonth.getDay();
      return emptyItems;
    }
  
    const getLastEmpySpacesAndLastDate = () : {lastDay : number, lastEmptyItems:number } => {
      let lastDayMonth = new Date(currentDate.year , (currentDate.month + 1) , 1 );
      lastDayMonth.setDate(lastDayMonth.getDate()-1);
      let lastEmptyDays = 6 - lastDayMonth.getDay();
      let lastDay = lastDayMonth.getDate();
      return {lastDay : lastDay, lastEmptyItems: lastEmptyDays };
    }
    
    const firstEmptyItems = getFisrtEmpySpaces();
    const endMonthData = getLastEmpySpacesAndLastDate();
    dayofWeek = firstEmptyItems-1;

    const populateEmptyListItems = (numberOfItems : number) => Array.apply(0, Array(numberOfItems)).map((x:any, i:number) => <li key={i}></li>);

    const PrintDayItem = (x:any, index:number) => {        
        let day=index+1;
        dayofWeek++;
        let className = '';
        let disabled =props.disableDays?.includes(dayofWeek);

        if(currentDate.month === selectedDate.month && currentDate.year === selectedDate.year && selectedDate.day === day) className = 'active';
        if(dayofWeek == 6) dayofWeek=-1;
            
        className += disabled ? ' day-disabled' : ' day';
        return disabled ? <li key={index} className={className}>{index+1}</li> :
            <li key={index} className={className} onClick={()=>props.onDayClick(index+1)}>{index+1}</li>
    }
  
    return <ul className='calendar-days'>
      {populateEmptyListItems(firstEmptyItems)}
      {Array.apply(0, Array(endMonthData.lastDay)).map(PrintDayItem)}
      {populateEmptyListItems(endMonthData.lastEmptyItems)}
    </ul>
  }
  