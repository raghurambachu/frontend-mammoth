import React from "react";

function SmallNavBtn(props) {
  const { icon1: Icon1, title } = props;
  return (
    <div
      className={`flex  flex-col items-center ${
        props.className ? props.className : ""
      }`}
    >
      <div className="shadow-sm bg-white inline-flex px-4 flex-col border border-gray-700 rounded-md py-1">
        <Icon1 size={12} />
      </div>
      <span className="text-sm text-gray-700 mt-1 block">{title}</span>
    </div>
  );
}

export default SmallNavBtn;
