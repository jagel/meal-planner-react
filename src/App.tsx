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

 export default function App() {
   return <div>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home/dashbaord">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="home/*" element={<MainApp/>}/>
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
    
   </div>;
 }
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



