import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export interface AppNavBarProfileProps{
    anchorEl:null | HTMLElement;
    menuId: string;
    handleMenuClose:() => void;
}

export const AppNavBarProfile = (props: AppNavBarProfileProps) => {
    const isMenuOpen = Boolean(props.anchorEl);

    return <Menu
    anchorEl={props.anchorEl}
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    id={props.menuId}
    keepMounted
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    open={isMenuOpen}
    onClose={() => props.handleMenuClose()}
    >
    <MenuItem onClick={() => props.handleMenuClose()}>Profile</MenuItem>
    <MenuItem onClick={() => props.handleMenuClose()}>My account</MenuItem>
</Menu>
}