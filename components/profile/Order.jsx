"use client";
import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="overflow-auto">
      <Title addClass="text-4xl my-3">Order List</Title>
      <table className="text-sm text-center text-gray-500 xl:w-[800px] ">
        <thead className="text-xs text-gray-400 uppercase bg-gray-700">
          <tr>
            <th scope="col" className="py-3 px-6">
              ID
            </th>
            <th scope="col" className="py-3 px-6">
              ADRESS
            </th>
            <th scope="col" className="py-3 px-6">
              DATE
            </th>
            <th scope="col" className="py-3 px-6">
              TOTAL
            </th>
            <th scope="col" className="py-3 px-6">
              STATUS
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <span>63107...</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Adana
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              01-09-2022
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              preparing
            </td>
          </tr>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <span>63107...</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Adana
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              01-09-2022
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              preparing
            </td>
          </tr>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <span>63107...</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Adana
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              01-09-2022
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              preparing
            </td>
          </tr>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <span>63107...</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Adana
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              01-09-2022
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              preparing
            </td>
          </tr>
          <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
              <span>63107...</span>
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              Adana
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              01-09-2022
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              $18
            </td>
            <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
              preparing
            </td>
          </tr> 
        </tbody>
      </table>
    </div>
  );
};

export default Order;
