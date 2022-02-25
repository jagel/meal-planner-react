import './login.css'
import Button from 'react-bootstrap/Button';
import { Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { SetLocalizationText } from '../../../services/i18n/languageManager';
import { ILoginModel } from '../../../common/models/login.model';

export default function Login(){
  const [validated, setValidated] = useState(false);
  const [loginForm, setLoginFormState] = useState({} as ILoginModel);
  const textValue = SetLocalizationText;

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      event.stopPropagation();
      
    const form = event.currentTarget;
    let isValid = form.checkValidity();

    console.log(loginForm)
    //setValidated(true);
  };

  const onTextChange = (event : React.ChangeEvent<HTMLInputElement>) =>{
    setLoginFormState({
          ...loginForm,
          [event.target.id]: event.target.value
        });
  } 
  
    return  <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        
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
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">Please provide your password.</Form.Control.Feedback>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Button variant="primary" type="submit">Login</Button>
        </Row>

      </Form>
    </div>
}