import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai";

const CartProductCard = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };
  const dispatch = useDispatch();

  const productProduct = () => {
    return cartItem.price * cartItem.quantity;
  };

  return (
    <div className="grid grid-cols-3 md:grid-cols-[12rem_1fr_8rem_8rem] gap-4 items-center justify-between border-t p-5 text-lg">
      <div className="hidden md:flex h-32 justify-center">
        <img src={image} alt={title} className="h-full"></img>
      </div>
      <p className="truncate">{title}</p>
      <p className="text-center">
        ₱{Math.ceil(productProduct() / 10) * 10 * 57}
      </p>
      <div className="flex justify-evenly">
        <button onClick={() => dispatch(removeFromCart(product))}>
          <AiFillMinusSquare size="25" />
        </button>
        <div>{cartItem.quantity}</div>
        <button onClick={() => dispatch(addToCart(product))}>
          <AiFillPlusSquare size="25" />
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
