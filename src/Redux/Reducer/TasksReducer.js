const initialState = {
  task: [],
};

export const getTasks = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
      };
    default:
      return state;
  }
};
