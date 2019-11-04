import React, { Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
//mui
import themeFile from '../util/theme'
import MuiThemeProvider from '@material-ui/core/MuiTheme'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme(themeFile)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/product" component={Product} exact />
        <Route path="/cart" component={Cart} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
