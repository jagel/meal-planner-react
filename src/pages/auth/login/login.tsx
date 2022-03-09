import './login.css'
import Button from 'react-bootstrap/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { SetLocalizationText } from '../../../services/i18n/languageManager';
import { UserRequestType } from '../../../common/models/auth-user.types';
import { Route, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../common/auth/auth.context';
import { EnvironmentRequests } from '../../../utils/data/environment-request';
import { BtnGoogleLogin } from '../../../components/authentication/btn-google-login';

export default function Login(){
  const [validated, setValidated] = useState(false);
  const [loginForm, setLoginFormState] = useState({} as UserRequestType);

  const textValue = SetLocalizationText;
  let navigate = useNavigate();
  let useAuth = useAuthContext();
  
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
      
    let isValid = event.currentTarget.checkValidity();
    if(!isValid){
      useAuth.signinAsync(loginForm)
        .then(succesfully => {
          if(succesfully){
            navigate("/", { replace: true });
          }
      });
    }
    else
      setValidated(true);
  };

  const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setLoginFormState({
      ...loginForm,
      [event.target.id]: event.target.value
    });
  } 

  const btnLoginGoogle = () =>{
    let url = "http://localhost:3000"
    let route = `https://localhost:7242/api/Auth/signin-google?returnUrl=${url}`;

    var win = window.open(route,"_blank", "width=375,height=667"); 

    var timer = setInterval(function() { 
      if(win?.closed) {
        clearInterval(timer);
        alert('closed');
      }
    }, 1000);



    //var newWindow = window.open(route, "_blank", "width=300, height=300");
    //newWindow.onbeforeunload = function () {
      // processing event here
//      alert("new window closed");
//  }
    //console.log(newWindow);
    //let newWindow = open(route, 'example', 'width=300,height=300');

    //newWindow.onload = function() {
    //  newWindow.close();
    //  alert(newWindow.closed); // true
    //};

    //debugger;
    
    //window.location.href = route;
    //let redirect = <Route path='/privacy-policy' component={() => { window.location.href = 'https://example.com/1234'; return null;}}/>
  }
  
  return  <div>
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

      <Row className="mb-3">
        <BtnGoogleLogin />
      </Row>

    </Form>
  </div>
}