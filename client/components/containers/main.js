import React, { Component, Fragment } from "react";

import Header from "../presentation/layout/header";
import Content from '../presentation/layout/content';
import Footer from '../presentation/layout/footer'

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
