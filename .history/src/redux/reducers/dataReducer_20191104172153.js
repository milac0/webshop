import { SET_PRODUCTS, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from './types'

const initialState = {
    products: [],
    cart: [],
    product: {}
}

export default function(state = initialState, action) {
    switch(action.type){
        
        default:
            return state;
    }
}