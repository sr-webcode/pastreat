import React, { Component } from 'react'
import { connect } from 'react-redux'


class SearchBar extends Component {
  render() {
    const showSearchBar = this.props.menuState.searchBar;
    console.log(`re rendered!`)
    return (
      <div className={showSearchBar ? "site-search-bar show" : "site-search-bar"}>
        <input type="text" placeholder="Search for pastries..." />
        <span className="site-close-btn" />
      </div >
    )
  }
}

const mapStateProps = (state) => {
  return {
    menuState: state.widgets
  }
}


export default connect(mapStateProps)(SearchBar);
