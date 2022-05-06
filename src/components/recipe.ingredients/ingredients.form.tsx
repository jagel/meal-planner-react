import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, FormControlLabel, FormHelperText, Grid, Input, InputAdornment, List, ListItem, ListItemText, OutlinedInput, Radio, RadioGroup, SxProps, TextField, Theme } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
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
  
  const onTextChange = (fieldkey:string, value:string) => {
    setIngredientForm(prevState => ({ ...prevState, [fieldkey] : value  }) );
  }


  const reipeIngredientsFormTypeProps : IReipeIngredientsFormTypeProps = { onTextChange, meassureType: ingredientForm.meassure};

  return <Grid container spacing={{ xs: 2, md: 3 }} width="100%" marginBottom="20px" >
  <Grid item xs={12} sm={12} md={3} sx={itemCentered} >
    <FormControl variant="standard" fullWidth>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </FormControl>
  </Grid>

  <Grid item xs={12} sm={12} md={3} sx={itemCentered} >
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

  <Grid item xs={12} sm={12} md={3} sx={itemCentered}>
    <TextField id="demo-helper-text-misaligned-no-helper" label="Name" />
  </Grid>

  <Grid item xs={12} sm={12} md={3} sx={itemCentered} >
    <ReipeIngredientsFormType {...reipeIngredientsFormTypeProps} />
  </Grid>

</Grid>
}
/*
<OutlinedInput
        id="ssd"
        value={ingredientForm}
        onChange={(evt) => onTxtChange(evt)}
        endAdornment={<InputAdornment position="end">kg</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
      />
*/