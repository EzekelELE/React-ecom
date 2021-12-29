import { Card } from "@mui/material";

function Cards({ people }) {
  return (
    <div>
      {people.map((el, index) => {
        return <div key={index}>{el.nume}</div>;
      })}
    </div>
  );
}

export default Cards;
