import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <ul className="nav nav-pills">
          <li role="presentation">
            <Link to="/">Home</Link>
          </li>
          <li role="presentation">
            <Link to="/gadgets">Gadgets</Link>
          </li>
          <li role="presentation">
           <Link to="/body">Body</Link>
          </li>
          <li role="presentation">
            <Link to="/food">Food</Link>
          </li>
           <li role="presentation">
            <Link to="/toys">Toys</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;