import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { StepModel } from "../../common/models/recipe.form"
import { SetLanguageText } from "../../services/i18n/languageManager"

export interface RecipeStepsViewProps {
    steps:StepModel[]
}

export const RecipeStepsView = (props:RecipeStepsViewProps) => {
  const textValue = SetLanguageText;

  const displayListItem = (stepItem : StepModel, index:number ) => <ListItem key={index}>
    <ListItemAvatar>
        <Avatar>{stepItem.order}</Avatar>
    </ListItemAvatar>
    <ListItemText
        primary={textValue('step {0}',[`${stepItem.order}`])}
        secondary={stepItem.description}
    />
    </ListItem>
  
  return <Box sx={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom component="div">
                {textValue('steps')}
        </Typography>
        <List>{props.steps?.map(displayListItem)}</List>
    </Box> 
}