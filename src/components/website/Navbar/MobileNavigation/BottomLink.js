import React from "react";
import { Link, useLocation } from "react-router-dom";

const BottomLink = ({ item }) => {
  const { link, text, icon, icon1 } = item;
  const { pathname } = useLocation();
  const isActive = pathname === link;

  const Icon = isActive ? icon1 : icon;

  return (
    <Link
      to={`${link}`}
      className={`bottom ${isActive ? "bottom_nav_active" : ""}`}
    >
      <span className="icon">{Icon}</span>
      <span className={`text ${isActive ? "textfill" : ""}`}>{text}</span>
    </Link>
  );
};

export default BottomLink;
