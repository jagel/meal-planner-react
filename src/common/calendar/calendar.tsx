import './calendar.css'
export default function JGLCalendar(props:any){

  let daysOfWeek = DayOfWeedkData(props.lang??'es')
    return <>
      <div className="month">
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li>
            August<br />
            {/* <span style="font-size:18px">2021</span> */}
            <span>2021</span>
          </li>
        </ul>
      </div>

      <div className="calendar-month">
        <div>&#10094;</div>
        <div>&#10095;</div>
        <div>
          <p>August</p>
          <p>2022</p>
        </div>
      </div>

      <ul className="calendar-weekdays">
        {daysOfWeek.map((day) => <li key={day}>{day}</li>)}
      </ul>

      <ul className="calendar-days">
        <li></li>
        <li></li>
        <li></li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li className="active">10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li></li>
      </ul>
    </>
}

function DayOfWeedkData(lang:string){
  let daysOfWeek: string[] = [];
  switch(lang){
    case 'es':
      daysOfWeek = ['Lu', 'Ma', 'Mi','Ju','Vi','Sa','Do']
    break
    
    default:
      daysOfWeek = ['Mo', 'Tu', 'We','Th','Fr','Sa','Su']
    break
  }
  return daysOfWeek;
}