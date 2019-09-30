import React from "react";
import HeroSection from "./heroSection";
import ProductsIntro from "./productsIntro";
import RecentProducts from '../../containers/recentProducts';
import SubscribeSection from './subscribeSection'

const Content = () => {
  return (
    <main>
      <HeroSection />
      <RecentProducts />
      <ProductsIntro />

      <SubscribeSection />
    </main>
  );
};

export default Content;
