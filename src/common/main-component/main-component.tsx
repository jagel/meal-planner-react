import Container from "react-bootstrap/esm/Container"
import { Outlet } from "react-router-dom"
import NavBar from "../../components/navigation/nav-bar/nav-bar"

export const MainComponent = () => {
    return <>
        <NavBar/>
        <Container>
            <Outlet />
        </Container>
    </>
}