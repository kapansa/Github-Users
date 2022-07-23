import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducers";
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
import axios from "axios";

let clientId;
let clientSecret;

if (process.env.NODE_ENV !== "production") {
  clientId = process.env.CLIENT_ID;
  clientSecret = process.env.CLIENT_SECRET;
} else {
  clientId = process.env.APP_CLIENT_ID;
  clientSecret = process.env.APP_CLIENT_SECRET;
}

function GithubProvider({children}) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
    following: [],
    followers: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const GetUsers = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&per_page=100&client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
  };

  const GetUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({ type: SEARCH_USER, payload: res.data });
  };

  const GetRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
  };

  const SetFollowing = async (login) => {
    const res = await axios.get(
      `https://api.github.com/users/${login}/following?per_page=100&client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({ type: SET_FOLLOWING, payload: res.data });
  };

  const SetFollowers = async (login) => {
    const res = await axios.get(
      `https://api.github.com/users/${login}/followers?per_page=100&client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({ type: SET_FOLLOWERS, payload: res.data });
  };

  const ClearUser = () => {
    dispatch({ type: CLEAR_USER });
  };

  const ClearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  const setLoading = () => {
    dispatch({ type: ISLOADING });
  };

  const ClearFollow = () => {
    dispatch({ type: CLEAR_FOLLOW });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        following: state.following,
        followers: state.followers,
        SetFollowing,
        ClearFollow,
        GetUsers,
        GetUser,
        GetRepos,
        ClearUser,
        ClearUsers,
        SetFollowers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
