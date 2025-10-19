import { FormControl, IconButton, Input, InputLabel, ListItemAvatar, ListItemButton, Menu,  MenuItem } from "@mui/material"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { useState } from "react"
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon"
import { CustomColumnsModel } from "../../common/models/agenda.settings"
import { SetLanguageText } from "../../services/i18n/languageManager"

export interface CSListItemUpdateProps{
    columnItem:CustomColumnsModel;
    index:number;
    cancelUpdate:()=>void;
}

export const CSListItemUpdate = (props: CSListItemUpdateProps) => {
    const textValue = SetLanguageText;
    const [columnValue, setColumnValue] = useState<string>(props.columnItem.name);

    const handleChange  = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColumnValue(event.target.value);
    }

    return <>
    <ListItem>
        <ListItemAvatar>
            <IconButton color="success" aria-label="delete">
                <GoogleIconsInheritance iconName={Icons.check} />
            </IconButton>
        </ListItemAvatar>
        <ListItemText>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="column">{textValue('new name')}</InputLabel>
                <Input
                    id="column"
                    value={columnValue}
                    onChange={handleChange}
                />
            </FormControl>
        </ListItemText>

        <IconButton edge="end" onClick={()=>props.cancelUpdate()} >
            <GoogleIconsInheritance iconName={Icons.undo} />
        </IconButton>
        
    </ListItem>
    <Divider />
    </>
}