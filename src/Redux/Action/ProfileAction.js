import axios from "axios";

export const getProfile = () => {
  return (dispatch) => {
    dispatch({ type: "PROFILE_LOADING" });
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/profile/`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error.response));
  };
};
export const editProfile = () => {
  return (dispatch) => {
    dispatch({ type: "PROFILE_LOADING" });
    //nanti disini ada values yang diambil dari account.js
    axios.put(`${process.env.REACT_APP_BASE_URL}/profile/`).then((response) => console.log(response));
  };
};
export const changeEmail = () => {
  return (dispatch) => {
    dispatch({ type: "PROFILE_LOADING" });
    axios.put(`${process.env.REACT_APP_BASE_URL}/profile/changemail`).then((response) => console.log(response));
  };
};
