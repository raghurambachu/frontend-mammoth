import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import BranchOutDatasetTableRow from "./BranchOutDatasetTableRow";
import Checkbox from "./Checkbox";

function BranchOutDatasetTable(props) {
  return (
    <div className="w-1/2 bg-white rounded-sm shadow-sm relative">
      <div className="flex px-4 py-2 space-x-4 text-xs text-gray-500 ">
        <div className="inline-flex items-center w-1/4 text-gray-500 ">
          <input
            type="text"
            className="w-full p-1 px-2 "
            placeholder="Search Columns"
            disabled
          />
          <AiOutlineSearch className="-mx-6" />
        </div>
        <span className="self-center cursor-pointer "> Select all</span>
        <span className="self-center cursor-pointer "> Deselect all</span>
        {props.addDataset && (
          <div className="self-center flex space-x-2 absolute right-0 pr-16 filters">
            <Checkbox id="3" label="Include hidden columns" />
          </div>
        )}
      </div>
      <div className="relative branch-out-table">
        <table className="text-xs table-fixed ">
          <thead className="text-left">
            <tr>
              <th className="w-1/4 px-4 py-2 text-xs">This Dataset</th>
              <th colSpan="2" className="w-1/2 px-4 py-2  relative ">
                <span className="inline-block h-2 w-full border-t-2 border-green-500 border-dashed absolute dashed-green-line"></span>
                <span className="absolute text-green-500 dashed-line-arrow right-0">
                  &gt;
                </span>
              </th>
              <th className="w-1/4 px-4 py-2 text-xs">
                Destination: Dataset Name
              </th>
            </tr>
          </thead>
          <tbody className="branch-out-tbody">
            {/* The checkbox is managed by state to enable or disable need to set either true or false */}
            <BranchOutDatasetTableRow
              uppercased={true}
              sign="#"
              enabled={true}
              column1="Advance Order"
              column2="Advanced Order"
              addDataset={props.addDataset}
            />
            <BranchOutDatasetTableRow sign="T" column1="Cashier" />
            <BranchOutDatasetTableRow sign="#" column1="Coupon" />
            <BranchOutDatasetTableRow sign="#" column1="Delivery" />
            <BranchOutDatasetTableRow sign="#" column1="delivery 2" />
            <BranchOutDatasetTableRow sign="#" column1="general" />
            <BranchOutDatasetTableRow sign="#" column1="REWARDS" />
            <BranchOutDatasetTableRow sign="#" column1="this column has ..." />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BranchOutDatasetTable;
