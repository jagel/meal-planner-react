import List from "@mui/material/List"
import React, { useState } from "react";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { DayOfWeekArray } from "../../common/calendar/calendar.data";
import { DayListItem, DayListItemProps } from "./day-list-item"
import { Grid, ListItem, ListItemText } from "@mui/material";
import JGLCalendar, { JGLCalendarProps } from "../../common/calendar/calendar";

export const AvailableDaysSettings = () => {
    const [disableDays, setDisableDays] = useState<Array<number>>([]);
    const jglCalendarProps : JGLCalendarProps = { disableDays };

    const daysArray = DayOfWeekArray(true);

    const textValue = SetLanguageText;

    const toggleAvailableDays = (index:number) => {
        if(disableDays.includes(index)){
            let new_array = disableDays.filter(x=>x!==index);
            setDisableDays(new_array);
        }else{
            setDisableDays([...disableDays, index]);
        }
    }

    return  <Grid container spacing={{xs:2, md:3}}>
    <Grid item md={6} sm={12} xs={12}>
        <List component="nav" aria-label="mailbox folders" >
        <ListItem style={{textAlign:'center', backgroundColor: '#237a99', color: 'white'}}>
            <ListItemText>{textValue('available days')}</ListItemText>
        </ListItem>
        {daysArray.map((dayName,index) => {
            let mealPlannerListDayItemProps : DayListItemProps = {dayName, index, toggleAvailableDays, disableDays:disableDays}
            return <DayListItem key={index} {...mealPlannerListDayItemProps} />
        })
        }
        </List>
    </Grid>

   <Grid item md={6} sm={12}  sx={{ display: { md:'inherit', xs: 'none'} }}  >
        <JGLCalendar {...jglCalendarProps} />
   </Grid>
</Grid>
    
    
   
}