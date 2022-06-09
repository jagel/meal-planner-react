export interface InputProperties{
    maxLength?:number
}

export interface IAuditFields{
    createdBy: string;
    createdDate : Date;
    updatedBy: string;
    updatedDate : Date;
}

export class AuditFields implements IAuditFields {
    createdBy: string ='';
    createdDate : Date = new Date();
    updatedBy: string ='';
    updatedDate : Date = new Date();
}