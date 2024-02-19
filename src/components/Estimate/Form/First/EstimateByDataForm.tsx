"use client";

import SelectInputWithLabel from "@/components/Shared/SelectInputWithLabel";
import React, { useState } from "react";
import PriceCard from "../../Summary/SummaryCard/PriceCard";
import CarBrandCard from "../../Summary/SummaryCard/CarBrandCard";
import CarImageCard from "../../Summary/SummaryCard/CarImageCard";
import LowestPriceCard from "../../Summary/SummaryCard/LowestPriceCard";
import HighestPriceCard from "../../Summary/SummaryCard/HighestPriceCard";
import AverageMarketPriceCard from "../../Summary/SummaryCard/AverageMarketPriceCard";
import AverageMarketPriceByYearCard from "../../Summary/SummaryCard/AverageMarketPriceByYearCard";
import PriceRankCard from "../../Summary/SummaryCard/PriceRankCard";
import CarDetailCard from "../../Summary/SummaryCard/CarDetailCard";
import NextArrow from "../../../../../public/assets/Nav/NextArrow.svg";
import NextButton from "@/components/Shared/Button/NextButton";
import PrevButton from "@/components/Shared/Button/PrevButton";

export default function EstimateByDataForm({
  step,
  prevStep,
  nextStep,
}: {
  step: any;
  prevStep: Function;
  nextStep: Function;
}) {
  const handlePrev = () => {
    prevStep();
  };

  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      {step === 1 && (
        <div className="flex justify-center w-full h-[75vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              กรอกลักษณะภายนอกรถ
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
              <div className="grid grid-row-2 w-[80%] mb-20">
                <div className="grid grid-cols-2 mb-10">
                  <div className="px-4">
                    <SelectInputWithLabel label="ยี่ห้อ" name="เลือกยี่ห้อรถ" />
                  </div>
                  <div className="px-4">
                    <SelectInputWithLabel label="รุ่น" name="เลือกรุ่นรถ" />
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4">
                    <SelectInputWithLabel
                      label="ประเภทรถ"
                      name="เลือกประเภทรถ"
                    />
                  </div>
                  <div className="px-4">
                    <SelectInputWithLabel label="สี" name="เลือกสีรถ" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 flex flex-row space-x-10">
                <PrevButton handleClick={handlePrev} />
                <NextButton handleClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex justify-center w-full h-[75vh] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              กรอกลักษณะภายในรถ
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
              <div className="grid grid-row-3 w-[87%] mb-20 gap-3">
                <div className="grid grid-cols-4 gap-20">
                  <div>
                    <SelectInputWithLabel label="เลขซีซี" name="เลือกเลขซีซี" />
                  </div>
                  <div className="col-span-3">
                    <SelectInputWithLabel
                      label="รุ่นย่อย"
                      name="เลือกรุ่นย่อยรถ"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-20">
                  <div>
                    <SelectInputWithLabel label="ปีรถ" name="เลือกปีรถ" />
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="hs-select-label"
                      className="block text-sm mb-2 text-black text-xl font-normal"
                    >
                      ระบบเกียร์
                    </label>

                    <div className="flex gap-x-32 mt-5">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hs-radio-group"
                          className="border-[#707070] text-rose focus:ring-0"
                          id="hs-radio-group-1"
                        />
                        <label
                          htmlFor="hs-radio-group-1"
                          className="text-xl text-gray-500 ms-2 dark:text-gray-400"
                        >
                          เกียร์ธรรมดา
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="hs-radio-group"
                          className="border-[#707070]  text-rose focus:ring-0"
                          id="hs-radio-group-3"
                        />
                        <label
                          htmlFor="hs-radio-group-3"
                          className="text-xl text-gray-500 ms-2 dark:text-gray-400"
                        >
                          เกียร์อัตโนมัติ
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-20">
                  <div>
                    <label className="block text-sm mb-2 text-black text-xl font-normal">
                      เลขไมล์ (km)
                    </label>
                    <input
                      type="text"
                      className="py-3 px-4 block w-full border-[#BCBCBC] text-black placeholder:text-[#BCBCBC] rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
                      placeholder="ระบุเลขไมล์"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-5 space-x-10 flex flex-row">
                <PrevButton handleClick={handlePrev} />
                <NextButton handleClick={handleNext} />
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className="flex justify-center w-full h-auto font-sans pt-8 items-center">
          <div className="flex flex-col w-[80vw] justify-center  max-w-[1200px]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              ผลการประเมิน
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center items-center">
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
              <div className="absolute bottom-5  space-x-10">
                <PrevButton handleClick={handlePrev} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
