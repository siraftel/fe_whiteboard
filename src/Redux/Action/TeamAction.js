import axios from "axios";

export const getTeam = () => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_TEAM_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/team`, {
        headers: {
          Authorization : `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        const team = response.data.result;
        dispatch({ type: "GET_TEAM_SUCCES", payload: team });
      })
      .catch((error) => {
        dispatch({ type: "GET_TEAM_FAILED", payload: error });
      });
  };
};

export const postTeam = (data) => {
  return (dispatch, getState) => {
    dispatch({ type: "POST_TEAM_REQUEST" });
    //API CALL
    axios({ method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/team`,
      data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
      .then((response) => {
        const team = response.data.result;
        dispatch({ type: "POST_TEAM_SUCCES", payload: team });
      })
      .catch((error) => {
        dispatch({ type: "POST_TEAM_FAILED", payload: error });
      });
  };
};

export const getTeamDetail = (teamId) => {
  return (dispatch, getState) => {
    dispatch({ type: "GET_TEAM_DETAIL_REQUEST" });
    //API CALL
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/team/detail/${teamId}`, {
        headers: {
          "Authorization": `Bearer ${getState().getAuthRegister.token}`,
        },
      })
      .then((response) => {
        const teamDetail = response.data.result;
        dispatch({ type: "GET_TEAM_DETAIL_SUCCES", payload: teamDetail });
      })
      .catch((error) => {
        dispatch({ type: "GET_TEAM_DETAIL_FAILED", payload: error });
      });
  };
};
