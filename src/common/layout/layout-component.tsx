import React from "react"
import Container from "react-bootstrap/esm/Container"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navigation/nav-bar/nav-bar"
import { Authentication } from "../app/authentication"
import './loading.css';

export const Layout = () => {
return <Authentication>
    <React.Suspense fallback={<>...</>}> 
    <NavBar/>
    <Container>
        <Outlet />
    </Container>
    </React.Suspense>
</Authentication>
};