import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "../pages/Main";
import About from "../pages/About";
import Details from "../pages/Details";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/details/:user/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
