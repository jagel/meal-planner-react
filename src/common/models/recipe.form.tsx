export interface CreateRecipe {
    name:string;
    description:string;
}

export class RecipeProduct {
    productId?:number;
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

export class RecipeModel{
    cuisineId: number;
    recipeId: number;
    name: string;
    description: string;
    recipeProducts: RecipeProduct[];
    steps: StepModel[];
    createdBy: string ='';
    createdDate : Date = new Date();
    updatedBy: string ='';
    updatedDate : Date = new Date();

    constructor() {
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
