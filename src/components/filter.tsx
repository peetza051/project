import React, { useState } from "react";
import { filterPageTH, posts } from "@/constant/constTH";
import CardPage from "./card/card";


interface filterPageTH {
  name: string;
  value: string;
}

const FilterP = () => {
  const [T, setT] = useState<string>("ทั้งหมด");
  console.log(T)
  return (
    <div className=" container w-full  ">
      <div className="pl-8 pt-6 flex flex-row items-center gap-16 overflow-x-scroll border-b-2 ">
        {filterPageTH.map((item, index) => (
          <div
            key={index}
            onClick={() => setT(item.name)}
            className=" font-bold hover:cursor-pointer text-sm "
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className=" w-full ">
        <CardPage items={posts} filter={T} />
      </div>
      
    </div>
  );
};

export default FilterP;
