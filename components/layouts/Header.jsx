"use client";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Logo from "../ui/Logo";
import Search from "../ui/Search";

function Header() {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  return (
    <header className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
          style={{ zIndex: "99" }}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/booktable">Book Table</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute  top-8 right-5"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className="transition-all" />
            </button>
          )}
        </nav>
        <div className="flex items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary transition-all me-4" />
          </Link>
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
    </header>
  );
}

export default Header;
