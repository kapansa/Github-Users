import {
  SEARCH_USERS,
  SEARCH_USER,
  GET_REPOS,
  CLEAR_USER,
  CLEAR_USERS,
  ISLOADING,
  SET_FOLLOWING,
  SET_FOLLOWERS,
  CLEAR_FOLLOW,
} from "./Types";

const GithubReducer = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        isLoading: false
      };
    case SEARCH_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false
      };
    case SET_FOLLOWING:
      return {
        ...state,
        following: action.payload,
      };
    case SET_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
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
        isLoading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case ISLOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CLEAR_FOLLOW:
      return {
        ...state,
        following: [],
        followers: [],
      };
    default:
      return state;
  }
};

export default GithubReducer;
