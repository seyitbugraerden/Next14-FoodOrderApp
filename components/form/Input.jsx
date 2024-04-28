import React from "react";

const Input = () => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4"
        placeholder="Your Name"
      />
      <input
        type="number"
        className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4"
        placeholder="Phone Number"
      />
      <input
        type="email"
        className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black placeholder-[black] mb-4"
        placeholder="Your Email"
      />
      <select className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black mb-4">
        <option disabled>
          How Many Persons?
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="datetime-local"
        className="border-solid border-[1px] py-[12px] ps-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black mb-4"
      />
      <div className="btn-primary w-[150px]">Book now</div>
    </div>
  );
};

export default Input;
