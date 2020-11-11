import React from "react";

function LargeNavBtn(props) {
  const { icon1: Icon1, icon2: Icon2, title } = props;
  return (
    <div
      className={`text-center inline-block ${
        props.className ? props.className : ""
      }`}
    >
      <div className="bg-white shadow-sm  rounded-md inline-flex items-center border-gray-700 border">
        <div className="py-1 flex justify-center px-4 border-r  border-gray-700">
          <Icon1 size={12} />
        </div>
        <div className="px-8 py-1 flex justify-center ">
          <Icon2 size={12} />
        </div>
      </div>
      <span className="text-sm text-gray-700 mt-1 block">{title}</span>
    </div>
  );
}

export default LargeNavBtn;
