import React, { useContext, useEffect } from "react";
import GithubContext from "../context/GithubContext";
import User from "./User";

function Home() {
  const githubContext = useContext(GithubContext);
  const { GetUsers, users } = githubContext;

  useEffect(() => {
    GetUsers();
    // eslint-disable-next-line
  }, []);

  console.log(users);
  return (
    <div className="Home">
      {users.map((user) => (
        <User src={user.avatar_url} name={user.login} />
      ))}
    </div>
  );
}

export default Home;
