import React from "react";
import { GiJoin } from "react-icons/gi";
import { SiDiscogs } from "react-icons/si";
import { RiPhoneFindLine } from "react-icons/ri";
import { BsThreeDotsVertical, BsLink45Deg } from "react-icons/bs";
import { VscBrowser } from "react-icons/vsc";
import { AiOutlineAlert } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

import LargeNavBtn from "./LargeNavBtn";
import SmallNavBtn from "./SmallNavBtn";

function Navigation() {
  return (
    <div className="bg-gray-300 p-4 flex justify-between">
      <div className="left-side flex items-center">
        <LargeNavBtn
          className="mr-10 cursor-pointer"
          icon1={GiJoin}
          icon2={SiDiscogs}
          title="Data Preparation"
        />
        <LargeNavBtn
          className="cursor-pointer"
          icon1={RiPhoneFindLine}
          icon2={BsThreeDotsVertical}
          title="Explore Columns"
        />
        <SmallNavBtn
          className="mx-4 cursor-pointer"
          icon1={VscBrowser}
          title="Column Browser"
        />
        <SmallNavBtn
          className=" cursor-pointer"
          icon1={AiOutlineAlert}
          title="Alerts"
        />
      </div>
      <div className="right-side flex">
        <SmallNavBtn
          className="mx-4 cursor-pointer"
          icon1={BsLink45Deg}
          title="CSV Link"
        />
        <SmallNavBtn
          className=" cursor-pointer"
          icon1={BiLinkExternal}
          title="Export"
        />
      </div>
    </div>
  );
}

export default Navigation;
