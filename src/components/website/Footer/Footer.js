import React from "react";
import FooterPart from "./FooterPart/FooterPart";
import "./Footer.scss";
import { FooterLink } from "../../../AppConstant";

const Footer = () => {
  const columnsrow = FooterLink?.map((column, index) => {
    return <FooterPart key={index} column={column} />;
  });

  return (
    <div className="footer">
      <div className="footer__columns">
        <FooterPart logo />
        {columnsrow}
      </div>
      <div className="CopyRight">
        <h5 className="right">
          <span>
            All Rights Reserved Shopie &#169;{new Date().getFullYear()}
          </span>
        </h5>
        <a href="https://github.com/Robin-Anmol" className="creator">
          Created By{" "}
          <span style={{ color: "black", textDecoration: "underline" }}>
            Robin-Anmol
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;
