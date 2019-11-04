import { GET_PRODUCTS, GET_PRODUCT_DETAILS, ADD_PRODUCT, REMOVE_PRODUCT, CLEAR_CART } from "../types";

const initialState = {
  products: [],
  totalPages: null,
  cart: [],
  product: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload.products,
        totalPages: action.payload.totalPages
      };
      case GET_PRODUCT_DETAILS:
        // const product = state.products.filter(elem => elem.sku === action.payload)
        // console.log('action.payload', action.payload)
        return {
          ...state,
          product: action.payload
        }
    default:
      return state;
  }
}
