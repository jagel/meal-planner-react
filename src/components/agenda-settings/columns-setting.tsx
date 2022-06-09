import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import { SetLanguageText } from "../../services/i18n/languageManager";
import { CSListItem, CSListItemProps } from "./cs-listI-tem";
import { Planner_Colors } from "../../utils/data/jgl-styles";
import { IPoliciesComponent } from "../../common/models/policies.component";
import Avatar from "@mui/material/Avatar";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { Grid, ListItemButton } from "@mui/material";
import { useState } from "react";
import { CSListItemUpdate, CSListItemUpdateProps } from "./cs-list-item-update";
import { AgendaViewer } from "../agenda-viewer/agenda-viewer";
import { CustomColumnsModel } from "../../common/models/agenda.settings";

export interface ColumnsSettingsProps extends IPoliciesComponent {
    title:string;
    columns:Array<CustomColumnsModel>;
    updateColumns:(columns:Array<CustomColumnsModel>) => void
}

export const ColumnsSettings = (props: ColumnsSettingsProps) => {
    const indexEmpty = -1;
    const [indexOnUpdate, setIndexOnUpdate] = useState(indexEmpty);
    const textValue = SetLanguageText;


    const enableUpdate = (index:number) => setIndexOnUpdate(index);
    const cancelUpdate = () => setIndexOnUpdate(indexEmpty);
    const removeItem = (index:number) => {
        props.columns.slice(index,1)
        props.updateColumns(props.columns);
    }

    const titleColumnSettings =  <ListItem style={Planner_Colors.Header}>
        <ListItemText>{textValue(props.title)}</ListItemText>
    </ListItem>    

    const columnListItem = (columnItem:CustomColumnsModel, index: number) => {
        if(indexOnUpdate === index){
            let listItemUpdateProps : CSListItemUpdateProps = {columnItem, index, cancelUpdate}
            return <CSListItemUpdate {...listItemUpdateProps} />
        }else{
            let listItemProps : CSListItemProps = {columnItem, index, removeItem, enableUpdate};
            return <CSListItem key={index} {...listItemProps} /> 
        }
    }
        
    return <Grid container spacing={{xs:2, md:3}}>
    <Grid item md={6} sm={12} xs={12}>
       <List>
           {titleColumnSettings}
           {props.columns.map(columnListItem)}
           <NewColumn />
       </List>
   </Grid>

  <Grid item md={6} sm={12}  sx={{ display: { md:'inherit', xs: 'none'} }}  >
       <AgendaViewer />
  </Grid>

</Grid>
}



const NewColumn = () => {
    const textValue = SetLanguageText;
    return  <ListItemButton>
    <ListItemAvatar>
        <Avatar>
            <GoogleIconsInheritance iconName={Icons.add} />
        </Avatar>
    </ListItemAvatar>
   
    <ListItemText>{textValue('new')}</ListItemText>
</ListItemButton>
}