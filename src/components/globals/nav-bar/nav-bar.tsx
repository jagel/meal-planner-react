
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

export default function NavBar(){
    return <nav>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
        </ul>
        <Example />
    </nav>
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