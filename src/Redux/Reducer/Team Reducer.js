const inititailState = {
  teams: [],
  loading: true,
  error: "",
};

export const teamReducer = (state = inititailState, action) => {
  switch (action.type) {
    case "GET_TEAM_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_TEAM_SUCCES":
      return {
        ...state,
        loading: false,
        teams: action.payload,
      };
    case "GET_TEAM_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
