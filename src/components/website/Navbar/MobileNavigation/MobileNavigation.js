import React from "react";
import { AiOutlineHome, AiOutlineUser, AiFillHome } from "react-icons/ai";
import { BsHandbag, BsHandbagFill } from "react-icons/bs";
import { IoStorefrontOutline, IoStorefrontSharp } from "react-icons/io5";
import { FaUser, FaHeart } from "react-icons/fa";

import { VscHeart } from "react-icons/vsc";
import BottomLink from "./BottomLink";
import "./MobileNavigation.scss";

const MobileNavigation = () => {
  const bottomLinks = [
    {
      icon: <AiOutlineHome />,
      icon1: <AiFillHome />,
      text: "Home",
      link: "/website",
    },
    {
      icon: <IoStorefrontOutline />,
      icon1: <IoStorefrontSharp />,
      text: "Store",
      link: "/website/store",
    },
    {
      icon: <AiOutlineUser />,
      icon1: <FaUser />,
      text: "Profile",
      link: "/website/profile",
    },
    {
      icon: <VscHeart />,
      icon1: <FaHeart />,
      text: "Wishlist",
      link: "/website/Wishlist",
    },
    {
      // icon: <BsBag />,
      icon: <BsHandbag />,
      icon1: <BsHandbagFill />,
      text: "Bag",
      link: "/website/cart",
    },
  ];

  const Bottom = bottomLinks?.map((item, index) => {
    return <BottomLink key={index} item={item} />;
  });
  return (
    <nav className="mobile__nav">
      <div className="mobile__nav_main">{Bottom}</div>
      {/* <i onClick={() => dispatch(uiActions.setSearchField())}>searhc</i> */}
    </nav>
  );
};

export default MobileNavigation;
