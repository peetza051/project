"use client";

import Navbar from "@/components/navbar";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen  max-w-[1400px] w-full mx-auto relative">
      <div className=" container fixed top-0 z-50 ">
      <Navbar />
      </div>
      <div className="border-y-1 border-divider">{children}</div>
    </div>
  );
}