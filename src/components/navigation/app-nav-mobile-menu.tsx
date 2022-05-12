import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { GoogleIconsInheritance, Icons } from '../../common/app/google.icon'

export interface AppNavMobileMenuProps {
    handleProfileMenuOpen:(event: React.MouseEvent<HTMLElement>) => void;
    handleMobileMenuClose: () => void;
    mobileMenuId:string
    mobileMoreAnchorEl: null | HTMLElement;
}

export const AppNavMobileMenu = (props:AppNavMobileMenuProps) => {
  const isMobileMenuOpen = Boolean(props.mobileMoreAnchorEl);

    return  <Menu
    anchorEl={props.mobileMoreAnchorEl}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    id={props.mobileMenuId}
    keepMounted
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    open={isMobileMenuOpen}
    onClose={() =>props.handleMobileMenuClose()}
  >
    <MenuItem>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <GoogleIconsInheritance iconName={Icons.mail} />
        </Badge>
      </IconButton>
      <p>Messages</p>
    </MenuItem>
    <MenuItem>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <GoogleIconsInheritance iconName={Icons.notifications} />
        </Badge>
      </IconButton>
      <p>Notifications</p>
    </MenuItem>
    <MenuItem onClick={(evt) => props.handleProfileMenuOpen(evt)}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <GoogleIconsInheritance iconName={Icons.account_circle} />
      </IconButton>
      <p>Profile</p>
    </MenuItem>
  </Menu>
}