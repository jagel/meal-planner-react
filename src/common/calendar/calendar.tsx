//https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

import './calendar.css'
import React, { useState } from 'react';
import { DaysOfWeek, GetMonthAndYearData } from './calendar.i18n';
import { CalendarDays, CalendarDaysProps } from './calendarDays';

let dateSelected = new Date();
let currentDateData = new Date();

export interface JGLCalendarProps {
  disableDays?:Array<number>

}

export default function JGLCalendar(props:JGLCalendarProps){
  const [dateData, setDateData] = useState({current:currentDateData, selected:dateSelected});

  const changeMonth = (numberOfMonths:number) => {
    currentDateData = new Date(dateData.current.setMonth(dateData.current.getMonth()+numberOfMonths));
    setDateData((prevState) =>  {return { current:currentDateData, selected: prevState.selected}  });
  }

  const onDayClick = (day:number) => {
    dateSelected = new Date(dateData.current.setDate(day));
    setDateData({...dateData, current:dateData.current, selected:dateSelected})
  }

  const calendarDaysProps : CalendarDaysProps = {current:dateData.current, selected: dateData.selected, onDayClick, disableDays:props.disableDays}
  return <div>
    <div className='calendar-month'>
      <div className='page' onClick={()=>changeMonth(-1)}><label>&#10094;</label></div>
      <div className='month-name'>
        <GetMonthAndYearData date={dateData.current} />
      </div>
      <div className='page' onClick={()=>changeMonth(1)}><label>&#10095;</label></div>
    </div>
    <DaysOfWeek disableDays={props.disableDays} />
    <CalendarDays {...calendarDaysProps} />
  </div>
}
