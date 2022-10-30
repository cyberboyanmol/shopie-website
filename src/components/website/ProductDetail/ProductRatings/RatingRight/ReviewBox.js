import React, { useState } from "react";
import { GrStar } from "react-icons/gr";
import { AiFillCheckCircle } from "react-icons/ai";
const ReviewBox = () => {
  const [showDescription, setDescription] = useState(false);
  return (
    <div className="reviewBox">
      {/* //top of review  */}
      <div className="top">
        <span className="top_rating">
          4.4
          <GrStar />
        </span>
        <span className="top_comment">Samsung curved monitor 23</span>
      </div>
      {/* //middle or comment of review if have  */}
      <div className="mid">
        <div
          className="description"
          style={{
            maxHeight: `${showDescription ? "" : "5rem"}`,
            WebkitLineClamp: `${showDescription ? "" : "3"}`,
          }}
        >
          Trading in the stock, which began on May 18, was delayed that day due
          to technical problems with the Nasdaq exchange.[33] The stock
          struggled to stay above the IPO price for most of the day, forcing
          underwriters to buy back shares to support the price.[34] At closing
          bell, shares were valued at $38.23,[35] only $0.23 above the IPO price
          and down $3.82 from the opening bell value..23,[35] only $0.23 above
          the IPO price and down $3.82 from the opening bell value.
        </div>
        <span
          className="readMore"
          onClick={() => setDescription(!showDescription)}
        >
          {showDescription ? "Show less" : "Read more"}
        </span>
      </div>
      <div className="bottom">
        <span className="info">
          <span className="username">
            {`Robin_anmol`} <AiFillCheckCircle className="icon" />
            {`Verified Buyer,`}
          </span>

          <span className="username">{` ${"city name"}, ${"october 2022"}`}</span>
        </span>
        {/* <span className="like_feature"></span> //this is for like the review and dislike the review feature build in future  */}
      </div>
    </div>
  );
};

export default ReviewBox;
