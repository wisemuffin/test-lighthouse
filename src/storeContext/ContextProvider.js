import React, { useReducer, useContext } from "react";

// import ProtectedRoute from "./ProtectedRoute";
import context from "./context";
import reducer from "./reducer";

import themeContextSetUp from "./themeContext";
import themeReducer from "./themeReducer";

const AppHooks = props => {
  const initialState = useContext(context);
  const [stateContext, dispatchContext] = useReducer(reducer, initialState);

  const initialStateTheme = useContext(themeContextSetUp);
  const [themeContext, dispatchThemeContext] = useReducer(
    themeReducer,
    initialStateTheme
  );
  return (
    <context.Provider value={{ stateContext, dispatchContext }}>
      <themeContextSetUp.Provider
        value={{ themeContext, dispatchThemeContext }}
      >
        {props.children}
      </themeContextSetUp.Provider>
    </context.Provider>
  );
};

export default AppHooks;
