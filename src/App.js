import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Notification from "./components/Notification.js";
import Header from "./components/Header.js";
import Container from "./components/Main.js";
import Footer from "./components/Footer.js";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Notification />
          <Header />
          <Container />
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
