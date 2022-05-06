import { userSessionService } from "../../services/auth/user-session.service";
import { Button } from '@mui/material';

const BtnGoogleLogin = () =>{
    return <Button type="button" onClick={() => userSessionService.loginGoogleAuth()}>
        Login Google
    </Button>;
}

export { BtnGoogleLogin }