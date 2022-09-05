import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { id, title, category } = products[0];

  return (
    <div className="p-6 max-w-sm bg-white border rounded drop-shadow-md border-gray-100">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">
        {title}
      </h5>
      <p className="mb-3 text-gray-400">{category}</p>
      <button className="rounded bg-green-600 hover:bg-green-700 text-white py-1 px-2">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductComponent;
