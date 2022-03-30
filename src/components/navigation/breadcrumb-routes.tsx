import {
  Link as RouterLink,
  useLocation,
} from 'react-router-dom';
import { SetLanguageText } from "../../services/i18n/languageManager";
import { APP_ROUTES, RouteItem, RoutesList } from "../../utils/routing/app-routes";

import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';



export const BreadcrumbRoutes = (props : {
    dynamicParams? : { [key:string] : string|undefined}
  }) => {
    const interpolateParams = () => {
      let _params = props.dynamicParams??{};
      Object.keys(_params).forEach(key => { pathname = pathname.replace(_params[key]??'',`:${key}`);});
    }

    const textValue = SetLanguageText;
    const location = useLocation();

    var pathname = location.pathname;
    var paths : string = ""
    
    if(props.dynamicParams !== undefined) interpolateParams();
    
    const currentLocation = RoutesList.filter(x => x.path == pathname)[0];
    const pathItems = currentLocation.code.split('.');
    const lastItemIndex = pathItems.length - 1;

    var codeValue = "";

    const LinkRouter = (props: any) => <Link {...props} component={RouterLink as any} />

   const printRoute = (pathItem: string, index:number) => {
     let _pathItem = pathItem == '' ? 'home' : pathItem;

     if(index>0) codeValue += `.${pathItem}`;
     let currentItem = RoutesList.filter( x => x.code == codeValue)[0];

     return lastItemIndex == index ?
      <Typography key={index} color="text.primary">{textValue(_pathItem)}</Typography> : 
      <LinkRouter key={index} underline="hover" color="inherit" to={currentItem.path}>{textValue(_pathItem)}</LinkRouter>;
   }

  return <Box>
    <h3 style={{textAlign:'center'}}>{textValue(currentLocation.title)}</h3>
    <Breadcrumbs aria-label="breadcrumb">
      { pathItems.map(printRoute) }
    </Breadcrumbs>
  </Box>;
}