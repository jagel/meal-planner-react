import * as React from 'react';
import { GoogleIconsInheritance, Icons} from '../../common/app/google.icon'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';

import { AppNavBarSearch } from './app-nav-bar-search';
import { AppNavBarButtons, AppNavBarButtonsProps } from './app-nav-bar-buttons';
import { AppNavMobileMenu, AppNavMobileMenuProps } from './app-nav-mobile-menu';
import { AppNavBarProfile, AppNavBarProfileProps } from './app-nav-bar-profile';

export interface AppNavBarProps {
  drawerWidth:number,
  handleDrawerToggle:()=>void
}

export default function AppNavBar(props:AppNavBarProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

  const menuId = 'primary-search-account-menu';

  const mobileMenuId = 'primary-search-account-menu-mobile';    

  const handleMobileMenuClose = () => { setMobileMoreAnchorEl(null); };

  const Spacer = <Box sx={{ flexGrow: 1 }} />
  const MenuButton = <IconButton
  size="large"
  edge="start"
  color="inherit"
  aria-label="open drawer"
  sx={{ mr: 2, display: { sm: 'none' } }}
  onClick={props.handleDrawerToggle}>
    <GoogleIconsInheritance iconName={Icons.menu} />
  </IconButton>

const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setMobileMoreAnchorEl(event.currentTarget);
};
const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
  handleMobileMenuClose();
};


const appNavBarButtonsProps : AppNavBarButtonsProps = { handleMobileMenuOpen, handleProfileMenuOpen, mobileMenuId, menuId }
const appNavMobileMenuProps : AppNavMobileMenuProps = { mobileMoreAnchorEl, handleProfileMenuOpen, handleMobileMenuClose, mobileMenuId}
const appNavBarProfileProps : AppNavBarProfileProps = { anchorEl, menuId, handleMenuClose}
  return (
      <AppBar 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${props.drawerWidth}px)` },
          ml: { sm: `${props.drawerWidth}px` },
        }}>
        <Toolbar>
          {MenuButton}
          <AppNavBarSearch />
          {Spacer}
          <AppNavBarButtons {...appNavBarButtonsProps} />
        </Toolbar>
        <AppNavMobileMenu  {...appNavMobileMenuProps} />
        <AppNavBarProfile {...appNavBarProfileProps} />
      </AppBar>
  );
}