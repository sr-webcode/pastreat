import React, { Component } from "react";
import Burger from "./burger";

export class Navigation extends Component {
  render() {
    return (
      <nav className="site-nav">
        <Burger />

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Pastries</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
