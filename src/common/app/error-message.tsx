import { ErrorObject } from "../../services/endpoints/error.handler"

export const ErrorMessage = (props : {errors?:ErrorObject|undefined}) => {
    return props.errors ? <div>
        <label>Error Response</label>
        <ul>
        <li>Title: {props.errors?.title}</li>
        <li>DisplayType: {props.errors?.displayType}</li>
        <li>Details: {props.errors?.details}</li>
        <li>Errors:
            <ul>
                {props.errors?.errors?.map(item => <li key={item.title}>Title: {item.title}, Description: {item.description}</li>)}
            </ul>
        </li>
    </ul>
    </div>:
    <div></div>
}