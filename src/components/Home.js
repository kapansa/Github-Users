import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import SearchUser from "./SearchUser";
import User from "./User";
import Loading from "./Loading";

function Home() {
  const githubContext = useContext(GithubContext);
  const { users, ClearUser, isLoading } = githubContext;

  useEffect(() => {
    window.scrollTo(0, 0);
    ClearUser();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <SearchUser />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="Home">
          {users.map((user) => (
            <User
              key={user.id}
              src={user.avatar_url}
              name={user.login}
              login={user.login}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
