import { useState } from "react";
import Filter from "./Filter";
import Cards from "./Cards";
import PopUp from "./PopUp";
import Button from "./Button";
function Filter2() {
  const initialState = [
    { nume: "abdo" },

    { nume: "amar" },

    { nume: "gigi" },

    { nume: "robet" },

    { nume: "marius" },

    { nume: "vasile" },

    { nume: "petarda" },

    { nume: "floricica" },

    { nume: "stefan" },

    { nume: "vlad" },

    { nume: "laur" },

    { nume: "vasile" },
  ];
  const [people, updatePeople] = useState(initialState);

  const changeHnalder = (input) => {
    console.log(input.target.value);

    updatePeople(
      initialState.filter((el) => {
        return el.nume.includes(input.target.value);
      })
    );
  };
  const [showHide, setShowHide] = useState(true);
  const showAndHide = () => {
    setShowHide(!showHide);
  };
  return (
    <div>
      <Button showAndHide={showAndHide} />
      <Filter changeHnalder={changeHnalder} />
      <Cards people={people} />
      <PopUp showHide={showHide} showAndHide={showAndHide} />
    </div>
  );
}

export default Filter2;
