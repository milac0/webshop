import {
  GET_PRODUCTS,
  GET_PRODUCT_DETAILS,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART
} from "../types";

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
        ...state,
        products: action.payload.products,
        totalPages: action.payload.totalPages
      };
    case GET_PRODUCT_DETAILS:
      const product = state.products.filter(
        elem => elem.sku.toString() === action.payload
      )[0];
      return {
        ...state,
        product
      };
    case ADD_PRODUCT:
      const index = state.cart.findIndex(product => {
        return product.sku === action.payload.sku;
      });
      if (index !== -1) {
        state.cart[index].count++;
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }]
      };
    case REMOVE_PRODUCT:
      const index2 = state.cart.findIndex(product => {
        return product.sku === action.payload.sku;
      });
      if (index2 !== -1) {
        if (state.cart[index2].count > 1) {
          state.cart[index2].count--;
        } else {
          state.cart.splice(index2, 1);
        }
      }
      return state;
    default:
      return state;
  }
}
