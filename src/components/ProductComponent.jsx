import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const roundUpNearestTen = (num) => {
    return Math.ceil(num / 10) * 10;
  };

  const renderList = products.map((product) => {
    const { id, image, title, price } = product;
    return (
      <div className="flex flex-col min-w-[295px] min-h-[332px] cursor-pointer p-5 justify-between bg-white border-2 rounded drop-shadow-sm border-gray-100 hover:border-green-500 ease-out duration-300">
        <div className="flex items-center justify-center max-h-[208px]">
          <img className="w-auto max-h-full" src={image} alt={title} />
        </div>
        <div className="">
          <h5 className="mb-2 h-7 truncate text-lg tracking-tight text-gray-800">
            {title}
          </h5>
          <p className="text-gray-700 text-xl font-bold">
            ₱{roundUpNearestTen(Math.floor(price * 57))}
          </p>
        </div>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
