import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Reuseable/logo/logo";
import "./FooterPart.scss";
import { FooterPayment, FooterConnect } from "../../../../AppConstant";
const FooterPart = (props) => {
  const { column, logo } = props;

  const [active, setActive] = useState(false);

  return (
    <div className="FooterColumn">
      {logo ? (
        <div className="FooterColumn_logo">
          <Logo />
          <div className="logo_div">
            <h4> Payment Methods</h4>
            <div className="paymentMethod">
              {FooterPayment?.map((icon, index) => {
                return <img src={icon} key={index} alt="" />;
              })}
            </div>
          </div>
          <div className="logo_div">
            <h4>Connect</h4>
            <div className="paymentMethod">
              {FooterConnect?.map((icon, index) => {
                return <img key={index} src={icon} alt="" />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="FooterColumn_secondary">
          <h3
            className={` title ${active && "activetitle"}`}
            onClick={() => setActive(!active)}
          >
            <span>{column.title}</span>
            <i className={"fal fa-chevron-right"}></i>
          </h3>
          <div className={` ${active ? "activecol link_div" : "link_div"}`}>
            {column.links.map((link, index) => {
              return (
                <Link key={index} to={`/website/${link.link}`}>
                  {link.text}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default FooterPart;
