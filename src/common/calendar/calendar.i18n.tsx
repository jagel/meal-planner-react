interface I18n {
    lang: string;
}

interface dateDataI18n extends I18n {
    date: Date;
}

export const I18nSetDaysOfWeek = (props : I18n) => {
    let daysOfWeek = [];

    switch(props.lang){
        case 'es':
            daysOfWeek = ['Do','Lu', 'Ma', 'Mi','Ju','Vi','Sa'];
        break
    
        default:
            daysOfWeek = ['Su','Mo', 'Tu', 'We','Th','Fr','Sa'];
        break
    }
    
    return  <ul className="calendar-weekdays">
                {daysOfWeek.map((day) => <li key={day}>{day}</li>)}
            </ul>
}

export const  GetMonthAndYearData = (props : dateDataI18n) => {
    let month : string[] = [];
    let monthNumber : number = props.date.getMonth();

    switch(props.lang){
        case 'es':
          month = ["Enero","Febero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
        break
        
        default:
          month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        break
      }

    return   <label>
    {month[monthNumber]}<br/>
    {props.date.getFullYear()}
  </label>
}