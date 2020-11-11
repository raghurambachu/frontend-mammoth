import React from "react";

function Checkbox(props) {
  return (
    <>
      <input type="checkbox" id={`checkbox${props.id}`} />
      <label htmlFor={`checkbox${props.id}`}>{props.label}</label>
    </>
  );
}

export default Checkbox;
