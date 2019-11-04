import { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from './types'

export const setProducts = () => dispatch => {
    dispatch({ type: SET_PRODUCTS})
}