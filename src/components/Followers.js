import React, { useContext, useEffect, Fragment } from "react";
import User from "./User";
import GithubContext from "../context/GithubContext";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function Followers({ match }) {
  const githubContext = useContext(GithubContext);
  const { followers, SetFollowers } = githubContext;
  const login = match.params.login;

  useEffect(() => {
    window.scrollTo(0, 0);
    SetFollowers(login);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {followers.length === 0 ? (
        <Loading />
      ) : (
        <Fragment>
          <h1 className="follow">
            <Link to={`/user/${login}`}>{login}'s</Link> followers
          </h1>
          <div className="Home">
            {followers.map((user) => (
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
