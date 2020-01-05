import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../storeContext/context";

const Header = () => {
  const { stateContext } = useContext(Context);
  const { currentUser } = stateContext;
  return (
    <header>
      <h1>Home Page</h1>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/test">Test</Link>
      <Link to="/vizadmin">viz admin</Link>
      <Link to="/vizlist">viz list</Link>
      <Link to="/vizpickandcomment">vizpickandcomment</Link>
      <Link to="/visualisations">Visualisations</Link>

      {currentUser && <p>{currentUser.name}</p>}
    </header>
  );
};

export default Header;
