import React, { useEffect } from "react";
import { useStoreActions } from "easy-peasy";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "./Pages";
import Page from "./Page";
import Home from "./Home";
import About from "./About";

export default function Container() {
  const loadPages = useStoreActions((actions) => actions.pages.loadPages);

  useEffect(() => {
    loadPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <h1>This is the component</h1>
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

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/content">
            <Pages />
          </Route>
          <Route path="/topic/:slug">
            <Page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
