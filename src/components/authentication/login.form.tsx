import { useState } from "react";

import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';

import { UserRequestType } from "../../common/models/auth-user.types";
import { UserService } from "../../services/auth/user-service";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { EnvironmentRequests } from "../../utils/data/environment-request";
import { ButtonLoading } from "../../common/buttons/button.loader";

import './login.form.css';
import { GoogleIconsInheritance, Icons } from "../../common/app/google.icon";
import { BtnGoogleLogin } from "./btn-google-login";

const LoginForm = () => {
    const [loginForm, setLoginFormState] = useState({} as UserRequestType);
    const [loading, setLoadingState] = useState<boolean>(false);
    const [errorResponse, setErrorResponseState] = useState<boolean>(false);
    const textValue = SetLanguageText;
    
    const onTextChange = (fieldName:keyof UserRequestType) => (event : React.ChangeEvent<HTMLInputElement>) =>{
      if(errorResponse)
        setErrorResponseState(!errorResponse);

      setLoginFormState({
          ...loginForm,
          [fieldName]: event.target.value
        });
    }

    const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();

      let isValid = event.currentTarget.checkValidity();
      if(isValid){
        setLoadingState(true);
        UserService.singInAsync(loginForm)
          .then(() => {
            window.location.replace(EnvironmentRequests.AppUrl);
          })
          .catch(() => { 
            setErrorResponseState(true);
            setLoadingState(false)
          })
      }
      else{
        setErrorResponseState(true);
      }
    };

    return <div className="login-form-item">
      <div>
        <img src="/src/img/login.svg" className="image-login" />
      </div>

      <form onSubmit={handleSubmit} noValidate >
        
        <EmailInput onTextChange={onTextChange("email")} />    
        <PasswordInput onPasswordChange={onTextChange("password")} />

        <Box>
          <ButtonLoading fullWidth text='login' loading={loading} />
        </Box>        

        <Fade in={errorResponse}>
          <Alert severity="error">{textValue('invalid email or password')}</Alert>
        </Fade>
      </form>

      <Box>
        <BtnGoogleLogin />
      </Box>
    </div>;
}

const EmailInput = (props: { 
  onTextChange: (event : React.ChangeEvent<HTMLInputElement>) => void
  }) => {
  const textValue = SetLanguageText;
  
  return <FormControl fullWidth variant="outlined">
  <InputLabel 
    htmlFor="outlined-adornment-amount"
  >{textValue('email')}
  </InputLabel>
  <OutlinedInput required
    type="email"
    onChange={props.onTextChange}
    label={textValue('email')}
  />
</FormControl>
}

const PasswordInput = (props:{
  onPasswordChange: (event : React.ChangeEvent<HTMLInputElement>) => void,
}) => {
  let [passwordInput, setPasswordInput ] = useState({password:'', showPassword:false});

  const handleClickShowPassword = () =>{
    setPasswordInput({ ...passwordInput, showPassword: !passwordInput.showPassword });
  }

  return (
  <FormControl fullWidth variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
      required
      type={passwordInput.showPassword ? 'text' : 'password'}
      onChange={props.onPasswordChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            onClick={handleClickShowPassword}
            onMouseDown={(evt) => {evt.stopPropagation()}}
            edge="end"
          >
            {passwordInput.showPassword ?  <GoogleIconsInheritance iconName={Icons.visibility} />:   <GoogleIconsInheritance iconName={Icons.visibility_off} />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
  </FormControl>
);
}

export { LoginForm }