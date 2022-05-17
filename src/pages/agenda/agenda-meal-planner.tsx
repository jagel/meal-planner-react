import Grid from "@mui/material/Grid"
import { LayoutPage } from "../../common/layout/layout-page"

export const AgendaMealPlanner = () => {
    return  <LayoutPage>
        <Grid container spacing={{xs:2, md:3}}>
            <Grid item xs={12} sm={12} md={6} style={{width:'100%'}}>Viewer</Grid>
            <Grid item xs={12} sm={12} md={6} style={{width:'100%'}}>Details</Grid>
        </Grid>
    </LayoutPage>
}