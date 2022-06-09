export interface AgendaElement{
    agendaElementId:number;
    name:string;
    description:string;
    targetId:number;//open id
}

export interface AgendaBook {
    agendaBookId:number;
    date:Date;
    columnItemId:number;
    agendaElements: Array<AgendaElement>;
}
export const AgendaViewer = () => {
    const startDay = new Date();
    const numberDays = 3;

    const dateToday = new Date();
    const rowHeader :{date:Date} = {date:dateToday};
 //   const columns : Array<ColumnItemModel> = [{columntItemId:1, name:'breakfast'}, {columntItemId:2, name:'lunch'}, {columntItemId:3, name:'dinner'}];
    const book : Array<AgendaBook> = [{
        agendaBookId:1,
        columnItemId:3,
        date:dateToday,
        agendaElements:[{
            agendaElementId:1,
            name:'a1',
            description:'d1',
            targetId:1
        },{
            agendaElementId:2,
            name:'a2',
            description:'d2',
            targetId:2
        }]
    }]

    const bookElement = (columnItemId:number, date: Date) => {
        let bookElement = book.filter(x=>x.columnItemId == columnItemId && x.date == date);
        return bookElement.length == 1 ? <ul>
            {bookElement[0].agendaElements.map((bookItem,index) => <li key={index}>
                {bookItem.name} - {bookItem.description}
            </li>)}
        </ul> : <></>
    }
        
      

    return <div>
        <table>
        <thead>
            <tr>
                <th></th>
                {Array.apply(0, Array(numberDays)).map((x,i)=><th>{(rowHeader.date.getDate() +i)}</th>)}
            </tr>
        </thead>
        <tbody>
           
        </tbody>
        </table>

    </div>
}
/*
 
            {columns.map(columnItem => 
                <tr key={columnItem.columntItemId}>
                    <td>{columnItem.name}</td>
                    {Array.apply(0,Array(numberDays))
                        .map((x,i)=> <td>{bookElement(columnItem.columntItemId, rowHeader.date)}</td>)
                    }
                </tr>
            )}
*/