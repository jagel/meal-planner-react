import './App.css';
import { useRoutes } from "react-router-dom";
import RoutesItems from './utils/data/routingItems';
import { AuthProvider } from './common/auth/auth-provider.context';

export default function App(){
   return <AuthProvider>{useRoutes(RoutesItems)}</AuthProvider>;
}


