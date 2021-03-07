import React, { useContext, useEffect, Fragment } from "react";
import User from "./User";
import GithubContext from "../context/GithubContext";
import Loading from "./Loading";

export default function Following({ match }) {
  const githubContext = useContext(GithubContext);
  const { following, SetFollowing } = githubContext;

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
        <h1 style={{textAlign: "center"}}>Following:</h1>
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
