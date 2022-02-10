import './login.css'
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';

export default function Login(){
    return  <Row className="mx-0">
    <Button variant="primary">Button #1</Button>
    <Button variant="secondary" className="mx-2">Button #2</Button>
    <Button variant="success">Button #3</Button>
  </Row>
}