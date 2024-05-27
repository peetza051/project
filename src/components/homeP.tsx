import React from "react";
import Image from "next/image";

const HomeP = () => {
  return (
    <div className=" p-0 m-0 max-h-[900px] mx-auto w-full" id="HOME">
      <Image
        src="/image/bg.png"
        alt="hero"
        className="h-[100dvh]"
        width={2500}
        height={600}
      />
      {/* <div className="absolute top-0 left-0 w-full h-36 bg-gradient-to-t from-transparent to-black opacity-90"></div>
    <div className="absolute top-[720px] left-0 w-full h-36 bg-gradient-to-b from-transparent to-white opacity-100"></div> */}
    </div>
  );
};

export default HomeP;
