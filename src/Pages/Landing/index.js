import SingleProductCard from "../../Components/SingleProdctCard";
import { useState, useEffect } from "react";
import "./index.css";

export default function Landing({ allProducts, quantityChangeHandler ,addToCartHandler}) {
  return (
    <div className={"landingPage"}>
      {allProducts && (
        <SingleProductCard
          allProducts={allProducts}
          quantityChangeHandler={quantityChangeHandler}
          addToCartHandler={addToCartHandler}
        />
      )}
    </div>
  );
}
