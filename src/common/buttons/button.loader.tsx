import Button from '@mui/material/Button';
import { CSSProperties } from 'react';
import { SetLanguageText } from "../../services/i18n/languageManager";
import './button.loader.css';

export type ButtonLoadingProp = {
    text:string,
    loading:boolean,
    disabled?:boolean
    fullWidth?:boolean
}

const ButtonLoading = (props: ButtonLoadingProp) => {

    const loadingStyle : CSSProperties = { display:'flex', justifyContent:'center'}
    const textValue = SetLanguageText;
    const loadingItem = <div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div>;
    const content = props.loading ? 
        <div style={loadingStyle}>{loadingItem} {textValue(props.text)}</div>: 
        textValue(props.text);
    return <Button disabled={props.disabled||props.loading} fullWidth={props.fullWidth} variant='contained' type="submit">
            {content}
        </Button>
}

export { ButtonLoading };

