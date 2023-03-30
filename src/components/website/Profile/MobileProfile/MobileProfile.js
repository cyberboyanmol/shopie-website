import React from "react";
import MobileTop from "../../Shop/MobileTop/MobileTop";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";
import "./MobileProfile.scss";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CgTrack } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { BiAward, BiSupport } from "react-icons/bi";
const MobileProfile = () => {
  const Profile_link = [
    {
      link: "/website/profile/overview",
      icon: <AiOutlineUser className="icon" />,
      Link_text: "Profile",
    },
    {
      link: "/website/profile/address",
      icon: <GoLocation className="icon" />,
      Link_text: "Address",
    },
    {
      link: "/website/profile/orders",
      icon: <BsHandbag className="icon" />,
      Link_text: "orders",
    },
    {
      link: "/website/profile/rewards",
      icon: <BiAward className="icon" />,
      Link_text: "My rewards",
    },
    {
      link: "/website/profile/reviews",
      icon: <AiOutlineStar className="icon" />,
      Link_text: "My reviews",
    },
    {
      link: "/website/profile/support",
      icon: <BiSupport className="icon" />,
      Link_text: "customer care",
    },
    {
      link: "/website/profile/trackorder",
      icon: <CgTrack className="icon" />,
      Link_text: "track Order",
    },
  ];
  return (
    <div className="MobileProfile">
      <MobileTop title="My Account" />
      <ProfileSideBar Profile_link={Profile_link} />
    </div>
  );
};

export default MobileProfile;
