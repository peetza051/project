import React from "react";
import Image from "next/image";

const DescriptionPage = () => {
  return (
    <div className=" p-4 ">
      <div
        className=" p-4 flex flex-col justify-center items-center  md:flex-row md:justify-between md:items-center container "
        id="ABOUT"
      >
        <div className="flex flex-col items-center ">
          <span className="ml-6 text-orange-500 font-bold mb-2">ABOUT US !!!</span>
          <p className=" text-blue-950 text-5xl font-bold text-center ">
          {" "}
          สิ่งที่ต้องรู้เกี่ยวกับ `เชียงใหม่`{" "}
        </p>
        <p className=" pt-6 "> ‘เชียงใหม่’ หนึ่งในจังหวัดทางตอนเหนือของประเทศไทยที่นอกจากจะเป็นเมืองท่องเที่ยวที่ได้รับความนิยมเป็นอันดับต้น ๆ แล้ว ยังเป็นอีกหนึ่งเมืองเศรษฐกิจที่เรียกได้ว่าเป็นศูนย์กลางตอนเหนือของประเทศไทยอีกด้วย!!</p>
        </div>
        <div>
          <Image
            className="w-[750px]  h-[500px] "
            src={"/image/viw.png"}
            width={686}
            height={554}
            alt="viw"
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
