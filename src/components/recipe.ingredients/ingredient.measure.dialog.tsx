import React, { useEffect, useRef, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { recipeIngredientsTypes } from "./recipe.ingredient.types";
import { SetLanguageText } from "../../services/i18n/languageManager";


export interface IngredientMeasureDialogProps {
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
  }

export const IngredientMeasureDialog = (props: IngredientMeasureDialogProps) => {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = useState(valueProp);
  const radioGroupRef = useRef<HTMLElement>(null);
  const textValue = SetLanguageText;

  useEffect(() => {
      if (!open) {
        setValue(valueProp);
      }
    }, [valueProp, open]);
  
    const handleEntering = () => {
      if (radioGroupRef.current != null) {
        radioGroupRef.current.focus();
      }
    };       
  
    const handleOk = () => {
      onClose(value);
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue((event.target as HTMLInputElement).value);
    };
  
    return (
      <Dialog
        sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
        maxWidth="xs"
        TransitionProps={{ onEntering: handleEntering }}
        open={open}
        {...other}
      >
        <DialogTitle>{textValue('measure type')}</DialogTitle>
        <DialogContent dividers>
          <RadioGroup
            ref={radioGroupRef}
            aria-label="ringtone"
            name="ringtone"
            value={value}
            onChange={handleChange}
          >
            {recipeIngredientsTypes.map((option) => (
              <FormControlLabel
                value={option.code}
                key={option.code}
                control={<Radio />}
                label={option.display}
              />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>{textValue('continue')}</Button>
        </DialogActions>
      </Dialog>
    ); 
}