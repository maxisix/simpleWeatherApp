import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Nav from "./Nav";
import Forecast from "./Forecast";
import Detail from "./Detail";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav />
          <Route exact path="/" component={App} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/detail/:city" component={Detail} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
