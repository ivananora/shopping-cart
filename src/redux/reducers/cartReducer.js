import { ActionTypes } from "../constants/action-types";

const initialState = [];

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      const isInCart = state.find((cartItem) => cartItem.id === payload.id);
      return isInCart
        ? state.map((cartItem) =>
            cartItem.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state, { ...payload, quantity: 1 }];
    case ActionTypes.REMOVE_FROM_CART:
      const cartItemRemove = state.find(
        (cartItem) => cartItem.id === payload.id
      );
      return cartItemRemove.quantity === 1
        ? state.filter((cartItem) => cartItem.id !== payload.id)
        : state.map((cartItem) =>
            cartItem.id === payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
    default:
      return state;
  }
};
