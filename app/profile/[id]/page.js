"use client";
import { useState } from "react";
import Image from "next/legacy/image";
import Account from "@/components/profile/Account";
import Password from "@/components/profile/Password";
import Order from "@/components/profile/Order";
import Link from "next/link";

const Profile = () => {
  const [tabs, setTabs] = useState(0);
  return (
    <div className="flex flex-col sm:flex-row py-10 min-h-[calc(100vh_-_433px)] container mx-auto items-center md:items-start gap-x-4">
      <div className="w-80">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0">
          <Image
            src="/images/client2.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-full" objectFit="cover"
          />
          <b className="text-2xl mt-1">John Doe</b>
        </div>
        <ul className="text-center font-semibold">
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 0 && "bg-primary text-white"
            }`}
            onClick={() => {
              setTabs(0);
            }}
          >
            <i className="fa fa-home"></i>
            <button className="ml-1">Account</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 1 && "bg-primary text-white"
            }`}
            onClick={() => {
              setTabs(1);
            }}
          >
            <i className="fa fa-key"></i>
            <button className="ml-1">Password</button>
          </li>
          <li
            className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all ${
              tabs === 2 && "bg-primary text-white"
            }`}
            onClick={() => {
              setTabs(2);
            }}
          >
            <i className="fa fa-motorcycle"></i>
            <button className="ml-1">Orders</button>
          </li>
          <Link href="/">
            <li className="border w-full p-3 cursor-pointer hover:bg-primary hover:text-white transition-all">
              <i className="fa fa-sign-out"></i>
              <button className="ml-1">Exit</button>
            </li>
          </Link>
        </ul>
      </div>
      {tabs === 0 ? (
        <Account />
      ) : tabs === 1 ? (
        <Password />
      ) : tabs === 2 ? (
        <Order />
      ) : null}
    </div>
  );
};

export default Profile;
