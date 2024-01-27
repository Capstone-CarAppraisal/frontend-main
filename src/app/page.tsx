import Landing1 from "@/components/HomePage/page1/Landing1";
import Landing2 from "@/components/HomePage/page2/Landing2";
import Landing3 from "@/components/HomePage/page3/Landing3";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <Landing1 />
      <Landing2 />
      <Landing3 />
    </div>
  );
}
