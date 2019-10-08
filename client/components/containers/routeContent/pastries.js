import React, { Component } from "react";
import ProductCategories from "../../presentation/layout/pastries/categoryList";
import ProductList from "../../presentation/layout/pastries/productList";
import HeroSection from "../../presentation/layout/pastries/heroSection";

class Pastries extends Component {
  render() {
    return (
      <section className="pastries">
        <HeroSection />
        <div className="container">
          <aside className="pastry-search-section">
            <ProductCategories />
          </aside>
          <div className="pastry-content">
            <ProductList />
          </div>
        </div>
      </section>
    );
  }
}

export default Pastries;
