import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductPage = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, description, category, rate } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err ", err);
      });

    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    console.log("i fire once");
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const roundUpNearestTen = (num) => {
    return Math.ceil(num / 10) * 10;
  };

  return (
    <div className="grid gap-5 mx-4 my-10 p-5 max-w-[1280px] grid-cols-1 md:grid-cols-2 border-2 rounded drop-shadow-sm border-gray-100">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="flex items-center justify-center max-h-[500px]">
            <img className="w-auto max-h-full" src={image} alt={title} />
          </div>
          <div className="flex flex-col h-full">
            <h5 className="text-3xl tracking-tight">{title}</h5>
            <p>{rate}</p>
            <p className="text-gray-400 mb-1">{category}</p>
            <p className="mb-2 text-3xl font-bold text-green-700">
              ₱{roundUpNearestTen(Math.floor(price * 57))}
            </p>
            <div className="mb-2">
              <p className="font-bold">Description</p>
              <p>{description}</p>
            </div>
            <button
              className="rounded bg-green-700 text-white py-3 px-6 m-1 hover:bg-green-600 sm:w-40"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
