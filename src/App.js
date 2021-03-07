import React from "react";
import Home from "./components/Home";
import GithubProvider from "./context/GithubActions";
import Navbar from "./components/Navbar";
import AboutApp from "./components/AboutApp";
import UserDetails from "./components/UserDetails";
import Following from "./components/Following";
import Followers from "./components/Followers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GithubProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:login/following" component={Following} />
            <Route exact path="/user/:login/followers" component={Followers} />
            <Route exact path="/about" component={AboutApp} />
            <Route path="/user/:login" exact component={UserDetails} />
          </Switch>
        </Router>
      </div>
    </GithubProvider>
  );
}

export default App;
