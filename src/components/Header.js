import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsPlus, BsQuestionCircle } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";

// import Logo from "./images/Logo";

function Header() {
  return (
    <div className="flex justify-between items-center px-4">
      <div className="left-header items-center flex pt-2">
        {/* <Logo /> */}
        <h2 className="mx-2 font-semibold ">McDonalds-Menu.csv</h2>
        <div className="flex items-center text-sm font-bold p-1 bg-gray-300 rounded-t-md  ">
          <span className="px-2 ">View1 </span>
          <BiDotsVerticalRounded />
        </div>
        <BsPlus className="mx-1" size={22} />
      </div>
      <div className="right-side flex space-x-4">
        <div className="bg-gray-700 text-gray-100 p-1 px-2 font-semibold text-xs rounded-sm shadow-md">
          You are on a free trial
        </div>
        <VscBellDot className="text-gray-600" size={24} />
        <BsQuestionCircle className="text-gray-600" size={24} />
        <span className="line w-1 h-6 border-r border-gray-500 "></span>
        <CgProfile className="text-gray-600" size={24} />
      </div>
    </div>
  );
}

export default Header;
