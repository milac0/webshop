import { GET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from '../types'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios.get(
        `https://api.bestbuy.com/v1/products?apiKey=${process.env.REACT_APP_API_KEY}&format=json`
      ).then(
        res => {
            dispatch({ type: GET_PRODUCTS, payload: res.data})
        }
    )
}