import { useAppContext } from "../../common/app/app-context";

const UserDropdown = () =>{
  const appContext = useAppContext();

    return (
       <></>
    );
}

export { UserDropdown }

/*
 <NavDropdown title={appContext.user.displayname}>
            <NavDropdown.Item>My profile</NavDropdown.Item>
            <NavDropdown.Item>Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Logout</NavDropdown.Item>
        </NavDropdown>
 */