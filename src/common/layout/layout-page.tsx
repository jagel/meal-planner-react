import Box from "@mui/material/Box";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";

export const LayoutPage = ( props:
{ 
    children: JSX.Element, 
    loadingPage?: boolean,
    params?: { [key:string] : string|undefined}
}) => {
return (<Box>
    <BreadcrumbRoutes dynamicParams={props.params} />
    { !!props.loadingPage ?  
        <LoadingLayoutPage /> :
        props.children
    }
</Box>);
};

export const LoadingLayoutPage = () => {
    return <label>Loading ...</label>

}