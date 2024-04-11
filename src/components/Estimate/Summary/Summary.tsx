"use client";
import { useState } from "react";
import AverageMarketPriceByYearCard from "./SummaryCard/AverageMarketPriceByYearCard";
import AverageMarketPriceCard from "./SummaryCard/AverageMarketPriceCard";
import CarBrandCard from "./SummaryCard/CarBrandCard";
import CarDetailCard from "./SummaryCard/CarDetailCard";
import CarImageCard from "./SummaryCard/CarImageCard";
import LowestHighestPriceCard from "./SummaryCard/LowestHighestPriceCard";

import PriceCard from "./SummaryCard/PriceCard";
import PriceRankCard from "./SummaryCard/PriceRankCard";
import AveragePriceByDistrict from "./SummaryCard/AveragePriceByDistrict";

export default function Summary({
  brand,
  model,
  modelDetail,
  carMarketDetail,
  predictValue,
  viewMode,
}: {
  brand: string;
  model: string;
  modelDetail: string;
  carMarketDetail?: any;
  predictValue: any;
  viewMode: any;
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
      return `${rounded}K`;
    }
  };

  if (carMarketDetail) {
    if (viewMode === 0) {
      return (
        <div className="pt-8 pb-[100px] grid grid-cols-3 w-[95%] flex justify-center gap-4 h-full">
          <div className="grid col-span-full">
            <PriceCard
              mode={viewMode}
              price={convertNumber(predictValue, 0)}
              percent={getPercentFromFirstHand(
                predictValue,
                carMarketDetail["First car cost"]
              )}
            />
          </div>
          {/* <div>
            <CarBrandCard brand={brand} model={model} subModel={modelDetail} />
          </div>
          <div>
            <CarImageCard />
          </div> */}
          <div>
            <LowestHighestPriceCard
              label="ราคาตลาดต่ำสุดปัจจุบัน"
              present={convertNumber(carMarketDetail["Min price"], 0)}
              mode={viewMode}
            />
          </div>

          <div>
            <LowestHighestPriceCard
              label="ราคาเฉลี่ยตลาดปัจจุบัน"
              present={convertNumber(carMarketDetail["Min price"], 0)}
              mode={viewMode}
            />
          </div>
          <div>
            <LowestHighestPriceCard
              label="ราคาตลาดสูงสุดปัจจุบัน"
              present={convertNumber(carMarketDetail["Max price"], 0)}
              mode={viewMode}
            />
          </div>
          <div className="grid grid-row gap-4">
            <AverageMarketPriceCard />
            <CarBrandCard brand={brand} model={model} subModel={modelDetail} />
          </div>
          <div className="grid col-span-2">
            <AveragePriceByDistrict />
          </div>
          <div></div>
        </div>
      );
    } else if (viewMode === 1) {
      // Render different content for mode 2
      return <div>{/* Content for mode 2 */}</div>;
    }
  } else {
    return null;
    /* <div className="pt-8 pb-[100px] grid grid-cols-3 w-[95%] flex justify-center gap-4 h-full">
        <div>
          <PriceCard price={convertNumber(predictValue, 0)} mode={viewMode} />
        </div>
        <div>
          <CarBrandCard brand={brand} model={model} subModel={modelDetail} />
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
          <CarDetailCard />
        </div>
        <div></div>
      </div> */
  }
}
