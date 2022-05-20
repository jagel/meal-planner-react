import { Paper } from "@mui/material"
import { AvailableDaysSettings } from "../../components/agenda-settings/available-days-settings";
import { LayoutPage } from "../../common/layout/layout-page"
import { ColumnsSettings, ColumnsSettingsProps } from "../../components/agenda-settings/columns-setting";
import { ColumnItemModel } from "../../common/models/agenda.settings";

export const MealPlannerSettings = () => {
    const columns : Array<ColumnItemModel> = [
        {columntItemId:1, name: 'Break Fast'},
        {columntItemId:2, name:'Lunch'},
        {columntItemId:3, name: 'Dinner'}
    ]
    const columnSettingsProps : ColumnsSettingsProps = { title:'meal planner columns', columns }

    return  <LayoutPage>
    <Paper>
        <AvailableDaysSettings/>
        <ColumnsSettings {...columnSettingsProps} />
    </Paper>
    </LayoutPage>
}