import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  useHistory,
  Route,
  Link,
} from "react-router-dom";
import Pages from "./Pages";
import Page from "./Page";
import Home from "./Home";
import About from "./Home";

export default function Container() {
  const history = useHistory();
  const pageRequested = (slug) => {
    history.push("/topic/" + slug);
  };

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/content">Content</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/content">
            <Pages pageRequested={pageRequested} />
          </Route>
          <Route path="/topic/:slug">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
