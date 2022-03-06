import axios from "axios";
// import { useSelector } from "react-redux";
// const token = useSelector((state) => state.getAuthRegister.token);
//   console.log(token);
// const selectTokenValue = (state) => state.value;
// const currentValue = selectTokenValue(store.getState());
// console.log(selectTokenValue);

export const getTasks = () => {
  return (dispatch, getState) => {
    dispatch({ type: "TASKS_LOADING" });
    axios.get(`${process.env.REACT_APP_BASE_URL}/card/userassign/task`).then((response) => console.log(response));
  };
};
