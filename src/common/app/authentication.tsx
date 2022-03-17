import { Navigate, useLocation } from "react-router-dom";
import { useAppContext } from "./app-context";

function Authentication({ children }: { children: JSX.Element }) {
    let appContext = useAppContext();
    let location = useLocation();

    if(appContext.appManager.userValidated && !appContext.appManager.authenticated)
        return <Navigate to="/login" state={{ from: location }} replace /> 
    else
        return children;
}

export { Authentication };