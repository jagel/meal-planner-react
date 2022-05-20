import Avatar from "@mui/material/Avatar"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon"
import { ColumnItemModel } from "../../common/models/agenda.settings"

export interface ColumnsListItemsSettingsProps {
    index:number,
    columnItem:ColumnItemModel
}

export const ColumnsListItemsSettings = (props: ColumnsListItemsSettingsProps) => {
    return <>
    <ListItem key={props.index}>
        <ListItemAvatar>
        <Avatar>
            <GoogleIconsInheritance iconName={Icons.add_circle} />
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary={props.columnItem.name}/>
    </ListItem>
    <Divider />
    </>
}