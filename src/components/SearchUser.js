import React, { useState, useContext } from "react";
import GithubContext from "../context/GithubContext";
import InfoIcon from '@material-ui/icons/Info';
import "./styles.css";

export default function SearchUser() {
  const githubContext = useContext(GithubContext);
  const { GetUsers, ClearUsers, users } = githubContext;
  const [text, setText] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setIsValid(true);
    }
    setTimeout(() => {
      setIsValid(false);
    }, 2000);
    GetUsers(text);
    setText("");
  };

  return (
    <div className="input_values">
      <form onSubmit={onSubmit} className="form">
        {isValid === true && (
          <div className="alert">
            <InfoIcon /><p>Please enter a username.</p>
          </div>
        )}
        <input
          type="text"
          name="text"
          placeholder="Search for a Users......"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-color btn-block"
        />
        {users.length > 0 && (
          <button className="btn btn-light btn-block" onClick={ClearUsers}>
            Clear users
          </button>
        )}
      </form>
    </div>
  );
}
