//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

import './calendar.css'
import React, { useState } from 'react';
import { GetMonthAndYearData, I18nSetDaysOfWeek } from './calendar.i18n';

let dateSelected = new Date();
let currentDateData = new Date();

export default function JGLCalendar(props:any){
  let lang = props.lang??'es';
  const [dateData, setDateData] = useState({current:currentDateData, selected:dateSelected});

  const changeMonth = (numberOfMonths:number) => {
    currentDateData = new Date(dateData.current.setMonth(dateData.current.getMonth()+numberOfMonths));
    setDateData((prevState) =>  {return { current:currentDateData, selected: prevState.selected}  });
  }

  const onDayClick = (day:number) => {
    dateSelected = new Date(dateData.current.setDate(day));
    setDateData({...dateData, current:dateData.current, selected:dateSelected})
  }

  return <div>
    <div className='calendar-month'>
      <div className='page' onClick={()=>changeMonth(-1)}><label>&#10094;</label></div>
      <div className='month-name'>
        <GetMonthAndYearData lang={lang} date={dateData.current} />
      </div>
      <div className='page' onClick={()=>changeMonth(1)}><label>&#10095;</label></div>
    </div>
    <I18nSetDaysOfWeek lang={lang} />
    <SetCalendarDays current={dateData.current} selected={dateData.selected} onDayClick={onDayClick}  />
  </div>
}


const SetCalendarDays = (props: {current:Date, selected:Date, onDayClick(day:number): void}) => {
  const getDateSplit = (date : Date) : {day:number, month: number, year: number} => {return {day:date.getDate(),month:date.getMonth(), year:date.getFullYear()}};
  let currentDate = getDateSplit(props.current);
  let selectedDate = getDateSplit(props.selected);

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
  
  const getClassNamme = (day : number)=>{
    day++;
    let className = '';
    if(currentDate.month === selectedDate.month && currentDate.year === selectedDate.year && selectedDate.day === day)
      className = 'active';

    return className;
  }

  let firstEmptyItems = getFisrtEmpySpaces();
  let endMonthData = getLastEmpySpacesAndLastDate();

  const populateEmptyListItems = (numberOfItems : number) => Array.apply(0, Array(numberOfItems)).map((x:any, i:number) => <li key={i}></li>);

  return <ul className='calendar-days'>
    {populateEmptyListItems(firstEmptyItems)}
    {Array.apply(0, Array(endMonthData.lastDay)).map(function (x, i) {
      return <li key={i} className={getClassNamme(i)} onClick={()=>props.onDayClick(i+1)}>{i+1}</li>;
    })}
    {populateEmptyListItems(endMonthData.lastEmptyItems)}
  </ul>
}

