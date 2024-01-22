const initialState = {
  recipe: {},
  recipeList: [],
  loading: false,
  error: "",
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_RECIPES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_USER_RECIPES_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: action.payload,
      };

    case "GET_USER_RECIPES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_ALL_RECIPES_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_ALL_RECIPES_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: action.payload,
      };

    case "GET_ALL_RECIPES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ADD_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "ADD_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: [...state.recipeList, action.payload],
      };

    case "ADD_RECIPE_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "EDIT_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "EDIT_RECIPES_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: [...state.recipeList, action.payload],
      };

    case "EDIT_RECIPES_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "DELETE_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "DELETE_RECIPE_SUCCESS":
      return {
        ...state,
        recipeList: state.recipeList.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "DELETE_RECIPE_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_RECIPE_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_RECIPE_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: action.payload,
      };

    case "GET_RECIPE_DETAIL_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default recipeReducer;
