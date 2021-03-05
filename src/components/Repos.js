import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Repos(props) {
  return (
    <div className="all_repos">
      <h1>Recently Created Public Repos</h1>
      {props.repos.map((repo) => (
        <p>
          <Link to={{ pathname: repo.html_url }} target="_blank">
            {repo.name}
          </Link>
        </p>
      ))}
    </div>
  );
}
