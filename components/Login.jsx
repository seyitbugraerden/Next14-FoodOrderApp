import Link from "next/link";
import React from "react";
import Title from "./ui/Title";

function Login() {
  return (
    <div className="grid justify-center items-center py-24 place-items-center">
      <Title addClass="text-5xl pb-10">Login</Title>
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
      <div className="btn-primary !bg-secondary uppercase w-[200px] sm:w-[500px] my-2 text-center">
        <i className="fa fa-github mr-2 text-lg"></i> Github
      </div>
      <Link href="/" className="underline place-items-end">
        Do you no have an account?
      </Link>
    </div>
  );
}

export default Login;
