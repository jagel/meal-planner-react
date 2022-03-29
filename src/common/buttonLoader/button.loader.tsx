import Button from '@mui/material/Button';
import { SetLanguageText } from "../../services/i18n/languageManager";
import { useEffect } from 'react';
import './button.loader.css'
type ButtonLoadingProp = {
    text:string;
    fullWidth?:boolean;
    loading?:boolean;
}

const ButtonLoading = (props: ButtonLoadingProp) => {

    const textValue = SetLanguageText;
    const loadingItem = <div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div>
    
    useEffect(()=>{
    },[props])

    return <Button fullWidth={props.fullWidth} disabled={props.loading} variant='contained' type="submit">
        {props.loading ? loadingItem : null }
        {textValue(props.text)}
    </Button>
}

export { ButtonLoading };

