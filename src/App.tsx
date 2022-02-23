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
import MainApp from './pages/main';
import Login from './pages/auth/login/login';
import Dashboard from './pages/dashboard/dashboard';
import { Container } from 'react-bootstrap';
import NavBar from './common/nav-bar/nav-bar';
import RecipeCreate from './pages/recipes/recipe-create/recipe.create';
import RecipeUpdate from './pages/recipes/recipe-update/recipe.update';



 export default function App() {
   return <div>
     <Router>
      <NavBar/>
      <Routes>
        {/* Static Routes */}
        <Route path="/" element={<Dashboard/>} />
        <Route path="/login" element={<Login/>} />
        
        <Route path="/recipe/create" element={<RecipeCreate/>} />
        <Route path="/recipe/update/:recipeId" element={<RecipeUpdate/>} />

        {/* Dynamic Routes */}
        
      </Routes>
    </Router>
    
   </div>;
 }

//  <nav>
//  <ul>
//    <li>
//      <Link to="/home/dashbaord">Home</Link>
//    </li>
//    <li>
//      <Link to="/login">Login</Link>
//    </li>
//  </ul>
// </nav>
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



