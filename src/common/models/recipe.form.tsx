import { AuditFields } from "./form-models";

export interface CreateRecipe {
    name:string;
    description:string;
}

export class RecipeProduct {
    recipeProductId?:number;
    name: string;
    quantity:number;
    fractionary:string;
    measureType:string;
    
    constructor(){
        this.name = '';
        this.quantity = 0;
        this.fractionary = '';
        this.measureType = '';
    }
}

export interface StepModel{
    order:number;
    description:string;
}

export class RecipeModel extends AuditFields{
    cuisineId: number;
    recipeId: number;
    name: string;
    description: string;
    recipeProducts: RecipeProduct[];
    steps: StepModel[];
    constructor() {
        super()
        this.cuisineId = 0;
        this.recipeId = 0;
        this.name = '';
        this.description = '';
        this.recipeProducts = [];
        this.steps = [];
    }
}


export class RecipeSearchModel{
    name: string;

    constructor() {
        this.name = '';
    }
}
