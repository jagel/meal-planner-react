import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./auth.context";

export function AuthComponent({ children }: { children: JSX.Element }) {
  let auth = useAuthContext();
  let location = useLocation();
  return !auth.userSession.isAuthenticated ? 
    <Navigate to="/login" state={{ from: location }} replace /> :
    children
}