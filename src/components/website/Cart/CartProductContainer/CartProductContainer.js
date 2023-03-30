import { Button } from "@mui/material";
import React from "react";
import HeadingTag from "../../../Reuseable/Heading/HeadingTag";
import CartLeftContainer from "../CartLeftContainer/CartLeftContainer";
import CartRightContainer from "../CartRightContainer/CartRightContainer";
import CouponCode from "../CouponCode/CouponCode";
import "./CartProductContainer.scss";
const CartProductContainer = () => {
  return (
    <div className="CartProductContainer">
      <HeadingTag title="My Bag" />
      <div className="CartContainer">
        <CartLeftContainer />
        <div className="couponCode_laptophide">
          <CouponCode />
        </div>
        <CartRightContainer />
      </div>

      <div className="Bag_Button_mobile">
        <div className="OrderDetails">
          <span className="totalAomount">₹9999999</span>
          <span className="viewDetail">View Details</span>
        </div>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  );
};

export default CartProductContainer;
