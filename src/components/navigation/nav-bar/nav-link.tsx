import { Nav } from "react-bootstrap";
import { INavBarItems } from "../../../common/models/navbar.model"
import { SetLanguageText } from "../../../services/i18n/languageManager";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const NavLinkItem = (props : {
    linkItem:INavBarItems
}) => {
    let text = SetLanguageText;
    
    const generateLink = (item : INavBarItems) =>
        <Nav.Link key={`${item.code}.${item.hasRoute}`} as={Link} to={item.route} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasTop">{text(item.code)}</Nav.Link>;
    
    const generateMainLink = () => (
    <label key={props.linkItem.code}>
        {text(props.linkItem.code)}
        <ul key={props.linkItem.code}>
            {props.linkItem.navBarChilds.map((navChildCollection) => 
            <li key={navChildCollection.code}>
                {generateLink(navChildCollection)}
            </li>
            )}
        </ul>
    </label>
    );
    
    return props.linkItem.navBarChilds.length>0 ? generateMainLink() :  generateLink(props.linkItem);
}

export { NavLinkItem };