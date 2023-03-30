import React, { useEffect, useState } from "react";
import NavbarContainer from "./NavabarContainer/NavbarContainer";
import "./Navbar.scss";

import Search from "./Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../Redux store/UI Reducer/uiReducer";
import { CSSTransition } from "react-transition-group";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(false);
  const isSearchField = useSelector((state) => state.ui.isSearchField);
  const dispatch = useDispatch();
  //handling window scrolled
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
  const SearchCloseHandler = () => {
    dispatch(uiActions.setSearchField());
    document.body.style.overflowY = "inherit";
  };

  const { pathname } = useLocation();
  // console.log(location);
  const ShowBottomNavigation =
    pathname === "/website" ||
    pathname === "/website/store" ||
    pathname === "/website/profile";

  return (
    <React.Fragment>
      <NavbarContainer />

      {ShowBottomNavigation && <MobileNavigation />}
      <CSSTransition
        in={isSearchField}
        unmountOnExit
        timeout={100}
        classNames="SearchModal"
      >
        <div className="SearchModal">
          <i className="fal fa-times close" onClick={SearchCloseHandler}></i>
          <Search />
        </div>
      </CSSTransition>
    </React.Fragment>
  );
};

export default Navbar;
