"use client";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import Logo from "../ui/Logo";
import Search from "../ui/Search";

function Header() {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="w-[90%] mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="/home">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="/menu">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="/about">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="/booktable">Book Table</a>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-8 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all me-4" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all me-4" />
          </a>
          <button>
            <FaSearch
              onClick={() => setIsSearchModal(true)}
              className="hover:text-primary transition-all me-4"
            />
          </button>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
          <a href="#">
            <button className="btn-primary hidden sm:inline-block">
              Order Online
            </button>
          </a>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
}

export default Header;
