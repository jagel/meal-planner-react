import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
  useParams,
  useLocation,
  Link
} from "react-router-dom";
import MainApp from './pages/globals/main';
import Login from './pages/auth/login/login';
import Dashboard from './pages/globals/dashboard/dashboard';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Container } from 'react-bootstrap';

export default function App(){
  return <>
  <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Container>
      <Navbar.Brand>Brand text</Navbar.Brand>
    </Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
  <Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Container>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
}

//  export default function App() {
//    return <div>
//      <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/home/dashbaord">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="home/*" element={<MainApp/>}/>
//           <Route path="/login" element={<Login/>} />
//         </Routes>
//       </div>
//     </Router>
    
//    </div>;
//  }
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



