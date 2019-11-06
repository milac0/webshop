import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: 400,
    margin: '0 auto',
    textAlign: 'center'
  }
})

const Cart = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState()
  const classes = useStyles()
  useEffect(() => {
    try {
      const cartString = localStorage.getItem('cart')
      setCart(JSON.parse(cartString))
      let sum = 0;
      cart.forEach(product => sum += product.count * product.regularPrice)
      setTotal(sum)
    } catch {
      setCart([])
    }
  }, [cart])

  // useEffect(() => {
  //   if(cart !== []) {
  //     let sum = 0;
  //     cart.forEach(product => sum += product.count * product.regularPrice)
  //     setTotal(sum)
  //   }
  // }, [cart])

  const updateCart = cart => {
    setCart(cart)
  }

  const handleCheckout = () => {
    //display an alert and clear the current cart
  }

  return (
    <div className={classes.root}>
      {cart.map((product, i) => {
        return (
          <CartProduct
            key={i}
            product={product}
            updateCart={updateCart}
          />
        );
      })}
      <Typography>Total: {total}$</Typography>
      <Button onClick={handleCheckout}>Checkout</Button>
    </div>
  );
};

export default Cart;
