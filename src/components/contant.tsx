"use client";

import { posts } from "../constant/constTH";

import CardPage from "./card/card";
import FilterP from "./filter";

const Contant = () => {
  return (
    <div className="w-full">
      <FilterP />
      <CardPage items={posts} />
    </div>
  );
};

export default Contant;
