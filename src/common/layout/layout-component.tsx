import React from "react"
import Container from "react-bootstrap/esm/Container"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navigation/nav-bar/nav-bar"
import { AuthComponent } from "../auth/auth-component"
import { useAuthContext } from "../auth/auth.context"
import './loading.css';

export const Layout = () => {
    let auth = useAuthContext();

return <AuthComponent>   
    <React.Suspense fallback={<>...</>}> 
     <div className={auth.userSession.isLoading ? "loading": ""} ></div>
    <NavBar/>
    <Container>
        <Outlet />
    </Container>
    </React.Suspense>
</AuthComponent>
};