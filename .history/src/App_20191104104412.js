import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
//mui

function App() {
  return (
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
