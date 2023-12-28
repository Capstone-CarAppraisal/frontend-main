import PriceCard from "@/components/Estimate/PriceCard";
import SideBar from "@/components/Sidebar/Sidebar";

export default function EstimatePage() {
  return (
    <main>
      <div>
        <div className="flex flex-col bg-white m-4 border rounded-[20px] m-10 px-6 py-3 h-fit">
          <h3 className="text-2xl sm:text-4xl font-sans font-bold text-dark-blue">
            ผลการประเมิน
          </h3>
          <div
            className="max-h-[calc(90vh-150px)] 
            overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:bg-gray-300
           sm:grid sm:grid-cols-2 space-y-4 mt-4"
          >
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
            <PriceCard />
          </div>
        </div>
      </div>
    </main>
  );
}
