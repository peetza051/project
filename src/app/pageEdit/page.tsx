"use client";
import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import FilterP from "@/components/filter";
import { posts } from "@/constant/constTH";
import useDialog from "@/store/dialog/dialog.store";
import { DialogViews } from "@/store/dialog/dialog.type";
import { Ipost } from "@/interface/PostItem";
import Link from "next/link";
interface items {
  items: Ipost[];
}

const PageE = () => {
  const { openDialog, setDialogView, setItemPost } = useDialog();
  const items = posts
  return (
    <div className=" bg-white max-w-[3000px] w-full max-h-[3000px] h-full  overflow-auto" id="pageEdit">
      <div className="bg-gray-300 flex w-full h-20 border-2 border-red-300 justify-between">
      <Link href={"/#HOME"}>
        <Image
          className=" ml-5 p-0 border-2 border-red-300 "
          width={77}
          height={77}
          src={"/image/travel.png"}
          alt=" logo "
        />
        </Link>
        <div className=" flex flex-row gap-10 justify-center items-center">
          <div className=" flex  gap-3 ">
            <span className="flex text-black justify-center items-center ">
              UserName
            </span>
            <Image
              src={
                "https://cdn.readthecloud.co/wp-content/uploads/2022/12/29075551/avatar-11-750x533.jpg"
              }
              width={50}
              height={77}
              alt="avatar"
              className="max-w-[50px] max-h-[35px] rounded-full "
            />
          </div>
          <div className=" mr-5 ">
            <div className="flex flex-col mt-8">
              <div className=" flex border-2 border-white p-2 ">
                <span className=" text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)]  pr-3 ">
                  EN
                </span>
                
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAhFBMVEXIEC7///8BIWnFABjrvcEAHmgAAFnICSvKKD3HACalqb0AAGAABWHGACDEAACiqL/02NvUWWfehpD88vPEAA3eh5HEAAcAHGkAGGcAF2fTVGPUXGr99fbFABPGABkAEWUAAE7txcido7ve4OiRmLP29/rgkZry0tbPPlH56evadYHWYm+GvczdAAAG3ElEQVR4nO2dfXfTOgyHDaOMtex9K2NsF9bLGC/f//vdctsuiSslsvXmnqPfXzucUCtPbFmxHDn9uXgzpefVbDF7q6eP866tD8dpRMcfuivnHxVNmi3uVs+vTT38gIw5Wd6/pJOb+2mAb+ZvFQE2h2/dW867hq6vHk8heJdrbq9/OAJsDF8O7x8I3rbT9UhOAvykBLApfLPF5x68B6Tn7Ubs7h/OSENYxwc2hG/t8/o97/YGgtdjBRAd07nGEG4GH93n7eFLxElEAWAj+DJ4t0cjPg/AR/WB59JDuAl8s8Un8oSB4CMP4c+iABvAN1t87U8Ykz4PwUedRESHsDu+3OeB8MCRCdhoHkg748uG7e30hNHDd1pw8VBiPdAVHy1Ixnikh4Kummt+JwLQEV9ZkAzgK3GU+xKZhd3w5cMW7khjHNKGOm2aBgHyh7ATvvIgGcFHDRKVALrgqwmSUXy19LcAeUPYAd/w3fbhCoRHiIFT92fN2H+9F04gbY4vg8fw/ekra+bpxBjCxvjqg+Rc87tUsjg48WO1AE3x5T6v3mX9vd8k+YOVPdAQn3RnSdCPLuufSI0PNMOXLwyAHYW2cLztKAn+4XpnWjGEjfDlQXJ9J+lWnBLy45Y+0ASfRJC8hde7v4Q2gASSCj7QAJ/WBJnGGmHMSiVZOXV8UkHyfsdIYw1NZ5pGGqIDVManeU9pvDHJJ+WDT3dE7eHT8xMe+LT9OYBPa5ayx6cfTYD4dGIka3wWsSyCTyNCt8Vn8yaF4jP0gQr4rN7jR/BJr07Y4bOb/Ebxia6N4XGgMD5u9qzT9MQ3gW/PGI2snCg+UpBMW0EnpGEn8RkE0oL4BEMuUv6GgE8qK4UCFMOnbGctPuWnKoRvGKva5K6J+CQy8q/3nfsUEXxyQXJJ2pWMT3FGE8AnmT0rWasswKcWT7Hx+SW7ivDx9sKhhjLxeaZaC/GpDBMWvsznwS5FbcdsMT7RlYyNk2bgo60M6e3XrsAnvo5Wjc86SBbCJ7mKuwa4qMO3yGzw2KNYiU80kF6savCtFtY5GUl8khmsf2vw9f4Tp23ed3oMfJKBdAW+Dp7OMpo+PsmYqxYf4neNvlFm4pP0gTX4XPYj9vG95+vb++/dd//XV2egfj7J4/v1G26LAO/5+9psvtJkQ7aq8H2eCnwsBT6WAh9LgY+lwMdS4GMp8LEU+FgKfCyld03paQrfk7eFQ6WjtjRKb83P275M49aGQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhQ5f3HqVMh7bDynuH3FAHt7/Pe39mpkPbXeptQKbAx1LgYynwsRT4WAp8LAU+lgIfS4GPpUPDJ1BOYlBJA9PFJVz14vevwWUi+F5+wm1dXb9eIlVJQ7aOCw7v5mSfxulR74YE8a3b+7KE2nvstydSx8UE3hcQ3uMePMHBS3lgzlWEhjWscHhgT7gB4In6votLQg/0q2E1rKCG38QZdBPL/k1wK6hx2naqoEb1edM9QKJ+H9o+oec71O+TmzCkqkdybDCuHjmsXYoaTp39hGqXsgDa1S4dVs7FjQbhQX5HrHIubgvoA4dD2KZyLvWJTxusUbcZtQceCUvuEGZVDcfhFfkb0arhhQCZgTSjZr2YocI161G7FCaR6hMTCuGNhQriJybgAEGX8gi6FFl8ck7a4ryOQvuWtbNw1WkxuHFgz5sKEVROi0FtJLgW4dNilH2L4FlFChMbFx/x3bb+qaqdlIUDrBolNfiIEwbHpyie08axV+CcNrmFAa9TAlGbRRYTCs6oxOExFyaVz6gsBFgUSJNPSFU0Qv2EVNR29iRCPJ+3EN6y6FXI4HxeHCAhTi0/n9d0JcPkdGj8HjgdgHA2Od6wUPxkdDY5eh8M9wPgY8GrWcFQw6ffEfbwsYLkuhyCIj7t0CvljUkFnef0FKAqPt17SsOGDIJkc3yaIyr1G3FadFTHp+fPU9eA9izliU+rc6Tdj+vHSL74dGLZVPJkeBG6Nz6NN6nkmWixxif/Hp8803z2+KRXkRKjO0tttDHFJxqe3RH2NpNWZqu2OPjgkwykJ/HJ5QXawSeXv5nAp7u9yw+flA8cxSebE20Ln0xWbgSfdEa+NXwSgTSKT34/SHv4+Fk5BJ+Jz9vJER8zkD4F8Vl9VLKVKz7e1g4An9ZOTFTO+Fjv/KSLRPYBo3LHx1hxyi/Q24WOqgF81eudxfAkh+1GTeCrDKRHyG7giX2Bg6oRfFWBdPeP2t9/oWoGX8ViAkC0gyf69SGqhvAVB9IbeBbfvqJqCl/hN8rmQfK+GsNXNIm83EPw0vGP3nf/Kx2ft1Nz+P73gStCfYY//wEigYBdwuNHrgAAAABJRU5ErkJggg=="
                  height={45}
                  width={35}
                  alt="uk"
                  className=" mr-2 "
                />
                
                <ChevronDown color="white" />
              </div>
            </div>
            <div className=" flex border-2 border-white p-2 ">
              <span className="text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_90%)] pr-3">
                TH
              </span>
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAGFBMVEWlGTEtKkr09fiiACLOm6P3+/7s7fEwLU/gHL4AAAABEUlEQVR4nO3cSRHDABDAsG1O/ow7k+eaggTBADwDAAAAAAAAAHxOtrnY5mabg02T0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0KU1Kk9KkNClNSpPSpDQpTUqT0qQ0qXnY5mWbH5smpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSfkVlK9F+Z+UJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVKalCalSWlSmpQmpUlpUpqUJqVJaVJzs83FNifbAAAAAAAAAACfP4Cl7Wg+U03EAAAAAElFTkSuQmCC"
                height={45}
                width={35}
                alt="TH"
                className="  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" container flex pt-10 ">
        <FilterP />
        <div className=" flex justify-start items-center w-20 h-11 border-2 border-gray-300 bg-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
         <button className="  p-2" onClick={() => {
                  setDialogView(DialogViews.MODEL_CREATE_DIALOG),
                  openDialog();
              }}>ADD</button>
        </div>
      </div>
        {/* <div>
          <TopFiveCard items={items} />
        </div> */}
    </div>
  );
};

export default PageE;


// {items.items.slice(0, eiei).map((post, index) => {
//   return (
//     <div
//       key={index}
//       onClick={() => {
//         setItemPost(post),
//           setDialogView(DialogViews.MODEL_CARD_DIALOG),
//           openDialog();
//       }}
//       className="bg-white ml-2 rounded-xl mt-14 min-w-[300px] h-[350px] drop-shadow-lg  cursor-pointer"