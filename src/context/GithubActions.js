import React, { useReducer } from "react";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducers";
import { SEARCH_USERS } from "./Types";
import axios from "axios";

function GithubProvider(props) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const GetUsers = async () => {
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}`
    );

    dispatch({ type: SEARCH_USERS, payload: res.data});
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        GetUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
