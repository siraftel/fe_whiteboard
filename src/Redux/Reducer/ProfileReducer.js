const initialState = {
  loading: true,
  userId: "",
  image: "",
};
export const getProfile = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_PROFILE_USER_ID":
      return {
        ...state,
        userId: action.payload,
      };
    case "GET_PROFILE_IMAGE":
      return {
        ...state,
        loading: true,
        image: action.payload,
      };
    default:
      return state;
  }
};
