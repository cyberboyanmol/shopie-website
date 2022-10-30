import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import "./productRatingRight.scss";
import { GrStar } from "react-icons/gr";
import { AiFillCheckCircle } from "react-icons/ai";
import ReviewBox from "./ReviewBox";
const ProductRatingRight = () => {
  const [showDescription, setDescription] = useState(false);

  let array = [1, 4, 9, 16];
  return (
    <div className="product_rating_right">
      <span className="heading">Customers Reviews</span>
      <div className="AllReviews">
        {/* // review 1 */}

        {array.map((item, index) => {
          return <ReviewBox key={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductRatingRight;
