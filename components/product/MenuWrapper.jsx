"use client";
import React, { useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";
import productList from "../../mock/db.json";

const MenuWrapper = () => {
  const [items, setItems] = useState(productList);
  const [selectedFilter, setSelectedFilter] = useState("All");
  return (
    <div className="container mx-auto  mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Our Menu</Title>
        <div className="mt-10">
          <button
            onClick={() => {
              setSelectedFilter("All");
            }}
            className={`px-6 py-2 rounded-3xl text-secondary hover:bg-secondary hover:text-white ${
              selectedFilter === "All" ? "bg-secondary text-white" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setSelectedFilter("Burger");
            }}
            className={`px-6 py-2 rounded-3xl hover:bg-secondary hover:text-white transition-all ${
              selectedFilter === "Burger" ? "bg-secondary text-white" : ""
            }`}
          >
            Burger
          </button>
          <button
            onClick={() => {
              setSelectedFilter("Pizza");
            }}
            className={`px-6 py-2 rounded-3xl hover:bg-secondary hover:text-white transition-all ${
              selectedFilter === "Pizza" ? "bg-secondary text-white" : ""
            }`}
          >
            Pizza
          </button>
          <button
            onClick={() => {
              setSelectedFilter("Fries");
            }}
            className={`px-6 py-2 rounded-3xl hover:bg-secondary hover:text-white transition-all ${
              selectedFilter === "Fries" ? "bg-secondary text-white" : ""
            }`}
          >
            Fries
          </button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {items.map((item, index) => (
          <MenuItem key={index} products={item} selected={selectedFilter} />
        ))}
      </div>
    </div>
  );
};

export default MenuWrapper;
