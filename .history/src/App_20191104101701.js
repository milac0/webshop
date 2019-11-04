import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'


function App() {
  return (
    <Fragment>
      <Navbar />
      <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>

    </Fragment>

  );
}

export default App;
