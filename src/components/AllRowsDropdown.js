import React, { createRef } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Dropdown from "./Dropdown";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function AllRowsDropdown(props) {
  const {
    isDropdownOpen,
    setIsDropdownOpen,
    clickRow,
    setClickRow,
    setAddDataset,
  } = props;
  const dropDownRef = createRef();
  useOnClickOutside(dropDownRef, () => setIsDropdownOpen(false));
  return (
    <div className="relative inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={() => setIsDropdownOpen(true)}
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            All rows
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>
      <div ref={dropDownRef} className="drop">
        {isDropdownOpen && (
          <div className="origin-top-right absolute left-0 top-0 z-10  w-56 rounded-md shadow-lg">
            <div className="rounded-md bg-white shadow-xs">
              <div
                className="py-1"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <span
                  className=" cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 border-l-2 border-gray-100 hover:border-green-500"
                  role="menuitem"
                >
                  All rows
                </span>
                <span
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setClickRow(true);
                  }}
                  className=" cursor-pointer block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900  border-l-2 border-gray-100 hover:border-green-500"
                  role="menuitem"
                >
                  Some rows
                </span>
              </div>
            </div>
          </div>
        )}
        {clickRow && !isDropdownOpen && (
          <div className="origin-top-right absolute  w-64 bg-white shadow-md rounded-md show-details  z-10 p-4 ">
            <h3>Show me values where:</h3>

            <div className="flex space-x-4 items-center pb-12">
              <Dropdown title="Calories(num)" setClass="w-20" />
              <Dropdown title="is" setClass="w-20" />
              <input
                type="number"
                value="300"
                className="border inline-block py-2 rounded-md shadow-sm px-4 text-xs focus:outline-none"
              />
              <AiOutlinePlus className="cursor-pointer" />
              <BsArrowLeft className="cursor-pointer" />
              <BsArrowRight className="cursor-pointer" />
            </div>
            <div className="absolute flex space-x-4 right-0 text-xs">
              <button
                onClick={() => setClickRow(false)}
                className="uppercase font-bold px-4 -m-4"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setClickRow(false);
                  setAddDataset(true);
                }}
                className="uppercase font-bold px-4 -m-4 text-green-500"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AllRowsDropdown;
