import React from "react";
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <ul className="nav nav-pills">
          <li role="presentation">
            <Link to="/category">Home</Link>
          </li>
          <li role="presentation">
            <Link to="/category/gadgets">Gadgets</Link>
          </li>
          <li role="presentation">
            <Link to="/category/body">Body</Link>
          </li>
          <li role="presentation">
            <Link to="/category/food">Food</Link>
          </li>
          <li role="presentation">
            <Link to="/category/toys">Toys</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navigation;
