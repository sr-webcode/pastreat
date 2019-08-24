import React, { Component, Fragment } from "react";
import Header from "../presentation/layout/header";
import Content from '../presentation/layout/content';
import Footer from '../presentation/layout/footer'
import Cart from './cart';
import { Provider } from 'react-redux'
import globalStore from '../../redux-layer/store/index';


class Main extends Component {
  render() {
    return (
      <Provider store={globalStore}>
        {/* <Cart /> */}
        <Header />
        <Content />
        <Footer />
      </Provider>
    );
  }
}

export default Main;
