import { useEffect, useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

import { GoogleIconComposition, Icons } from '../../common/app/google.icon';
import { useAppContext } from "../../common/app/app-context";
import { LanguageAvailable } from "../../utils/data/languageAvailable";
import { ILanguageAvailable } from "../../common/models/lang.model";

import './language-selector.css';

const LanguageSelector = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguageState] = useState<ILanguageAvailable>({ code : '', languageCode : '', name : ''});
  const languagesAvailable = LanguageAvailable;
  const appContext = useAppContext();

  useEffect(() => {
    let currentLanguage = languagesAvailable.find(x => x.languageCode == appContext.language)?? {} as ILanguageAvailable;
    setLanguageState(currentLanguage);
  },[appContext]);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const languageSelected = (languageCode:string) => {
    appContext.changeLanguage(languageCode);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  }
  
  return (
    <div>
    <IconButton
      size="large"
      aria-haspopup="true"
      onClick={handleMenu}
      color="inherit"
    >
      <GoogleIconComposition iconName={Icons.language} className="lng-icon">{language.code}</GoogleIconComposition>
    </IconButton>
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {languagesAvailable.map(lang => <MenuItem onClick={() => languageSelected(lang.languageCode)} >{lang.name}</MenuItem>)}
        
    </Menu>
  </div>
  );
}


export default LanguageSelector;