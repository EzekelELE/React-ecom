import { ResetTv } from "@mui/icons-material";
import { useState, useRef, useEffect } from "react";
import ShowAll from "./ShowAll";

function Form() {
  const [inputs, updateInputs] = useState(
    JSON.parse(localStorage.getItem("myl-ist"))
  );
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const updatedValues = {
      name: target1.current.value,
      age: target2.current.value,
    };

    updateInputs([...inputs, updatedValues]);

    reset();
  };

  const reset = () => {
    target1.current.value = "";
    target2.current.value = "";
  };

  useEffect(() => {
    console.log(inputs);
    localStorage.setItem("myl-ist", JSON.stringify(inputs));
    // updateInputs(JSON.parse(localStorage.getItem("myl-ist")));
  });
  useEffect(() => {
    updateInputs(JSON.parse(localStorage.getItem("myl-ist")));
  }, []);

  const changeHandler = () => {};
  const target1 = useRef();
  const target2 = useRef();

  return (
    <div>
      <form
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <label>
          name
          <input
            type="text"
            ref={target1}
            onChange={() => {
              changeHandler();
            }}
          />
        </label>
        <label>
          age
          <input type="text" ref={target2} />
        </label>{" "}
        <input type="submit" />
      </form>
      <ShowAll inputs={inputs} />
    </div>
  );
}

export default Form;
