import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav className="site-nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Pastries</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Cart</a></li>
          <li><a href="#">Search</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
