import "./index.css";
import Quantity from "../ProductQuantity";
import { Link } from "react-router-dom";

function OrderProductRow({ productsInCart, removeItemFromCart }) {
  return (
    <div>
      <div className={"row"}>
        <div>
          <div>id</div>
        </div>
        <div>
          {" "}
          <div>img</div>
        </div>
        <div>
          <div>product</div>
        </div>
        <div>
          <div>quantity</div>
        </div>

        <div>
          <div>price</div>
        </div>
      </div>
      {productsInCart.map(({ image, quantity, price, title, id }) => {
        return (
          <div key={id} className={"row"}>
            <div>
              <div>{id}</div>
            </div>
            <div>
              {" "}
              <img src={image} style={{ width: "50px" }} />
            </div>
            <div>
              <div>{title}</div>
            </div>
            <div>
              <div>{quantity}</div>
            </div>

            <div>
              <div>{price}</div>
            </div>
            <button
              className={"removeItem"}
              onClick={() => removeItemFromCart(id)}
            >
              x
            </button>
          </div>
        );
      })}
      <div className={"total"}>
        Total{" "}
        {productsInCart.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price * currentValue.quantity;
        }, 0)}
      </div>
      <Link to={"/checkout"}>checkout</Link>
    </div>
  );
}

export default OrderProductRow;
