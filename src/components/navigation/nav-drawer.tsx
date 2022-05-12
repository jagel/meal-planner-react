import { styled, SxProps, Theme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { NavigationItems } from './nav-items';

export interface NavDrawerProps {
    drawerWidth:number,
    mobileOpen:boolean,
    handleDrawerToggle:()=>void
}
export default function NavDrawer(props: NavDrawerProps) {
  const boxTheme : SxProps<Theme> = { width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } };

  return (
    <Box component="nav" sx={boxTheme}>
      <PhoneScreenDrawer {...props} />
      <LargeScreenDrawer {...props} />
    </Box>
  );
}

const PhoneScreenDrawer = (props: NavDrawerProps) => {
  const drawerTheme : SxProps<Theme> = { display: { xs: 'block', sm: 'none' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth }}
  return <Drawer variant="temporary" open={props.mobileOpen} onClose={props.handleDrawerToggle} ModalProps={{keepMounted: true}} sx={drawerTheme}>
    <NavigationItems />
  </Drawer>
}

const LargeScreenDrawer = (props: NavDrawerProps) => {
  const drawerTheme : SxProps<Theme> = {display: { xs: 'none', sm: 'block' }, '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth }}

  return <Drawer variant="permanent" sx={drawerTheme} open>
    <NavigationItems />
  </Drawer>
}





