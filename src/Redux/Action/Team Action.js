import axios from "axios";

export const getTeam = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_TEAM_REQUEST" });
    //API CALL
    console.log(getState());
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/team`)
      .then((response) => {
        const team = response.data.result;
        //FOR TESTING
        console.log(response);
        dispatch({ type: "GET_TEAM_SUCCES", payload: team });
      })
      .catch((error) => {
        dispatch({ type: "GET_TEAM_FAILED", payload: error });
      });
  };
};
