import { createRef, useState, VoidFunctionComponent } from "react";
import { IRecipeModel, IRecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import './recipe.form.css';

export const RecipeForm = (
    props : {
        recipe:IRecipeModel, 
        onTextChange(event:React.ChangeEvent<HTMLInputElement>):void,
        onDropDownChange(event:React.ChangeEvent<HTMLSelectElement>):void
    }) => {
    const textValue = SetLanguageText;

    const CuisineGroupItem = <Form.Group as={Col} md="12" controlId="cuisine" className="form-item">
    <Form.Label>{textValue('Cuisine')}</Form.Label>
      <Form.Select required 
        aria-label={textValue('Cuisine')} 
        name="cuisine" 
        defaultValue={props.recipe.cuisineId}
        onChange={props.onDropDownChange} >
        <option value="">{textValue('Cuisine')}...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
    </Form.Group>;

    const NameGroupItem = <Form.Group as={Col} md="12" controlId="name" className="form-item">
    <Form.Label>{textValue('Name')}</Form.Label>
    <Form.Control
      required
      name="name"  type="text"
      placeholder={textValue('Recipe Name')}
      onChange={props.onTextChange}
      defaultValue={props.recipe.name}
    />
    <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
  </Form.Group>;

  const DescriptionGroupItem = <Form.Group as={Col} md="12" controlId="description" className="form-item">
    <Form.Label>{textValue('Recipe Description')}</Form.Label>
    <Form.Control
        as="textarea"
        placeholder={textValue('Recipe Description')} 
        onChange={props.onTextChange}
        defaultValue={props.recipe.description}
    />
    <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
  </Form.Group>;

  const InstructionsGroupItem = <Form.Group as={Col} md="12" controlId="description" className="form-item">
    <Form.Label>{textValue('Recipe Description')}</Form.Label>
    <Form.Control
        type="text"
        placeholder={textValue('Recipe Description')} 
        onChange={props.onTextChange}
        defaultValue={props.recipe.description}
    />
    <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
  </Form.Group>;

   
   return (<Row className="mb-3">
    {CuisineGroupItem}
    {NameGroupItem}
    {DescriptionGroupItem}
    <IngredientsGroupItem ingredients={props.recipe.ingredients} onTextChange={props.onTextChange} />
    {InstructionsGroupItem}
  </Row>);
  }


const IngredientsGroupItem = (props: {
  ingredients:IRecipeProduct[],
  onTextChange(event:React.ChangeEvent<HTMLInputElement>):void
}) => {
  const textValue = SetLanguageText;
  const fractions = ['1/2','1/3','2/3','1/4','3/4','1/8'];
  var [ingredient, setIngredientState] = useState('');
  
  const onDropDownChange = (evt : React.ChangeEvent<HTMLSelectElement>) => {
  }

  const onTextChange = (evt : React.ChangeEvent<HTMLInputElement>) => {
    setIngredientState(evt.target.value);
  }

  const setIngredient = () => {
    props.ingredients.push({productId: 1, name:ingredient, quantity:1, fraction:"", meassure:""});
  }

  const displayList = props.ingredients?.length == 0 ? <></> : 
    <ul>{props.ingredients?.map(i => <li key={i.productId}>{i}</li>)}</ul>;

  return <>
    {displayList}
    <Form.Group as={Col} xs={12} controlId="ingredients" className="form-item">
      <Form.Label>{textValue('ingredients')}</Form.Label>
      <Form.Control
          type="text"
          placeholder={textValue('ingredients')} 
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
        <Form.Control
            type="text"
            placeholder={textValue('ingredients')} 
            onChange={props.onTextChange}
        />
        <Form.Control.Feedback type="invalid">{textValue('required field')}</Form.Control.Feedback>
      </Form.Group>

      <Col xs={12}>
        <button onClick={() => setIngredient} type="button">Add</button>
      </Col>
  </>;
}