export interface IPolicies{
    viewOnly:boolean;
    write:boolean;
    create:boolean;
    modified:boolean;
}

export interface IPoliciesComponent{
    policies: IPolicies
}

export class Policies implements IPolicies{
    viewOnly:boolean = false;
    write:boolean = false;
    create:boolean = false;
    modified:boolean = false;
    constructor(props:{
        viewOnly?:boolean, 
        write?:boolean,
        create?:boolean,
        modified?:boolean} = {
            viewOnly:false,
            write:false,
            create:false,
            modified:false
        }){
    }
}