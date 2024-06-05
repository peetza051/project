"use client";



import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import useDialog from "@/store/dialog/dialog.store";

import Image from "next/image";




export default function ModelCard() {
  const { itemPost,closeDialog } = useDialog();
  
  return (
    <DialogContent className=" max-sm:max-w-[280px]  w-full overflow-scroll    max-h-[530px] sm:max-h-[650px] h-full mt-0 mr-5 ">
      <DialogHeader>
        <DialogTitle>
          <div className="flex flex-row justify-between pb-3">
            <h1>Quick List</h1>
          </div>
        </DialogTitle>
        <DialogDescription >
        <div>
        <Image
          className=" p-4  rounded-xl max-h-[170px] w-full "
          src={itemPost.tarvel.image}
          alt="ImageTarvel"
          width={200}
          height={200}
        />
        <div className=" pb-4 text-sm pl-4 ">{itemPost.tarvel.name}</div>
        <div className="pb-4 text-sm pl-4 ">{itemPost.tarvel.description}</div>
        <li className=" text-gray-400 text-sm pl-4 ">{itemPost.address}</li>
        <li className=" text-gray-400 text-sm pl-4 ">{itemPost.opentime}</li>
        <li className=" text-gray-400 text-sm pl-4 ">{itemPost.category}</li>
      </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          onClick={closeDialog}
          variant="outline"
          className="w-full text-white hover:text-white rounded-xl bg-blue-600 hover:bg-primary"
        >
          Complete listing
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
