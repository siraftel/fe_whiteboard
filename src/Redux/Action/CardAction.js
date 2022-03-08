import axios from "axios";

export const getCards = (listId) => {
    return(dispatch, getState) => {
        dispatch({type: "GET_CARDS_REQUEST"});
        //API CALL
        axios({ method: "GET",
        url: `${process.env.REACT_APP_BASE_URL}/card/${listId}`,
        headers: {
        "Authorization": `Bearer ${getState().getAuthRegister.token}`,}
        })
        .then((response) => {
            const cards = response.data.result;
            dispatch({ type: "GET_CARDS_SUCCES", payload: cards });
        })
        .catch((error) => {
            dispatch({ type: "GET_CARDS_FAILED", payload: error });
        });
    }
}