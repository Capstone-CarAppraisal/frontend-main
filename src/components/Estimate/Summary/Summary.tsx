import AverageMarketPriceByYearCard from "./SummaryCard/AverageMarketPriceByYearCard";
import AverageMarketPriceCard from "./SummaryCard/AverageMarketPriceCard";
import CarBrandCard from "./SummaryCard/CarBrandCard";
import CarDetailCard from "./SummaryCard/CarDetailCard";
import CarImageCard from "./SummaryCard/CarImageCard";
import HighestPriceCard from "./SummaryCard/HighestPriceCard";
import LowestPriceCard from "./SummaryCard/LowestPriceCard";
import PriceCard from "./SummaryCard/PriceCard";
import PriceRankCard from "./SummaryCard/PriceRankCard";

export default function Summary() {
  return (
    <div className="pt-8 pb-[100px] grid grid-cols-3 w-[95%] flex justify-center gap-4 h-full">
      <div>
        <PriceCard price={421} percent={66} />
      </div>
      <div>
        <CarBrandCard />
      </div>

      <div>
        <CarImageCard />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <LowestPriceCard />
        <HighestPriceCard />
      </div>
      <div>
        <AverageMarketPriceCard />
      </div>
      <div>
        <AverageMarketPriceByYearCard />
      </div>
      <div>
        <PriceRankCard />
      </div>
      <div>
        <CarDetailCard />
      </div>
      <div>
        <PriceRankCard />
      </div>
    </div>
  );
}
