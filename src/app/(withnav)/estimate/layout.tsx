import SideBar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Navbar/Footer";
export default function EstimatePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white">
      <div className="mb-[50px]">{children}</div>
    </div>
  );
}
