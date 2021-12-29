import { useState } from "react";
import "./index.css";
function Checkout({
  customerInfomation,
  onSubmitHandler,
  onInputChangeHandler,
}) {
  return (
    <div className={"checkOut"}>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          id="firstName"
          onChange={(e) => onInputChangeHandler(e)}
          placeholder={"nume"}
        />
        <input
          type="text"
          id="lastName"
          onChange={(e) => onInputChangeHandler(e)}
          placeholder={"prenume"}
        />
        <input
          type="text"
          id="address"
          onChange={(e) => onInputChangeHandler(e)}
          placeholder={"adresa"}
        />
        <input
          type="text"
          id="phoneNr"
          onChange={(e) => onInputChangeHandler(e)}
          placeholder={"telefon"}
        />
        <input
          type="text"
          id="email"
          onChange={(e) => onInputChangeHandler(e)}
          placeholder={"email"}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Checkout;
