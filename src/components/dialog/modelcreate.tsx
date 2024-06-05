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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TypeOfPlace, districtTH, filterPageTH } from "@/constant/constTH";

export default function ModelCreate() {
  const { itemPost, closeDialog } = useDialog();
  return (
    <DialogContent className="bg-gray-100 max-sm:max-w-[280px]  w-full overflow-scroll    max-h-[530px] sm:max-h-[650px] h-full mt-0 mr-5 ">
      <DialogHeader>
        <DialogTitle>
          <div className="flex flex-col justify-between pb-3">
            <h1 className=" pt-2 ">General information</h1>
            <p className="pt-2 text-sm text-gray-500 font-medium">
              Create your tarvel listing
            </p>
          </div>
        </DialogTitle>
        <DialogDescription>
          <div className="grid grid-cols-2 ">
            <div className=" col-span-2  ">
              <h1 className=" text-black mb-5">Add pictures</h1>
              <input
                type="file"
                className="border bg-white border-gray-400 p-2 rounded-md"
                src="img_submit.gif"
                alt="Submit"
                width="60"
                height="60"
                
              ></input>
            </div>
            <div className=" col-span-2 text-black pt-3 pb-2"> Place </div>
            <div>
              <h1 className=" text-black pb-2">Name</h1>
              <input
                type="text"
                defaultValue=" Name of Place "
                className="border border-gray-400 p-2 rounded-md"
                src="img_submit.gif"
                alt="Submit"
                width="60"
                height="60"
              ></input>
            </div>
            <div>
              <h1 className=" text-black pb-2">Contact</h1>
              <input
                type="text"
                defaultValue=" Number / Email  "
                className="border border-gray-400 p-2 rounded-md"
                src="img_submit.gif"
                alt="Submit"
                width="60"
                height="60"
              ></input>
            </div>
            <div className="col-span-2">
              <h1 className=" text-black pb-2">Description</h1>
              <input
                type="text"
                defaultValue=" addrass "
                className="border border-gray-400 w-[460px] h-32 rounded-md"
                src="img_submit.gif"
                alt="Submit"
                width="0"
                height="0"
              ></input>
            </div>
            <div className="">
              <h1 className=" text-black pb-2">DISTRICT</h1>
              <h1 className=" text-black pb-2">what district ?</h1>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="district" />
                </SelectTrigger>
                <SelectContent>
                  {districtTH.map((item, index) => (
                    <SelectItem
                      key={index}
                      className=" font-bold hover:cursor-pointer text-sm "
                      value={item.nameD}
                      
                    >
                      {item.nameD}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="">
              <h1 className=" text-black pb-2">TYPE</h1>
              <h1 className=" text-black pb-2">what type of place</h1>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="type of place" />
                </SelectTrigger>
                <SelectContent>
                  {TypeOfPlace.map((item, index) => (
                    <SelectItem
                      key={index}
                      className=" font-bold hover:cursor-pointer text-sm "
                      value={item.name}
                      
                    >
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        {/* <Button
              onClick={closeDialog}
              variant="outline"
              className="w-full text-white hover:text-white rounded-xl bg-blue-600 hover:bg-primary"
            >
              Complete listing
            </Button> */}
      </DialogFooter>
    </DialogContent>
  );
}
