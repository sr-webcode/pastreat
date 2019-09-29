import React from "react";
import HeroSection from "./heroSection";
import ProductsIntro from "./productsIntro";
import RecentProducts from '../../containers/recentProducts';
import AboutSection from './aboutSection'
import CakeCategory from './cakeCategory'

const Content = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProductsIntro />
      <RecentProducts />
      <CakeCategory />
    </main>
  );
};

export default Content;
