import { useState } from "react";
import { Box, DialogActions, DialogContent, DialogTitle, Divider, FormControlLabel, List, ListItem, ListItemText, Radio, RadioGroup } from "@mui/material";
import { IngredientMeassureDialog } from "./ingredient.meassure.dialog";
import { SetLanguageText } from "../../services/i18n/languageManager";

export interface IReipeIngredientsFormTypeProps {
  onTextChange: (fieldkey:string, value:string) => void,
  meassureType:string,
}


export default function ReipeIngredientsFormType(props : IReipeIngredientsFormTypeProps) {
  const [open, setOpen] = useState(true);
  const textValue = SetLanguageText;

  const handleClickListItem = () => setOpen(true);

  const handleClose = (newValue?: string) => {
    setOpen(false);
    if (newValue) {
      props.onTextChange('meassure',newValue);
    }
  };

  return (<>
        <ListItem         
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="meassure type"
          onClick={handleClickListItem}
        >
          <ListItemText  primary={textValue('meassure type')} secondary={props.meassureType??''} />
        </ListItem>
  
        <IngredientMeassureDialog
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={props.meassureType}
        />
  </>);
}
