import React, { Component, Fragment } from "react";
import Header from "../presentation/layout/header";
import Content from '../presentation/layout/content';
import Footer from '../presentation/layout/footer'
import Cart from './cart';
import MobileMenu from './mobileMenu/menu'
import Overlay from '../misc/overlay';


class Main extends Component {
  render() {
    return (
      <Fragment>
        <Cart />
        <Overlay />
        <MobileMenu />
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
