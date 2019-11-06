import React from "react";
import { connect } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = ({ cart }) => {
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

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps)(Cart);
