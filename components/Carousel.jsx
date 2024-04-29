"use client";
import Image from "next/legacy/image";
import React, { useState } from "react";
import Title from "./ui/Title";
import headerTitle from "@/mock/header.json";

const Carousel = () => {
  const [perBox, setPerBox] = useState(headerTitle);
  const [perItem, setPerItem] = useState(0);
  return (
    <div className="h-screen w-full container mx-auto" style={{ zIndex: "-9" }}>
      <div className="absolute top-[88px] left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="relative text-white top-56 flex flex-col items-start gap-y-10 ">
        {perBox.map((item, index) => (
          <div
            className={`absolute md:w-screen slide-left  ${
              index !== perItem ? "slide-right" : ""
            }`}
            key={index}
          >
            <Title addClass="text-6xl">{item.Title}</Title>
            <p className="text-sm sm:w-2/5 w-full mb-5 pr-36">{item.Parag}</p>
            <button className="btn-primary">Order Now</button>
          </div>
        ))}
        <div className="flex flex-row gap-2 mt-96">
          {perBox.map((item, index) => (
            <span
              key={index}
              className={`w-[10px] h-[10px] bg-white rounded-full hover:bg-primary cursor-pointer inline-block  ${
                perItem === index ? "!bg-primary scale-[1.6]" : ""
              }`}
              onClick={() => {
                setPerItem(index);
              }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
