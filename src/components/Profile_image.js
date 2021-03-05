import React from "react";
import "./styles.css";

export default function Profile_image(props) {
  return (
    <div className="profile_image">
      <img src={props.user.avatar_url} alt="" />
      <h1>{props.user.name}</h1>
    </div>
  );
}
