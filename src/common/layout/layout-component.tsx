import React from "react"
import Container from "react-bootstrap/esm/Container"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navigation/nav-bar/nav-bar"
import { AuthComponent } from "../auth/auth-component"

export const Layout = () => (
<AuthComponent>
    <React.Suspense fallback={<>...</>}> 
    <NavBar/>
    <Container>
        <Outlet />
    </Container>
    </React.Suspense>
</AuthComponent>
);