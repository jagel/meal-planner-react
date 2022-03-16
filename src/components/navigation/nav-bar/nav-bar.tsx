
import './nav-bar.css'
import Navbar from 'react-bootstrap/esm/Navbar';
import { Container, Nav, Offcanvas } from 'react-bootstrap';
import { NavBarRequest } from "../../../utils/data/navigation.collection";
import { NavLinkItem } from './nav-link';
import LanguageSelector from '../language-component/language-selector';

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

        <Navbar className="justify-content-end">
          <LanguageSelector />
        </Navbar>

        <Navbar className='space'></Navbar>

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