import AverageMarketPriceByYearCard from "./SummaryCard/AverageMarketPriceByYearCard";
import AverageMarketPriceCard from "./SummaryCard/AverageMarketPriceCard";
import CarBrandCard from "./SummaryCard/CarBrandCard";
import CarDetailCard from "./SummaryCard/CarDetailCard";
import CarImageCard from "./SummaryCard/CarImageCard";
import LowestHighestPriceCard from "./SummaryCard/LowestHighestPriceCard";

import PriceCard from "./SummaryCard/PriceCard";
import PriceRankCard from "./SummaryCard/PriceRankCard";

export default function Summary({
  model,
  modelDetail,
  carMarketDetail,
  predictValue,
}: {
  model: string;
  modelDetail: string;
  carMarketDetail?: any;
  predictValue: any;
}) {
  const getPercentFromFirstHand = (predictVal: any, firstHandPrice: any) => {
    let percent = Math.round((predictVal / firstHandPrice) * 100);
    return percent;
  };

  const convertNumber = (value: any, state: any) => {
    let rounded = Math.round(value / 1000);
    if (state == 0) {
      return rounded.toString();
    } else if (state == 1) {
      return `฿${rounded}K`;
    } else if (state == 2) {
      `${rounded}K`;
    }
  };

  return (
    <div className="pt-8 pb-[100px] grid grid-cols-3 w-[95%] flex justify-center gap-4 h-full">
      <div>
        <PriceCard
          price={Math.round(predictValue / 1000).toString()}
          percent={getPercentFromFirstHand(
            predictValue,
            carMarketDetail["First car cost"]
          )}
        />
      </div>
      <div>
        <CarBrandCard model={model} subModel={modelDetail} />
      </div>
      <div>
        <CarImageCard />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <LowestHighestPriceCard label="ราคาตลาดต่ำสุด" />
        <LowestHighestPriceCard label="ราคาตลาดสูงสุด" />
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
        <CarDetailCard
          firstHandPrice={convertNumber(carMarketDetail["First car cost"], 1)}
          averagePrice={convertNumber(carMarketDetail["Average Cost"], 1)}
          soldAverage={convertNumber(400000, 1)}
          SD={convertNumber(carMarketDetail["SD cost"], 1)}
          soldAverageSD={convertNumber(45000, 1)}
          averageMile={convertNumber(carMarketDetail["Average Mile"], 2)}
          amountInMarket={convertNumber(carMarketDetail["Number of Cars"], 0)}
        />
      </div>
      <div>
        <PriceRankCard />
      </div>
    </div>
  );
}
