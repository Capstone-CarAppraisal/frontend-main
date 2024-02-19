"use client";

import React, { useRef, useState } from "react";
import PrevButton from "@/components/Shared/Button/PrevButton";
import NextButton from "@/components/Shared/Button/NextButton";
import PriceCard from "../Summary/PriceCard";
import CarBrandCard from "../Summary/CarBrandCard";
import CarImageCard from "../Summary/CarImageCard";
import LowestPriceCard from "../Summary/LowestPriceCard";
import HighestPriceCard from "../Summary/HighestPriceCard";
import AverageMarketPriceCard from "../Summary/AverageMarketPriceCard";
import AverageMarketPriceByYearCard from "../Summary/AverageMarketPriceByYearCard";
import PriceRankCard from "../Summary/PriceRankCard";
import CarDetailCard from "../Summary/CarDetailCard";
import FrontUpload from "./ImageUpload/FrontUpload";
import RearUpload from "./ImageUpload/RearUpload";
import SideFrontUpload from "./ImageUpload/SideFrontUpload";
import SideRearUpload from "./ImageUpload/SideRearUpload";
import useHttp from "@/hooks/useHttp";
import ImageUpload from "@/libs/ImageUpload";
import { selectData, carYear } from "@/data/select";

export default function Form() {
  const [isLoading, request, data, error] = useHttp();
  const [step, setStep] = useState(0);

  const [frontData, setFrontData] = useState<File | null>();
  const [rearData, setRearData] = useState<File | null>();
  const [sideFrontData, setSideFrontData] = useState<File | null>();
  const [sideRearData, setSideRearData] = useState<File | null>();

  const [frontResult, setFrontResult] = useState<any>();
  const [rearResult, setRearResult] = useState<any>();
  const [sideFrontResult, setSideFrontResult] = useState<any>();
  const [sideRearResult, setSideRearResult] = useState<any>();

  const [selectedBrand, setSelectedBrand] = useState<any>();
  const [selectedModel, setSelectedModel] = useState<any>();
  const [selectedType, setSelectedType] = useState<any>();
  const [selectedSubModel, setSelectedSubModel] = useState<any>();
  const [selectedSubModelName, setSelectedSubModelName] = useState<any>();
  const [selectedCarYear, setSelectedCarYear] = useState<any>();
  const [selectedTransmission, setSelectedTransmission] = useState<any>();

  const [predictResult, setPredictResult] = useState<any>();

  const isSelectAllImage = [
    frontData,
    rearData,
    setFrontData,
    sideRearData,
  ].every((image) => image != null);

  const handleFrontData = (data: File) => {
    setFrontData(data);
  };
  const handleRearData = (data: File) => {
    setRearData(data);
  };
  const handleSideFrontData = (data: File) => {
    setSideFrontData(data);
  };
  const handleSideRearData = (data: File) => {
    setSideRearData(data);
  };

  const [formData, setFormData] = useState({
    car_year: 0,
    brand: "",
    model: "",
    sub_model: "",
    sub_model_name: "",
    car_type: "",
    transmission: "",
    color: "",
    modelyear_start: 2000,
    modelyear_end: 2000,
    mile: 0,
  });

  const handlePredictModel = async () => {
    if (frontData && rearData && sideFrontData && sideRearData) {
      console.log("y");
      ImageUpload(frontData, "front").then((value) => {
        setFrontResult(value[0]);
      });
      ImageUpload(rearData, "rear").then((value) => {
        setRearResult(value[0]);
      });
      ImageUpload(sideFrontData, "sidefront").then((value) => {
        setSideFrontResult(value[0]);
      });
      ImageUpload(sideRearData, "siderear").then((value) => {
        setSideRearResult(value[0]);
      });
    }
    nextStep();
    /* if (frontResult && rearResult && sideFrontResult && sideRearResult) {
      if (
        ((frontResult.Model == rearResult.Model) == sideFrontResult.Model) ==
        sideRearResult.Model
      ) {
        tempData.Model = frontResult.Model;
      }
      if (
        ((frontResult.ModelYear == rearResult.ModelYear) ==
          sideFrontResult.ModelYear) ==
        sideRearResult.ModelYear
      ) {
        tempData.ModelYear = frontResult.ModelYear;
      }
      if (
        ((frontResult.Door == rearResult.Door) == sideFrontResult.Door) ==
        sideRearResult.Door
      ) {
        tempData.Door = frontResult.Door;
      }
      setPredictResult(tempData);
      nextStep();
    } */
  };
  const onBrandChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["brand"]: value,
    });
    setSelectedBrand(value);
    setSelectedModel("");
    setSelectedType("");
    setSelectedSubModel("");
    setSelectedSubModelName("");
  };

  const onColorChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["color"]: value,
    });
  };

  const onModelChange = (event: any) => {
    const { value } = event.target;
    const model = value.split(" ");
    setFormData({
      ...formData,
      ["model"]: model[1],
    });
    setSelectedModel(value);
    setSelectedType("");
    setSelectedSubModel("");
    setSelectedSubModelName("");
  };
  const onTypeChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["car_type"]: value,
    });
    setSelectedType(value);
    setSelectedSubModel("");
    setSelectedSubModelName("");
  };

  const onSubModelChange = (event: any) => {
    const { value } = event.target;
    const numericValue = parseInt(value, 10) / 1000;
    const formattedValue = numericValue.toFixed(1);
    setFormData({
      ...formData,
      ["sub_model"]: formattedValue,
    });
    setSelectedSubModel(value);
    setSelectedSubModelName("");
  };

  const onSubModelNameChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["sub_model_name"]: value,
    });
    setSelectedSubModelName(value);
  };

  const onCarYearChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["car_year"]: parseInt(value),
    });
    setSelectedCarYear(value);
  };

  const onTransmissionTypeChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["transmission"]: value,
    });
    setSelectedTransmission(value);
  };

  const onMileAgeChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["mile"]: parseInt(value),
    });
  };

  //console.log(predictResult);
  //console.log(frontResult, rearResult, sideFrontResult, sideRearResult);

  const nextStep = (step?: any, data?: any) => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    try {
      await request("post", "/predict/value", undefined, formData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data.data.prediction);
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
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        ยี่ห้อ
                      </label>
                      <select
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                        onChange={onBrandChange}
                      >
                        <option>เลือกยี่ห้อรถ</option>
                        {selectData &&
                          Object.keys(selectData).map((brand) => (
                            <option key={brand} value={brand}>
                              {brand}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="px-4">
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        รุ่น
                      </label>
                      <select
                        onChange={onModelChange}
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                      >
                        <option value="">เลือกรุ่นรถ</option>
                        {selectedBrand &&
                          Object.keys(selectData[selectedBrand]).map(
                            (model) => (
                              <option key={model} value={model}>
                                {model}
                              </option>
                            )
                          )}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4">
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        ประเภทรถ
                      </label>
                      <select
                        onChange={onTypeChange}
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                      >
                        <option value="">เลือกประเภทรถ</option>
                        {selectedModel &&
                          Object.keys(
                            selectData[selectedBrand][selectedModel]
                          ).map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="px-4">
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        สี
                      </label>
                      <select
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                        onChange={onColorChange}
                      >
                        <option value="">เลือกสีรถ</option>
                        <option value="black">สีดำ</option>
                        <option value="gray">สีเทา</option>
                        <option value="brown">สีน้ำตาล</option>
                        <option value="red">สีแดง</option>
                        <option value="green">สีเขียว</option>
                        <option value="blue">สีฟ้า</option>
                        <option value="lightblue">สีฟ้าอ่อน</option>
                        <option value="white">สีขาว</option>
                      </select>
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
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        เลขซีซี
                      </label>
                      <select
                        onChange={onSubModelChange}
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                      >
                        <option value="">เลือกเลขซีซี</option>
                        {selectedType &&
                          Object.keys(
                            selectData[selectedBrand][selectedModel][
                              selectedType
                            ]
                          ).map((model) => (
                            <option key={model} value={model}>
                              {model}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        รุ่นย่อย
                      </label>
                      <select
                        onChange={onSubModelNameChange}
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                      >
                        <option>เลือกรุ่นย่อยรถ</option>
                        {selectedSubModel &&
                          selectData[selectedBrand][selectedModel][
                            selectedType
                          ][selectedSubModel].map((name) => (
                            <option key={name} value={name}>
                              {name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-20">
                    <div>
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-black text-xl font-normal"
                      >
                        ปีรถ
                      </label>
                      <select
                        id="hs-select-label"
                        className="py-3 px-4 pe-9 block text-[#BCBCBC] border-[#BCBCBC] w-full rounded-lg text-lg focus:border-blue-500"
                        onChange={onCarYearChange}
                      >
                        <option>เลือกปีรถ</option>
                        {carYear.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
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
                            value="MT"
                            checked={selectedTransmission === "MT"}
                            onChange={onTransmissionTypeChange}
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
                            value="AT"
                            checked={selectedTransmission === "AT"}
                            onChange={onTransmissionTypeChange}
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
                        onChange={onMileAgeChange}
                        className="py-3 px-4 block w-full border-[#BCBCBC] text-black placeholder:text-[#BCBCBC] rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
                        placeholder="ระบุเลขไมล์"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 space-x-10 flex flex-row">
                  <PrevButton handleClick={prevStep} />
                  <NextButton handleClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
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
