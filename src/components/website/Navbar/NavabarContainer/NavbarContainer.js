import React from "react";
import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
const NavbarContainer = ({ isScrolled }) => {
  // const cls = ` ${isScrolled ? "isScrolled" : ""} navbar`;
  const cls = "navbar";
  return (
    <div className={cls}>
      <NavRight />
      <NavLeft />
    </div>
  );
};

export default NavbarContainer;
