import './App.css';
import { useRoutes } from "react-router-dom";
import RoutesItems from './utils/data/routingItems';

 export default function App() {
    let element = useRoutes(RoutesItems);
    return element;
 }
