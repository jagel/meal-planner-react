import { useState } from "react";
import { ListItem, ListItemText } from "@mui/material";
import { IngredientMeasureDialog } from "./ingredient.measure.dialog";
import { SetLanguageText } from "../../services/i18n/languageManager";

export interface IReipeIngredientsFormTypeProps {
  onTextChange: (fieldkey:string, value:string) => void,
  measureType:string,
}


export default function ReipeIngredientsFormType(props : IReipeIngredientsFormTypeProps) {
  const [open, setOpen] = useState(props.measureType.length <= 0);
  const textValue = SetLanguageText;

  const handleClickListItem = () => setOpen(true);

  const handleClose = (newValue?: string) => {
    setOpen(false);
    if (newValue) {
      props.onTextChange('measureType',newValue);
    }
  };

  return (<>
        <ListItem         
          button
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="measure type"
          onClick={handleClickListItem}
        >
          <ListItemText  primary={textValue('measure type')} secondary={props.measureType??''} />
        </ListItem>
  
        <IngredientMeasureDialog
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={props.measureType}
        />
  </>);
}
