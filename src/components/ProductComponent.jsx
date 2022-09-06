import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, image, title, price } = product;
    return (
      <div className="flex flex-col cursor-pointer justify-between p-5 bg-white border-2 rounded drop-shadow-sm border-gray-100 hover:border-green-500 ease-out duration-300">
        <img className="self-center mb-4 h-80" src={image} alt={title} />
        <h5 className="mb-2 h-7 truncate text-lg tracking-tight text-gray-800">
          {title}
        </h5>
        <p className="text-gray-700 text-xl font-bold">${price}</p>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
