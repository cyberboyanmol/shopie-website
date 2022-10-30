import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../../../AppConstant";
import HeadingHelper from "./helper/HeadingHelper";
const TopCategories = () => {
  const categorieItem = categories.map((item, index) => {
    return (
      <Link
        key={index}
        to={`/website/${item.link}`}
        className="categorie"
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <span className="categorieText">{item.categoriesName}</span>
        <span className="categorieSubtitle">{item.subtitle}</span>
        <span className="categorieBtn">{item.btntext}</span>
        <span className="line"></span>
      </Link>
    );
  });
  return (
    <div className="topCategories">
      <HeadingHelper heading={"Top Categories"} />
      <div className="topCategories_container">{categorieItem}</div>
    </div>
  );
};

export default TopCategories;
