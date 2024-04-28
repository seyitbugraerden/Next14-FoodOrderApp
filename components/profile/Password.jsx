import React from "react";
import Title from "../ui/Title";

function Password() {
  return (
    <div>
      <Title addClass="text-4xl my-3">Pasword Settings</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 grid-rows-6 gap-4">
        <input
          type="password"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Your Password"
        />
        <input
          type="password"
          className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4 lg:w-[400px]"
          placeholder="Confirm Your New Password"
        />
        <div className="btn-primary w-[110px] h-[45px]">Update</div>
      </div>
    </div>
  );
}

export default Password;
