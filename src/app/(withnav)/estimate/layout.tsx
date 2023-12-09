import SideBar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
export default function EstimatePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-blue h-[100vh]">
      <SideBar />
      <div className="ml-[70px] sm:ml-[120px]">{children}</div>
    </div>
  );
}
