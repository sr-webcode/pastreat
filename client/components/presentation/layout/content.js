import React from "react";
import HeroSection from "./heroSection";
import ProductsIntro from "./productsIntro";
import RecentProducts from "../../containers/recentProducts";
import AboutSection from "./aboutSection";

const Content = () => {
  return (
    <main>
      <HeroSection />
      <ProductsIntro />
      <RecentProducts />
      <AboutSection />
    </main>
  );
};

export default Content;
