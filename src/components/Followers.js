import React, { useContext, useEffect, Fragment } from "react";
import User from "./User";
import GithubContext from "../context/GithubContext";
import Loading from "./Loading";

export default function Followers({ match }) {
  const githubContext = useContext(GithubContext);
  const { followers, SetFollowers } = githubContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    SetFollowers(match.params.login);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {followers.length === 0 ? (
        <Loading />
      ) : (
        <Fragment>
          <h1 style={{ textAlign: "center" }}>Followers</h1>
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
