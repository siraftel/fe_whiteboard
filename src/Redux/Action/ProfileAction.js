import axios from "axios";
export const getProfile = () => {
  return (dispatch, getState) => {
    dispatch({ type: "PROFILE_LOADING" });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/profile/`, {
        headers: {
          //  Cara pertama dengan useSelector, state di component/page
          // Authorization: token,
          //  Cara kedua dapatkan token dari getstate
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        // console.log(response);
        dispatch({ type: "GET_PROFILE_USER_ID", payload: response.data.result.userId._id });
        dispatch({ type: "GET_PROFILE_IMAGE", payload: response.data.result.image });
        dispatch({ type: "PROFILE_NAMA", payload: response.data.result.userId.name });
        dispatch({ type: "PROFILE_EMAIL", payload: response.data.result.userId.email });
      })
      .catch((error) => console.log(error.response));
  };
};
export const editProfile = (pict) => {
  return (dispatch, getState) => {
    dispatch({ type: "PROFILE_LOADING" });
    //nanti disini ada values yang diambil dari account.js
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/profile/`, pict, {
        headers: {
          //  Cara pertama dengan useSelector, state di component/page
          // Authorization: token,
          //  Cara kedua dapatkan token dari getstate
          Authorization: `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => console.log(response));
  };
};
export const changeEmail = () => {
  return (dispatch) => {
    dispatch({ type: "PROFILE_LOADING" });
    axios.put(`${process.env.REACT_APP_BASE_URL}/profile/changemail`).then((response) => console.log(response));
  };
};
