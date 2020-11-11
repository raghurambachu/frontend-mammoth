import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Checkbox from "./Checkbox";

function Filters() {
  return (
    <div className="filters flex text-xs mt-4 text-gray-700">
      <span>Existing data will be:</span>
      <div className="flex items-center space-x-2">
        <span className="ml-4">Replaced </span>
        <BsChevronDown size={10} />
        <IoIosInformationCircleOutline className="ml-2" size={15} />
      </div>
      <div className="flex items-center ml-4">
        <Checkbox id="1" label="Keep at end of Pipeline" />
        <IoIosInformationCircleOutline className="ml-2" size={15} />
      </div>
      <div className="flex items-center ml-4">
        <Checkbox id="2" label="Include hidden columns" />
        <IoIosInformationCircleOutline className="ml-2" size={15} />
      </div>
    </div>
  );
}

export default Filters;
