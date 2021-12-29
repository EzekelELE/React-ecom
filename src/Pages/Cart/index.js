import "./index.css";
import OrderProductRow from "../../Components/OrderProductRow";
export default function Cart({
  productsInCart,
  removeItemFromCart,
  quantityChangeHandler,
}) {
  return (
    <div className={"cart"}>
      <h1>YOUR ORDER</h1>
      <OrderProductRow
        productsInCart={productsInCart}
        removeItemFromCart={removeItemFromCart}
      />
    </div>
  );
}
