
import Navbar from "@/layout/navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <div className="min-h-screen w-[1400px] mx-auto relative">
    <div className="min-h-screen  mx-auto relative">
      <div className="w-full fixed top-0 z-50 ">
        <Navbar />
      </div>
      <div className="bg-gray-100 border-y-1 border-divider">{children}</div>
    </div>
  );
}
