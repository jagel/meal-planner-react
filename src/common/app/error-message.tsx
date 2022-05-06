import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import { ErrorObject } from "../../services/endpoints/error.handler"

export const ErrorMessage = (props : {errors?:ErrorObject|undefined}) => {
    return props.errors ? <Alert severity="warning" style={{marginTop:'10px'}}>
    <AlertTitle>{props.errors?.title}</AlertTitle>
    <p>{props.errors?.details} </p>
    <ul>
        {props.errors?.errors?.map(item => <li key={item.title}><strong>{item.title}</strong>: {item.description}</li>)}
    </ul>
  </Alert>
   :
    <></>
}