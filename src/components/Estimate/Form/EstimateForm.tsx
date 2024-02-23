"use client";

import React, { useState } from "react";
import PrevButton from "@/components/Shared/Button/PrevButton";
import NextButton from "@/components/Shared/Button/NextButton";
import ImageUpload from "./ImageUpload";
import Image from "@/libs/Image";
import useHttp from "@/hooks/useHttp";
import { selectData, carYear, color } from "@/data/select";
import SelectInputWithLabel from "@/components/Shared/SelectInputWithLabel";
import Summary from "../Summary/Summary";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";

export default function EstimateForm() {
  const [request, predictValue, error] = useHttp();
  const [request2, marketDetail, error2] = useHttp();
  const [request3, carDetail, error3] = useHttp();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(0);

  const [frontData, setFrontData] = useState<File | null>();
  const [rearData, setRearData] = useState<File | null>();
  const [sideFrontData, setSideFrontData] = useState<File | null>();
  const [sideRearData, setSideRearData] = useState<File | null>();

  const [selectedBrand, setSelectedBrand] = useState<any>();
  const [selectedModel, setSelectedModel] = useState<any>();
  const [selectedType, setSelectedType] = useState<any>();
  const [selectedColor, setSelectedColor] = useState<any>();
  const [selectedSubModel, setSelectedSubModel] = useState<any>();
  const [selectedSubModelName, setSelectedSubModelName] = useState<any>();
  const [selectedCarYear, setSelectedCarYear] = useState<any>();
  const [selectedTransmission, setSelectedTransmission] = useState<any>();
  const [mile, setMile] = useState<any>();

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
    setSelectedColor(value);
  };

  const onModelChange = (event: any) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      ["model"]: value,
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
    setMile(value);
  };

  const nextStep = (step?: any, data?: any) => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handlePredictModel = async () => {
    setIsLoading(true);
    let frontRes, rearRes, sideFrontRes, sideRearRes;
    let frontColor, rearColor, sideFrontColor, sideRearColor;
    if (frontData || rearData || sideFrontData || sideRearData) {
      if (frontData) {
        try {
          const front = await Image(frontData, "front");
          frontRes = front[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const front1 = await Image(frontData, "color");
          frontColor = front1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
      if (rearData) {
        try {
          const rear = await Image(rearData, "rear");
          rearRes = rear[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const rear1 = await Image(rearData, "color");
          rearColor = rear1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
      if (sideFrontData) {
        try {
          const sideFront = await Image(sideFrontData, "sidefront");
          sideFrontRes = sideFront[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const sideFront1 = await Image(sideFrontData, "color");
          frontColor = sideFront1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
      if (sideRearData) {
        try {
          const sideRear = await Image(sideRearData, "siderear");
          sideRearRes = sideRear[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const sideRear1 = await Image(sideRearData, "color");
          sideRearColor = sideRear1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
    }
    if (frontRes || rearRes || sideFrontRes || sideRearRes) {
      let predictJSON = {
        front: frontRes,
        rear: rearRes,
        sidefront: sideFrontRes,
        siderear: sideRearRes,
      };
      let predictColorJSON = {
        front: frontColor,
        rear: rearColor,
        sidefront: sideFrontColor,
        siderear: sideRearColor,
      };
      const predictResponse = await request3(
        "post",
        "/predict/onecar",
        undefined,
        JSON.stringify(predictJSON)
      );

      const predictColorResponse = await request3(
        "post",
        "/predict/onecolor",
        undefined,
        JSON.stringify(predictColorJSON)
      );
      setSelectedBrand(predictResponse.Prediction.Brand);
      setSelectedModel(predictResponse.Prediction.Model);
      setSelectedColor(predictColorResponse.Prediction.color.toLowerCase());
      setFormData({
        ...formData,
        ["model"]: predictResponse.Prediction.Model,
        ["brand"]: predictResponse.Prediction.Brand,
        ["color"]: predictColorResponse.Prediction.color.toLowerCase(),
      });
    }
    setIsLoading(false);
    nextStep();
  };

  const handleSubmit = async () => {
    try {
      const response = await request(
        "post",
        "/predict/value",
        undefined,
        formData
      );
      getMarketDetail(response);
    } catch (error) {
      toast.error("โปรดตรวจสอบข้อมูล", {
        duration: 4000,
        className: "font-sans",
      });
    }
  };

  const getMarketDetail = async (predictValue: any) => {
    setIsLoading(true);
    const numericValue = parseInt(selectedSubModel, 10) / 1000;
    const formattedValue = numericValue.toFixed(1);
    try {
      await request2(
        "get",
        `/car_market_detail?car_year=${selectedCarYear}&brand=${selectedBrand}&model=${selectedModel}&sub_model=${formattedValue}&sub_model_name=${selectedSubModelName}&car_type=${selectedType}&predict_value=${Math.floor(
          predictValue.prediction
        )}`,
        undefined,
        undefined
      );
      setIsLoading(false);
      nextStep();
    } catch (error) {
      setIsLoading(false);
      nextStep();
    }
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
                      : "bg-white text-dark-blue border-4 border-lightgrey"
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
                      : "bg-white text-dark-blue border-4 border-lightgrey"
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
                      : "bg-white text-dark-blue border-4 border-lightgrey"
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
          <div className="flex flex-col w-[80vw] relative">
            <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
              เพิ่มภาพรถยนต์
            </div>
            <div className="relative border border-2 border-[#D9D9D9] h-full flex justify-center ">
              {isLoading ? (
                <LoadingSpinner />
              ) : (
                <div className="grid grid-cols-2 w-full h-[85%] gap-[1px]">
                  <ImageUpload
                    label="มุมด้านหน้า"
                    handleFrontImage={handleFrontData}
                    selectedImage={frontData}
                  />
                  <ImageUpload
                    label="มุมด้านหลัง"
                    handleFrontImage={handleRearData}
                    selectedImage={rearData}
                  />
                  <ImageUpload
                    label="มุมเฉียงจากด้านหน้า"
                    handleFrontImage={handleSideFrontData}
                    selectedImage={sideFrontData}
                  />
                  <ImageUpload
                    label="มุมเฉียงจากด้านหลัง"
                    handleFrontImage={handleSideRearData}
                    selectedImage={sideRearData}
                  />
                </div>
              )}

              <div className="absolute bottom-5 space-x-10">
                <div className="flex flex-col space-y-2">
                  <NextButton handleClick={handlePredictModel} />
                </div>
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
                      <SelectInputWithLabel
                        label="ยี่ห้อ"
                        name="เลือกยี่ห้อรถ"
                        handleChange={onBrandChange}
                        option={Object.keys(selectData)}
                        value={selectedBrand}
                        isSelected={selectedBrand}
                      />
                    </div>
                    <div className="px-4">
                      <SelectInputWithLabel
                        label="รุ่น"
                        name="เลือกรุ่นรถ"
                        handleChange={onModelChange}
                        option={
                          selectedBrand &&
                          Object.keys(selectData[selectedBrand])
                        }
                        value={selectedModel}
                        isSelected={selectedModel}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4">
                      <SelectInputWithLabel
                        label="ประเภทรถ"
                        name="เลือกประเภทรถ"
                        handleChange={onTypeChange}
                        option={
                          selectedModel &&
                          Object.keys(selectData[selectedBrand][selectedModel])
                        }
                        value={selectedType}
                        isSelected={selectedType}
                      />
                    </div>
                    <div className="px-4">
                      <label
                        htmlFor="hs-select-label"
                        className="block text-sm mb-2 text-dark-blue text-xl font-normal"
                      >
                        สี
                      </label>
                      <select
                        id="hs-select-label"
                        className={`py-3 px-4 pe-9 block ${
                          selectedColor ? "text-black" : "text-[#BCBCBC]"
                        }  border-[#BCBCBC] w-full rounded-lg text-lg`}
                        onChange={onColorChange}
                        value={selectedColor}
                      >
                        <option value="">เลือกสีรถ</option>
                        {color.map((color, index) => (
                          <option key={index} value={color.value}>
                            {color.option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 flex flex-row space-x-10">
                  <PrevButton handleClick={prevStep} />
                  <NextButton
                    handleClick={nextStep}
                    isDisabled={
                      !(
                        selectedBrand &&
                        selectedModel &&
                        selectedType &&
                        selectedColor
                      )
                    }
                  />
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
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <div className="grid grid-row-3 w-[87%] mb-20 gap-3">
                    <div className="grid grid-cols-4 gap-20">
                      <div>
                        <SelectInputWithLabel
                          label="ขนาดเครื่องยนต์ (ซีซี)"
                          name="เลือกขนาดเครื่องยนต์ (ซีซี)"
                          handleChange={onSubModelChange}
                          option={
                            selectedType &&
                            Object.keys(
                              selectData[selectedBrand][selectedModel][
                                selectedType
                              ]
                            )
                          }
                          value={selectedSubModel}
                          isSelected={selectedSubModel}
                        />
                      </div>
                      <div className="col-span-3">
                        <SelectInputWithLabel
                          label="รุ่นย่อย"
                          name="เลือกรุ่นย่อยรถ"
                          handleChange={onSubModelNameChange}
                          option={
                            selectedSubModel &&
                            selectData[selectedBrand][selectedModel][
                              selectedType
                            ][selectedSubModel]
                          }
                          value={selectedSubModelName}
                          isSelected={selectedSubModelName}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-20">
                      <div>
                        <SelectInputWithLabel
                          label="ปีรถ"
                          name="เลือกปีรถ"
                          handleChange={onCarYearChange}
                          option={carYear}
                          value={selectedCarYear}
                          isSelected={selectedCarYear}
                        />
                      </div>

                      <div className="col-span-3">
                        <label
                          htmlFor="hs-select-label"
                          className="block text-sm mb-2 text-dark-blue text-xl font-normal"
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
                              className="text-xl text-black ms-2"
                            >
                              เกียร์ธรรมดา
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="hs-radio-group"
                              className="border-[#707070] text-rose focus:ring-0"
                              id="hs-radio-group-3"
                              value="AT"
                              checked={selectedTransmission === "AT"}
                              onChange={onTransmissionTypeChange}
                            />
                            <label
                              htmlFor="hs-radio-group-3"
                              className="text-xl text-black ms-2"
                            >
                              เกียร์อัตโนมัติ
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-20">
                      <div>
                        <label className="block text-sm mb-2 text-dark-blue text-xl font-normal">
                          เลขไมล์ (km)
                        </label>
                        <input
                          type="text"
                          onChange={onMileAgeChange}
                          className="py-3 px-4 block w-full border-[#BCBCBC] text-black placeholder:text-[#BCBCBC] rounded-lg text-lg focus:border-blue-500 focus:ring-blue-500"
                          placeholder="ระบุเลขไมล์"
                          value={mile}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-5 space-x-10 flex flex-row">
                  <PrevButton handleClick={prevStep} />
                  <NextButton
                    handleClick={handleSubmit}
                    isDisabled={
                      !(
                        selectedSubModel &&
                        selectedSubModelName &&
                        formData["mile"] &&
                        selectedCarYear &&
                        selectedTransmission
                      )
                    }
                  />
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
              {marketDetail == null ? (
                <Summary
                  brand={selectedBrand}
                  model={selectedModel}
                  modelDetail={`${(
                    parseInt(selectedSubModel, 10) / 1000
                  ).toFixed(1)} ${selectedSubModelName} ${selectedType}`}
                  predictValue={predictValue.prediction}
                />
              ) : (
                <Summary
                  brand={selectedBrand}
                  model={selectedModel}
                  modelDetail={`${(
                    parseInt(selectedSubModel, 10) / 1000
                  ).toFixed(1)} ${selectedSubModelName} ${selectedType}`}
                  carMarketDetail={marketDetail}
                  predictValue={predictValue.prediction}
                />
              )}

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
