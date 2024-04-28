import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
  return (
    <div className="overflow-auto">
      <Title addClass="text-4xl my-3">Order List</Title>
      <table className="w-full text-sm text-center text-gray-500 xl:w-[800px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                IMAGE
              </th>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                TITLE
              </th>
              <th scope="col" className="py-3 px-6">
                PRICE
              </th>
              <th scope="col" className="py-3 px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary border-gray-700 hover:bg-primary ">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                <Image src="/images/f1.png" alt="" width={50} height={50} />
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                63049e92...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                Good Pizza
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                $ 10
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                <button className="btn-primary !bg-red-500 !hover:bg-red-800">Delete</button>
              </td>
            </tr>
            
          </tbody>
        </table>
    </div>
  );
};

export default Products;
