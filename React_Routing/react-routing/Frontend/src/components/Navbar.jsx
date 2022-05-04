import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
        <li><NavLink activeClassName="active" to="/contact">Contact</NavLink></li>
        <li><NavLink activeClassName="active" to="/categories">Categories</NavLink></li>
        <li><NavLink activeClassName="active" to="/product">Product</NavLink></li>
        <li><NavLink activeClassName="active" to="/signup">SignUp</NavLink></li>
        <li><NavLink activeClassName="active" to="/hoc">HOC</NavLink></li>
        <li><NavLink activeClassName="active" to="/wrapper">HOC2</NavLink></li>
        <li><NavLink activeClassName="active" to="/stopwatch">Stop Watch</NavLink></li>
        <li><NavLink activeClassName="active" to="/formik">Formik</NavLink></li>
        <li><NavLink activeClassName="active" to="/componentabcd">Component-ABCD</NavLink></li>
        <li><NavLink activeClassName="active" to="/practice">Practice</NavLink></li>
        <li><NavLink activeClassName="active" to="/parentcomponent">Render_Props</NavLink></li>
        <li><NavLink activeClassName="active" to="/contextAPI">Context API</NavLink></li>
      </ul>
    </>
  );
};
export default Navbar;
