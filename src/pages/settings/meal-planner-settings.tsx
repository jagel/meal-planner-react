import { Divider, Grid, Paper } from "@mui/material"
import { AvailableDaysSettings, AvailableDaysSettingsProps } from "../../components/agenda-settings/available-days-settings";
import { LayoutPage } from "../../common/layout/layout-page"
import { ColumnsSettings, ColumnsSettingsProps } from "../../components/agenda-settings/columns-setting";
import { Policies } from "../../common/models/policies.component";
import { useEffect, useState } from "react";
import { SX_Properties } from "../../utils/data/jgl-styles";
import { AgendaCodes, agendaSettingsEndpointsService } from "../../services/endpoints/agenda.settings.service";
import { useUpdateAgendaSettings } from "../../utils/custom-hooks/useUpdateAgendaSettings";
import { AgendaSettingsModel } from "../../common/models/agenda.settings";

export const MealPlannerSettings = () =>
{
    const afterUpdate = (agendaSettingsUdpdated:AgendaSettingsModel) => console.log('completed', agendaSettingsUdpdated)
    
    const [modelForm, errorObjects, events] = useUpdateAgendaSettings('MealPlanner', afterUpdate);

    const availableDaysSettingsProps: AvailableDaysSettingsProps = {
        disabledDays:modelForm.model.disabledDays.map(x=>Number(x))
    };

    const columnSettingsPolicies = new Policies({modified:true});
    const columnSettingsProps : ColumnsSettingsProps = { 
        updateColumns: events.updateCustomColumns,
        title:'meal planner columns', 
        columns: modelForm.model.customColumns, 
        policies: columnSettingsPolicies
    }

    return  <LayoutPage errorObject={errorObjects} skeletonLoading={modelForm.skeletonLoading}>
        <Grid container sx={SX_Properties.BoxMainContainer} >
        <Paper>
            <AvailableDaysSettings {...availableDaysSettingsProps} />
        </Paper>
        <Paper>
            <ColumnsSettings {...columnSettingsProps} />
        </Paper>
    </Grid>
    </LayoutPage>
}