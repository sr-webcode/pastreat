import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../redux-layer/actions/index'

class SearchBar extends Component {

  render() {
    const closeSearch = this.props.closeSearch;
    const showSearchBar = this.props.menuState.searchBar;
    return (
      <div className={showSearchBar ? "site-search-bar show" : "site-search-bar"}>
        <input type="text" placeholder="Search for pastries..." />
        <span className="site-close-btn" onClick={closeSearch} />
      </div >
    )
  }
}

const mapStateProps = (state) => {
  return {
    menuState: state.widgets
  }
}


const mapDispatchProps = (dispatch) => {
  return {
    closeSearch: () => dispatch(actions.overlayClick())
  }
}



export default connect(mapStateProps, mapDispatchProps)(SearchBar);
