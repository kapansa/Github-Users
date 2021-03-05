import React from "react";
import Button from "@material-ui/core/Button";

export default function User(props) {
  return (
    <div className="user">
      <img src={props.src} alt="" />
      <h1>{props.name}</h1>
      <Button variant="contained" className="user_btn">
        More Details
      </Button>
    </div>
  );
}
