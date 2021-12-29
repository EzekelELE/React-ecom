import ProductCard from "../ProductCard";
import { useState, useEffect } from "react";
function Test1() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState(null);
  const addToCartHnadler = (id) => {
    const addedTOcart = products.filter((product) => {
      return product.id == id;
    });
    console.log(addedTOcart);
  };

  return (
    <div>
      {products && (
        <ProductCard products={products} addToCartHnadler={addToCartHnadler} />
      )}
    </div>
  );
}

export default Test1;
