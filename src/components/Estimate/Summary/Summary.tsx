"use client";
import { useState } from "react";
import AverageMarketPriceByYearCard from "./SummaryCard/AverageMarketPriceByYearCard";
import AverageMarketPriceCard from "./SummaryCard/AverageMarketPriceCard";
import CarBrandCard from "./SummaryCard/CarBrandCard";
import CarDetailCard from "./SummaryCard/CarDetailCard";
import CarImageCard from "./SummaryCard/CarImageCard";
import LowestHighestPriceCard from "./SummaryCard/LowestHighestPriceCard";
import mazdaLogo from "../../../../public/assets/CarLogo/Mazda.svg";
import PriceCard from "./SummaryCard/PriceCard";
import PriceRankCard from "./SummaryCard/PriceRankCard";
import AveragePriceByDistrict from "./SummaryCard/AveragePriceByDistrict";
import Image from "next/image";
import CarImage from "../../../../public/assets/CarImage/Mazda2/1.3SPSedan.png";
import {
  translateColorToThai,
  convertTransmission,
  convertCarType,
} from "@/data/select";

export default function Summary({
  brand,
  model,
  modelDetail,
  carMarketDetail,
  predictValue,
  carDetail,
  viewMode,
}: {
  brand: string;
  model: string;
  modelDetail: string;
  carMarketDetail?: any;
  predictValue: any;
  carDetail: any;
  viewMode: any;
}) {
  const getPercentFromFirstHand = (predictVal: any, firstHandPrice: any) => {
    let percent = Math.round((predictVal / firstHandPrice) * 100);
    return percent;
  };
  const parsedCarDetail = JSON.parse(carDetail);

  console.log(parsedCarDetail);

  const convertNumber = (value: any, state: any) => {
    const rounded = Math.floor(value / 1000);
    const floor = Math.floor(value / 1000) * 1000;
    if (state == 0) {
      return rounded;
    } else if (state == 1) {
      return floor;
    }
  };
  console.log(carMarketDetail);

  if (carMarketDetail) {
    if (viewMode === 0) {
      return (
        <div className="pt-8 pb-[50px] grid grid-cols-3 w-[95%] flex justify-center gap-4 h-full">
          <div className="grid col-span-full">
            <PriceCard
              mode={viewMode}
              price={convertNumber(predictValue, 1)}
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
              present={convertNumber(carMarketDetail["Min price"], 1)}
              mode={viewMode}
              status={"decrease"}
              percent={2.5}
            />
          </div>

          <div>
            <LowestHighestPriceCard
              label="ราคาเฉลี่ยตลาดปัจจุบัน"
              present={convertNumber(carMarketDetail["Average Cost"], 1)}
              mode={viewMode}
              status={"decrease"}
              percent={0.5}
            />
          </div>
          <div>
            <LowestHighestPriceCard
              label="ราคาตลาดสูงสุดปัจจุบัน"
              present={convertNumber(carMarketDetail["Max price"], 1)}
              mode={viewMode}
              status={"increase"}
              percent={1.5}
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
      return (
        <div className="pb-[50px] flex flex-row w-full h-full">
          <div className="bg-white w-[70%] grid grid-cols-2 p-4 gap-4">
            <PriceCard
              mode={viewMode}
              price={convertNumber(predictValue, 0)}
              percent={getPercentFromFirstHand(
                predictValue,
                carMarketDetail["First car cost"]
              )}
            />
            <div className="grid grid-cols-2 gap-4">
              <LowestHighestPriceCard
                label="ราคาตลาดต่ำสุด"
                present={convertNumber(carMarketDetail["Min price"], 0)}
                mode={viewMode}
              />
              <LowestHighestPriceCard
                label="ราคาตลาดสูงสุด"
                present={convertNumber(carMarketDetail["Max price"], 0)}
                mode={viewMode}
              />
            </div>
            <div>
              <AverageMarketPriceCard />
            </div>

            <div>
              <AverageMarketPriceByYearCard />
            </div>

            <div>
              <PriceRankCard rankData={carMarketDetail["Car show"]} />
            </div>

            <div>
              <CarDetailCard
                firstHandPrice={convertNumber(
                  carMarketDetail["First car cost"],
                  0
                )}
                averagePrice={convertNumber(carMarketDetail["Average Cost"], 0)}
                soldAverage={convertNumber(400000, 0)}
                SD={convertNumber(carMarketDetail["SD Cost"], 0)}
                soldAverageSD={convertNumber(45000, 0)}
                averageMile={convertNumber(carMarketDetail["Average Mile"], 0)}
                amountInMarket={carMarketDetail["Number of Cars"]}
              />
            </div>
          </div>
          <div className="bg-dark-blue w-[30%] absolute top-0 right-0 bottom-0">
            <div className="flex flex-col w-full p-4 gap-4">
              <div className="flex flex-row w-full">
                <Image src={mazdaLogo} alt="car-logo" width={80} height={80} />
                <div className="flex-flex-col">
                  <p className="text-white text-lg font-semibold">
                    {brand} {model}
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {modelDetail}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Image src={CarImage} alt="car-Image" />
              </div>
              <div className="flex flex-col p-5 w-full">
                <div className="flex flex-col w-full space-y-2 mt-4">
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ยี่ห้อ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedBrand}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      รุ่น
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedModel}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      รุ่นย่อย
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {(
                        parseInt(parsedCarDetail.selectedSubModel, 10) / 1000
                      ).toFixed(1)}{" "}
                      {parsedCarDetail.selectedSubModelName}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ปีรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedCarYear}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ประเภทรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {convertCarType(parsedCarDetail.selectedType)}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      สีรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {translateColorToThai(parsedCarDetail.selectedColor)}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ประเภทเกียร์
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {convertTransmission(
                        parsedCarDetail.selectedTransmission
                      )}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between text-lg">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      โฉมปีรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedStartModelYear % 100}-
                      {parsedCarDetail.selectedEndModelYear % 100}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between text-lg">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      เลขไมล์ (กม.)
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.mile}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else {
    if (viewMode === 0) {
      return (
        <div className="pt-8 pb-[50px] grid grid-cols-3 w-[95%] flex justify-center gap-4 h-full">
          <div className="grid col-span-full">
            <PriceCard mode={viewMode} price={convertNumber(predictValue, 1)} />
          </div>
          <div>
            <LowestHighestPriceCard
              label="ราคาตลาดต่ำสุดปัจจุบัน"
              mode={viewMode}
            />
          </div>

          <div>
            <LowestHighestPriceCard
              label="ราคาเฉลี่ยตลาดปัจจุบัน"
              mode={viewMode}
            />
          </div>
          <div>
            <LowestHighestPriceCard
              label="ราคาตลาดสูงสุดปัจจุบัน"
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
      return (
        <div className="pb-[50px] flex flex-row w-full h-full">
          <div className="bg-white w-[70%] grid grid-cols-2 p-4 gap-4">
            <PriceCard mode={viewMode} price={convertNumber(predictValue, 0)} />
            <div className="grid grid-cols-2 gap-4">
              <LowestHighestPriceCard
                label="ราคาตลาดต่ำสุด"
                mode={viewMode}
              />
              <LowestHighestPriceCard
                label="ราคาตลาดสูงสุด"
                mode={viewMode}
              />
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
          </div>
          <div className="bg-dark-blue w-[30%] absolute top-0 right-0 bottom-0">
            <div className="flex flex-col w-full p-4 gap-4">
              <div className="flex flex-row w-full">
                <Image src={mazdaLogo} alt="car-logo" width={80} height={80} />
                <div className="flex-flex-col">
                  <p className="text-white text-lg font-semibold">
                    {brand} {model}
                  </p>
                  <p className="text-white text-lg font-semibold">
                    {modelDetail}
                  </p>
                </div>
              </div>
              <div className="w-full">
                <Image src={CarImage} alt="car-Image" />
              </div>
              <div className="flex flex-col p-5 w-full">
                <div className="flex flex-col w-full space-y-2 mt-4">
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ยี่ห้อ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedBrand}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      รุ่น
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedModel}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      รุ่นย่อย
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {(
                        parseInt(parsedCarDetail.selectedSubModel, 10) / 1000
                      ).toFixed(1)}{" "}
                      {parsedCarDetail.selectedSubModelName}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ปีรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.selectedCarYear}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ประเภทรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {convertCarType(parsedCarDetail.selectedType)}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      สีรถ
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {translateColorToThai(parsedCarDetail.selectedColor)}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      ประเภทเกียร์
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {convertTransmission(
                        parsedCarDetail.selectedTransmission
                      )}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between text-lg">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      โฉมปีรถ
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {parsedCarDetail.selectedStartModelYear % 100}-
                      {parsedCarDetail.selectedEndModelYear % 100}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                  <div className="flex justify-between text-lg">
                    <p className="text-lg font-normal text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      เลขไมล์ (กม.)
                    </p>
                    <p className="text-lg font-semibold text-white overflow-hidden whitespace-nowrap text-ellipsis">
                      {parsedCarDetail.mile}
                    </p>
                  </div>
                  <hr className="border-white"></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
