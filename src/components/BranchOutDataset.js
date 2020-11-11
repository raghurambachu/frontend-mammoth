import React, { useState } from "react";
import { IoIosGitBranch, IoMdClose } from "react-icons/io";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

import Actions from "./Actions";
import AllRowsDropdown from "./AllRowsDropdown";
import BranchOutDatasetTable from "./BranchOutDatasetTable";
import Dropdown from "./Dropdown";
import Filters from "./Filters";

function BranchOutDataset() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [clickRow, setClickRow] = useState(false);
  const [addDataset, setAddDataset] = useState(false);
  return (
    <div className="p-4 branch-out-dataset">
      <div className="flex items-center justify-between branchout-header">
        <div className="flex items-center">
          <IoIosGitBranch size={14} />
          <h3 className="mx-4 font-semibold"> Branch Out to Dataset</h3>
        </div>
        <IoMdClose className="font-light text-gray-800" size={20} />
      </div>
      <div className="my-4 dropdowns flex items-center">
        <Dropdown title="Create new Dataset" />
        <input
          type="text"
          className="px-4 py-2 mx-4 text-sm border rounded-md shadow-sm outline-none"
        />
        <span className="self-center mr-4"> and send </span>
        <AllRowsDropdown
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          clickRow={clickRow}
          setClickRow={setClickRow}
          addDataset={addDataset}
          setAddDataset={setAddDataset}
          className="ml-4"
          title="All rows"
        />
        {addDataset && (
          <>
            <div className="text-xs ml-4 border rounded-md bg-gray-200 pl-2 pr-12 py-2">
              ( <span className="text-green-500 font-semibold ">Calories</span>
              <span className="mx-4"> =&gt;</span>
              300 )
            </div>
            <GrEdit className="mx-4 cursor-pointer" />
            <RiDeleteBinLine className="cursor-pointer" />
          </>
        )}
      </div>
      <BranchOutDatasetTable addDataset={addDataset} />
      <Filters />
      <Actions />
    </div>
  );
}

export default BranchOutDataset;
