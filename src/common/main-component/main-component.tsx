import React from "react"
import Container from "react-bootstrap/esm/Container"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import NavBar from "../../components/navigation/nav-bar/nav-bar"
import { AuthComponent } from "../auth/auth-component"

export const MainComponent = () => {
    
    const lazyLoadPageContent = 
    <React.Suspense fallback={<>...</>}> 
        <NavBar/>
        <Container>
            <Outlet />
        </Container>
    </React.Suspense>;
    
    return (
        <AuthComponent>
            {lazyLoadPageContent}
        </AuthComponent>
    );
}

