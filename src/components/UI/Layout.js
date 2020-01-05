import React from "react";
import Drawer from "./Drawer.js";

const Layout = props => {
  return (
    <div>
      <Drawer children={props.children} />
    </div>
  );
};

export default Layout;
