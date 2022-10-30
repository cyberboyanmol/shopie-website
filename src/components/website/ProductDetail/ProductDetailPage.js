import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeadTag from "../../Reuseable/HeadTag/HeadTag";
import MobileTop from "../Shop/MobileTop/MobileTop";
import ProductSlider from "./ProductSlider/ProductSlider";
import "./ProductDetailPage.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/free-mode";
import "swiper/scss/thumbs";
import ProductDetails from "./ProductDetails/ProductDetails";
import { GoPrimitiveDot } from "react-icons/go";
import { FiHeart, FiShare } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import ProductSummary from "./productSummary.j/ProductSummary";
import ProductRatingLeft from "./ProductRatings/RatingLeftSidebar/productRatingLeft";
import ProductRatingRight from "./ProductRatings/RatingRight/productRatingRight";
import RecentlyViewedSlider from "./RecentlyViewedSlider/RecentlyViewedSlider";

// import Product from "../Product/Product";
import product from "../../../Products.json";
import { Button } from "@mui/material";
const ProductDetailPage = () => {
  const [isScrolled, setIsScrolled] = useState(true);
  const pathname = useLocation();

  // console.log(pathname);
  function setScrolled() {
    if (window.scrollY > 1130) {
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setScrolled);
  }, []);

  return (
    <div>
      <HeadTag text={"Men's black genes"} />
      <MobileTop
        title={"Shopie"}
        Breadlink={[
          { text: "Home", link: "website" },
          { text: "Product", link: "website/shop" },
          { text: "product.id", link: `website/product/${"productid"}` },
        ]}
      />
      <div className="Product__detail">
        <div className="Product__detail__left">
          <ProductSlider />
        </div>
        <div className="Product__detail__right">
          <ProductDetails />
          <ProductSummary />
        </div>
      </div>
      {/* //button  */}

      <span
        className={`linegap ${isScrolled ? "productButtonFixed" : ""}`}
      ></span>
      <div
        className={`productButton ${isScrolled ? "productButtonFixed" : ""}`}
      >
        <button className="wishlistBtn">
          <FiShare className="icon" />
        </button>
        <button className="wishlistBtn">
          <FiHeart className="icon" />
        </button>
        <button className="addToCart">
          <BsHandbag className="icon" />
          <span>Add To Cart</span>
        </button>
      </div>
      <span className="linegap"></span>

      <div className="ProductRating">
        <div className="ProductRating__left">
          <ProductRatingLeft />
        </div>
        <div className="ProductRating__right">
          <ProductRatingRight />
        </div>
      </div>
      <span className="linegap"></span>
      <RecentlyViewedSlider title="similar product's" product={product} />

      <span className="linegap"></span>
      <RecentlyViewedSlider
        title={"recently Viewed Product's"}
        product={product}
      />
    </div>
  );
};

export default ProductDetailPage;
