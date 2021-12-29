import "./index.css";
function Orders({
  customerInfomation: { firstName, lastName, email, phoneNr, address },
}) {
  return (
    <div className={"Orders"}>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{email}</div>
      <div>{phoneNr}</div>
      <div>{address}</div>
    </div>
  );
}

export default Orders;
