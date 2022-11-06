import React from "react";
import HeadingTag from "../../../Reuseable/Heading/HeadingTag";
import ProductContainer from "../../Product/ProductContainer/ProductContainer";
import "./WishListProductContainer.scss";
import product from "../../../../Products.json";
const WishListProductContainer = () => {
  return (
    <div className="WishListProductContainer">
      <HeadingTag title="My wishlist" />
      <ProductContainer products={product} />
    </div>
  );
};

export default WishListProductContainer;
