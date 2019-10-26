import React, { Component, Fragment } from "react";
import Header from "../presentation/layout/header";
import Content from "../presentation/layout/content";
import Footer from "../presentation/layout/footer";
import Cart from "./cart";
import MobileMenu from "./mobileMenu/menu";
import Overlay from "../misc/overlay";
import { Provider } from "react-redux";
import globalStore from "../../redux-layer/store/index";
import { BrowserRouter, Route } from 'react-router-dom'


class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={globalStore}>
          <Cart />
          <Overlay />
          <MobileMenu />
          <Header />
          <Content />
          <Footer />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Main;
