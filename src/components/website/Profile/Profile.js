import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProfileSideBar from "./ProfileSideBar/ProfileSideBar";
import Overview from "./Overview/Overview";
import "./Profile.scss";
import HeadingTag from "../../Reuseable/Heading/HeadingTag";
import Orders from "./My Orders/Orders";
import Address from "./Address/Address";
import Review from "./My Reviews/Review";
import Support from "./Support/Support";
import Rewards from "./My Rewards/Rewards";
import TrackOrder from "./Track Order/TrackOrder";
import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { CgTrack } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { BiAward, BiSupport } from "react-icons/bi";
const Profile = () => {
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
    <div className="profile">
      <HeadingTag title={"My Account"} />
      <div className="main_profile">
        <div className="sidebar">
          {" "}
          <ProfileSideBar Profile_link={Profile_link} />
        </div>
        <div className="allRoutes">
          <Routes>
            <Route
              path="/"
              element={<Navigate to="/website/profile/overview" />}
            />
            <Route path="/overview" element={<Overview />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/address" element={<Address />} />
            <Route path="/reviews" element={<Review />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/support" element={<Support />} />
            <Route path="/trackorder" element={<TrackOrder />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Profile;
