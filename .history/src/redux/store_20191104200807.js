import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const initialState = {
  products: [],
  totalPages: null,
  cart: [],
  product: {},
  loading: false
};
const middleware = [thunk];

const store = createStore(
  dataReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
