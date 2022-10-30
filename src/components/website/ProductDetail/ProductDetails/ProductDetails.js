import React from "react";
import "./ProductDetails.scss";
import { FiHeart } from "react-icons/fi";
import { GrStar } from "react-icons/gr";
import { BsHandbag } from "react-icons/bs";
import { FiShare } from "react-icons/fi";
import { IoPricetagsOutline } from "react-icons/io5";
import { GoPrimitiveDot } from "react-icons/go";
const ProductDetails = () => {
  return (
    <div className="leftTopDetails">
      <span className="brandName">Marks & Spencere</span>
      <span className="productName">
        Men Pack of 3 Easy Iron Formal Shirts{" "}
      </span>
      <div className="averageRating">
        <span>{"4.4"}</span>
        <GrStar className="icon" />
        <span>|</span>
        <span>{"43.2k"} ratings and reviews</span>
      </div>
      <span className="pricetag">
        <span className="price">₹ 8999</span>
        <span className="priceDes"> (Price are excuslive from taxes) </span>
      </span>
      <span className="discountPrice">
        MRP
        <span className="cutprice"> ₹ 8999</span>
        <span className="offer">(76% off)</span>{" "}
      </span>
      <span className="linegap"></span>
      {/* //thiscoupon only shows one time on first order by user on one id  */}
      <div className="firstOrderCoupon">
        <div className="couponLeft">
          <span className="icon">
            <IoPricetagsOutline />
            Use Code{" "}
          </span>
          <span className="couponCode">ANMOLROBIN</span>
        </div>
        <div className="couponRight">
          <span className="text">On your first order </span>
          <span className="percent">To get 40% extra off </span>
        </div>
      </div>
      <span className="linegap"></span>
      {/*  Select Size for product  */}
      <div className="selectSize">
        <div className="selectSizeTop">
          {" "}
          <span>Select Size</span>
          <span className="chart">Size Chart</span>
        </div>
        <div className="allSize">
          <button className="sizeBtn">XS</button>
          <button className="sizeBtn selectedSize">S</button>
          <button className="sizeBtn selectedSize">M</button>
          <button className="sizeBtn">L</button>
          <button className="sizeBtn">XL</button>
          <button className="sizeBtn  notAllowed ">XXL</button>
        </div>
      </div>
      <span className="linegap"></span>
      {/* // coloring  this wills shows  on the baseis on size when one of the size is selected  */}
      {!true && (
        <div className="selectColor">
          <div className="selectTop">
            {" "}
            <span>Select color</span>
            <span className="morecolor">MoreColor</span>
          </div>
          <div className="allColor">
            <button
              className={`colorBtn   ${true ? "selectedColor" : ""}`}
              style={{ backgroundColor: `red` }}
            ></button>
            <button
              className={`colorBtn`}
              style={{ backgroundColor: `pink` }}
            ></button>

            <button
              className={`colorBtn`}
              style={{ backgroundColor: `yellow` }}
            ></button>
            <button
              className={`colorBtn ${true ? "selectedColor" : ""}`}
              style={{ backgroundColor: `blue` }}
            ></button>
            <button
              className={`colorBtn `}
              style={{ backgroundColor: `black` }}
            ></button>
            <button
              className={`colorBtn`}
              style={{ backgroundColor: `white` }}
            ></button>
          </div>
        </div>
      )}
      {!true && <span className="linegap"></span>}
      {/* //
      Adding button for saving product to wishlist and add to cart
      */}
      <div className="productButton">
        <div className="whishlist">
          <button className="wishlistBtn">
            <FiHeart className="icon" />
            <span>Wishlist</span>
          </button>
        </div>
        <button className="addToCart">
          <BsHandbag className="icon" />
          <span>Add To Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
