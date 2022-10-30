import React, { useEffect, useState } from "react";
import Logo from "../../../Reuseable/logo/logo";
import "./MobileHeader.scss";
import { useDispatch } from "react-redux";
import { uiActions } from "../../../../Redux store/UI Reducer/uiReducer";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  function setScrolled() {
    if (window.scrollY > 45.2) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setScrolled);
  }, [setScrolled]);
  return (
    <div className="mobile__header">
      <Logo />
      <div className={`fixed ${isScrolled ? "mobileScroll" : ""}`}>
        <div
          className={`mobile__header__btn `}
          onClick={() => dispatch(uiActions.setSearchField())}
        >
          <AiOutlineSearch className="icon" />
          <span> Search products,brand & more..</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
