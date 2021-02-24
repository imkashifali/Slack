import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
const App = () => {
  return (
    <div className="app">
      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
};

export default App;
