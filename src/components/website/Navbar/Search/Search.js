import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { useSelector, useDispatch } from "react-redux";
import { BsBag } from "react-icons/bs";
import { uiActions } from "../../../../Redux store/UI Reducer/uiReducer";
import { Link } from "react-router-dom";
import AllDummyProducts from "../../../../Products.json";

const Search = () => {
  //useState
  const [show, setShow] = useState(false);
  const [cursor, setCursor] = useState();
  const [cursorlink, setCursorlink] = useState("");

  const isSearchField = useSelector((state) => state.ui.isSearchField);
  const filterkeyword = useSelector((state) => state.ui.filterkeyword);
  const check = (text) => text.replace(/[^a-zA-Z0-9 ]/g, "");
  const pattern = new RegExp("\\b" + check(filterkeyword), "i");
  const dispatch = useDispatch();
  const FilterProduct = AllDummyProducts?.filter(
    (x) =>
      (pattern.test(check(x.name)) ||
        filterkeyword.toLowerCase() === x.id.toLowerCase()) &&
      filterkeyword !== ""
  ).slice(0, 6);

  const SearchCloseHandler = () => {
    dispatch(uiActions.setSearchField());
    document.body.style.overflowY = "inherit";
  };

  return (
    <div className="SearchModal__search">
      <div className="SearchModal__search__inputDiv">
        <input
          type="text"
          onKeyDown={(e) => {
            // handleKeyDown && handleKeyDown(e);
          }}
          value={filterkeyword}
          onChange={(e) => {
            dispatch(uiActions.setFilterKeyword(e.target.value));
            setCursor && setCursor(0);
          }}
          placeholder="Search products.."
          autoFocus
        />
        <Link
          to={`/website/shop?search=${"filterkeyword"}`}
          onClick={() => {
            dispatch(uiActions.setSearchField());
          }}
          className="SearchModal__search__inputDiv__icon"
        >
          <i className="fal fa-search "></i>
        </Link>
        <Link
          to="/website/cart"
          className="searchCart"
          onClick={() => dispatch(uiActions.setSearchField())}
        >
          <BsBag />
        </Link>
      </div>
      <div className="SearchModal__search__dropdown"></div>
    </div>
  );
};

export default Search;
