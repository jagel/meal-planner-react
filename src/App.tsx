import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from 'react-bootstrap';
import NavBar from './components/navigation/nav-bar/nav-bar';
import { RoutingItems } from './components/navigation/routing';

 export default function App() {
  return <Router>
      <NavBar/>
      <Container>
        <RoutingItems />
      </Container>
    </Router>
 }
