import React from "react";
import Image from "next/image";
import Link from "next/link";

const FooterPage = () => {
  return (
    <div className="flex flex-col bg-slate-700 w-full h-96 items-center justify-around" id="FOOTER">
      <div>
        <Image width={150} height={150} src="/image/travel.png" alt="travel" />
      </div>
      <div className=" text-white gap-10 flex">
        <Link href={"#HOME"}>
          <h1>Home</h1>
        </Link>
        <Link href={"#ABOUT"}>
          <h1>About</h1>
        </Link>
        <Link href={"#FOOTER"}>
          <h1>Contact Us</h1>
        </Link>
      </div>
      <div className=" flex gap-5">
        <div className="w-10 h-10  rounded-full bg-sky-800 text-sm text-white flex justify-center items-center">
          <span>FB</span>
        </div>
        <div className="w-10 h-10  rounded-full bg-sky-800 text-sm text-white flex justify-center items-center">
          <span>Gmail</span>
        </div>
        <div className="w-10 h-10  rounded-full bg-sky-800 text-sm text-white flex justify-center items-center">
          <span>IG</span>
        </div>
        <div className="w-10 h-10  rounded-full bg-sky-800 text-sm text-white flex justify-center items-center">
          <span>TW</span>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full h-0 "></div>
      <div>
        <h1 className=" text-white ">Copyright@2024</h1>
      </div>
    </div>
  );
};

export default FooterPage;
