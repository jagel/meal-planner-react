import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React, { useState } from "react"
import { Outlet } from "react-router-dom"
import { AppFooter } from "../../components/navigation/app-footer";
import AppNavBar, { AppNavBarProps } from "../../components/navigation/app-nav-bar"
import NavDrawer, { NavDrawerProps } from "../../components/navigation/nav-drawer";
import { Authentication } from "../app/authentication"

import './loading.css';
const drawerWidth = 240;

export const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const appNavBarProps : AppNavBarProps = { drawerWidth, handleDrawerToggle}
  const navDrawerProps : NavDrawerProps = { drawerWidth, mobileOpen, handleDrawerToggle}
return (
    <Authentication>
        <React.Suspense fallback={<>...</>}>
            <Box sx={{ display: 'flex' }}>
                <AppNavBar {...appNavBarProps}/>
                <NavDrawer {...navDrawerProps} />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                  <Toolbar />
                  <Outlet />
                  <AppFooter />
                </Box>
            </Box>            
        </React.Suspense>
    </Authentication>
    );
};