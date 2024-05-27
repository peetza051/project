"use client";
import { FivePost } from "../constant/constTH";
import TopFiveCard from "./card/TopFiveCard";

const Top5 = () => {
  return (
    <div className="w-full container">
      <div>
        <h1 className=" text-2xl font-semibold ml-2 ">Top 5 recommended</h1>
      </div>
      <TopFiveCard items={FivePost} />
    </div>
  );
};

export default Top5;
