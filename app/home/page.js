import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Header from "@/components/layouts/Header";
import MenuWrapper from "@/components/product/MenuWrapper";
import ProductDetail from "../../components/product/ProductDetail";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
    </div>
  );
}

export default Home;
