"use client";

import React, { useState } from "react";
import Image from "next/image";
import PrevButton from "@/components/Shared/Button/PrevButton";
import NextButton from "@/components/Shared/Button/NextButton";
import ImageUpload from "./ImageUpload";
import SentImage from "@/libs/Image";
import useHttp from "@/hooks/useHttp";
import { selectData, carYear, color, findCarType } from "@/data/select";
import SelectInputWithLabel from "@/components/Shared/SelectInputWithLabel";
import Summary from "../Summary/Summary";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import MSCIcon from "../../../../public/assets/Form/MSCExampleIcon.svg";
import SelectButton from "@/components/Shared/Button/SelectButton";
import CorrectIcon from "../../../../public/assets/Form/checkIcon.svg";
import InvalidIcon from "../../../../public/assets/Form/invalidIcon.svg";
import frontCarIcon from "@/../public/assets/Form/FrontCarIcon.svg";
import rearCarIcon from "@/../public/assets/Form/RearCarIcon.svg";
import sideFrontCarIcon from "@/../public/assets/Form/SideFrontCarIcon.svg";
import sideRearCarIcon from "@/../public/assets/Form/SideRearIcon.svg";

export default function EstimateForm() {
  const [request, predictValue, error] = useHttp();
  const [request2, marketDetail, error2] = useHttp();
  const [request3, carDetail, error3] = useHttp();
  const [request4, mscRes, error4] = useHttp();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [summaryViewMode, setSummaryViewMode] = useState(0);
  const [carDataFromMSC, setCarDataFromMSC] = useState<any>();

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
  const [MSC, setMSC] = useState<any>();

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

  const onMSCInputChange = async (event: any) => {
    const { value } = event.target;
    setMSC(value);
    try {
      const response = await request4(
        "get",
        `/msc_code?msc_code=${value}`,
        undefined,
        MSC
      );
      setCarDataFromMSC(response);
    } catch (error) {
      console.log("Incorrect MSC");
    }
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
  console.log(MSC);

  const nextStep = (step?: any, data?: any) => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onModeChange = (mode: any) => {
    setSummaryViewMode(mode);
  };
  const handlePredictModel = async () => {
    setIsLoading(true);
    let frontRes, rearRes, sideFrontRes, sideRearRes;
    let frontColor, rearColor, sideFrontColor, sideRearColor;
    if (MSC && !error4) {
      try {
        const response = await request4(
          "get",
          `/msc_code?msc_code=${MSC}`,
          undefined,
          undefined
        );
        console.log(mscRes);
        setSelectedBrand("Mazda");
        setSelectedModel(mscRes.model);
        setSelectedType(
          findCarType("Mazda", mscRes.model, mscRes.submodel_name)
        );
        setSelectedSubModel(parseFloat(mscRes.submodel) * 1000);
        setSelectedSubModelName(mscRes.submodel_name);
        setSelectedCarYear(mscRes.model_year);
        setFormData({
          ...formData,
          ["brand"]: "Mazda",
          ["model"]: mscRes.model,
          ["car_type"]: findCarType(
            "Mazda",
            mscRes.model,
            mscRes.submodel_name
          ),
          ["sub_model"]: mscRes.submodel.toString(),
          ["sub_model_name"]: mscRes.submodel_name,
          ["car_year"]: mscRes.model_year,
        });
      } catch (error) {
        console.log("Incorrect MSC");
      }
    } else if (frontData || rearData || sideFrontData || sideRearData) {
      if (frontData) {
        try {
          const front = await SentImage(frontData, "front");
          frontRes = front[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const front1 = await SentImage(frontData, "color");
          frontColor = front1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
      if (rearData) {
        try {
          const rear = await SentImage(rearData, "rear");
          rearRes = rear[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const rear1 = await SentImage(rearData, "color");
          rearColor = rear1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
      if (sideFrontData) {
        try {
          const sideFront = await SentImage(sideFrontData, "sidefront");
          sideFrontRes = sideFront[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const sideFront1 = await SentImage(sideFrontData, "color");
          frontColor = sideFront1[0].prediction;
        } catch (err) {
          console.log(err);
        }
      }
      if (sideRearData) {
        try {
          const sideRear = await SentImage(sideRearData, "siderear");
          sideRearRes = sideRear[0].prediction;
        } catch (err) {
          console.log(err);
        }
        try {
          const sideRear1 = await SentImage(sideRearData, "color");
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
                    step === 1
                      ? "bg-dark-blue text-white"
                      : "bg-white text-dark-blue border-4 border-lightgrey"
                  }  font-bold rounded-full`}
                >
                  <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">
                    1
                  </span>
                </span>
                <span className="ms-2  text-xl font-normal text-dark-blue">
                  ภาพรถยนตร์และรหัส
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
                  ลักษณะรถยนต์
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
      {step === 1 && (
        <div className="flex justify-center w-full h-[2000px] font-sans pt-8">
          <div className="flex flex-col w-[80vw]">
            <div className="space-y-8 my-8">
              <h1 className="text-dark-blue text-5xl font-bold">
                ภาพรถยนต์และรหัส
              </h1>
              <p className="text-2xl text-black font-normal">
                หากผู้ใช้งานไม่มีภาพหรือรหัสรถยนต์แต่ทราบรุ่นและลักษณะรถยนต์แน่ชัด
                สามารถข้ามขั้นตอนนี้ไปได้แต่หากคุณมีข้อมูล
                ไม่เพียงพอสามารถกรอกเพียงข้อมูลที่มีได้
                เพื่อให้ระบบช่วยระบุรุ่นและลักษณะรถยนต์
              </p>
            </div>
            <div className="space-y-10 flex flex-col items-center">
              <div className="w-full">
                <div className="bg-dark-blue font-bold text-white text-2xl w-1/5 text-center px-5 py-3">
                  เพิ่มภาพรถยนต์
                </div>
                <div className="relative border border-2 border-[#D9D9D9] h-[750px] w-full flex flex-col items-center justify-center">
                  {isLoading ? (
                    <LoadingSpinner />
                  ) : (
                    <div className="grid grid-cols-2 w-full h-[100%] gap-[1px]">
                      <ImageUpload
                        label="มุมด้านหน้า"
                        handleFrontImage={handleFrontData}
                        selectedImage={frontData}
                        imgSrc={frontCarIcon}
                      />
                      <ImageUpload
                        label="มุมด้านหลัง"
                        handleFrontImage={handleRearData}
                        selectedImage={rearData}
                        imgSrc={rearCarIcon}
                      />
                      <ImageUpload
                        label="มุมเฉียงจากด้านหน้า"
                        handleFrontImage={handleSideFrontData}
                        selectedImage={sideFrontData}
                        imgSrc={sideFrontCarIcon}
                      />
                      <ImageUpload
                        label="มุมเฉียงจากด้านหลัง"
                        handleFrontImage={handleSideRearData}
                        selectedImage={sideRearData}
                        imgSrc={sideRearCarIcon}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <div className="bg-dark-blue font-bold text-white text-2xl w-1/5 text-center px-5 py-3">
                  รหัส MSC
                </div>
                <div className="relative border border-2 border-[#D9D9D9] h-[750px] flex flex-col items-center justify-center">
                  <div className="flex flex-col items-center justify-center w-3/4 space-y-12">
                    <h1 className="text-5xl font-bold text-dark-blue">
                      รหัส MSC
                    </h1>
                    <p className="text-xl text-black font-normal">
                      รหัส MSC (Model System Catalog code)
                      เป็นรหัสที่ใช้ข้อมูลของรถยนต์อัน ได้แก่ รุ่นรถยนต์
                      ปีรถยนต์ และสีพิเศษ โดยมีเฉพาะบางแบรนด์รถยนต์เท่านั้น
                      โดยปัจจุบันระบบรองรับเพียง มาสด้า ที่มีปีรถตั้งแต่ 2018
                      เป็นต้นไป รหัสนี้สามารถพบได้ใน หนังสือซ่อมบำรุง
                      โดยมีตัวอย่างดังนี้
                    </p>
                    <Image src={MSCIcon} alt="msc-example-img" />
                    <p className="text-xl text-black font-normal">
                      กรณีสีปกติรหัส MSC จะมี 7 หลัก เช่น DEMWRAC
                      แต่ถ้าเป็นสีพิเศษจะมี _ ตามด้วยเลข 1 หลัก ต่อท้ายเช่น
                      DEMWRAC_1
                    </p>

                    <label className="text-xl">ระบุรหัส</label>
                    <div className="relative w-1/2">
                      <input
                        type="text"
                        className="py-3 px-4 block w-full border-[#BCBCBC] rounded-lg text-md text-center"
                        placeholder="ระบุรหัส"
                        onChange={onMSCInputChange}
                        value={MSC}
                      />

                      {!error4 && MSC && (
                        <Image
                          src={CorrectIcon}
                          alt="correct-icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                      )}
                      {error4 && MSC && (
                        <Image
                          src={InvalidIcon}
                          alt="invalid-icon"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mt-16">
                <NextButton handleClick={handlePredictModel} />
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        {step === 2 && (
          <div className="flex justify-center w-full h-[1400px] font-sans pt-8">
            <div className="flex flex-col w-[80vw]">
              <div className="space-y-8 my-8">
                <h1 className="text-dark-blue text-5xl font-bold">
                  รุ่นและลักษณะรถยนต์
                </h1>
                <p className="text-2xl text-black font-normal">
                  กรุณากรอกข้อมูลรุ่นและลักษณะ ช่องที่มีการเติมโดยอัตโนมัติ ✦
                  มาจากข้อมูลที่คุณกรอกเมื่อหน้าที่ผ่านมา
                </p>
              </div>
              <div className=" flex flex-col items-center">
                <div className="w-full">
                  <div className="bg-dark-blue font-bold text-white text-2xl w-fit px-5 py-3">
                    กรอกลักษณะภายนอกรถ
                  </div>
                  <div className="relative border border-2 border-[#D9D9D9] h-[450px] flex justify-center items-center">
                    <div className="absolute left-0 top-0 bg-blue text-2xl text-white font-normal px-8 py-3 z-10">
                      ลักษณะภายนอก
                    </div>
                    <div className="grid grid-row-2 w-[90%]">
                      <div className="grid grid-cols-2 mb-10 gap-8">
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

                      <div className="grid grid-cols-2 gap-8">
                        <div className="px-4">
                          <SelectInputWithLabel
                            label="ประเภทรถ"
                            name="เลือกประเภทรถ"
                            handleChange={onTypeChange}
                            option={
                              selectedModel &&
                              Object.keys(
                                selectData[selectedBrand][selectedModel]
                              )
                            }
                            value={selectedType}
                            isSelected={selectedType}
                          />
                        </div>
                        <div className="px-4">
                          <label className="block text-sm mb-2 text-dark-blue text-xl font-normal">
                            สี
                          </label>
                          <select
                            className={`py-3 px-4 pe-9 block ${
                              selectedColor ? "text-black" : "text-[#BCBCBC]"
                            }  border-[#BCBCBC] w-full rounded-lg text-lg focus:text-black`}
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
                  </div>
                </div>
                <div className="w-full">
                  <div className="relative border border-2 border-[#D9D9D9] h-[520px] flex justify-center items-center">
                    <div className="absolute left-0 top-0 bg-blue text-2xl text-white font-normal px-8 py-3 z-10">
                      ลักษณะภายใน
                    </div>
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <div className="grid grid-row-3 w-[85%] gap-3">
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
                            <label className="block text-sm mb-2 text-dark-blue text-xl font-normal">
                              ระบบเกียร์
                            </label>
                            <div className="flex gap-x-32 mt-5">
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  className="border-[#707070] text-rose focus:ring-0"
                                  id="hs-radio-group-3"
                                  value="AT"
                                  checked={selectedTransmission === "AT"}
                                  onChange={onTransmissionTypeChange}
                                />
                                <label className="text-xl text-black ms-2">
                                  เกียร์อัตโนมัติ
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input
                                  type="radio"
                                  name="hs-radio-group"
                                  className="border-[#707070] text-rose focus:ring-0"
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
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-20">
                          {/*  TODO: Change formData */}
                          <div>
                            <SelectInputWithLabel
                              label="โฉมปีเริ่มต้น"
                              name="เลือกปี"
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
                          <div>
                            <SelectInputWithLabel
                              label="โฉมปีท้ายสุด"
                              name="เลือกปี"
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
                          <div className="col-span-2">
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

                    {/*  */}
                  </div>
                </div>
                <div className="space-x-10 flex flex-row items-center mt-16">
                  <PrevButton handleClick={prevStep} />
                  <NextButton
                    handleClick={handleSubmit}
                    isDisabled={
                      !(
                        selectedSubModel &&
                        selectedSubModelName &&
                        formData["mile"] &&
                        selectedCarYear &&
                        selectedTransmission &&
                        selectedColor
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
            <div className="flex justify-between w-full mb-8">
              <h1 className="text-dark-blue text-5xl font-bold">
                ผลการประเมิน
              </h1>
              <SelectButton
                onChange={onModeChange}
                activeMode={summaryViewMode}
              />
            </div>

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
                  carDetail={JSON.stringify({
                    selectedBrand,
                    selectedModel,
                    selectedType,
                    selectedColor,
                    selectedSubModel,
                    selectedSubModelName,
                    selectedCarYear,
                    selectedTransmission,
                    mile,
                  })}
                  viewMode={summaryViewMode}
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
                  carDetail={JSON.stringify({
                    selectedBrand,
                    selectedModel,
                    selectedType,
                    selectedColor,
                    selectedSubModel,
                    selectedSubModelName,
                    selectedCarYear,
                    selectedTransmission,
                    mile,
                  })}
                  viewMode={summaryViewMode}
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
