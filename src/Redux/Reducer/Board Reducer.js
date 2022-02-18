const inititailState = {
  board: [],
  loading: true,
  error: "",
};

export const getboardReducer = (state = inititailState, action) => {
  switch (action.type) {
    case "GET_BOARD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARD_SUCCES":
      return {
        ...state,
        loading: false,
        board: action.payload,
      };
    case "GET_BOARD_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
