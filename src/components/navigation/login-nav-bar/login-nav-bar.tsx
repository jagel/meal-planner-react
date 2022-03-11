import { Container, Nav, Navbar } from "react-bootstrap";
import LanguageSelector from "../language-component/language-selector";
import "./login-nav-bar.css";

function LoginNavBar(){
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/src/img/logo-white.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Meal Planner
            </Navbar.Brand>

            <Navbar className="justify-content-end">
                <LanguageSelector />
            </Navbar>
            
        </Container>
    </Navbar>  
    );
}

export default LoginNavBar