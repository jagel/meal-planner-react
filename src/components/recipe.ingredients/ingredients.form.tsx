import { Button, FormControl, Grid, Input, InputAdornment, InputLabel,ListItem, MenuItem, Paper, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { FormValidations } from "../../utils/data/form-defiinions";
import { InputRequired, InputRequiredProps } from "../form-items/input.required";
import { fractionsTypes } from "./recipe.ingredient.types";
import ReipeIngredientsFormType, { IReipeIngredientsFormTypeProps } from "./recipe.ingredients.form.type";

export interface IngredientFormProps {
  index:number;
  ingredientForm:RecipeProduct;
  updateIngredient:(updateRecipeProduct:RecipeProduct, index:number) => void;
};

export const IngredientForm = (props: IngredientFormProps) => {
  const [ingredientForm, setIngredientForm] = useState<RecipeProduct>(props.ingredientForm);
  const [displayError, setDisplayError] = useState(false);

  const textValue = SetLanguageText;
  const onTextChange = (fieldkey:string, value:string) => setIngredientForm(prevState => ({ ...prevState, [fieldkey] : value  }) );


  const inputRequiredProps : InputRequiredProps = {
    value: ingredientForm.name, 
    onTextChange: (evt) => onTextChange(evt.target.id, evt.target.value), 
    displayError, name:'name', 
    displayText:'name', 
    inputProps:{ maxLength: FormValidations.maxNameLength } 
  } 
  const ingredientName = <FormControl variant="standard" fullWidth>
    <InputRequired {...inputRequiredProps} />
  </FormControl>

  const quantity = <FormControl variant="standard" fullWidth>
    <InputLabel>{textValue('quantity')}</InputLabel>
    <Input 
      id="quantity"
      value={ingredientForm.quantity}
      onChange={(evt) => onTextChange(evt.target.id,evt.target.value)}
      type="number"
      endAdornment={<InputAdornment position="end">{ingredientForm.measureType}</InputAdornment>}/>
  </FormControl>

  const fraction = <FormControl variant="standard" fullWidth>
    <InputLabel id="fraction-label">{textValue('fraction')}</InputLabel>
    <Select 
      labelId="fraction-label"
      name="fractionary"
      value={ingredientForm.fractionary}
      label={textValue('fraction')}
      onChange={(event:SelectChangeEvent) =>onTextChange(event?.target.name,event.target.value) }>
     {fractionsTypes.map(fraction => <MenuItem key={fraction} value={fraction}>{fraction}</MenuItem> )}
      </Select>
  </FormControl>

const reipeIngredientsFormTypeProps : IReipeIngredientsFormTypeProps = { onTextChange, measureType: ingredientForm.measureType};
const measureType = <ReipeIngredientsFormType {...reipeIngredientsFormTypeProps} />

  const onAddIngredient = () => {
    if(ingredientForm.name.length > 0){
      props.updateIngredient(ingredientForm, props.index);
    }else{
      setDisplayError(true);
    }
  }

  return <ListItem sx={{width:"100%"}}>
  <Paper sx={{ p: '2px 4px', display: 'flex', flexDirection:'column', width: "100%" }}>
    <Grid container spacing={{ xs: 2, md: 3 }} alignItems='flex-end'>
      <Grid item xs={12} sm={12} md={6}>{measureType}</Grid>
      <Grid item xs={12} sm={12} md={6}>{ingredientName}</Grid>
      <Grid item xs={12} sm={12} md={6}>{quantity}</Grid>
      <Grid item xs={12} sm={12} md={6}>{fraction}</Grid>
    </Grid>

    <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='flex-end' padding={'10px'}>
      <Grid item xs={12} sm={12} md={6}>
        <Button
          onClick={onAddIngredient}
          variant="contained" 
          fullWidth>
            {textValue('continue')}
        </Button>
      </Grid>
    </Grid>

    </Paper>
  </ListItem>
}