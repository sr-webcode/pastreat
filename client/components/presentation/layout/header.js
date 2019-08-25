import React from "react";
import Navigation from "../../containers/navigation";
import Burger from '../../containers/mobileMenu/burger';
import SearchBar from '../../containers/searchBar';



const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <SearchBar />
        <Burger />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
