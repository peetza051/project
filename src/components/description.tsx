import React from "react";
import Image from "next/image";

const DescriptionPage = () => {
  return (
    <div className="  ">
    <div className=" p-4 py-20  flex flex-row justify-between items-center container " id="ABOUT">
        <h1 className="ml-6 text-orange-500 font-bold mb-2">ABOUT US !!!</h1>
        {/* <p className=" text-blue-950 text-5xl font-bold  ">
          {" "}
          สิ่งที่ต้องรู้เกี่ยวกับ เชียงใหม่{" "}
        </p>
        <p className=" pt-6 "> description </p> */}
      <Image className="w-[100px] sm:w-[600px] h-[500px]" src={"/image/viw.png"} width={686} height={554} alt="viw" />

      </div>
    </div>
  );
};

export default DescriptionPage;
