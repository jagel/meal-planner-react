import { IconButton, Menu,  MenuItem } from "@mui/material"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { useState } from "react"
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon"
import { ColumnItemModel } from "../../common/models/agenda.settings"

export interface CSListItemProps {
    columnItem:ColumnItemModel;
    index:number;
    removeItem:(index:number)=>void;
    enableUpdate:(index:number)=>void;
}

export const CSListItem = (props: CSListItemProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose  = (method:(index:number)=>void) => {
        setAnchorEl(null);
        method(props.index);
    }

    return <>
    <ListItem>
        <ListItemText primary={props.columnItem.name}/>
        <IconButton edge="end" onClick={handleClick}>
            <GoogleIconsInheritance iconName={Icons.morevert} />
        </IconButton>
        <Menu open={open} anchorEl={anchorEl}>
            <MenuItem onClick={() => handleClose(props.enableUpdate)}>Update</MenuItem>
            <MenuItem  onClick={()=> handleClose(props.removeItem)}>Remove</MenuItem>
        </Menu>
    </ListItem>
    <Divider />
    </>
}