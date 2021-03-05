import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <Link to="/">
          <GitHubIcon className="github_icon" />
          Github Users
        </Link>
      </h1>
      <div>
        <Link to="/">Home</Link>
        <Link
          to={{ pathname: "https://github.com/kapansa/Github-Users" }}
          target="_blank"
        >
          Github Repo
        </Link>
        <Link to="/about">About App</Link>
      </div>
    </div>
  );
}
