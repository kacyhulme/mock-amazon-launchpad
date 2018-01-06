import ProductsContainer from "./ProductsContainer.jsx";
import Navigation from "./Navigation.jsx";
import logo from "./amazon-logo.png";
import "./App.scss";

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Gadgets</div>,
    main: () => (
      <div>
      <h2>Gadgets</h2>
        <ProductsContainer type="gadget"/>
      </div>
    )
  },
  {
    path: "/body",
    sidebar: () => <div>body</div>,
    main: () => (
      <div>
      <h2>Body</h2>
      <ProductsContainer type="body"/>
      </div>
    )
  },
  {
    path: "/food",
    sidebar: () => <div>food</div>,
    main: () => (
      <div>
      <h2>Food</h2>
        <ProductsContainer type="food"/>
      </div>
    )
  }
];

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
      <div
        style={{
          padding: "10px",
          width: "100%",
          background: "#f0f0f0"
        }}
      >
        <Navigation />

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>

      <div style={{ flex: 1, padding: "10px" }}>
        {routes.map((route, index) => (
          // Render more <Route>s with the same paths as
          // above, but different components this time.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </div>
  </Router>
);

export default App;