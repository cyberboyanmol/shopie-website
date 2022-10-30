import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import ProductPrice from "./ProductPrice";

import "./Product.scss";
const Product = (props) => {
  const { product } = props;
  const [wish, setWish] = useState(false);
  return (
    <div className="Product">
      <div className="Product__main_container">
        <div className="Product__top">
          <Link to={`/website/product/dfd`} className="image">
            <img src={product.img} alt="product_img" />
          </Link>
          <div className="top_control">
            <p className="trending">trending</p>
            <div className="whishlist" onClick={() => setWish((prev) => !prev)}>
              <FaHeart
                className="icon_wish"
                style={
                  wish
                    ? { color: "red", opacity: "0.9" }
                    : { color: "grey", opacity: "0.6" }
                }
              />
            </div>
            <div className="averageRating">
              <span>{"4.4"}</span>
              <GrStar className="icon" />
              <span>|</span>
              <span>{"43.2k"}</span>
            </div>
            <div
              className="quickView"
              onClick={() => console.log("Quick View")}
            >
              QuickView
            </div>
          </div>
        </div>
        <Link to={`/website/product/dfd`} className="Product__bottom">
          <div className="BrandName">Shopie</div>
          <div className="ProductName">
            Solid T-Shirt cccccth Mardarian Collart cccccth Mardarian Collart
            cccccth Mardarian Collar
          </div>
          <div className="price">
            <ProductPrice />
          </div>
          <div className="stockLeft">5 Left</div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
