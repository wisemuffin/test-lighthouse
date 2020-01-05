import { createContext } from "react";

export const initialState = {
  themeType: "light",
  count: 0,
  currentUser: null, //{ name: "emma" },
  isAuth: false,
  // currentComment: null,
  currentViz: { comments: { items: [] } },
  // currentViz: {
  //   _id: "5cc62a5afb4ad70017c8d86b",
  //   title: "nhs",
  //   content: "nhs",
  //   author: { name: "dave", picture: "dave" },
  //   createdAt: null,
  //   comments: [
  //     {
  //       text: "hello dave",
  //       author: { name: "dave", picture: "dave" },
  //       createdAt: null
  //     }
  //   ]
  // },
  pins: []
};

const Context = createContext(initialState);
export default Context;
