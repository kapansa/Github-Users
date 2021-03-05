import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1>
        <GitHubIcon className="github_icon"/>
        Github Users
      </h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">About App</Link>
        <Link to="/">About Me</Link>
      </div>
    </div>
  );
}
