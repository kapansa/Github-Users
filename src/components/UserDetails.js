import React, { useContext, useEffect, Fragment } from "react";
import GithubContext from "../context/GithubContext";
import ProfileImage from "./Profile_image";
import UserBio from "./User_Bio";
import Repos from "./Repos";
import "./styles.css";
import Loading from "./Loading";

export default function UserDetails({ match }) {
  const githubContext = useContext(GithubContext);
  const { GetUser, user, repos, GetRepos, isLoading, ClearFollow } = githubContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    GetUser(match.params.login);
    GetRepos(match.params.login);
    ClearFollow();
    //eslint-disable-next-line
  }, []);

  console.log(user);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <div className="user_details">
            <ProfileImage user={user} />
            <UserBio user={user} />
          </div>
          <Repos repos={repos} />
        </div>
      )}
    </Fragment>
  );
}
