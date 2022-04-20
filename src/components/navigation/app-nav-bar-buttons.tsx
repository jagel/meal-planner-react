import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { GoogleIconsInheritance, Icons} from '../../common/app/google.icon';

export interface AppNavBarButtonsProps{
    handleMobileMenuOpen :(event: React.MouseEvent<HTMLElement>) => void;
    handleProfileMenuOpen :(event: React.MouseEvent<HTMLElement>) => void;
    mobileMenuId: string;
    menuId:string;
}

export const AppNavBarButtons = (props: AppNavBarButtonsProps) => {
    return <>
     <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
              <GoogleIconsInheritance iconName={Icons.mail} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
              <GoogleIconsInheritance iconName={Icons.notifications} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={props.menuId}
              aria-haspopup="true"
              onClick={(evt) => props.handleProfileMenuOpen(evt)}
              color="inherit"
            >
               <GoogleIconsInheritance iconName={Icons.account_circle} />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={props.mobileMenuId}
              aria-haspopup="true"
              onClick={props.handleMobileMenuOpen}
              color="inherit"
            >
               <GoogleIconsInheritance iconName={Icons.morevert} />
            </IconButton>
          </Box>
    </>
}