import { GET_PRODUCTS, GET_PRODUCT_DETAILS, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART, LOADING_DATA } from '../types'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get(
        `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json`
      ).then(
        res => {
            dispatch({ type: GET_PRODUCTS, payload: res.data.products})
        }
    ).catch(err => {
        console.log(err)
        dispatch({ type: GET_PRODUCTS, payload: []})})
}

export const getProductDetails = (skuId) => dispatch => {
    axios.get(
        `https://api.bestbuy.com/v1/products(sku=1000592)?apiKey=ZCwkqvoihaTeEEKDARrc5ske&format=json`
    ).then(res => {
        console.log(res.data)
        dispatch({ type: GET_PRODUCT_DETAILS, payload: res.data.products[0]})
    }
        ).catch(err => console.log(err))
    
}