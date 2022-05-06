export interface IRecipeType {
    display:string
    code:string
}

export const recipeIngredientsTypes : Array<IRecipeType> = [
    {display:'Kilogram', code:'Kg'},
    {display: 'Pounds', code:'Pounds'},
    {display: 'Tablespoon',code:'Tbs'},
    {display: 'Teaspoon',code:'Ts'},
    {display: 'Miligrams', code:'mg'},
    {display: 'Mililiter', code:'ml'},
    {display: 'Liter',code:'L'},
    {display: 'Gram', code:'g'}
]

export const fractionsTypes : Array<string> = [
    '',
    '1/8',
    '1/4',
    '1/3',
    '1/2'
]