const inititailState = {
    cards: [],
    cardDetail: [],
}
export const cardReducer = (state = inititailState, action) => {
    switch(action.type) {
        case "GET_CARDS_REQUEST":
        return {
            ...state,
            loading: true,
        };
        case "GET_CARDS_SUCCESS":
        return {
            ...state,
            error: "",
            loading: false,
            cards: action.payload,
        };
        case "GET_CARDS_FAILED":
        return {
            ...state,
            loading: false,
            error: action.payload,
        };
        default:
            return state;
        }
}