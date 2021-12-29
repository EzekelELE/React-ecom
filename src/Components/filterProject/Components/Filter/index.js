import { useState, useRef } from "react";

function Filter({ people }) {
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
    </div>
  );
}

export default Filter;
