import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import CouponCode from "../CouponCode/CouponCode";
import "./CartRightContainer.scss";
const CartRightContainer = () => {
  return (
    <div className="CartRightContainer">
      <div className="orderSummary">Order Summary</div>

      <div className="totalItems">
        <span className="text1">Total Items</span>
        <span className="text2">3</span>
      </div>
      <div className="totalItems">
        <span className="text1">Bag Total</span>
        <span className="text2">₹3</span>
      </div>
      <div className="totalItems">
        <span className="text1">Bag Discount</span>
        <span className="text2">3</span>
      </div>
      <div className="totalItems">
        <span className="text1">Coupon savings</span>
        <span className="text2">3</span>
      </div>
      <div className="totalItems">
        <span className="text1">Shipping</span>
        <span className="text2">free Shipping</span>
      </div>

      <div className="totalItems">
        <span className="text1">Total Amount</span>
        <span className="text2">3</span>
      </div>

      <Button variant="contained" className="checkout_Btn">
        Checkout
      </Button>

      <div className="CouponDiv">
        <CouponCode />
      </div>
    </div>
  );
};

export default CartRightContainer;
