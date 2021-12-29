import { buttonBaseClasses } from "@mui/material";

function Button({ showAndHide }) {
  return (
    <div>
      <button
        onClick={() => {
          console.log("qweqwq");
          showAndHide();
        }}
      >
        press on me{" "}
      </button>
    </div>
  );
}

export default Button;
