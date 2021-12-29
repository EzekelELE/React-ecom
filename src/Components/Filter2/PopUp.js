import "./PopUp.css";
import { Fragment, useState } from "react";
import ReactDom from "react-dom";
import Button from "./Button";

const Main = ({ showHide }) => {
  return <div className={`wrapper ${showHide ? "show" : "hide"}`}></div>;
};
const Content = ({ showAndHide, showHide }) => {
  return (
    <div className={`mainContent ${showHide ? "show" : "hide"}`}>
      {console.log(showHide)}

      <Button showAndHide={showAndHide} />
    </div>
  );
};

function PopUp({ showHide, showAndHide }) {
  return (
    <>
      {ReactDom.createPortal(
        <>
          {console.log(showHide)}
          <Main showHide={showHide} />
          <Content showHide={showHide} showAndHide={showAndHide} />{" "}
        </>,
        document.getElementById("dialog")
      )}
    </>
  );
}

export default PopUp;
