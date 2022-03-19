import { Nav, NavDropdown } from "react-bootstrap";
import { LanguageAvailable } from "../../utils/data/languageAvailable";
import { ILanguageAvailable } from "../../common/models/lang.model";
import { useEffect, useState } from 'react';
import './language-selector.css';
import { useAppContext } from "../../common/app/app-context";


const LanguageSelector = () => {
  let [language, setLanguageState] = useState<ILanguageAvailable>({ code : '', languageCode : '', name : ''});
  let languagesAvailable = LanguageAvailable;
  const appContext = useAppContext();

  useEffect(() => {
    let currentLanguage = languagesAvailable.find(x => x.languageCode == appContext.language)?? {} as ILanguageAvailable;
    setLanguageState(currentLanguage);
  },[appContext]);


  return (
      <NavDropdown title={<label><span className="lng-icon material-icons">language</span> {language.code}</label>} id="collasible-nav-dropdown">
      {languagesAvailable.map(lang => 
        <NavDropdown.Item 
          key={lang.code} 
          onClick={() => appContext.changeLanguage(lang.languageCode)}
          className={lang.languageCode == language.languageCode? "lng-active":""}
        >
          {lang.name}
        </NavDropdown.Item>) 
      }
      </NavDropdown>
  );
}


export default LanguageSelector;