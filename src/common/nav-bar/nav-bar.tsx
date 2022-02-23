
import './nav-bar.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/esm/Navbar';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import { NavBarRequest } from "../../utils/NavBarCollection";
import { INavBarItems } from "../models/navbar.model";
import { SetLocalizationText } from '../../utils/i18n/languageManager';

export default function NavBar(){
    let navRequest = NavBarRequest();
    let localization = SetLocalizationText;

    function PrintLink(data:INavBarItems) {
      if(data.navBarChilds.length>0)
        return <label key={data.code}>
          {localization(data.code)}
          <ul key={data.code}>
            {data.navBarChilds.map((navChildCollection) => 
              <li key={navChildCollection.code}>
                <Nav.Link key={navChildCollection.route} as={Link} to={navChildCollection.route} data-bs-dismiss="offcanvas">{localization(navChildCollection.code)}</Nav.Link>
              </li>
            )}
          </ul>
        </label>
      else
        return  <Nav.Link key={data.code} as={Link} to={data.route} data-bs-dismiss="offcanvas">{localization(data.code)}</Nav.Link>
    }

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
                {navRequest.map((navBarItem)=>PrintLink(navBarItem))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>

        </Container>
      </Navbar>
  </>
}