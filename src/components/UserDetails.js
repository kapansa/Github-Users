import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import ProfileImage from "./Profile_image";
import UserBio from "./User_Bio";
import Repos from "./Repos";
import "./styles.css";
import Loading from "./Loading";

export default function UserDetails({ match }) {
  const githubContext = useContext(GithubContext);
  const { GetUser, user, repos, GetRepos } = githubContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    GetUser(match.params.login);
    GetRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      {user.length === 0 ? (
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
    </div>
  );
}