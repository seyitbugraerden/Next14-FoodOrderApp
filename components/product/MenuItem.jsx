import Image from "next/legacy/image";
import Link from "next/link";
import { RiShoppingCart2Fill } from "react-icons/ri";
const MenuItem = ({ product, selected }) => {
  return (
    <>
      {selected !== "" &&
        (products.title.includes(selected) ? (
          <div className="bg-secondary rounded-3xl my-2 zoom-scale">
            <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
              <div className="relative w-36 h-36 hover:scale-110 transition-all">
                <Image
                  src={products.img}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="p-[25px] text-white">
              <h4 className="text-xl font-semibold">{products.title}</h4>
              <p className="text-[15px] text-justify">{products.desc}</p>
              <div className="flex justify-between items-center mt-4">
                <span>${products.price}</span>
                <Link href="/product/12">
                  <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
                    <RiShoppingCart2Fill />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : null)}
      {selected === "All" && (
        <div className="bg-secondary rounded-3xl my-2 zoom-scale">
          <div className="w-full bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl">
            <div className="relative w-36 h-36 hover:scale-110 transition-all">
              <Image
                src={product.img}
                alt=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="p-[25px] text-white">
            <h4 className="text-xl font-semibold">{product.title}</h4>
            <p className="text-[15px] text-justify">{product.desc}</p>
            <div className="flex justify-between items-center mt-4">
              <span>${product.price}</span>
              <Link href={`/product/${product.key}`}>
                <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
                  <RiShoppingCart2Fill />
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuItem;
