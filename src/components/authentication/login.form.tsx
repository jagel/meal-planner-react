import { useState } from "react";
import { UserRequestType } from "../../common/models/auth-user.types";
import { UserService } from "../../services/auth/user-service";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { EnvironmentRequests } from "../../utils/data/environment-request";
import './login.form.css';

const LoginForm = () => {
    const [loginForm, setLoginFormState] = useState({} as UserRequestType);
    const [loading, setLoadingState] = useState<boolean>(false);
    const [errorResponse, setErrorResponseState] = useState<boolean>(false);
    const textValue = SetLanguageText;
    
    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{  
      if(errorResponse){
        setErrorResponseState(false);
      }
          
      setLoginFormState({
          ...loginForm,
          [event.target.id]: event.target.value
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

    return (<div className="login-form-item">
      <div>
        <img src="/src/img/login.svg" className="image-login" />
      </div>
      
     
    </div>

    );
}

export { LoginForm }

/*
 <Form noValidate onSubmit={handleSubmit} >
        <fieldset disabled={loading} >
        <Form.Group as={Col} md="12" controlId="email">
          <Form.Label>{textValue('email')}</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="password-icon"><span className="lng-icon material-icons">mail</span></InputGroup.Text>
            <Form.Control
              required
              type="email"
              placeholder={textValue('email')}
              onChange={onTextChange}
              defaultValue={loginForm.email}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="password">
          <Form.Label>{textValue('password')}</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text id="password-icon"><span className="lng-icon material-icons">lock</span></InputGroup.Text>
            <Form.Control
                type="password"
                required
                placeholder={textValue('password')} 
                onChange={onTextChange}
                defaultValue={loginForm.password}
                aria-describedby="password-icon"
            />
          </InputGroup>
        </Form.Group>
          <div className={errorResponse? "error-msg":"error-msg hide"}>
            <label>{textValue('invalid email or password')}</label>
          </div>
        <div>
          <Button className="btn-login" variant="primary" type="submit">
            { loading ?  <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/> : null }
            { loading ?  null : textValue('login') }
          </Button>
        </div>
      </fieldset>
      </Form>
 */