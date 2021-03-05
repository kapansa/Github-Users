import React from "react";
import Home from "./components/Home";
import GithubProvider from "./context/GithubActions";
import Navbar from "./components/Navbar";
import AboutApp from "./components/AboutApp";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GithubProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutApp} />
            <Route path="/user/:login" exact component={UserDetails} />
          </Switch>
        </Router>
      </div>
    </GithubProvider>
  );
}

export default App;
