const inititailState = {
  team: [],
  loading: true,
  error: "",
};

export const getTeamReducer = (state = inititailState, action) => {
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
        team: action.payload,
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
