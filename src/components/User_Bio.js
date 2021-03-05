import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function User_Bio(props) {
  const {
    bio,
    company,
    blog,
    html_url,
    location,
    following,
    followers,
    hirable,
    public_repos,
    public_gists,
  } = props.user;
  return (
    <div className="bio">
      <h1>Bio</h1>
      <p className="bio_para">{bio}</p>
      <div>
        <p>
          <span>Company</span>: {company}
        </p>
        <p>
          <span>Blog</span>: <Link to={{ pathname: blog }} target="_blank">{blog}</Link>
        </p>
        <p>
          <span>Github Account</span>: <Link to={{ pathname: html_url }} target="_blank">{html_url}</Link>
        </p>
        <p>
          <span>Location</span>: {location}
        </p>
        <p>
          <span>Hirable</span>:{" "}
          {hirable ? (
            <i className="fas fa-check text-success" />
          ) : (
            <i className="fas fa-times-circle text-danger" />
          )}
        </p>

        <div className="public_repos">
          <p className="repos">
            <span>Public_repos</span>: {public_repos}
          </p>
          <p className="gists">
            <span>Public_gists</span>: {public_gists}
          </p>
          <p className="following">
            <span>following</span>: {following}
          </p>
          <p className="followers">
            <span>followers</span>: {followers}
          </p>
        </div>
      </div>
    </div>
  );
}
