import { createRef, useState, VoidFunctionComponent } from "react";
import { IRecipeModel, IRecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
import './recipe.form.css';
import { RecipeFormIngredients } from "./recipe.form.ingredients";

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
    <RecipeFormIngredients ingredients={props.recipe.ingredients} onTextChange={props.onTextChange} />
    {InstructionsGroupItem}
  </Row>);
  }
