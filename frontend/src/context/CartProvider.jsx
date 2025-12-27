import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  let [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (item) => {
    const existing = cart.find((cartItem) => cartItem.item._id === item._id);

    if (existing) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.item._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const filteredCart = cart.filter((cartItem) => cartItem.item._id !== id);
    setCart(filteredCart);
  };

  const increamentCartQuantity = (id) => {
    let updatedItem = cart.map((cartItem) =>
      cartItem.item._id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    setCart(updatedItem);
  };

  const decreamentCartQuantity = (id) => {
    let updatedItem = cart.map((cartItem) =>
      cartItem.item._id === id
        ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1}
        : cartItem
    );
    setCart(updatedItem);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          addToCart,
          removeFromCart,
          increamentCartQuantity,
          decreamentCartQuantity,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export default CartProvider;
