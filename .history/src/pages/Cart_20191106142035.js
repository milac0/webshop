import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { Button } from "@material-ui/core";

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

  const updateCart = cart => {
    setCart(cart)
  }

  const handleCheckout = () => {
    //display an alert and clear the current cart
  }
  
  return (
    <div>
      {cart.map((product, i) => {
        return (
          <CartProduct
            key={i}
            product={product}
            updateCart={updateCart}
          />
        );
      })}
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default Cart;
