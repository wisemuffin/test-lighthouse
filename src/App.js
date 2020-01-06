import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContextProvider from "./storeContext/ContextProvider";
import ThemeProvider from "./hooks/ThemeProvider";

import HomePage from "./pages/HomePage";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

function App() {
  return (
    <ContextProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/index" component={HomePage} /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
