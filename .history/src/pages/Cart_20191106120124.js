import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const [cart, setCart] = useState([])
  useEffect(() => {
    try {
      const cartString = localStorage.loadItem('cart')
      setCart(JSON.parse(cartString))
    } catch {
      setCart([])
    }
  }, [])
  return (
    <div>
      {cart.map((product, i) => {
        const { name, image, regularPrice, count } = product;
        return (
          <CartProduct
            key={i}
            name={name}
            image={image}
            price={regularPrice}
            count={count}
          />
        );
      })}
    </div>
  );
};

export default Cart;
