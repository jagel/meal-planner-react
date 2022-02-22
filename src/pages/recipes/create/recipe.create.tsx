import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import { SetLocalizationText } from "../../../utils/i18n/languageManager";

import 'draft-js/dist/Draft.css';

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
            <MyEditor />;
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
}

function MyEditor() {
    const [editorState, setEditorState] = React.useState(
      () => EditorState.createEmpty(),
    );
  
    return <Editor editorState={editorState} onChange={setEditorState} />;
  }