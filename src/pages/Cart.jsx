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
    <div>
      <h1 className="text-3xl">Your Shopping Cart</h1>
      <div>{cartItems}</div>
      <p>Total: ₱{Math.ceil(totalPrice() / 10) * 10 * 57}</p>
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Cart;
