import { GET_RECIPES, GET_RECIPES_BY_NAME, GET_RECIPE_DETAIL, GET_TYPES, ASC, DESC, MINMAX, MAXMIN, FILTER_BY_DIET, RESET } from "../actions/RecipesActions";

const INITIAL_STATE = {
    recipes: [],
    recipeDetail: [],
    diets: [],
    recipesOriginal: []
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_RECIPES:
            return {
                ...state, 
                recipes: action.payload,
                recipesOriginal: action.payload,
                recipeDetail: []
            };

        case GET_RECIPES_BY_NAME: 
            return {
                ...state, 
                recipes: action.payload
            };

        case GET_RECIPE_DETAIL: 
            return {
                ...state, 
                recipeDetail: action.payload
            };

        case GET_TYPES: 
            return { 
                ...state, 
                diets: action.payload 
            };

        case ASC:
            return {
                ...state,
                recipes: state.recipes.filter((b) => b.title !== null).sort((a, b) =>(a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1))
            };

        case DESC:
            return {
                ...state,
                recipes: state.recipes.filter((b) => b.title !== null).sort((a, b) =>(a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1))
            };

        case MINMAX:
            return {
                ...state,
                recipes: state.recipes
                    .filter((b) => b.spoonacularScore !== null)
                    .sort((a, b) => (a.spoonacularScore > b.spoonacularScore ? 1 : -1))
            };

        case MAXMIN:
            return {
                ...state,
                recipes: state.recipes
                    .filter((b) => b.spoonacularScore !== null)
                    .sort((a, b) => (a.spoonacularScore < b.spoonacularScore ? 1 : -1))
            };

        case FILTER_BY_DIET:
            if (action.payload === 'all') {
                return {
                    ...state,
                    recipes: state.recipesOriginal
                }
            };
            state.recipes = state.recipesOriginal
            let recipesFilter = [];
            recipesFilter = state.recipes.filter(e => e.diets? e.diets.map(e => e.category.toLowerCase()).includes(action.payload) : e.dietaTypes? e.dietaTypes.map(e => e.category.toLowerCase()).includes(action.payload):[])

            return {
                ...state, 
                recipes: recipesFilter
            }

        case RESET:
            return {
                ...state,
                recipes: state.recipesOriginal
            };

        default:
            return { ...state };
    }
}

export default reducer;