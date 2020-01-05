import { createContext } from "react";

export const initialState = {
  dark: false
  // toggle: () => {}
};

const Context = createContext(initialState);
export default Context;
