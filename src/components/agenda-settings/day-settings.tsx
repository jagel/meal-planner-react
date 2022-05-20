import List from "@mui/material/List"
import React from "react";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { DayOfWeekArray } from "../calendar/calendar.data";
import { DayListItem, DayListItemProps } from "./day-list-item"
import { ListItem, ListItemText } from "@mui/material";

export interface DaySettingsProps {
    disableDays:Array<number>,
    setDisableDays: React.Dispatch<React.SetStateAction<Array<number>>>
}

export const DaySettings = (props:DaySettingsProps) => {
    const daysArray = DayOfWeekArray(true);

    const textValue = SetLanguageText;

    const toggleAvailableDays = (index:number) => {
        if(props.disableDays.includes(index)){
            let new_array = props.disableDays.filter(x=>x!==index);
            props.setDisableDays(new_array);
        }else{
            props.setDisableDays([...props.disableDays, index]);
        }
    }

    return <List component="nav" aria-label="mailbox folders" >
        <ListItem style={{textAlign:'center', backgroundColor: '#237a99', color: 'white'}}>
            <ListItemText>{textValue('available days')}</ListItemText>
        </ListItem>
        {daysArray.map((dayName,index) => {
            let mealPlannerListDayItemProps : DayListItemProps = {dayName, index, toggleAvailableDays, disableDays:props.disableDays}
            return <DayListItem key={index} {...mealPlannerListDayItemProps} />
        })
    }
    </List>
}