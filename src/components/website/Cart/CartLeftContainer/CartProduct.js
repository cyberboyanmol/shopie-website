import React from "react";
import "./CartProduct.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import ProductPrice from "../../Product/ProductPrice";
const CartProduct = () => {
  return (
    <div className="cartProduct">
      {/* //
    1. image
    2. product detail ,size ,color 
    3. price  

    */}

      <div className="cart_product_main">
        <div className="cartProduct_img">
          <img src={"https://i.imgur.com/ozJRiuN.jpg"} alt="product_image" />
        </div>
        <div className="cartProduct_detail">
          <div className="cartProduct_detail1">
            <span className="name">Men Pack of 3 easy iron formal shirt</span>
            <span className="size">
              Size : <span className="size_no">L</span>
            </span>
            <span className="color">
              color : <span>briege</span>
            </span>
          </div>
          <div className="cartProduct_detail2">
            <span className="qty_title">Qty</span>

            <div className="qty_button">
              <span className="qty_plus">
                {" "}
                <AiOutlinePlus className="icon" />
              </span>
              <span className="qty_value">{"5"}</span>
              <span className="qty_min">
                <AiOutlineMinus className="icon" />{" "}
              </span>
            </div>
          </div>
          <div className="cartProduct_detail3">
            <span className="price_title">Total price</span>
            <div className="cartProduct_detail3_price">
              <ProductPrice />
              <span className="save_price">{`You save ₹${`999999`}`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="cartProduct_detail_btn">
        <span className="move_to_wishlist">move to wishlist</span>
        <span className="remove">remove</span>
      </div>
    </div>
  );
};

export default CartProduct;
