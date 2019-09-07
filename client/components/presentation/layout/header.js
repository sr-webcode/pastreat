import React from "react";
import Navigation from "../../containers/navigation";
import Burger from '../../containers/mobileMenu/burger';
import SearchBar from '../../containers/searchBar';



const Header = () => {
  return (
    <header className="site-header">
      <SearchBar />
      <div className="container">
        <Burger />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;