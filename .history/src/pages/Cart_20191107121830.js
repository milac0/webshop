import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import CartProduct from "../components/CartProduct";
import { getCartFromLocalStorage } from './../util/funcs';
//mui
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CheckoutButton from "../components/CheckoutButton";


const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "0 auto"
  },
  checkout: {
    padding: '1em',
    textAlign: "center"
  }
});

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();
  const classes = useStyles(); 

  useEffect(() => {
    if(props.cart.length !== 0){
      console.log('props.cart', props.cart)
      setCart(props.cart)
    } else if(getCartFromLocalStorage() !== null) {
        setCart(getCartFromLocalStorage());
      }
  }, [props.cart]);

  useEffect(() => {
    if (cart !== []) {
      let sum = 0;
      cart.forEach(product => (sum += product.count * product.regularPrice));
      setTotal(sum);
    }
  }, [cart]);

  return (
    <div className={classes.root}>
      {cart.map((product, i) => {
        return (
          <CartProduct key={i} product={product}/>
        );
      })}
      <div className={classes.checkout}>
        <Typography>Total: {Math.round(total*100)/100}$</Typography>
        <CheckoutButton/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Cart);
