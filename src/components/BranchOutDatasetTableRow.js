import React from "react";
import Dropdown from "./Dropdown";

function BranchOutDatasetTableRow(props) {
  return (
    <tr className="text-xs">
      <td className="px-4 py-2 ">
        <span
          className={`mr-2 ${
            props.enabled ? "text-gray-600" : "text-gray-400"
          } `}
        >
          {props.sign}
        </span>
        <span className={` ${props.uppercased ? "uppercase" : ""} `}>
          {props.column1}
        </span>
      </td>
      <td className="relative px-4 text-center " colSpan="2">
        <span
          className={`absolute inline-block w-2 h-2 rounded-full left-dot ${
            props.enabled ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
        <span
          className={`absolute border-t-1 border-green-500 green-line ${
            props.enabled ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>
        <span
          className={`absolute inline-block w-2 h-2  rounded-full right-dot ${
            props.enabled ? "bg-green-500" : "bg-gray-400"
          }`}
        ></span>

        <div className="absolute wrap">
          <input
            checked={props.enabled}
            className="slider-input"
            type="checkbox"
            id="sd"
          />
          <label className="slider" htmlFor="sd"></label>
        </div>
      </td>

      {props.addDataset ? (
        <td>
          <Dropdown setClass="p-0 ml-5 text-xs w-24 " title="Create column" />
        </td>
      ) : (
        <td className="flex px-4 py-2">
          <span
            className={`mr-2 ${
              props.enabled ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {props.sign}
          </span>
          <input
            type="text"
            className={`px-2 py-1 rounded-sm text-xs  border ${
              props.uppercased ? "uppercase" : ""
            } `}
            value={props.column2 || ""}
            disabled={props.column2 ? false : true}
            placeholder={props.enabled ? "" : "Column Name"}
          />
        </td>
      )}
    </tr>
  );
}

export default BranchOutDatasetTableRow;
