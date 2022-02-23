import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";

export default function RecipeCreate(){
    const textValue = SetLocalizationText;
  
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event)
    }

    return <div>
        <h1>{textValue('New Recipe')}</h1>
        <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>{textValue('Name')}</Form.Label>
                <Form.Control type="text" placeholder={textValue('Recipe Name')} />
                {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{textValue('Recipe Description')}</Form.Label>
                <Form.Control type="text" placeholder={textValue('Recipe Description')} />
            </Form.Group>
            <Button variant="primary" type="submit">
                {textValue('save')}
            </Button>
        </Form>
    </div>
}