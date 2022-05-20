import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { SetLanguageText } from "../../services/i18n/languageManager";
import { ColumnItemModel } from "../../common/models/agenda.settings";
import { ColumnsListItemsSettings, ColumnsListItemsSettingsProps } from "./column-listItems-settings";

export interface ColumnsSettingsProps {
    title:string,
    columns:Array<ColumnItemModel>
}

export const ColumnsSettings = (props: ColumnsSettingsProps) => {
    const textValue = SetLanguageText;

    return <List>
        <ListItem style={{textAlign:'center', backgroundColor: '#237a99', color: 'white'}}>
            <ListItemText>{textValue(props.title)}</ListItemText>
        </ListItem>
        {props.columns.map((columnItem,index)=> {
            let columnsListItemsSettingsProps : ColumnsListItemsSettingsProps = { index:index, columnItem}
            return <ColumnsListItemsSettings key={index} {...columnsListItemsSettingsProps} /> 
        })}
    </List>
}