import React from "react"
import { Outlet } from "react-router-dom"
import AppNavBar from "../../components/navigation/app-nav-bar"
import { Authentication } from "../app/authentication"
import './loading.css';

export const Layout = () => {
return (
    <Authentication>
        <React.Suspense fallback={<>...</>}>
            <AppNavBar/>
            <Outlet />
        </React.Suspense>
    </Authentication>
    );
};