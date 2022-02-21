import axios from "axios";

export const getBoard = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_BOARD_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const board = response.data.result;
        //FOR TESTING
        console.log(response);
        dispatch({ type: "GET_BOARD_SUCCES", payload: board });
      })
      .catch((error) => {
        dispatch({ type: "GET_BOARD_FAILED", payload: error });
      });
  };
};
