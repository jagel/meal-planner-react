import React from "react";
import { IAuthContext } from "../models/auth-user.types";

export const AuthContext = React.createContext<IAuthContext>(null!);

export const useAuthContext = () => React.useContext(AuthContext);