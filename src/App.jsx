import Category from "./components/Category.jsx";
import Navigation from "./components/Navigation.jsx";
import Product from "./components/Product.jsx";
import logo from "./assets/amazon-logo.png";
import "./styles/App.scss";

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div style={{ display: "block" }}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro" />
      </div>
      <div style={{ padding: "10px", width: "100%", background: "#f0f0f0" }}>
        <Navigation />
      </div>
      <div>
        <Route exact path="/category" component={Category} />
        <Route exact path="/category/:category" component={Category} />
        <Route path="/products/:id" component={Product} />
      </div>
    </div>
  </Router>
);

export default App;
