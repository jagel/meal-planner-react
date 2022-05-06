import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, FormHelperText, Grid, Input, InputAdornment, InputLabel, List, ListItem, ListItemText, MenuItem, OutlinedInput, Radio, RadioGroup, Select, SelectChangeEvent, SxProps, TextField, Theme } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import { fractionsTypes } from "./recipe.ingredient.types";
import ReipeIngredientsFormType, { IReipeIngredientsFormTypeProps } from "./recipe.ingredients.form.type";

export interface IngredientFormProps {
  index:number;
  ingredientForm:RecipeProduct;
  updateIngredient:(event:React.ChangeEvent<HTMLInputElement>) => void;
};

const itemCentered : SxProps<Theme> = { display:'flex',alignItems:'end'};

export const IngredientForm = (props: IngredientFormProps) => {

  const [ingredientForm, setIngredientForm] = useState<RecipeProduct>(props.ingredientForm);

  const textValue = SetLanguageText;
  
  const onTextChange = (fieldkey:string, value:string) => setIngredientForm(prevState => ({ ...prevState, [fieldkey] : value  }) );
  

  const reipeIngredientsFormTypeProps : IReipeIngredientsFormTypeProps = { onTextChange, meassureType: ingredientForm.meassure};

  const ingredientName =  <Grid item xs={12} sm={12} md={3} sx={itemCentered} >
    <FormControl variant="standard" fullWidth>
      <TextField focused id="standard-basic" label={textValue('ingredient name')} variant="standard" />
    </FormControl>
  </Grid>

  const quantity = <Grid item xs={12} sm={12} md={3} sx={itemCentered} >
  <FormControl variant="standard" fullWidth>
    <Input
      id="quantity"
      value={ingredientForm.quantity}
      onChange={(evt) => onTextChange(evt.target.id,evt.target.value)}
      type="number"
      endAdornment={<InputAdornment position="end">{ingredientForm.meassure}</InputAdornment>}
    />
  </FormControl>
  </Grid>

  const fraction = <Grid item xs={12} sm={12} md={3} sx={itemCentered}>
    <FormControl variant="standard" fullWidth>
    <InputLabel id="fraction-label">{textValue('fraction')}</InputLabel>
    <Select
      labelId="fraction-label"
      name="fraction"
      value={ingredientForm.fraction}
      label={textValue('fraction')}
      onChange={(event:SelectChangeEvent) =>onTextChange(event?.target.name,event.target.value) }

    >
     {fractionsTypes.map(fraction => <MenuItem key={fraction} value={fraction}>{fraction}</MenuItem> )}
      </Select>
    </FormControl>
  </Grid>

  const meassureType =   <Grid item xs={12} sm={12} md={3} sx={itemCentered} >
    <ReipeIngredientsFormType {...reipeIngredientsFormTypeProps} />
</Grid>

  return <Grid container spacing={{ xs: 2, md: 3 }} width="100%" marginBottom="20px" >
    {ingredientName}
    {quantity}
    {fraction}
    {meassureType}

    <div style={{display:'flex',width: '100%',flexFlow: 'row-reverse',marginTop:'20px', gap:'10px'}}>
      <Button variant="outlined">Up</Button>
      <Button variant="outlined">Done</Button>
      <Button variant="outlined">Down</Button>
    </div>
    
  </Grid>
}