import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartProductCard = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };
  const dispatch = useDispatch();

  const productProduct = () => {
    return cartItem.price * cartItem.quantity;
  };

  return (
    <div>
      <img src={image} alt={title}></img>
      <p>{title}</p>
      <p>₱{Math.ceil(productProduct() / 10) * 10 * 57}</p>
      <div className="flex">
        <button onClick={() => dispatch(removeFromCart(product))}>-</button>
        <div>{cartItem.quantity}</div>
        <button onClick={() => dispatch(addToCart(product))}>+</button>
      </div>
    </div>
  );
};

export default CartProductCard;
