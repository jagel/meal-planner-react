import { Button } from "react-bootstrap";
import { userSessionService } from "../../services/auth/user-session.service";

function BtnGoogleLogin(){
    <Button variant="success" type="button" onClick={() => userSessionService.loginGoogleAuth()}>
        Login Google
    </Button>;
}

export { BtnGoogleLogin }