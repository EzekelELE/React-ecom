import LandingPage from "./Pages/Landing";
import Header from "./Components/Header";
import Checkout from "./Pages/Checkout";
import Orders from "./Pages/Orders";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";

/*CREATING PRODUCTS CARDS FROM RANDOM API*/
function App() {
  let navigate = useNavigate();

  const [allOrders, setAllOrders] = useState([]);

  const [allProducts, setAllProducts] = useState("");
  useEffect(() => {
    localStorage.getItem("Products-Stat")
      ? setAllProducts(JSON.parse(localStorage.getItem("Products-Stat")))
      : fetch("https://fakestoreapi.com/products")
          .then((data) => {
            return data.json();
          })
          .then((result) => {
            result.forEach((element) => {
              element["quantity"] = 0;
              element["addedToCart"] = false;
            });
            setAllProducts(result);
          });
  }, [allOrders]);
  /*CREATING PRODUCTS CARDS FROM RANDOM API*/

  /**saving products state**/
  useEffect(() => {
    localStorage.setItem("Products-Stat", JSON.stringify(allProducts));
  }, [allProducts]);
  /**saving products state**/

  /*Quantity of the products*/
  const quantityChangeHandler = (e, id) => {
    setAllProducts(
      allProducts.map((el) => {
        if (el.id == id) {
          if (e.target.innerHTML === "-" && el.quantity != 0) {
            el.quantity--;
          } else if (e.target.innerHTML === "+") {
            el.quantity++;
          }
          return el;
        } else {
          return el;
        }
      })
    );
  };
  /*Quantity of the products*/

  /*Buy button handler*/
  const [productsInCart, setProductsInCar] = useState([]);
  const addToCartHandler = (e, id) => {
    setAllProducts(
      allProducts.map((el) => {
        if (el.id == id) {
          el.addedToCart = true;
          return el;
        } else {
          return el;
        }
      })
    );
    setProductsInCar(
      allProducts.filter((el) => {
        return el.quantity != 0 && el.addedToCart == true;
      })
    );
  };

  /*Buy button handler*/

  /*Get products from cart */

  useEffect(() => {
    localStorage.getItem("Products-From-Cart")
      ? setProductsInCar(JSON.parse(localStorage.getItem("Products-From-Cart")))
      : setProductsInCar([]);
  }, []);

  useEffect(() => {
    localStorage.setItem("Products-From-Cart", JSON.stringify(productsInCart));
    // updateInputs(JSON.parse(localStorage.getItem("myl-ist")));
  }, [productsInCart]);
  /*Get products from cart */

  /* remove item from cart*/
  const removeItemFromCart = (id) => {
    setAllProducts(
      allProducts.map((el) => {
        if (el.id == id) {
          el.addedToCart = false;
          el.quantity = 0;
        }
        return el;
      })
    );

    setProductsInCar(
      productsInCart.filter((el) => {
        return el.id != id;
      })
    );
  };
  /* remove item from cart*/

  /*FORM STATE*/
  const [customerInfomation, setCustomerInfomation] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phoneNr: "",
    email: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setAllOrders([customerInfomation, productsInCart]);
  };

  useEffect(() => {
    const oldOrders = JSON.parse(localStorage.getItem("All-Orders"));
    localStorage.setItem("All-Orders", oldOrders);
    // localStorage.removeItem("Products-From-Cart");
    // localStorage.removeItem("Products-Stat");
    // navigate("order");
  }, [allOrders]);

  const onInputChangeHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setCustomerInfomation((prevState) => {
      return { ...prevState, [key]: value };
    });
    console.log(customerInfomation);
  };

  /*FORM STATE*/
  return (
    <div>
      <Header productsInCart={productsInCart} />
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              className={"landingPage"}
              allProducts={allProducts}
              quantityChangeHandler={quantityChangeHandler}
              addToCartHandler={addToCartHandler}
            />
          }
        />
        <Route
          path="cart"
          element={
            <Cart
              productsInCart={productsInCart}
              removeItemFromCart={removeItemFromCart}
            />
          }
        />
        <Route
          path="checkout"
          element={
            <Checkout
              onSubmitHandler={onSubmitHandler}
              onInputChangeHandler={onInputChangeHandler}
            />
          }
        />
        <Route
          path="order"
          element={<Orders customerInfomation={customerInfomation} />}
        />
      </Routes>
    </div>
  );
}

export default App;
