import { Nav, NavDropdown } from "react-bootstrap";
import { useAppContext } from "../../common/app/app-context";

const UserDropdown = () =>{
  const appContext = useAppContext();

    return (
        <NavDropdown title={appContext.user.displayname}>
            <NavDropdown.Item>My profile</NavDropdown.Item>
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
    );
}

export { UserDropdown }