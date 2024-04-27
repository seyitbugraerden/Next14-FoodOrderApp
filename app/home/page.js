import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Input from "@/components/form/Input";
import Header from "@/components/layouts/Header";
import MenuWrapper from "@/components/product/MenuWrapper";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Input />
    </div>
  );
}

export default Home;
