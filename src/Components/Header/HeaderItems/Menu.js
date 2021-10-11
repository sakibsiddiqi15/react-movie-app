import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <Nav className="ms-auto">
      <NavLink
        to="/home"
        className="text-light rounded-3 px-3 mx-1 td-none py-1 px-3"
        activeClassName=" this-active"
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className="text-light rounded-3 px-3 mx-1 td-none py-1 px-3"
        activeClassName=" this-active"
      >
        Movies
      </NavLink>
    </Nav>
  );
};

export default Menu;
