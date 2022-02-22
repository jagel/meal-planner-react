import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";

export default function RecipeCreate(){
    const textValue = SetLocalizationText;

    return <Container>
        <h1>{textValue('New Recipe')}</h1>

        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{textValue('Name')}</Form.Label>
                <Form.Control type="text" placeholder={textValue('Recipe Name')} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
}