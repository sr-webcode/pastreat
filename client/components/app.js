import "../styles/style.scss";
const app = document.getElementById("app");
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./containers/main";

class App extends Component {
  render() {
    return (
        <Main />
      );
  }
}

ReactDOM.render(<App />, app);
