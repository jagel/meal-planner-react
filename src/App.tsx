import './App.css';
import { useRoutes } from "react-router-dom";
import RoutesItems from './utils/data/routingItems';
import { ApplicationManager } from './common/app/app-manager';

export default function App(){
    return <ApplicationManager>{useRoutes(RoutesItems)}</ApplicationManager>;
}


