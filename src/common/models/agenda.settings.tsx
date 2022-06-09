import { AuditFields, IAuditFields } from "./form-models";

export interface ICustomColumns extends IAuditFields{
    customColumnId:number;
    name:string;
    description:string;
    order:number;
    status:string;

    agendaId:number;
}

export class CustomColumnsModel extends AuditFields implements ICustomColumns{
    customColumnId: number = 0;
    name:string = '';
    description:string = '';
    order:number = 0;
    status:string = '';

    agendaId: number = 0;
}

export interface IAgendaSettingsModel extends IAuditFields {
    agendaId:number;
    agendaCode:string;
    disabledDays:Array<string>
    customColumns:Array<ICustomColumns>
}

export class AgendaSettingsModel extends AuditFields implements IAgendaSettingsModel{
    agendaId: number = 0;
    agendaCode: string = '';
    disabledDays: string[] = [];
    customColumns: Array<CustomColumnsModel> = [];
}