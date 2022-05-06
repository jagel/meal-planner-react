import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup } from "@mui/material";
import { recipeIngredientsTypes } from "./recipe.ingredient.types";


export interface IngredientMeassureDialogProps {
    id: string;
    keepMounted: boolean;
    value: string;
    open: boolean;
    onClose: (value?: string) => void;
  }

export const IngredientMeassureDialog = (props: IngredientMeassureDialogProps) => {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = useState(valueProp);
    const radioGroupRef = useRef<HTMLElement>(null);

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
    
      const handleCancel = () => {
        onClose();
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
          <DialogTitle>Meassure Type</DialogTitle>
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
            <Button autoFocus onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleOk}>Ok</Button>
          </DialogActions>
        </Dialog>
      ); 
}