import React from "react";
import HeroSection from "./heroSection";
import ProductsIntro from "./productsIntro";
import RecentProducts from '../../containers/recentProducts';

const Content = () => {
  return (
    <main>
      <HeroSection />
      <ProductsIntro />
      <RecentProducts />
    </main>
  );
};

export default Content;
