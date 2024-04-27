import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Header from "@/components/layouts/Header";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Campaigns />
    </div>
  );
}

export default Home;
