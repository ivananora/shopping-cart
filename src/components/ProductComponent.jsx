import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const roundUpNearestTen = (num) => {
    return Math.ceil(num / 10) * 10;
  };

  const renderList = products.map((product) => {
    const {
      id,
      image,
      title,
      price,
      category,
      rating: { rate },
    } = product;
    return (
      <Link
        to={`/product/${id}`}
        className="flex flex-col min-w-[295px] min-h-[332px] cursor-pointer p-5 justify-between bg-white border-2 rounded drop-shadow-sm border-gray-100 hover:border-green-500 ease-out duration-300"
      >
        <div className="flex items-center justify-center max-h-[208px]">
          <img className="w-auto max-h-full" src={image} alt={title} />
        </div>
        <div className="mt-4">
          <h5 className="h-7 truncate text-lg tracking-tight">{title}</h5>
          <p className="text-gray-400 mb-1">{category}</p>
          <p className="text-xl font-bold mb-1 text-green-700">
            ₱{roundUpNearestTen(Math.floor(price * 57))}
          </p>
          <div className="flex">
            <AiFillStar size="22" className="mr-1 text-yellow-400" />
            <p>{rate.toFixed(1)}</p>
          </div>
        </div>
      </Link>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
