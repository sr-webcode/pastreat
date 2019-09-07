import React, { Component } from "react";
import { connect } from 'react-redux'
import actions from '../../redux-layer/actions/index'


class Navigation extends Component {

  render() {
    const openCart = this.props.openCart;
    const openSearch = this.props.openSearch;

    return (
      <nav className="site-nav">
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
            <a href="#" onClick={openCart}>Cart</a>
          </li>
          <li>
            <a href="#" onClick={openSearch}>Search</a>
          </li>
        </ul>
      </nav>
    );
  }
}



const mapStateProps = (state) => {
  return {
    menuState: state.widgets
  }
}


const mapDispatchProps = (dispatch) => {
  return {
    openCart: () => dispatch(actions.openCart()),
    openSearch: () => dispatch(actions.openSearch()),
  }
}

export default connect(mapStateProps, mapDispatchProps)(Navigation);
