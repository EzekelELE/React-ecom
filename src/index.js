import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./Pages/Cart";
import Orders from "./Pages/Orders";
import Landing from "./Pages/Landing";
import Product from "./Components/Product";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
