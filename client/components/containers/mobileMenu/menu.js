import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../../redux-layer/actions/index";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

class MobileMenu extends Component {
  render() {
    const shouldOpen = this.props.showMenu.mobileMenu;
    return (
      <div
        className={shouldOpen ? "site-mobile-menu open" : "site-mobile-menu"}
      >
        <span className="site-close-btn" onClick={this.props.burgerToggle} />
        <ul className="site-mobile-menu-list">
          <li>
            <Link to="/" onClick={this.props.burgerToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pastries" onClick={this.props.burgerToggle}>
              Pastries
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={this.props.burgerToggle}>
              Services
            </Link>
          </li>
          <li>
            <a href="#" onClick={this.props.openCart}>
              Cart
            </a>
          </li>
          <li>
            <a href="#" onClick={this.props.openSearch}>
              Search
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateProps = state => {
  return {
    showMenu: state.widgets
  };
};

const mapDispatchProps = dispatch =>
  bindActionCreators(
    {
      burgerToggle: actions.burgerToggle,
      openCart: actions.openCart,
      openSearch: actions.openSearch
    },
    dispatch
  );

export default connect(
  mapStateProps,
  mapDispatchProps
)(MobileMenu);
