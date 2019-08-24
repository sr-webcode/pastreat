import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div className="site-search-bar">
        <input type="text" placeholder="Search for pastries..." />
        <span className="site-close-btn" />
      </div>
    )
  }
}

export default SearchBar
