import { useState } from "react";
import { Button, Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../common/auth/auth.context";
import { UserRequestType } from "../../common/models/auth-user.types";
import { UserService } from "../../services/auth/user-service";
import { SetLanguageText } from "../../services/i18n/languageManager";
import './login.form.css';

const LoginForm = () => {
    const [validated, setValidated] = useState(false);
    const [loginForm, setLoginFormState] = useState({} as UserRequestType);
    const textValue = SetLanguageText;
    
    let useAuth = useAuthContext();
    let navigate = useNavigate();
    
    const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
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
          let signedIn = await UserService.singInAsync(loginForm);

          if(signedIn){
            navigate("/", { replace: true });
          }
        }
        else
          setValidated(true);
    };

    return (<div className="login-form-item">
      <div>
        <img src="/src/img/login.svg" className="image-login" />
      </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} >
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
          <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
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
    
        <div>
          <Button className="btn-login" variant="primary" type="submit">Login</Button>
        </div>
      </Form>
    </div>

    );
    /*
    return (    
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="form-container">
      
    <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="email">
        <Form.Label>{textValue('email')}</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder={textValue('email')}
          onChange={onTextChange}
          defaultValue={loginForm.email}
        />
        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
      </Form.Group>

      <Form.Group as={Col} md="12" controlId="password">
        <Form.Label>{textValue('password')}</Form.Label>
        <Form.Control
            type="password"
            required
            placeholder={textValue('password')} 
            onChange={onTextChange}
            defaultValue={loginForm.password}
        />
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Button variant="primary" type="submit">Login</Button>
    </Row>

    

  </Form>
    );
    */
}

export { LoginForm }