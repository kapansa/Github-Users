import React from "react";
import Home from "./components/Home";
import GithubProvider from "./context/GithubActions";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GithubProvider>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route to="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </GithubProvider>
  );
}

export default App;
