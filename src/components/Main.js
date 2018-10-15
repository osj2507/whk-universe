import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";

import "./Main.css";

function Container() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </Switch>
    </>
  );
}

export default Container;
