import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./CouponCode.scss";
const CouponCode = () => {
  const [showCoupon, setCoupon] = useState(false);

  const AddCoupon = () => {
    setCoupon(!showCoupon);
  };
  return (
    <div className="Apply_Coupon_main">
      <div className="Apply_Coupon" onClick={AddCoupon}>
        <span className="discountText">Apply Coupon</span>
        <AiOutlinePlus className="icon" />
      </div>

      {showCoupon && (
        <div className="coupon_code">
          <input
            placeholder="Enter Coupon code "
            autoFocus={true}
            type="text"
            className="coupon_code_input"
          />
          <button className="Apply_Coupon_btn">Apply</button>
        </div>
      )}
      <div className="CouponError">Invalid Coupon code</div>
    </div>
  );
};

export default CouponCode;
