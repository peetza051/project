"use client";

import useDialog from "@/store/dialog/dialog.store";

import Image from "next/image";
import { DialogViews } from "@/store/dialog/dialog.type";
import { Ipost } from "@/interface/PostItem";
import { useState } from "react";
interface items {
  items: Ipost[];
  filter: string;
}

const CardPage = (items: items) => {
  const { openDialog, setDialogView, setItemPost } = useDialog();
  const [eiei, seteiei] = useState(4);

  const showMoreItems = () => {
    seteiei((prevValue) => prevValue + 4);
  };
  const filteredItems = items.items.filter((post) => {
    return items.filter === "ทั้งหมด" || post.category === items.filter; //items.filter === "ทั้งหมด" คือ ถ้าส่งมาเป็นคำว่า "ทั้งหมด" แล้วมันเป็นจริงให้แสดงทั้งหมด || (หรือ) post.category === items.filter ถ้าข้อมูลที่ส่งมาเท่ากับ ค่า post.category เป็นจริงให้แสดงตามเงื่อนไข
  });
  console.log(items.filter)
  return (
    <>
      <div className="max-w-[1440px] overflow-y-auto flex flex-wrap px-5 container justify-start items-center pl-9 ">
        {filteredItems.slice(0, eiei).map((post, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setItemPost(post),
                  setDialogView(DialogViews.MODEL_CARD_DIALOG),
                  openDialog();
              }}
              className="bg-white ml-2 rounded-xl mt-14 max-w-[300px] h-[390px] drop-shadow-lg  cursor-pointer"
            >
            <div className="  p-4">
            <Image
            className="rounded-xl max-h-[170px] w-[500px]  "
            src={post.tarvel.image}
            alt="ImageTarvel"
            width={300}
            height={300}
            />
            </div>
              
              <div className="pb-4 text-sm pl-4 ">{post.tarvel.name}</div>
              <div className=" px-2 ">
                <li className=" text-gray-400 text-sm pl-4 ">{post.address}</li>
                <li className=" text-gray-400 text-sm pl-4 ">
                  {post.opentime}
                </li>
                <li className=" text-gray-400 text-sm pl-4 ">
                  {post.category}
                </li>{" "}
              </div>
            </div>
          );
        })}{" "}
      </div>
      <div className="flex justify-center items-center py-10">
        <button
          onClick={showMoreItems}
          className="p-3 rounded-lg bg-green-500 hover:bg-green-700 active:bg-green-200 transition text-xl font-semibold ml-2 "
        >
          Show Content all
        </button>
      </div>
    </>
  );
};

export default CardPage;
