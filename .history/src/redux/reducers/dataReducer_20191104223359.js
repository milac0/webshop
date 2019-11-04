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
      console.log(action.payload.sku);
      console.log(state.cart, "cart");
      const index = state.cart.findIndex(
        product => product.sku.toString() === action.payload.sku
      );
      console.log(index)
      if (index) {
        return {
          ...state,
       
        };
      }
      return { ...state, cart: [state.cart, action.payload] };
    default:
      return state;
  }
}
