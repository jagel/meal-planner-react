import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { GoogleIconsInheritance, Icons } from "../app/google.icon";

export interface DayListItemProps {
    dayName:string,
    index:number,
    toggleAvailableDays:(index:number)=>void,
    disableDays:Array<number>
}

export const DayListItem = (props:DayListItemProps) => {
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