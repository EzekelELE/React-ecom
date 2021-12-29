import "./index.css";

function PersonCard(props) {
  return (
    <div>
      {console.log(props)}
      {props.peopleState.map((el) => {
        return (
          <div key={el.id} className={`${props.className} person`}>
            {el.name}
          </div>
        );
      })}
    </div>
  );
}

export default PersonCard;
