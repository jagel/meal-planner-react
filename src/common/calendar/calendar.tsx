import './calendar.css'
import React, { useState } from 'react';

let dateSelected = new Date();
let dayActive : number = 0;

export default function JGLCalendar(props:any){
  console.log("loading",dayActive)

  let lang = props.lang??'es';

  let daysOfWeek = DayOfWeedkData(lang)
  let currentMonthName = GetMonthData(dateSelected.getMonth() ,lang);
  
  let firstDayMonth = new Date(dateSelected.getFullYear(),dateSelected.getMonth(),1);
  let emptyItems = firstDayMonth.getDay();

  let lastDayMonth = new Date(dateSelected.getFullYear(),(dateSelected.getMonth()+1),1);
  lastDayMonth.setDate(lastDayMonth.getDate()-1);
  let lastDay = lastDayMonth.getDate();
  let lastEmptyItems = 6 - lastDayMonth.getDay();

  const [currentDate, setCurrentDate] = useState({date:dateSelected, year:dateSelected.getFullYear(), month:currentMonthName, day:dateSelected.getDate()});

  const changeMonth = (numberOfMonths:number) => {
    dateSelected = new Date(dateSelected.setMonth(dateSelected.getMonth()+numberOfMonths));
    setCurrentDate({...currentDate, date:dateSelected, year:dateSelected.getFullYear(), month:currentMonthName,day:dateSelected.getDate()})
  }

  const changeDay = (day:number) => {
    dateSelected = new Date(dateSelected.setDate(day));
    setCurrentDate({...currentDate, date:dateSelected, year:dateSelected.getFullYear(), month:currentMonthName,day:dateSelected.getDate()})
  }

  const getClassNamme = (day : number)=>{
    return (day+1)==currentDate.day? 'active':''
  }

    return <>
      <div className="calendar-month">
        <div className='page' onClick={()=>changeMonth(-1)}><label>&#10094;</label></div>
        <div className='month-name'>
          <label>
            {currentDate.month}<br/>
            {currentDate.year}
          </label>
        </div>
        <div className='page' onClick={()=>changeMonth(1)}><label>&#10095;</label></div>
      </div>

      <ul className="calendar-weekdays">
        {daysOfWeek.map((day) => <li key={day}>{day}</li>)}
      </ul>
        <ul className="calendar-days">
          {populateEmptyListItems(emptyItems)}
          {Array.apply(0, Array(lastDay)).map(function (x, i) {
          return <li key={i} className={getClassNamme(i)} onClick={()=>changeDay(i+1)}>{i+1}</li>;
          })}
          {populateEmptyListItems(lastEmptyItems)}
      </ul>
    </>
}

const populateEmptyListItems = (numberOfItems : number) => Array.apply(0, Array(numberOfItems)).map((x:any, i:number) => <li key={i}></li>);


function DayOfWeedkData(lang:string){
  let daysOfWeek: string[] = [];
  switch(lang){
    case 'es':
      daysOfWeek = ['Do','Lu', 'Ma', 'Mi','Ju','Vi','Sa'];
    break
    
    default:
      daysOfWeek = ['Su','Mo', 'Tu', 'We','Th','Fr','Sa'];
    break
  }
  return daysOfWeek;
}

function GetMonthData(numberMonth:number, lang:string){
  let month = [];

  switch(lang){
    case 'es':
      month = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    break
    
    default:
      month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    break
  }

    return month[numberMonth];
}