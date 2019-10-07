import React, { Component } from "react";
import { connect } from 'react-redux'
import actions from '../../redux-layer/actions/index';
import { Link } from 'react-router-dom'


class Navigation extends Component {

  render() {
    const openCart = this.props.openCart;
    const openSearch = this.props.openSearch;

    return (
      <nav className="site-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pastries">Pastries</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="#" onClick={openCart}>Cart</Link>
          </li>
          <li>
            <Link to="#" onClick={openSearch}>Search</Link>
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
