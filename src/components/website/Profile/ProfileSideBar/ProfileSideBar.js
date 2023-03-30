import React from "react";
import { NavLink } from "react-router-dom";
import "./ProfileSideBar.scss";

import { Button } from "@mui/material";
import { MdOutlineLogout } from "react-icons/md";
const ProfileSideBar = ({ Profile_link }) => {
  return (
    <div className="Profile_SideBar">
      <div className="Mobile_profile">
        {false && <span className="userImage">AG</span>}
        {!false && (
          <img
            className="userImage_name"
            src={"https://i.imgur.com/gCJoNZY.jpg"}
            alt="userImage_name"
          />
        )}
        <div className="userDetail">
          <span className="username">Anmol Gangwar</span>
          <span className="useremail">anmolgangwar64@gmail.com</span>
          <span className="phoneNo">+91 7455987462 </span>
        </div>
      </div>
      {Profile_link.map((link, index) => {
        return (
          <NavLink
            key={index}
            to={`${link?.link}`}
            className={({ isActive }) =>
              isActive ? "profile_link_active profile_link" : "profile_link"
            }
          >
            {link?.icon}
            <span>{link?.Link_text}</span>
          </NavLink>
        );
      })}
      <Button
        variant="contained"
        className="logoutBtn"
        endIcon={<MdOutlineLogout />}
      >
        Logout
      </Button>
    </div>
  );
};

export default ProfileSideBar;
