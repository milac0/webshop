import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./reducers/dataReducer";

const initialState = {
  products: [],
  totalPages: null,
  cart: [],
  product: {}
};
const middleware = [thunk];

const store = createStore(
  dataReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
