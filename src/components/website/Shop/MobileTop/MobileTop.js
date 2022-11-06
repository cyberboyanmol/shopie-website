import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MobileTop.scss";
import { VscHeart } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";
import { IoArrowBackOutline, IoSearchOutline } from "react-icons/io5";
const MobileTop = (props) => {
  const { title, searchbox = false, Breadlink } = props;
  const navigate = useNavigate();
  // console.log(Breadlink, title);
  // const [isScrolled, setIsScrolled] = useState(false);

  // console.log(pathname);
  // function setScrolled() {
  //   if (window.scrollY > 0) {
  //     setIsScrolled(true);
  //   } else {
  //     setIsScrolled(false);
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", setScrolled);
  // }, []);
  return (
    <div className="Mobile_top">
      <div className={`Mobile_top_container `}>
        {/* <div className={`Mobile_top_container ${isScrolled ? "scrolled" : ""}`}> */}
        <div className="left ">
          <IoArrowBackOutline
            onClick={() => navigate(-1)}
            className="Mobile_top_container_icon back"
          />
          <span className="title">{title && title}</span>
        </div>
        <div className="right">
          {searchbox && (
            <IoSearchOutline className="Mobile_top_container_icon" />
          )}
          <Link to="/website/Wishlist" className="Mobile_top_container_icon">
            <VscHeart className="icon" />
          </Link>
          <Link to="/website/cart" className="Mobile_top_container_icon">
            <BsHandbag className="icon" />
          </Link>
        </div>
      </div>
      {Breadlink && (
        <div className="breadcrumbs">
          {Breadlink?.map((breadItem, index) => {
            if (breadItem.text) {
              return (
                <HashLink
                  key={index}
                  className="breadcrumb"
                  to={breadItem.link && `/${breadItem?.link}`}
                >
                  <span>{breadItem.text}</span>
                </HashLink>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default MobileTop;

//someError arising
