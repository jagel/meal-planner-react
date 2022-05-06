import { Autocomplete, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, Grid, InputAdornment, List, ListItem, ListItemText, OutlinedInput, Radio, RadioGroup, TextField } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { RecipeProduct } from "../../common/models/recipe.form";
import { SetLanguageText } from "../../services/i18n/languageManager";
import ReipeIngredientsFormType from "./recipe.ingredients.form.type";

export interface IngredientViewProps {
  index:number;
  ingredientForm:RecipeProduct;
};

export const IngredientView = (props: IngredientViewProps) => {
  const textValue = SetLanguageText;
  
  return <label>update view</label>
}