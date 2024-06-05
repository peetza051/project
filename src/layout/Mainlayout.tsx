"use client";
import Navbar from "@/layout/navbar";
import FooterPage from "./footer";
import { useRouter } from 'next/router'
import { usePathname } from "next/navigation";
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathName = usePathname()
  return (
    // <div className="min-h-screen w-[1400px] mx-auto relative">
    <>
      {pathName != "/login" &&
      pathName != "/signup" &&
      pathName != "/pageEdit" ? (
        <div className="min-h-screen  mx-auto relative">
        <div className="w-full fixed top-0 z-50 ">
          <Navbar />{" "}
          </div>
          <div className="bg-gray-100 border-y-1 border-divider">
            {children}
          </div>
          <FooterPage />
        </div>
        
      ) : (
        <div className="min-h-screen  mx-auto relative">
        <div className="w-full fixed top-0 z-50 ">
          <div className="bg-gray-100 border-y-1 border-divider">
            {children}
          </div>
        </div>
        </div>
      )}
</>
  );
}

  
