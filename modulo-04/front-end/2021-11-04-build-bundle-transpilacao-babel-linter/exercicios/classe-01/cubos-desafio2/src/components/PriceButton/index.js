import React from "react";
import "./styles.css";

function PriceButton({
  onClickHandler, text, price, type,
}) {
  return (
    <button className={`price-button ${type}`} onClick={onClickHandler}>
      {text}
      <span className="price">
        R$
        {" "}
        {price.toString().replace(".", ",")}
      </span>
    </button>
  );
}

export default PriceButton;
