const initialState = {
  user: {},
  // edituser: [],
  loading: false,
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case "REGISTER_FAILED":
    case "LOGIN_FAILED":
    case "GET_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "EDIT_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };

      case "EDIT_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

      case "EDIT_USER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
