import React from "react";
import { formatPrice } from "../../../AppFunctions";

const ProductPrice = (props) => {
  const { product, className } = props;

  return (
    <>
      {/* product?.sale */}
      {true ? (
        <div className={`pricetag `}>
          <span className="discountPrice">
            {/* {formatPrice(
              product?.price * (product?.percent / 100) + product?.price
            )} */}
            ₹499
          </span>
          <span className="price">
            {/* {formatPrice(product?.price)} */}
            ₹899
          </span>
          <span className="offer">({"40"}% off)</span>
        </div>
      ) : (
        <div className=" nosaleprice">
          {/* {formatPrice(product?.price)} */}
          ₹899
        </div>
      )}
    </>
  );
};
export default ProductPrice;
