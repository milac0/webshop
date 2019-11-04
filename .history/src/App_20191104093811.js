import React from "react";
import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
