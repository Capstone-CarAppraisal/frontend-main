import SideBar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
export default function EstimatePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white h-[80vh]">
      <div>{children}</div>
    </div>
  );
}
