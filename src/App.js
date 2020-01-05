import React from "react";

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
        <HomePage />
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
