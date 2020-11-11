import React from "react";
import { GoTriangleDown } from "react-icons/go";

function Dropdown(props) {
  return (
    <div className={`relative inline-block text-left ${props.className || ""}`}>
      <div>
        <span className="rounded-md shadow-md">
          <button
            type="button"
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            <span className={`mr-8 ${props.setWidth}`}>{props.title}</span>

            <GoTriangleDown className="ml-4" />
          </button>
        </span>
      </div>
    </div>
  );
}

export default Dropdown;
