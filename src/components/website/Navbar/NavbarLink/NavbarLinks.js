import React from "react";
import { NavLink } from "react-router-dom";
import "./NavbarLinks.scss";
const NavbarLinks = (props) => {
  const { text, link } = props.navlink;
  return (
    <NavLink
      to={`/website${link}`}
      className={({ isActive }) =>
        `navbarlinks ${isActive ? "nav_active" : ""}`
      }
    >
      <span>{text}</span>
      <div></div>
    </NavLink>
  );
};

export default NavbarLinks;
