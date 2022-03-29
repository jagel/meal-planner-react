import { ILanguageModel } from "../../common/models/lang.model";


export const LanguageData : ILanguageModel[] = [
    { code: 'email', value : 'Correo Electrónico' },
    { code: 'password', value : 'Contraseña' },
    { code : 'invalid email or password', value : 'Verifique Correo Electrónico o Contraseña' },
    { code: 'login', value : 'Iniciar Sesión' },

    { code: 'required field', value : 'Campo requerido' },

    { code: 'home', value : 'Inicio' },
    { code: 'recipe', value : 'Recetario' },
    { code: 'recipe.search', value : 'Buscar Receta' },
    { code: 'recipe.create', value : 'Nueva Receta' },
    { code: 'recipe.update', value : 'Actualizar Receta' },

    { code: 'Home', value : 'Inicio' },
    { code: 'Search', value : 'Busqueda' },
    { code: 'New Recipe', value : 'Nueva Receta' },
    { code: 'Manage', value : 'Administrador' },

    { code: 'Cuisine', value : 'Cocina' },
    { code: 'Name', value : 'Nombre' },
    { code: 'Recipe Name', value : 'Nombre de la receta' },
    { code: 'Recipe Description', value : 'Descripcion' },
    { code: 'ingredients', value : 'Ingredientes' },
    { code: 'units', value : 'Unidades' },

    { code: 'name', value : 'Nombre' },
    { code: 'add', value : 'Agregar' },

    { code: 'save', value:'Guardar' },
]