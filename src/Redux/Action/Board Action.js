import axios from "axios";

export const getBoard = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_BOARDS_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${id}`, {
        headers: {
          //kalau make local storage
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        //FOR TESTING
        const board = response.data.result;
        console.log(response);
        console.log(board);
        //^^TESTING^^
        dispatch({ type: "GET_BOARDS_SUCCESS", payload: board });
      })
      .catch((error) => {
        dispatch({ type: "GET_BOARDS_FAILED", payload: error });
      });
  };
};

export const getMembers = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_MEMBERS_REQUEST" });
    //API CALL
    //CEK LAGI DISKUSI SAMA BACKEND
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${id}`, {
        headers: {
          //kalau make local storage
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({ type: "GET_MEMBERS_SUCCESS", payload: board });
      })
      .catch((error) => {
        dispatch({ type: "GET_MEMBERS_FAILED", payload: error });
      });
  };
};

export const getMember = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_MEMBER_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${id}`, {
        headers: {
          //kalau make local storage
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({ type: "GET_MEMBER_SUCCESS", payload: board });
      })
      .catch((error) => {
        dispatch({ type: "GET_MEMBER_FAILED", payload: error });
      });
  };
};

export const getBoardDetail = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_BOARD_DETAIL_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/board/${id}`, {
        headers: {
          //kalau make local storage
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        dispatch({ type: "GET_BOARD_DETAIL_SUCCESS", payload: board });
      })
      .catch((error) => {
        dispatch({ type: "GET_BOARD_DETAIL_FAILED", payload: error });
      });
  };
};
