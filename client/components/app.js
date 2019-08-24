import "../styles/style.scss";
const app = document.getElementById("app");
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Main from "./containers/main";
import { Provider } from 'react-redux'
import globalStore from '../redux-layer/store/index';


class App extends Component {
  render() {
    return (<Provider store={globalStore}>
      <Main />
    </Provider>)
  }
}

ReactDOM.render(<App />, app);
