import React, { useContext, useEffect, Fragment } from "react";
import User from "./User";
import GithubContext from "../context/GithubContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function Following({ match }) {
  const githubContext = useContext(GithubContext);
  const { following, SetFollowing } = githubContext;
  const login = match.params.login;

  useEffect(() => {
    window.scrollTo(0, 0);
    SetFollowing(match.params.login);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {following.length === 0 ? (
        <Loading />
      ) : (
        <Fragment>
        <h1 className="follow"><Link to={`/user/${login}`}>{login}'s</Link> Following:</h1>
          <div className="Home">
            {following.map((user) => (
              <User
                key={user.id}
                src={user.avatar_url}
                name={user.login}
                login={user.login}
              />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}
