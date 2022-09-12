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
  const { image, title, price, description } = product;
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
    <div className="flex flex-col h-[36rem] w-96 min-w-[295px] min-h-[332px] p-5 justify-between bg-white border-2 rounded drop-shadow-sm border-gray-100">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="flex items-center justify-center max-h-[208px]">
            <img className="w-auto max-h-full" src={image} alt={title} />
          </div>
          <div className="h-96">
            <h5 className="mb-2 h-7 truncate text-lg tracking-tight text-gray-800">
              {title}
            </h5>
            <p className="mb-2 text-gray-700 text-xl font-bold">
              ₱{roundUpNearestTen(Math.floor(price * 57))}
            </p>
            <p className="text-gray-500 text-base">{description}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
