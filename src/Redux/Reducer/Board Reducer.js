const inititailState = {
  boards: [],
  boardDetail: [],
  members: [],
  member: [],
  loading: true,
  error: "",
};

export const boardReducer = (state = inititailState, action) => {
  switch (action.type) {
    case "GET_BOARDS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARDS_SUCCESS":
      return {
        ...state,
        loading: false,
        boards: action.payload,
      };
    case "GET_BOARDS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BOARD_DETAIL_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARD_DETAIL_SUCCESS":
      return {
        ...state,
        loading: false,
        boardDetail: action.payload,
      };
    case "GET_BOARD_DETAIL_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BOARD_MEMBERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARD_MEMBERS_SUCCESS":
      return {
        ...state,
        loading: false,
        members: action.payload,
      };
    case "GET_BOARD_MEMBERS_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_BOARD_MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOARD_MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        member: action.payload,
      };
    case "GET_BOARD_MEMBER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "POST_BOARD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POST_BOARD_SUCCESS":
      return {
        ...state,
        loading: false,
        boards: [action.payload, ...state.boards],
      };
    case "POST_BOARD_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "POST_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POST_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        boards: [action.payload, ...state.boards],
      };
    case "POST_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "PUT_ARCHIVE_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PUT_ARCHIVE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        boardDetail: [action.payload, ...state.boardDetail],
      };
    case "PUT_ARCHIVE_LIST_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "PUT_INVITE_MEMBER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PUT_INVITE_MEMBER_SUCCESS":
      return {
        ...state,
        loading: false,
        members: [action.payload, ...state.members],
      };
    case "PUT_INVITE_MEMBER_FAILED":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
