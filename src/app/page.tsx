import Image from "next/image";
import Navbar from "@/layout/navbar";
import HomeP from "@/components/homeP";
import DescriptionPage from "@/components/description";
import Contant from "@/components/contant";
import Top5 from "@/components/Top5";
import TypeCon from "@/components/Typecon";
import FilterP from "@/components/filter";
export default function Home() {
  return (
    <div className="  ">
      <HomeP />
      <DescriptionPage />
      <Top5 />
      <TypeCon />
      
      <Contant />
      </div>
  );
}
