"use client";
import React, { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = () => {
  const [items, setItems] = useState([
    {
      key: 0,
      img: "/images/f1.png",
      title: "Delicious Pizza",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
    },
    {
      key: 1,
      img: "/images/f2.png",
      title: "Delicious Burger",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 15,
    },
    {
      key: 2,
      img: "/images/f3.png",
      title: "Delicious Pizza",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
    },
    {
      key: 3,
      img: "/images/f1.png",
      title: "Delicious Pizza",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
    },
    {
      key: 4,
      img: "/images/f4.png",
      title: "Delicious Pasta",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
    },
    {
      key: 5,
      img: "/images/f5.png",
      title: "French Fries",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 10,
    },
    
    {
      key: 6,
      img: "/images/f1.png",
      title: "Delicious Pizza",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
    },
    {
      key: 7,
      img: "/images/f2.png",
      title: "Delicious Burger",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 20,
    },
    {
      key: 8,
      img: "/images/f5.png",
      title: "French Fries",
      desc: "Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price: 10,
    },
  ]);
  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl hover:bg-secondary hover:text-white transition-all">
            Burger
          </button>
          <button className="px-6 py-2  rounded-3xl hover:bg-secondary hover:text-white transition-all">
            Pizza
          </button>
          <button className="px-6 py-2  rounded-3xl hover:bg-secondary hover:text-white transition-all">
            Drink
          </button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {items.map((item, index) => (
          <MenuItem key={index} products={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuWrapper;
