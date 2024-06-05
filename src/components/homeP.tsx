import React from "react";
import Image from "next/image";

const HomeP = () => {
  return (
    <div className=" p-0 m-0 max-h-[900px] mx-auto w-full " id="HOME" >
      <Image
        src="/image/bg.png"
        alt="hero"
        className="h-[90dvh] w-full"
        width={500}
        height={600}
      />
      <div className="absolute top-0 left-0 w-[100%] h-[50dvh] bg-gradient-to-t from-transparent to-black opacity-90"></div>
      {/* <div className="absolute top-[100dvh] left-0 w-[100%] h-[50dvh] bg-gradient-to-b from-transparent to-white opacity-100"></div> */}
    </div>
  );
};

export default HomeP;
