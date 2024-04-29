"use client";
import ProductDetail from "@/components/product/ProductDetail";
import productList from "../../../mock/db.json";
function Page({ params }) {
  return (
    <>
      <ProductDetail selectedItem={productList[params.id]} />
    </>
  );
}

export default Page;
