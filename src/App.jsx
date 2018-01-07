import ProductsContainer from "./ProductsContainer.jsx";
import Navigation from "./Navigation.jsx";
import ProductDetails from "./ProductDetails.jsx";
import logo from "./amazon-logo.png";
import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <div style={{ display: "block" }}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mock Amazon Launchpad</h2>
        </div>
        <p className="App-intro" />
      </div>
      <div style={{padding: "10px",width: "100%",background: "#f0f0f0"}}>
      
      <Navigation />
     
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        <Route exact path="/" render={(props) => ( <ProductsContainer category="home"/> )} />
        <Route exact path="/gadgets" render={(props) => ( <ProductsContainer category="gadgets"/> )} />
        <Route exact path="/body" render={(props) => ( <ProductsContainer category="body"/> )} />
        <Route exact path="/food" render={(props) => ( <ProductsContainer category="food"/> )} />
        <Route exact path="/toys" render={(props) => ( <ProductsContainer category="toys"/> )} />            
      </div>
    </div>
  </Router>
);

export default App;
