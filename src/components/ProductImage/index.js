import React from "react";
import "./style.css";

const ProductImage = (props) => {
  return (
    <div className="product-image">
      <img src={props.src} width="100%" />
    </div>
  );
};

export default ProductImage;
