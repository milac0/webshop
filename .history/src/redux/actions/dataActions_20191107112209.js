import { GET_PRODUCTS, GET_PRODUCT_DETAILS, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from '../types'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get(
        `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json`
      ).then(
        res => {
            dispatch({ type: GET_PRODUCTS, payload: res.data})
        }
    ).catch(err => {
        console.log(err)
        dispatch({ type: GET_PRODUCTS, payload: []})})
}

export const getProductDetails = skuId => dispatch => {
    dispatch({ type: GET_PRODUCT_DETAILS, payload: skuId})
}

export const addProduct = product => dispatch => {
    dispatch({ type: ADD_PRODUCT, payload: product})
    //updating cart in localStorage
    let cart = [];
    try {
        const cartString = localStorage.getItem('cart')
    cart = JSON.parse(cartString)
    console.log(cart)
    } catch {
        localStorage.setItem('cart', '[]')
        console.log(cart)
    }
    // const index = cart.findIndex(cartItem => cartItem.sku === product.sku)
    const index = cart.indexOf(product)
    if (index !== -1) {
        cart[index].count++;
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    else {
    cart.push({...product, count: 1})
    localStorage.setItem('cart', JSON.stringify(cart))
    }
}

export const removeProduct = product => dispatch => {
    dispatch({ type: REMOVE_PRODUCT, payload: product})
    const cartString = localStorage.getItem('cart')
    const cart = JSON.parse(cartString)
    const index = cart.findIndex(cartItem => cartItem.sku === product.sku)
    if (index !== -1) {
        if (cart[index].count > 1){
            cart[index].count--;
        } else {
            cart.splice(index, 1)
        }
      }
      localStorage.setItem('cart', JSON.stringify(cart))
}

export const clearCart = () => dispatch => {
    dispatch({ type: CLEAR_CART})
    localStorage.setItem('cart', '[]')
}