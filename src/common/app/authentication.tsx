import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "./app-context";

function Authentication({ children }: { children: JSX.Element }) {
    let appContext = useAppContext();
    let location = useLocation();

    if(!appContext.appManager.userValidated)
        return <label>Loading ...</label>

    return  appContext.appManager.authenticated ?
        children :
        <Navigate to="/login" state={{ from: location }} replace /> 
}

export { Authentication };