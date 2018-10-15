import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../pages/Home";
import First from "../pages/First";
import Second from "../pages/Second";
import Third from "../pages/Third";

import "./Main.css";

function Container({ location }) {
  return (
    <>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          classNames={'fade'}
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/first" component={First} />
              <Route path="/second" component={Second} />
              <Route path="/third" component={Third} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default withRouter(Container);
