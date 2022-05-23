import { ColumnItemModel } from "./agenda.settings";
import { CatalogModel } from "./catalog.model";

export interface ISettingsModel{
    columnItems:Array<ColumnItemModel>;
    disabledDays:Array<CatalogModel>;
}

export class SettingsModel implements ISettingsModel{
    columnItems:Array<ColumnItemModel> = [];
    disabledDays:Array<CatalogModel> = [];
    constructor(){
    }
}