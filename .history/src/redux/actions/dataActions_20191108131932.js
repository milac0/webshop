import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  SET_CART
} from "../types";
import axios from "axios";

export const getProducts = (page, name) => dispatch => {
  const url = !!name ? `https://api.bestbuy.com/v1/products((search=${name}))?apiKey=${process.env.REACT_APP_API_KEY}&sort=name.asc&show=name&pageSize=12&page=${page}&format=json`
  : `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=12&page=${page}&format=json`;
  axios
    .get(url)
    .then(res => {
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_PRODUCTS, payload: [] });
    });
};

export const getProductDetails = product => dispatch => {
  dispatch({ type: GET_PRODUCT_DETAILS, payload: product });
  localStorage.setItem("product", JSON.stringify(product));
};

export const addProduct = product => dispatch => {
  dispatch({ type: ADD_PRODUCT, payload: product });
  //updating cart in localStorage
  let cart = [];
  const cartString = localStorage.getItem("cart");
  if (cartString) {
    cart = JSON.parse(cartString);
  }
  const index = cart.findIndex(cartItem => cartItem.sku === product.sku);
  if (index !== -1) {
    cart[index].count++;
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    cart.push({ ...product, count: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const removeProduct = product => dispatch => {
  dispatch({ type: REMOVE_PRODUCT, payload: product });
  const cartString = localStorage.getItem("cart");
  const cart = JSON.parse(cartString);
  const index = cart.findIndex(cartItem => cartItem.sku === product.sku);
  if (index !== -1) {
    if (cart[index].count > 1) {
      cart[index].count--;
    } else {
      cart.splice(index, 1);
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const setCartOnLoad = cart => dispatch => {
  dispatch({ type: SET_CART, payload: cart });
};

export const clearCart = () => dispatch => {
  dispatch({ type: CLEAR_CART });
  localStorage.setItem("cart", "[]");
};
