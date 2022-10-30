import React, { useState } from "react";
import HeadingHelper from "./helper/HeadingHelper";
import { genders } from "../../../AppConstant";
import ProductContainer from "../Product/ProductContainer/ProductContainer";
import Button from "../../Reuseable/Button/Button";
import { Link } from "react-router-dom";
const NewArrivals = (props) => {
  const { heading, subtitle, filter, link, productList } = props;
  const [filterkeyword, setFilterKeyword] = useState("All");
  const NewArrivals = productList?.filter(
    (item) =>
      item.gender === filterkeyword.toLowerCase() ||
      (filterkeyword === "Kids" &&
        (item.gender === "Girls" || item.gender === "Boys")) ||
      filterkeyword === "All"
  );

  const filterLink = genders.map((item, index) => {
    return (
      <span
        key={index}
        className={`Link ${item === filterkeyword ? "ActiveFilter_Link" : ""}`}
        onClick={() => setFilterKeyword(item)}
      >
        {item}
      </span>
    );
  });

  return (
    <div className="NewArrival__conatiner">
      <HeadingHelper heading={heading} subtitle={subtitle} />
      {filter && (
        <div className="Filter_link">
          <span
            onClick={() => setFilterKeyword("All")}
            className={`Link ${
              filterkeyword === "All" ? "ActiveFilter_Link" : ""
            }`}
          >
            All
          </span>
          {filterLink}
        </div>
      )}

      <ProductContainer products={NewArrivals} />
      {link && (
        <Link to={`/website/${link}`}>
          <Button icon="fal fa-chevron-right" text="View All" />
        </Link>
      )}
    </div>
  );
};

export default NewArrivals;
