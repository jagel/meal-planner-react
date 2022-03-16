import { Nav, NavDropdown } from "react-bootstrap";
import { LanguageAvailable } from "../../../services/i18n/languageAvailable";
import { ILanguageAvailable } from "../../../common/models/lang.model";
import { useEffect, useState } from 'react';
import './language-selector.css';
import { useAuthContext } from "../../../common/auth/auth.context";

const LanguageSelector = () => {
  let [language, setLanguageState] = useState({} as ILanguageAvailable);
  let [name,setName] = useState("");

  let languageSelector = LanguageAvailable;
  let auth = useAuthContext();

  useEffect(() => {
    let currentLanguage = languageSelector.find(x => x.datacode == auth.userSession.language)?? {} as ILanguageAvailable;
    setLanguageState(currentLanguage);
    setName(auth.userSession.name);
  });

  return (
  <Nav>
      <NavDropdown title={<label><span className="lng-icon material-icons">language</span> {language.code}</label>} id="collasible-nav-dropdown">
      {languageSelector.map(lang => 
        <NavDropdown.Item 
          key={lang.code} 
          onClick={() => auth.changeLanguage(lang.datacode)}
          className={lang.datacode == language.datacode? "lng-active":""}
        >
          {lang.name}
        </NavDropdown.Item>) 
      }
      </NavDropdown>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          {name}
        </Nav.Link>
      </Nav.Item>
  </Nav>
  );
}

export default LanguageSelector;