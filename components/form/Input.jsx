import React from "react";
import Title from "../ui/Title";

const Input = () => {
  return (
    <div className="w-full container mx-auto py-16">
      <Title addClass="text-[2.5rem]">Book A Table</Title>
      <div className="grid grid-cols-2 gap-6 mt-6">
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
            <option selected disabled value="">
              How Many Persons?
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input
            type="date"
            className="border-solid border-[1px] py-[12px] px-6 rounded-md focus:outline-0 focus:border-1 border-[#999] color-black mb-4"
          />
          <div className="btn-primary w-[150px]">
            Book now
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98139.243189768!2d30.46241416802413!3d39.76544582250223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cc3e08220c0e5f%3A0xbc89395938049a08!2sEski%C5%9Fehir!5e0!3m2!1str!2str!4v1714245493101!5m2!1str!2str"
          width="100%"
          height="85%"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-xl"
        ></iframe>
      </div>
    </div>
  );
};

export default Input;
