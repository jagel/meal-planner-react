export interface IRecipeType {
    display:string
    code:string
}

export const recipeIngredientsTypes : Array<IRecipeType> = [
    {display: 'No unit', code:''},
    {display: 'Unit', code:'Unit'},
    {display: 'Cup', code:'Cup'},
    {display:'Kilogram', code:'Kg'},
    {display: 'Pounds', code:'Pounds'},
    {display: 'Tablespoon',code:'Tbsp'},
    {display: 'Teaspoon',code:'Tsp'},
    {display: 'Miligrams', code:'mg'},
    {display: 'Mililiter', code:'ml'},
    {display: 'Liter',code:'L'},
    {display: 'Gram', code:'g'},
]

export const fractionsTypes : Array<string> = [
    '',
    '1/8',
    '1/4',
    '1/3',
    '1/2',
    '2/3'
]