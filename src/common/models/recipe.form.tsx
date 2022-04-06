export interface CreateRecipe {
    name:string;
    description:string;
}

export type IRecipeProduct = {
    productId:number;
    name: string;
    quantity:number;
    fraction:string;
    meassure:string;
}

export interface StepModel{
    order:number;
    description:string;
}

export type IRecipeModel = {
    cuisineId: number;
    recipeId: number;
    name: string;
    description: string;
    ingredients:IRecipeProduct[];
    steps:StepModel[]
}

export class RecipeModel{
    cuisineId: number;
    recipeId: number;
    name: string;
    description: string;
    ingredients: IRecipeProduct[];
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
