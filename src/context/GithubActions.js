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
} from "./Types";
import axios from "axios";

function GithubProvider(props) {
  const initialState = {
    users: [],
    user: [],
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const GetUsers = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data.items });
    setLoading();
  };

  const GetUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USER, payload: res.data });
    setLoading();
  };

  const GetRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );

    dispatch({ type: GET_REPOS, payload: res.data });
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

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        GetUsers,
        GetUser,
        GetRepos,
        ClearUser,
        ClearUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
