
import React from "react";
import './nav-bar.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
  useParams,
  useLocation,
  Link
} from "react-router-dom";
import Navbar from 'react-bootstrap/esm/Navbar';
import { Button, Container, Form, FormControl, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { NavBarRequest } from "../../utils/NavBarCollection";
import { INavBarItems } from "../models/navbar.model";

export default function NavBar(){
    let navRequest =NavBarRequest();
    return <>
    <Navbar bg="light" variant="light" expand={false}>
    <Container fluid> 
      <Navbar.Toggle className='me-3' />
      <Navbar.Brand className='me-auto' href="#home">
        <img
          alt=""
          src="/src/img/logo.png"
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
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          {navRequest.map((data)=>PrintLink(data))}
           {/* {navRequest.map((data)=>
           <Nav.Link key={data.name} as={Link} to="{data.route}" data-bs-dismiss="offcanvas">{data.name}</Nav.Link>
           )} */}
          <Nav.Link as={Link} to="/" onClick={(r)=>console.log(r)} data-bs-dismiss="offcanvas">Demoww</Nav.Link>
          <Nav.Link href="#action2">Link</Nav.Link>
          {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Offcanvas.Body>
    </Navbar.Offcanvas>

    </Container>
  </Navbar>
  </>
}

function PrintLink(data:INavBarItems) {
  
  if(data.navBarChilds.length>0)
    return  <label key={data.name}>Childs</label>;
  else
    return  <Nav.Link key={data.name} as={Link} to="{data.route}" data-bs-dismiss="offcanvas">{data.name}</Nav.Link>
}

 function Example() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics/me">Topics</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>} />
          <Route path='topics/*' element={<Topics/>} />
          <Route path='/' element={<Home/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}



function Topics() {
  return (
    <div>
      <nav>
        <Link to="me">My Profile</Link>
      </nav>

      <Routes>
        <Route path=":id" element={<UserProfile />} />
        <Route path="me" element={<OwnUserProfile />} />
      </Routes>
    </div>
  );
}

function UserProfile() {
  let {id} = useParams();
  let location = useLocation();

  console.log(id, location); return (
    <div>
      <h2>
        {/* This links to /users - the parent route */}
        <Link to="..">All Users</Link>
      </h2>

      <h2>
        {/* This links to /users/:id - the current route */}
        <Link to=".">User Profile</Link>
      </h2>

      <h2>
        {/* This links to /users/mj - a "sibling" route */}
        <Link to="../mj">MJ</Link>
      </h2>
    </div>
  );
}

function OwnUserProfile() {
  
  return (
    <div>
      <h2>
        {/* This links to /users - the parent route */}
        <Link to="..">All Users</Link>
      </h2>

      <h2>
        {/* This links to /users/:id - the current route */}
        <Link to=".">User Profile</Link>
      </h2>

      <h2>
        {/* This links to /users/mj - a "sibling" route */}
        <Link to="../mj">MJ</Link>
      </h2>
    </div>
  );
}