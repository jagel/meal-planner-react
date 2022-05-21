import List from "@mui/material/List"
import { useState } from "react";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { DayOfWeekArray } from "../../common/calendar/calendar.data";
import { ADDayListItem, ADDayListItemProps } from "./ad-day-list-item"
import { Grid, ListItem, ListItemText } from "@mui/material";
import JGLCalendar, { JGLCalendarProps } from "../../common/calendar/calendar";
import { Planner_Colors } from "../../utils/data/jgl-styles";

export interface AvailableDaysSettingsProps {
    disabledDays:Array<number>;
}

export const AvailableDaysSettings = (props:AvailableDaysSettingsProps) => {

    const [disableDays, setDisableDays] = useState<Array<number>>(props.disabledDays);
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
        <ListItem style={Planner_Colors.Header}>
            <ListItemText>{textValue('available days')}</ListItemText>
        </ListItem>
        {daysArray.map((dayName,index) => {
            let mealPlannerListDayItemProps : ADDayListItemProps = {dayName, index, toggleAvailableDays, disableDays:disableDays}
            return <ADDayListItem key={index} {...mealPlannerListDayItemProps} />
        })
        }
        </List>
    </Grid>

   <Grid item md={6} sm={12}  sx={{ display: { md:'inherit', xs: 'none'} }}  >
        <JGLCalendar {...jglCalendarProps} />
   </Grid>
</Grid>
    
    
   
}