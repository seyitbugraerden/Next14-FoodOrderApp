import React from "react";
import Title from "../ui/Title";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px] ">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div className="hover:text-primary cursor-pointer">
                <i className="fa fa-map-marker"></i>
                <span className="inline-block ml-2">Location</span>
              </div>
              <div className="hover:text-primary cursor-pointer">
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Call +01 1234567890</span>
              </div>
              <div className="hover:text-primary cursor-pointer">
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Link href="/">
              <Title addClass="text-[38px]">Feane</Title>
            </Link>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <Link
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:bg-primary hover:text-secondary"
              >
                <i className="fa fa-facebook "></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:bg-primary hover:text-secondary"
              >
                <i className="fa fa-twitter "></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:bg-primary hover:text-secondary"
              >
                <i className="fa fa-linkedin "></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:bg-primary hover:text-secondary"
              >
                <i className="fa fa-instagram "></i>
              </Link>
              <Link
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full hover:bg-primary hover:text-secondary"
              >
                <i className="fa fa-pinterest "></i>
              </Link>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2022 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
