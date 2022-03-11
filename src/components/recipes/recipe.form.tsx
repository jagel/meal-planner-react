import { createRef, useState } from "react";
import { IRecipeModel } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { Breadcrumb, Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export const RecipeForm = (
    props : {
        recipe:IRecipeModel, 
        onTextChange(event:React.ChangeEvent<HTMLInputElement>):void
    }) => {
    const textValue = SetLanguageText;
   
   return <Row className="mb-3">
      <Form.Group as={Col} md="12" controlId="name">
      <Form.Label>{textValue('Name')}</Form.Label>
      <Form.Control
        required
        name="name"  type="text"
        placeholder={textValue('Recipe Name')}
        onChange={props.onTextChange}
        defaultValue={props.recipe.name}
      />
       <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="12" controlId="description">
        <Form.Label>{textValue('Recipe Description')}</Form.Label>
        <Form.Control
            type="text"
            placeholder={textValue('Recipe Description')} 
            onChange={props.onTextChange}
            defaultValue={props.recipe.description}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    </Form.Group>
    </Row>
  }
