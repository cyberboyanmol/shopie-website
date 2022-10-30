import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoImage from "../../../assests/Shopie.png";
import "./logo.scss";

const Logo = () => {
  const { pathname } = useLocation();
  const Tag = pathname === "/website" ? "span" : Link;

  return (
    <Tag to={`/website`} className="logo">
      <img src={LogoImage} alt="logo.png" />
      <strong>Shopie</strong>
    </Tag>
  );
};

export default Logo;
