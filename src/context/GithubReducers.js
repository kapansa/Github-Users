import {
  SEARCH_USERS,
  SEARCH_USER,
  GET_REPOS,
  CLEAR_USER,
  CLEAR_USERS,
} from "./Types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {},
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default GithubReducer;
