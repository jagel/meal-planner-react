import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import React from "react";
import { useState } from "react";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import JGLCalendar, { JGLCalendarProps } from "../../common/calendar/calendar";
import { DayOfWeekArray } from "../../common/calendar/calendar.data";
import { LayoutPage } from "../../common/layout/layout-page"

export const MealPlannerSettings = () => {
    const daysArray = DayOfWeekArray(true);
    const [disableDays, setDisableDays] = useState<Array<number>>([]);

    const toggleAvailableDays = (index:number) => {
        if(disableDays.includes(index)){
            let new_array = disableDays.filter(x=>x!==index);
            setDisableDays(new_array);
        }else{
            setDisableDays([...disableDays, index]);
        }
    }

    const jglCalendarProps : JGLCalendarProps = { disableDays }
    return  <LayoutPage>
        <Grid container spacing={{xs:2, md:3}}>
            <Grid item xs={12} sm={12} md={6} style={{width:'100%'}}>
            <List component="nav" aria-label="mailbox folders" >
            {daysArray.map((dayName,index) => {
                let mealPlannerListDayItemProps : MealPlannerListDayItemProps = {dayName, index, toggleAvailableDays, disableDays}
                return <MealPlannerListDayItem {...mealPlannerListDayItemProps} />
            })
            }
            </List>
                <div>
                    Available meals
                </div>
            </Grid>

           <Grid item xs={12} sm={12} md={6}>
               <JGLCalendar {...jglCalendarProps} />
           </Grid>
        </Grid>
  </LayoutPage>
}

export interface MealPlannerListDayItemProps {
    dayName:string,
    index:number,
    toggleAvailableDays:(index:number)=>void,
    disableDays:Array<number>
}
export const MealPlannerListDayItem = (props:MealPlannerListDayItemProps) => {
    const disabled = props.disableDays.includes(props.index);
    const theme : React.CSSProperties = !disabled ?
        {color:'#1976d2',backgroundColor:'white'} : {}

    return <>
    <ListItem button onClick={() => props.toggleAvailableDays(props.index)}>
        <ListItemAvatar>
            <Avatar style={theme}>
                <GoogleIconsInheritance iconName={disabled ? Icons.visibility_off : Icons.visibility}/>
            </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.dayName} />
    </ListItem>
    <Divider />
    </>
}