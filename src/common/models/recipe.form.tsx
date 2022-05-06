export interface CreateRecipe {
    name:string;
    description:string;
}

export class RecipeProduct {
    productId?:number;
    name: string;
    quantity:number;
    fraction:string;
    meassure:string;
    
    constructor(){
        this.name = '';
        this.quantity = 0;
        this.fraction = '';
        this.meassure = '';
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
    ingredients: RecipeProduct[];
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
        this.ingredients = [];
        this.steps = [];
    }
}


export class RecipeSearchModel{
    name: string;

    constructor() {
        this.name = '';
    }
}
