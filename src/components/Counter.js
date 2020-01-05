import React, { useContext } from "react";
import Context from "../storeContext/context";
import { withStyles } from "@material-ui/core/styles";

const Counter = ({ classes }) => {
  const { stateContext, dispatchContext } = useContext(Context);
  return (
    <div className="counter">
      <p>You clicked {stateContext.count} times</p>
      {stateContext.currentUser && <p>{stateContext.currentUser.name}</p>}
      <div>
        <button
          className="minus"
          onClick={() => dispatchContext({ type: "decrement" })}
        >
          -
        </button>
        <button onClick={() => dispatchContext({ type: "reset" })}>
          RESET
        </button>
        <button
          className="plus"
          onClick={() => dispatchContext({ type: "increment" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

const styles = {
  root: {
    // height: "100vh",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
    "font-family": "sans-serif"
  },
  section: {
    display: "flex",
    justifyContent: "center"
  }
  // .counter: {
  //   display: "flex",
  //   flexDirection: "column",
  //   marginTop: "2em",
  //   padding: "1em",
  //   borderRadius: "0.25em",
  //   backgroundColor: "lightgrey",
  //   fontSize: "1.5em",
  //   textAlign: "center",
  //   boxShadow: "2px"
  // }
  // .counter > div {
  //   display: flex;
  //   justify-content: center;
  //   margin-top: 1em;
  // },
  // .counter button {
  //   padding: 0.5em;
  //   font-size: 1em;
  //   border-radius: 1em;
  //   border: none;
  //   min-width: 3em;
  //   margin: 0 0.25em;
  //   box-shadow: 2px 2px 8px -2px black;
  // },
  // button:hover {
  //   cursor: pointer;
  // },
  // .plus {
  //   background-color: mediumseagreen;
  //   color: white;
  // },
  // .minus {
  //   background-color: tomato;
  //   color: white;
  // }
};

export default withStyles(styles)(Counter);
