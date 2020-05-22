import React from "react";
import ReactDOM from "react-dom";
import Layout from "./components/Layout"
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/About";
import Works from "./components/Works";
import Top from "./components/Top";

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Top}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/works" component={Works}></Route>
    </Layout>
  </Router>, app);