import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from "./pages/Home";
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'

function App() {

  return (
      <Provider store={store}>
        <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product/:productName/:skuId" component={ProductDetails} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
      </Provider>
  );
}

export default App;
