import React from "react";
import { filterPageTH } from "@/constant/constTH";
interface filterPageTH {
  name: string;
  value: string;
}

const FilterP = () => {
  return (
    <div className=" container w-full ">
    <div className="pl-8 pt-6 flex flex-row items-center gap-16  ">
      {filterPageTH.map((item, index) => (
        <div key={index} className=" font-bold hover:cursor-pointer sm:text-sm ">
          {" "}
          {item.name}{" "}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FilterP;
