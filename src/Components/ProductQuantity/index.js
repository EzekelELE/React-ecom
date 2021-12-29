import "./index.css";

function Quantity({ quantityChangeHandler, quantity, id }) {
  return (
    <div className={"productQuantity"}>
      <button
        onClick={(e) => {
          quantityChangeHandler(e, id);
        }}
      >
        -
      </button>
      <div>{quantity}</div>
      <button
        onClick={(e) => {
          quantityChangeHandler(e, id);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Quantity;
