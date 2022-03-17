import React from "react"
import Container from "react-bootstrap/esm/Container"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navigation/nav-bar/nav-bar"
import { useAppContext } from "../app/app-context"
import { Authentication } from "../app/authentication"
import './loading.css';

export const Layout = () => {
    let appContext = useAppContext();

return <Authentication>
    <React.Suspense fallback={<>...</>}> 
     <div className={appContext.appManager.userValidated ? "loading": ""} ></div>
    <NavBar/>
    <Container>
        <Outlet />
    </Container>
    </React.Suspense>
</Authentication>
};