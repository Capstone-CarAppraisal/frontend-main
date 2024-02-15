"use client";

import React, { useState } from "react";
import EstimateByDataForm from "./First/EstimateByDataForm";
import Image from "next/image";
import PrevButton from "@/components/Shared/Button/PrevButton";
import NextButton from "@/components/Shared/Button/NextButton";
import SelectInputWithLabel from "@/components/Shared/SelectInputWithLabel";
import PriceCard from "../Summary/PriceCard";
import CarBrandCard from "../Summary/CarBrandCard";
import CarImageCard from "../Summary/CarImageCard";
import LowestPriceCard from "../Summary/LowestPriceCard";
import HighestPriceCard from "../Summary/HighestPriceCard";
import AverageMarketPriceCard from "../Summary/AverageMarketPriceCard";
import AverageMarketPriceByYearCard from "../Summary/AverageMarketPriceByYearCard";
import PriceRankCard from "../Summary/PriceRankCard";
import CarDetailCard from "../Summary/CarDetailCard";
import NextArrow from "../../../../../public/assets/Nav/NextArrow.svg";
import FrontUpload from "./ImageUpload/FrontUpload";
import RearUpload from "./ImageUpload/RearUpload";
import SideFrontUpload from "./ImageUpload/SideFrontUpload";
import SideRearUpload from "./ImageUpload/SideRearUpload";

export default function Form() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    step1: { field1: "", field2: "", field3: "" },
    step2: {
      /* fields for step 2 */
    },
    // Add more steps as needed
  });

  const [frontData, setFrontData] = useState<File>();
  const [rearData, setRearData] = useState<File>();
  const [sideFrontData, setSideFrontData] = useState<File>();
  const [sideRearData, setSideRearData] = useState<File>();

  const handleFrontData = (data: File) => {
    setFrontData(data);
  };
  const handleRearData = (data: any) => {
    setRearData(data);
  };
  const handleSideFrontData = (data: any) => {
    setSideFrontData(data);
  };
  const handleSideRearData = (data: any) => {
    setSideRearData(data);
  };

  const handlePredictModel = (data: any) => {
    /* console.log(frontData);
    console.log(rearData);
    console.log(sideFrontData);
    console.log(sideRearData); */
    //TODO Connect to API
    nextStep();
  };

  const nextStep = (step?: any, data?: any) => {
    setFormData({ ...formData, [step]: data });
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div className="mb-2 mx-12 font-sans">
        <div>
          <ul className="relative flex justify-center gap-0">
            <li className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group">
              <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                <span
                  className={`w-10 h-10 flex justify-center items-center flex-shrink-0 text-xl font-bold ${
                    step === 0 || step === 1
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-[#BCBCBC]"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    1
                  </span>
                </span>
                <span className="ms-2  text-xl font-normal text-dark-blue">
                  ลักษณะภายนอก
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group">
              <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                <span
                  className={`w-10 h-10 flex justify-center items-center flex-shrink-0 text-xl font-bold ${
                    step === 2
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-[#BCBCBC]"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    2
                  </span>
                </span>
                <span className="ms-2 text-xl font-normal text-dark-blue">
                  ลักษณะภายใน
                </span>
              </span>
            </li>
            <li className="flex items-center justify-center gap-x-2 shrink basis-0 flex-1 group">
              <span className="min-w-[28px] min-h-[28px] group inline-flex items-center text-xs align-middle">
                <span
                  className={`w-10 h-10 flex justify-center items-center flex-shrink-0 text-xl font-bold ${
                    step === 3
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-[#BCBCBC]"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    3
                  </span>
                </span>
                <span className="ms-2  text-xl font-normal text-dark-blue">
                  ผลการประเมิน
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {step === 0 && (
        <div className="flex justify-center w-full h-[1000px] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              เพิ่มภาพรถยนต์
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center ">
              <div className="grid grid-cols-2 w-full h-[85%] gap-[1px]">
                <FrontUpload handleFrontImage={handleFrontData} />
                <RearUpload handleRearImage={handleRearData} />
                <SideFrontUpload handleSideFrontImage={handleSideFrontData} />
                <SideRearUpload handleSideRearImage={handleSideRearData} />
              </div>
              <div className="absolute bottom-5 space-x-10">
                <NextButton handleClick={handlePredictModel} />
              </div>
            </div>
          </div>
        </div>
      )}
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
                <PrevButton handleClick={prevStep} />
                <NextButton handleClick={nextStep} />
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
                <PrevButton handleClick={prevStep} />
                <NextButton handleClick={nextStep} />
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
                <PrevButton handleClick={prevStep} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
