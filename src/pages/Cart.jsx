import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const totalPrice = () => {
    return cart.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
  };

  const cartItems = cart.map((cartItem) => {
    const { id, image, title, price, quantity } = cartItem;
    return (
      <CartProduct
        key={uuidv4()}
        id={id}
        image={image}
        title={title}
        price={price}
        quantity={quantity}
      />
    );
  });

  return (
    <div className="w-full xl:w-[1280px] p-4">
      <h1 className="text-3xl">Shopping Cart</h1>
      <div className="my-4 border-b">{cartItems}</div>
      <div className="flex flex-col sm:flex-row items-center justify-end p-4">
        <p className="text-2xl bold">
          Total: ₱{Math.ceil(totalPrice() / 10) * 10 * 57}
        </p>
        <button className="p-3 bg-green-600 text-white rounded hover:bg-green-500 m-4">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
