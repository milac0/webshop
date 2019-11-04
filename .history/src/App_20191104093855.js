import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (

      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>

  );
}

export default App;
