import Box from "@mui/material/Box";
import { BreadcrumbRoutes } from "../../components/navigation/breadcrumb-routes";
import { ErrorObject } from "../../services/endpoints/error.handler";
import { ErrorMessage } from "../app/error-message";

export const LayoutPage = ( props: { 
    children: JSX.Element,
    loadingPage?: boolean,
    errorObject?: ErrorObject,
    params?: { [key:string] : string|undefined}
}) => {

    return (<Box>
        <BreadcrumbRoutes dynamicParams={props.params} />
        { !!props.loadingPage ?  
            <LoadingLayoutPage /> :
            props.children
        }
        <ErrorMessage errors={props.errorObject} />
    </Box>);
};

export const LoadingLayoutPage = () => {
    return <label>Loading ...</label>
}