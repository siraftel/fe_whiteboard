const initialState = {
  User: {},
  Loading: true,
  error: "",
  Token: "",
};

export const getAuthRegister = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_REGISTER_REQUEST":
      return {
        ...state,
        Loading: true,
      };

    case "USER_REGISTER_SUCCES":
      return {
        ...state,
        Loading: false,
        User: action.payload,
      };
    case "USER_REGISTER_FAILED":
      return {
        ...state,
        Loading: false,
        error: action.payload,
      };
    case "GET_USER_TOKEN":
      return {
        ...state,
        Loading: false,
        Token: action.payload,
      };
    case "USER_LOGIN_SUCCES":
      return {
        ...state,
        Loading: false,
        User: action.payload,
      };

    default:
      return state;
  }
};
