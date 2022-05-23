import { Divider, Grid, Paper } from "@mui/material"
import { AvailableDaysSettings, AvailableDaysSettingsProps } from "../../components/agenda-settings/available-days-settings";
import { LayoutPage } from "../../common/layout/layout-page"
import { ColumnsSettings, ColumnsSettingsProps } from "../../components/agenda-settings/columns-setting";
import { ColumnItemModel } from "../../common/models/agenda.settings";
import { Policies } from "../../common/models/policies.component";
import { useEffect, useState } from "react";
import { ISettingsModel, SettingsModel } from "../../common/models/settings.model";
import { FormModel } from "../../common/models/form-model";
import { useFormModel } from "../../utils/custom-hooks/FormModelHook";
import { SX_Properties } from "../../utils/data/jgl-styles";

export const MealPlannerSettings = () => {
    
    const [model, setModelState, formEvents] = useFormModel<SettingsModel>({columnItems:[{columntItemId:1, name:'demo'},{columntItemId:2,name:'second'}], 
    disabledDays:[{catalogId:1,name:'mo',code:'1'}, {catalogId:2,name:'sa',code:'6'}] });

   
    useEffect(()=>{
        console.log('ho');
    //    setModelState({columnItems:[{columntItemId:1, name:'demo'},{columntItemId:2,name:'second'}], 
        //disabledDays:[{catalogId:1,name:'mo',code:'1'}, {catalogId:2,name:'sa',code:'6'}] })
    },[])

    const updateColumns = ( columnItems: Array<ColumnItemModel>) =>{
        let _settingModel : ISettingsModel = {...model, columnItems: columnItems};
        setModelState(_settingModel);
    }

    const availableDaysSettingsProps: AvailableDaysSettingsProps = {disabledDays:model.disabledDays.map(x=>Number(x.code))};
    const columnSettingsPolicies = new Policies({modified:true});
    const columnSettingsProps : ColumnsSettingsProps = { 
        updateColumns,
        title:'meal planner columns', 
        columns: model.columnItems, 
        policies: columnSettingsPolicies
    }

    return  <LayoutPage>
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