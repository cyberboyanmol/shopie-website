import React from "react";
import "./ProductContainer.scss";
import Product from "../Product";

const ProductContainer = (props) => {
  const { products } = props;

  return (
    <div className="ProductContainer">
      {products.map((product, index) => {
        return <Product product={product} key={index} />;
      })}
    </div>
  );
};

export default ProductContainer;
