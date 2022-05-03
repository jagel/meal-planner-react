import { useState } from 'react';
import { GoogleIconsInheritance, Icons } from '../../common/app/google.icon';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
} from 'react-router-dom';

export interface NavDrawerProps {
    drawerWidth:number,
    mobileOpen:boolean,
    handleDrawerToggle:()=>void
}

export default function NavDrawer(props: NavDrawerProps) {
    
  return (
    <Box
        component="nav"
        sx={{ width: { sm: props.drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
    >
         <Drawer
          variant="temporary"
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
        >
          <CustomizedList />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: props.drawerWidth },
          }}
          open
        >
          <CustomizedList />
        </Drawer>
    </Box>
  );
}
const data = [
  { icon: <GoogleIconsInheritance iconName={Icons.home} />, label: 'Authentication' },
  { icon: <GoogleIconsInheritance iconName={Icons.home} />, label: 'Database' },
  { icon: <GoogleIconsInheritance iconName={Icons.home} />, label: 'Storage' },
  { icon: <GoogleIconsInheritance iconName={Icons.home} />, label: 'Hosting' },
];

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

export function CustomizedList() {
  const [open, setOpen] = useState(true);
  return (
        <Paper elevation={0} sx={{ maxWidth: 256 }}>
          <FireNav component="nav" disablePadding>
            <ListItemButton sx={{height:64}} component={RouterLink} to="/">
              <ListItemIcon sx={{ fontSize: 20 }}>
                <img alt="" src="/src/img/logo.svg" width="30" height="30" className="d-inline-block align-top"/>{' '}
              </ListItemIcon>
              <ListItemText
                sx={{ my: 0 }}
                primary="Meal planner"
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: 'medium',
                  letterSpacing: 0,
                }}
              />
            </ListItemButton>
            <Divider />
            <Box
              sx={{
                bgcolor: open ? 'rgba(71, 98, 130, 0.9)' : null,
                pb: open ? 2 : 0,
              }}
            >
              <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                  px: 3,
                  pt: 2.5,
                  pb: open ? 0 : 2.5,
                  '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                }}
              >
                <ListItemText
                  primary="Build"
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 'medium',
                    lineHeight: '20px',
                    mb: '2px',
                  }}
                  secondary="Authentication, Firestore Database, Realtime Database, Storage, Hosting, Functions, and Machine Learning"
                  secondaryTypographyProps={{
                    noWrap: true,
                    fontSize: 12,
                    lineHeight: '16px',
                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                  }}
                  sx={{ my: 0 }}
                />
                  <GoogleIconsInheritance iconName={Icons.settings}/>
              </ListItemButton>
              {open &&
                data.map((item) => (
                  <ListItemButton
                    key={item.label}
                    sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                  >
                    <ListItemIcon sx={{ color: 'inherit' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                    />
                  </ListItemButton>
                ))}
            </Box>
          </FireNav>
        </Paper>
  );
}