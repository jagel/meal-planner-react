import { Nav, NavDropdown } from "react-bootstrap";
import { LanguageAvailable } from "../../../services/i18n/languageAvailable";
import { ILanguageAvailable } from "../../../common/models/lang.model";
import { useEffect, useState } from 'react';
import { localStorageService, LOC_SOTRAGE } from "../../../services/localStorage/localStorage";
import './language-selector.css';

const LanguageSelector = () => {
  let [language, setLanguageState] = useState({} as ILanguageAvailable);
  let languageSelector = LanguageAvailable;


  useEffect(() =>{
    let datacode = localStorageService.getLocalStorage(LOC_SOTRAGE.LANGUAGE);

    if(!datacode){
      let languageItem = languageSelector[0];
      setLanguageState(languageItem);
      localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, languageItem.datacode);
    }
    else{
      let currentLanguage = languageSelector.find(x => x.datacode == datacode)?? {} as ILanguageAvailable;
      setLanguageState(currentLanguage);
    }
  });

  const onLanguageClick = (datacode: string) => {
    let currentLanguage = languageSelector.find(x => x.datacode == datacode)?? {} as ILanguageAvailable;
    localStorageService.setLocalStorage(LOC_SOTRAGE.LANGUAGE, currentLanguage.datacode);
    setLanguageState(currentLanguage);
  }
  
  return (
  <Nav>
      <NavDropdown title={<label><span className="lng-icon material-icons">language</span> {language.code}</label>} id="collasible-nav-dropdown">
      {languageSelector.map(lang => 
        <NavDropdown.Item 
          key={lang.code} 
          onClick={() => onLanguageClick(lang.datacode)}
          className={lang.datacode == language.datacode? "lng-active":""}
        >
          {lang.name}
        </NavDropdown.Item>) 
      }
      </NavDropdown>
  </Nav>
  );
}

export default LanguageSelector;