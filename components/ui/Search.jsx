import Image from "next/legacy/image";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import productItems from "@/mock/db.json";
import { GiCancel } from "react-icons/gi";
import Link from "next/link";

const Search = ({ setIsSearchModal }) => {
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = productItems
    .filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-[rgba(0,0,0,1)] after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="w-full my-10 border-solid border-2 px-3 py-2"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <ul>
              {filteredProducts.map((item, index) => (
                <Link
                  href={`/product/${item.key}`}
                  key={index}
                  onClick={() => {
                    setIsSearchModal(false);
                  }}
                >
                  <li className="flex items-center justify-between cursor-pointer p-1 px-2 hover:bg-primary transition-all">
                    <div className="relative flex">
                      <Image
                        src={item.img}
                        alt=""
                        width={48}
                        height={48}
                        objectFit="cover"
                      />
                    </div>
                    <span className="font-bold">{item.title}</span>
                    <span className="font-bold">${item.price}</span>
                  </li>
                </Link>
              ))}
            </ul>
            <button
              className="absolute  top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
