import axios from "axios";
export const getUserRegister = (values) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_USER_REGISTER_REQUEST" });
    axios.post(`${process.env.REACT_APP_BASE_URL}/auth/register`, values).then((response) => {
      console.log(response.status);
      const auth = response.data.token;
      dispatch({ type: "GET_USER_TOKEN", payload: auth });
      dispatch({ type: "USER_REGISTER_SUCCES", payload: response.data.result });
    });
  };
};
