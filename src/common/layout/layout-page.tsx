import Box from "@mui/material/Box";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";

export const LayoutPage = ( props:{ children: JSX.Element, params?: { [key:string] : string|undefined} }) => {
return (<Box>
    <BreadcrumbRoutes dynamicParams={props.params} />
    {props.children}    
</Box>);
};