function ShowAll({ inputs }) {
  return (
    <div>
      {inputs.map((el) => {
        return (
          <div>
            <div>Nume: {el.name}</div>
            <div>Age: {el.age}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowAll;
