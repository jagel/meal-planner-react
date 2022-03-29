import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { IRecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";

interface IRecipeFormIngredientsProps {
    ingredients:IRecipeProduct[];
    onTextChange(event:React.ChangeEvent<HTMLInputElement>):void;
};

const RecipeFormIngredients = (props: IRecipeFormIngredientsProps) => {
    return <label>space</label>;
}

const RecipeFormIngredientsTest = (props: IRecipeFormIngredientsProps) => {
    const textValue = SetLanguageText;
    const fractions = ['1/2','1/3','2/3','1/4','3/4','1/8'];
    const units = ['Ounces', 'Spoon', 'Tablespoon'];
    var [ingredient, setIngredientState] = useState('');
    
    useEffect(() => {
        
    });

    const onDropDownChange = (evt : React.ChangeEvent<HTMLSelectElement>) => {
    }
  
    const onTextChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
      setIngredientState(evt.target.value);
    }
  
    const setIngredient = () => {
        console.log("demo");
        props.ingredients.push({productId: 1, name:ingredient, quantity:1, fraction:"", meassure:""});
        console.log(props.ingredients);
    }
  
    const displayList = props.ingredients?.length == 0 ? <></> : 
      <ul>{props.ingredients?.map(i => <li key={i.productId}>{i}</li>)}</ul>;
  
    return <>
    {displayList}
    <Form.Group as={Col} xs={12} controlId="ingredients" className="form-item">
        <Form.Label>{textValue('ingredients')}</Form.Label>
        <Form.Control
            type="text"
            placeholder={textValue('name')} 
            onChange={onTextChange}
            defaultValue={ingredient}
        />
    </Form.Group>

    <Form.Group as={Col} xs={3} controlId="ingredients" className="form-item">
        <Form.Select required 
            name="proportion" onChange={onDropDownChange} >
            <option value="0"> _ </option>
            {Array.from(Array(10), (e, i) => <option key={i} value={i}>{i}</option>)}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} xs={3} controlId="ingredients" className="form-item">
        <Form.Select required 
            name="fraction" onChange={onDropDownChange} >
            <option value="0"> _ </option>
            {fractions.map((fraction => <option key={fraction} value={fraction}>{fraction}</option>))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col} xs={6} controlId="ingredients" className="form-item">
        <Form.Select required 
            name="fraction" onChange={onDropDownChange} >
            <option value="">{textValue('units')}... </option>
            {units.map((fraction => <option key={fraction} value={fraction}>{fraction}</option>))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
    </Form.Group>

    <Col xs={12}>
        <Button variant="outline-primary" onClick={setIngredient}>{textValue('add')}</Button>
    </Col>
    </>;
  }

  export { RecipeFormIngredients };