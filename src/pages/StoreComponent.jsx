import React from "react";
import { useSelector } from "react-redux";
import ProductComponent from "../components/ProductComponent";

const StoreComponent = () => {
  const products = useSelector((state) => state);
  return (
    <div>
      <ProductComponent />
    </div>
  );
};

export default StoreComponent;
