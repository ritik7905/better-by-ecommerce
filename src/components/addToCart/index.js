import React from "react";

// styles
import "./styles.scss";
const AddToCart = ({ product }) => {
  console.log(product);

  const { id, stock, colors } = product;

  return (
    <div className="colors">
      <p>
        Colors:
        {colors?.map((curColor, i) => {
          return (
            <button
              key={i}
              style={{ backgroundColor: curColor }}
              className="btn-styles"
            ></button>
          );
        })}
      </p>
    </div>
  );
};

export default AddToCart;
