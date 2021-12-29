import PersonCard from "./Components/Cards";
import { useState, useRef } from "react";
import "./index.css";
function Test2() {
  const people = [
    { name: "abdo", age: 22, id: 1 },
    { name: "mus", age: 12, id: 2 },
    { name: "rika", age: 10, id: 3 },
    { name: "stefan", age: 29, id: 4 },
    { name: "george", age: 29, id: 5 },
    { name: "marius", age: 22, id: 6 },
  ];
  const inputRef = useRef();
  const [peopleState, updatePeople] = useState(people);

  const filterHandler = () => {
    const filteredPeople = people.filter((el) => {
      return el.name.includes(inputRef.current.value);
    });
    updatePeople(filteredPeople);
  };
  return (
    <div>
      <input type="text" ref={inputRef} onChange={() => filterHandler()} />
      <PersonCard peopleState={peopleState} />
    </div>
  );
}

export default Test2;
