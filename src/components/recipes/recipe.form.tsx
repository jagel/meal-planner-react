import { createRef, useState } from "react";
import { Breadcrumb, Button, Container, Form } from "react-bootstrap";
import { IRecipeModel } from "../../common/models/recipe.form";
import { SetLocalizationText } from "../../utils/i18n/languageManager";

export const RecipeForm = (props : {recipe:IRecipeModel}) => {
    const textValue = SetLocalizationText;

    const [recipe, setRecipeState] = useState(props.recipe);
    const input = createRef();

    const textChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        let name = event.target.name;
        let value = event.target.value;
          switch(name){
            case  'name':
                recipe.name = value;
            break;
            case 'description':
                recipe.description = value;
            break
        }

        setRecipeState(recipe);
    }
    return <>
         <Form.Group className="mb-3" controlId="recipe.name">
            <Form.Label>{textValue('Name')}</Form.Label>
            <Form.Control 
                name="name"
                type="text" 
                placeholder={textValue('Recipe Name')} 
                value={recipe.name}
                onChange={textChange.bind(this)}
                required
                />
                <Form.Control.Feedback type="invalid">
                    Field is required.
                </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="recipe.description">
            <Form.Label>{textValue('Recipe Description')}</Form.Label>
            <Form.Control 
                name="description"
                type="text" 
                placeholder={textValue('Recipe Description')} 
                value={recipe.description}
                onChange={textChange.bind(this)}
                isValid={false}
                />
        </Form.Group> 
    </>
};