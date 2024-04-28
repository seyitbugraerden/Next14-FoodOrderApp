import React from "react";
import Title from "../ui/Title";

function Account() {
  return (
    <div>
      <Title addClass="text-4xl my-3">Account Settings</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-6 sm:grid-rows-3  gap-x-4">
        <input
          type="text"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Full Name"
        />
        <input
          type="email"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Email"
        />
        <input
          type="number"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Phone Number"
        />
        <input
          type="text"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Address"
        />
        <input
          type="text"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Job"
        />
        <textarea
          type="text"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Bio"
        />
        <div className="btn-primary w-[120px]">Update</div>
      </div>
    </div>
  );
}

export default Account;
