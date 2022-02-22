export interface ITextI18nModel{
    text:string;
    lang:string;
} 

export interface ITextI18nData{
    code:string;
    lang:string;
    value:string;
} 
export default function Text118n(props:{text:string, lang:string}){
    let I18nRespone = I18nData.filter(opt => opt.code == props.text && opt.lang == props.lang);

    let response = props.text;

    if(I18nRespone.length > 0)
        response = I18nRespone[0].value;

    
    return <>{response}</>
}

const I18nData : ITextI18nData[] = [];
; 