import React from "react";
import { Link } from "react-router-dom";

export default function AboutApp() {
  return (
    <div className="aboutApp">
      <h1>&copy; Github Users</h1>
      <p>Its a web app for searching Github uses using the Github API.</p>
      <p>
        I created this project by learning how the react Context API works
        togther with the useReducer from{" "}
        <Link
          to={{ pathname: "https://github.com/bradtraversy" }}
          target="_blank"
        >
          @bradtraversy
        </Link>
        .
      </p>
      <p>
        Created by{" "}
        <Link to={{ pathname: "https://www.kapansa.dev/" }} target="_blank">
          Kapansa
        </Link>
        .
      </p>
    </div>
  );
}

// https://github.com/bradtraversy
