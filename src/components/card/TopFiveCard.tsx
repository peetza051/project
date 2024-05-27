"use client";

import useDialog from "@/store/dialog/dialog.store";

import Image from "next/image";
import { DialogViews } from "@/store/dialog/dialog.type";
import { Ipost } from "@/interface/PostItem";
interface items {
  items: Ipost[];
}

const TopFiveCard = (items: items) => {
  const { openDialog, setDialogView ,setItemPost } = useDialog();
  return (
    <div className="w-full overflow-x-scroll pb-6">
      <div className="flex w-full">
        {items.items.map((post, index) => {
          
          return (
            <div
              key={index}
              onClick={() => {
                setItemPost(post) , setDialogView(DialogViews.MODEL_CARD_DIALOG), openDialog();
              }}
              className="bg-white ml-2 rounded-xl mt-14 min-w-[300px] h-[350px] drop-shadow-lg  cursor-pointer"
            >
              <Image
                className=" p-4  rounded-xl max-h-[170px] w-[300px] "
                src={post.tarvel.image}
                alt="ImageTarvel"
                width={200}
                height={200}
              />
              <div className="pb-4 text-sm pl-4 ">{post.tarvel.name}</div>
              <div>
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
    </div>
  );
};

export default TopFiveCard;
