import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    try {
      const cartString = localStorage.getItem('cart')
      setCart(JSON.parse(cartString))
    } catch {
      setCart([])
    }
  }, [])
  return (
    <div>
      {cart.map((product, i) => {
        return (
          <CartProduct
            key={i}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Cart;
