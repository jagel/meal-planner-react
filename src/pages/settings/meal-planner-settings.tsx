import { Grid } from "@mui/material"
import { useState } from "react";
import JGLCalendar, { JGLCalendarProps } from "../../common/calendar/calendar";
import { DaySettings, DaySettingsProps } from "../../common/agenda-settings/day-settings";
import { LayoutPage } from "../../common/layout/layout-page"
import { ColumnsSettings, ColumnsSettingsProps } from "../../common/agenda-settings/columns-setting";
import { ColumnItemModel } from "../../common/models/agenda.settings";

export const MealPlannerSettings = () => {
    const [disableDays, setDisableDays] = useState<Array<number>>([]);

    const jglCalendarProps : JGLCalendarProps = { disableDays };
    const daySettingsProps : DaySettingsProps = {disableDays, setDisableDays };
    const columns : Array<ColumnItemModel> = [
        {columntItemId:1, name: 'Break Fast'},
        {columntItemId:2, name:'Lunch'},
        {columntItemId:3, name: 'Dinner'}
    ]
    const columnSettingsProps : ColumnsSettingsProps = { title:'meal planner columns', columns }

    return  <LayoutPage>
        <Grid container spacing={{xs:2, md:3}}>
            <Grid item xs={12} sm={12} md={6} style={{width:'100%'}}>
                <DaySettings {...daySettingsProps} />
                <ColumnsSettings {...columnSettingsProps} />
            </Grid>

           <Grid item xs={12} sm={12} md={6}>
                <JGLCalendar {...jglCalendarProps} />
           </Grid>
        </Grid>
  </LayoutPage>
}