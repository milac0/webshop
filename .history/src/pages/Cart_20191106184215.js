import React, { useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
//mui
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutButton from "../components/CheckoutButton";
import { getCartFromLocalStorage } from './../../.history/src/util/funcs_20191106184038';


const useStyles = makeStyles({
  root: {
    width: 400,
    margin: "0 auto"
  },
  checkout: {
    padding: '1em',
    textAlign: "center"
  }
});

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const classes = useStyles(); 

  useEffect(() => {
    try {
      setCart(getCartFromLocalStorage());
    } catch {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    if (cart !== []) {
      let sum = 0;
      cart.forEach(product => (sum += product.count * product.regularPrice));
      setTotal(sum);
    }
  }, [cart]);

  const updateCart = cart => {
    setCart(cart);
  };

  return (
    <div className={classes.root}>
      {cart.map((product, i) => {
        return (
          <CartProduct key={i} product={product} updateCart={updateCart} />
        );
      })}
      <div className={classes.checkout}>
        <Typography>Total: {Math.round(total*100)/100}$</Typography>
        <CheckoutButton updateCart={updateCart}/>
      </div>
    </div>
  );
};

export default Cart;
