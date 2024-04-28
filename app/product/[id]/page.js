"use client";
import ProductDetail from "@/components/product/ProductDetail";
import React from "react";

function Page({ params }) {
  console.log(params.id);
  return (
    <>
      <ProductDetail />
    </>
  );
}

export default Page;
