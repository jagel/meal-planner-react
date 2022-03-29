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


export type IRecipeModel = {
    cuisineId: number;
    recipeId: number;
    name: string;
    description: string;
    ingredients:IRecipeProduct[];
}