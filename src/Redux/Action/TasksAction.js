import axios from "axios";

export const getTasks = () => {
  return (dispatch) => {
    dispatch({ type: "TASKS_LOADING" });
    axios.get(`${process.env.REACT_APP_BASE_URL}/card/userassign/task`).then((response) => console.log(response));
  };
};
