import Box from "@mui/material/Box";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";


import './loading.css';

export const LayoutPage = ({ children }: { children: JSX.Element }) => {
return (<Box>
    <BreadcrumbRoutes />
    {children}
</Box>);
};