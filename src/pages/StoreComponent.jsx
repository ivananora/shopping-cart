import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "../components/ProductComponent";

const StoreComponent = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Products: ", products);

  return (
    <div className="grid gap-5 grid-cols-4 px-4 w-1240px max-w-[1240px]">
      <ProductComponent />
    </div>
  );
};

export default StoreComponent;
