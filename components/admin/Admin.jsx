import Link from "next/link";
import React from "react";
import Title from "../ui/Title";

function Admin() {
  return (
    <div className="grid justify-center items-center py-24 place-items-center">
      <Title addClass="text-5xl pb-10">Admin</Title>
      <input
        type="text"
        className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 sm:w-[500px]"
        placeholder="Your Name"
      />
      <input
        type="password"
        className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 sm:w-[500px]"
        placeholder="Your Password"
      />
      <div className="btn-primary uppercase w-[200px] sm:w-[500px] my-2 text-center">
        LOGIN
      </div>
    </div>
  );
}

export default Admin;
