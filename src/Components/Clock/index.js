import { useState, useEffect } from "react";
import Produse from "../Produse";

function Product() {
  const [produs, setProduse] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((el) => {
        return el.json();
      })
      .then((res) => {
        console.log(res);
        setProduse(res);
      });
  }, []);

  return <div>{produs && <Produse produs={produs} />}</div>;
}

export default Product;
