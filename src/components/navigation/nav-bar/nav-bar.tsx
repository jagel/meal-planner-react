
import './nav-bar.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/esm/Navbar';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import { NavBarRequest } from "../../../utils/data/navigation.collection";
import { NavLinkItem } from './nav-link';

export default function NavBar(){
  let navRequest = NavBarRequest();

  return <>
    <Navbar bg="light" variant="light" expand={false}>
      <Container fluid> 

        <Navbar.Toggle className='me-3' />
        <Navbar.Brand className='me-auto' href="#home">
          <img
            alt=""
            src="/src/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Meal planner
        </Navbar.Brand>

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3"> 
              {navRequest.map((navBarItem)=> <NavLinkItem key={navBarItem.code} linkItem={navBarItem} />)}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

      </Container>
    </Navbar>
</>
}

//function AuthStatus() {
  //     let auth = useAuth();
  //     let navigate = useNavigate();
    
  //     if (!auth.user) {
  //       return <p>You are not logged in.</p>;
  //     }
    
  //     return (
  //       <p>
  //         Welcome {auth.user}!{" "}
  //         <button
  //           onClick={() => {
  //             auth.signout(() => navigate("/"));
  //           }}
  //         >
  //           Sign out
  //         </button>
  //       </p>
  //     );
     //}
  
    //export default AuthStatus;