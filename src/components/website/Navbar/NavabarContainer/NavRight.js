import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../../Redux store/UI Reducer/uiReducer";
const NavRight = () => {
  const dispatch = useDispatch();

  const SearchOpenHandler = () => {
    dispatch(uiActions.setSearchField());
    document.body.style.overflowY = "hidden";
  };

  return (
    <div className="navbar__top">
      <div className="navbar__top__container">
        <i className="fal fa-search searchicon" onClick={SearchOpenHandler}></i>
        <NavLink
          to={`/website/Wishlist`}
          className={({ isActive }) => (isActive ? "nav_active" : "")}
        >
          <i className="fal fa-heart"></i>
        </NavLink>
        <div className="cart">
          <div className="carticon">
            <i className="fal fa-shopping-bag"></i>
            <div className="cartQty">7</div>
          </div>
        </div>

        <NavLink
          to={"/website/profile/overview"}
          className={({ isActive }) => (isActive ? "nav_active" : "")}
        >
          <i className={`fal fa-user`}></i>
        </NavLink>
      </div>
    </div>
  );
};

export default NavRight;
