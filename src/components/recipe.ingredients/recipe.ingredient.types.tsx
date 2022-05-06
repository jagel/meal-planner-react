export interface IRecipeType {
    display:string
    code:string
}

export const recipeIngredientsTypes : IRecipeType[] = [
    {display:'Kilogram', code:'Kg'},
    {display: 'Pounds', code:'Pounds'},
    {display: 'Tablespoon',code:'Tbs'},
    {display: 'Teaspoon',code:'Ts'},
    {display: 'Miligrams', code:'mg'},
    {display: 'Mililiter', code:'ml'},
    {display: 'Liter',code:'L'},
    {display: 'Gram', code:'g'}
]