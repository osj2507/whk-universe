import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../pages/Home";
import Planet from "../pages/Planet";

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
              <Route exact path="/planet/earth" component={Planet} />
              <Route exact path="/planet/mars" component={Planet} />
              <Route exact path="/planet/venus" component={Planet} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default withRouter(Container);
