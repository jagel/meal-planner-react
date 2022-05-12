import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import List from '@mui/material/List';
import { useState } from "react";
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { NavigationRoutes, NavigationRoutesModel } from "../../utils/routing/navigation-routes";
import { styled, SxProps, Theme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { RouteItem } from '../../utils/routing/app-routes';
import { SetLanguageText } from "../../services/i18n/languageManager";

const FireNav = styled(List)<{ component?: React.ElementType }>({
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const HeaderDrawer = () => {
    return <ListItemButton sx={{height:64}} component={RouterLink} to="/">
    <ListItemIcon sx={{ fontSize: 20 }}>
      <img alt="" src="/src/img/logo.svg" width="30" height="30" className="d-inline-block align-top"/>{' '}
    </ListItemIcon>
    <ListItemText
      sx={{ my: 0 }}
      primary="Meal planner"
      primaryTypographyProps={{
        fontSize: 20,
        fontWeight: 'medium',
        letterSpacing: 0
      }}
    />
  </ListItemButton>
}

export const NavigationItems = () => {
    const routes = NavigationRoutes.sort(x=>x.order);
    return (
          <Paper elevation={0} sx={{ maxWidth: 256 }}>
            <FireNav component="nav" disablePadding>
              <HeaderDrawer />
              <Divider />
              {routes.map((routeBox : NavigationRoutesModel) => <BoxRoutes key={routeBox.order} {...routeBox} />)}
            </FireNav>
          </Paper>
    );
}

const BoxRoutes = (props: NavigationRoutesModel) => {
  const [open, setOpen] = useState(true);
  const textValue = SetLanguageText;
  
    const BoxHeader =  <ListItemButton alignItems="flex-start"
      onClick={() => setOpen(!open)}
      sx={{px: 3,pt: 2.5,'&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },}}
    >
    <ListItemText
      primary={props.title}
      primaryTypographyProps={{
        fontSize: 15,
        fontWeight: 'medium',
        lineHeight: '20px',
        mb: '2px',
      }}
      secondaryTypographyProps={{
        noWrap: true,
        fontSize: 12,
        lineHeight: '16px',
      }}
      sx={{ my: 0 }}
    />{ open?
        <GoogleIconsInheritance iconName={Icons.keyboard_arrow_up}/>:
        <GoogleIconsInheritance iconName={Icons.keyboard_arrow_down}/>
    }
  </ListItemButton>
  
  const linkItem = (routeItem:RouteItem) => <ListItemButton component={RouterLink} to={routeItem.path} key={routeItem.code} sx={{ py: 0, minHeight: 32 }}  >
    <ListItemIcon>
      <GoogleIconsInheritance iconName={routeItem.icon??''}></GoogleIconsInheritance>
    </ListItemIcon>
    <ListItemText primary={textValue(routeItem.title)} primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}/>
  </ListItemButton>
  
   return <Box
   sx={{
     pb: open ? 2 : 0,
   }}
  >
    {BoxHeader}
    <Divider />
    {open && props.routes.map(linkItem)}
  </Box>
  }
  
 